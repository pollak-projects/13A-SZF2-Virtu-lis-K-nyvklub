import axios from 'axios';
import router from './router/routes.js';

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    
    if (error.response && 
        error.response.status === 401 && 
        !originalRequest._retry && 
        !originalRequest.url.includes('/auth/verify')) {
      
      originalRequest._retry = true;
      
      try {
        const response = await axios.get('/auth/verify', {
          _retry: true
        });
        
        if (response.data.message === "Refreshed") {
          // Get token from cookies
          const cookies = document.cookie.split(';');
          for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'access_token') {
              localStorage.setItem('token', value);
              break;
            }
          }
          return axios(originalRequest);
        } else {
          localStorage.removeItem('token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user_id');
          router.push('/login');
          return Promise.reject(error);
        }
      } catch (refreshError) {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_id');
        router.push('/login');
        return Promise.reject(error); 
      }
    }
    
    return Promise.reject(error);
  }
);
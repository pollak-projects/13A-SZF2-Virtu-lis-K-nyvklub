import { createRouter, createWebHistory } from "vue-router";
import HomeCard from "../pages/HomeCard.vue";
import Books from "../pages/Books.vue";
import Movies from "../pages/Movies.vue";
import Series from "../pages/Series.vue";
import UploadMovie from "../pages/UploadMovie.vue";
import UploadBook from "../pages/UploadBook.vue";
import UploadTVShow from "../pages/UploadTVShow.vue";
import UploadCreative from "../pages/UploadCreative.vue";
import UploadActor from "../pages/UploadActor.vue";
import AboutUs from "../pages/AboutUs.vue";
import axios from 'axios';

const redirectIfAuthenticated = (to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (isAuthenticated) {
    next('/books');
  } else {
    next();
  }
};

// Update the requireAdmin function to handle errors better
const requireAdmin = async (to, from, next) => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.log('No token found, redirecting to login');
    return next('/login');
  }
  
  try {
    console.log('Checking admin status...');
    const response = await axios.get('http://localhost:3300/auth/user', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    const userData = response.data;
    console.log('User data received:', userData);
    
    // Fix here - case insensitive comparison
    if (userData.group?.name.toUpperCase() === 'ADMIN') {
      console.log('Admin access granted');
      next();
    } else {
      console.log('User is not admin:', userData.group?.name);
      alert('Csak adminisztrátorok férhetnek hozzá ehhez az oldalhoz');
      next('/books');
    }
  } catch (error) {
    console.error("Failed to verify admin status:", error);
    
    // Handle different error types
    if (error.response) {
      // The request was made and the server responded with an error status
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_id');
        alert('Az Ön munkamenete lejárt. Kérjük, jelentkezzen be újra.');
      } else if (error.response.status === 500) {
        alert('Szerver hiba történt. Kérjük, próbálja újra később.');
      }
    } else if (error.request) {
      // The request was made but no response was received
      alert('Nem sikerült kapcsolódni a szerverhez. Kérjük, ellenőrizze az internetkapcsolatot.');
    } else {
      // Something happened in setting up the request that triggered an error
      alert('Hiba történt. Kérjük, próbálja újra.');
    }
    
    next('/login');
  }
};

const routes = [
  { path: "/", component: HomeCard },
  { path: "/homecard", component: HomeCard },
  { path: "/books", component: Books },
  { path: "/movies", component: Movies },
  { path: "/series", component: Series },
  { path: "/upload-movie", component: UploadMovie, beforeEnter: requireAdmin },
  { path: "/upload-book", component: UploadBook, beforeEnter: requireAdmin },
  { path: "/upload-tvshow", component: UploadTVShow, beforeEnter: requireAdmin },
  { path: "/upload-series", redirect: "/upload-tvshow" },
  { path: "/upload-creative", component: UploadCreative, beforeEnter: requireAdmin },
  { path: "/upload-actor", component: UploadActor, beforeEnter: requireAdmin },
  { path: "/about-us", component: AboutUs },
  
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue'),
    beforeEnter: redirectIfAuthenticated
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/Register.vue'),                                                             
    beforeEnter: redirectIfAuthenticated
  },
  {
    path: '/:type/:id',
    name: 'MediaDetail',
    component: () => import('../pages/MediaDetail.vue'),
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: "/profile", 
    component: () => import('../pages/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile/:id", 
    component: () => import('../pages/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/search",
    component: () => import('../pages/Search.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/reviews/:id", 
    component: () => import('../pages/UserReviews.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/favorites/:id", 
    component: () => import('../pages/UserFavorites.vue'),
    meta: {
      requiresAuth: true
    }
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login', '/register', '/forgot-password', '/reset-password', '/verify-email'];
  const authRequired = !publicPages.includes(to.path);
  const token = localStorage.getItem('token');

  if (authRequired && !token) {
    return next('/login');
  }

  next();
});

export default router;

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routes';
import './style.css';
import './assets/theme.css';
import axios from 'axios';
import './auth.js';

const app = createApp(App);
app.use(router);


axios.defaults.baseURL = 'http://localhost:3300';
axios.defaults.withCredentials = true;

app.config.globalProperties.$axios = axios;

app.mount('#app');
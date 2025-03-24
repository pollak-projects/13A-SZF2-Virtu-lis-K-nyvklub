import { createRouter, createWebHistory } from 'vue-router';
import HomeCard from '../pages/HomeCard.vue';
import Books from '../pages/Books.vue';
import Movies from '../pages/Movies.vue';
import Series from '../pages/Series.vue';
import UploadMovie from '../pages/UploadMovie.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import HomeCard from '../pages/HomeCard.vue';

const routes = [
  
  { path: '/', component: HomeCard },
  { path: '/homecard', component: HomeCard},
  { path: '/books', component: Books },
  { path: '/movies', component: Movies },
  { path: '/series', component: Series },
  { path: '/upload-movie', component: UploadMovie },
  { path: '/login', component: Login},
  { path: '/register', component: Register}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
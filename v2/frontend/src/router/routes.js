import { createRouter, createWebHistory } from 'vue-router';
import HomeCard from '../pages/HomeCard.vue';
import Books from '../pages/Books.vue';
import Movies from '../pages/Movies.vue';
import Series from '../pages/Series.vue';
import UploadMovie from '../pages/UploadMovie.vue';
import 

const routes = [
  { path: '/', component: HomeCard },
  { path: '/books', component: Books },
  { path: '/movies', component: Movies },
  { path: '/series', component: Series },
  { path: '/upload-movie', component: UploadMovie },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
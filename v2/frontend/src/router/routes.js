import { createRouter, createWebHistory } from 'vue-router';
import HomeCard from '../pages/HomeCard.vue';
import Books from '../pages/Books.vue';
import Movies from '../pages/Movies.vue';
import Series from '../pages/Series.vue';

const routes = [
  { path: '/', component: HomeCard },
  { path: '/books', component: Books },
  { path: '/movies', component: Movies },
  { path: '/series', component: Series },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
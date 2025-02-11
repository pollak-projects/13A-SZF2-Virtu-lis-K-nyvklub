import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Books from '../pages/Books.vue';
import Movies from '../pages/Movies.vue';
import Series from '../pages/Series.vue';
import Profile from '../pages/Profile.vue';
import Groups from '../pages/Groups.vue';
import About from '../pages/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/books', component: Books },
  { path: '/movies', component: Movies },
  { path: '/series', component: Series },
  { path: '/profile', component: Profile },
  { path: '/groups', component: Groups },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

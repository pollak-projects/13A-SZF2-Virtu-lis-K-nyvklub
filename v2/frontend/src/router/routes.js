import { createRouter, createWebHistory } from "vue-router";
import HomeCard from "../pages/HomeCard.vue";
import Books from "../pages/Books.vue";
import Movies from "../pages/Movies.vue";
import Series from "../pages/Series.vue";
import UploadMovie from "../pages/UploadMovie.vue";
import UploadBook from "../pages/UploadBook.vue";
import UploadTVShow from "../pages/UploadTVShow.vue";
import UploadCreative from "../pages/UploadCreative.vue";
import AboutUs from "../pages/AboutUs.vue";

const redirectIfAuthenticated = (to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (isAuthenticated) {
    next('/books');
  } else {
    next();
  }
};

const routes = [
  { path: "/", component: HomeCard },
  { path: "/homecard", component: HomeCard },
  { path: "/books", component: Books },
  { path: "/movies", component: Movies },
  { path: "/series", component: Series },
  { path: "/upload-movie", component: UploadMovie },
  { path: "/upload-book", component: UploadBook },
  { path: "/upload-tvshow", component: UploadTVShow },
  { path: "/upload-creative", component: UploadCreative },
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

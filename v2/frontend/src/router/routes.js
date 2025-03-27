import { createRouter, createWebHistory } from "vue-router";
import HomeCard from "../pages/HomeCard.vue";
import Books from "../pages/Books.vue";
import Movies from "../pages/Movies.vue";
import Series from "../pages/Series.vue";
import UploadMovie from "../pages/UploadMovie.vue";
import UploadBook from "../pages/UploadBook.vue";
import UploadTVShow from "../pages/UploadTVShow.vue";
import Login from "../pages/Login.vue";
import UploadCreative from "../pages/UploadCreative.vue";
import AboutUs from "../pages/AboutUs.vue";

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
  { path: "/login", component: Login },
  { path: "/about-us", component: AboutUs },
  {
    path: '/:type/:id',
    name: 'MediaDetail',
    component: () => import('../pages/MediaDetail.vue'),
    props: true,
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

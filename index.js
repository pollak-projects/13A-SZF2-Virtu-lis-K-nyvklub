import express from "express";
import { actorController } from "./controllers/actor.controller.js";
import { directorController } from "./controllers/director.controller.js";
import { genreController } from "./controllers/genre.controller.js";
import { movieController } from "./controllers/movie.controller.js";
import Vue from 'vue';
import Router from 'vue-router';
import Books from '../views/Books.vue';
import Series from '../views/Series.vue';
import Movies from '../views/Movies.vue';
import Groups from '../views/Groups.vue';
import Profile from '../views/Profile.vue';
import About from '../views/About.vue';

const app = express();

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/series',
      name: 'Series',
      component: Series
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/groups',
      name: 'Groups',
      component: Groups
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/support',
      name: 'Support',
      component: Support
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
});

app.use(express.json());

app.use("/actors", actorController);
app.use("/directors", directorController);
app.use("/genres", genreController);
app.use("/movies", movieController);

app.listen(3300, () => {
  console.log("http://localhost:3300");
});

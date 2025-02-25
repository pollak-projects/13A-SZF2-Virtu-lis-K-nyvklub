import { actorController } from "./controllers/actor.controller.js";
import { moviesController } from "./controllers/movies.controller.js";
import express from "express";
const app = express();

app.get("/", async (req, res) => {
  const data = await listAllActors();
});
app.get("/movies", async (req, res) => {
  const moviedata = await listAllMovies();
});

app.use(actorController);
app.use(moviesController);
app.listen(3300, () => {
  console.log("http://localhost:3300");
});

export default app;

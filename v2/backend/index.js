import express from "express";
import cors from "cors";
import { corsMiddleware, corsOptions } from "./middleware/cors.middleware.js";
import actorController from "./controllers/misc/actor.controller.js";
import bookController from "./controllers/book/book.controller.js";
import genreController from "./controllers/misc/genre.controller.js";
import tvshowController from "./controllers/tv/tvShow.controller.js";
import movieController from "./controllers/movie/movie.controller.js";
import { userController } from "./controllers/auth/user.controller.js";
import { groupController } from "./controllers/auth/group.controller.js";
import { createActor } from "./services/misc/actor.service.js";

const app = express();

app.use(cors(corsOptions));
app.use(corsMiddleware);

app.use(express.json());

app.use("/actors", actorController);
app.use("/create", createActor);
app.use("/books", bookController);
app.use("/genres", genreController);
app.use("/movies", movieController);
app.use("/users", userController);
app.use("/groups", groupController);
app.use("/tvshows", tvshowController);

app.listen(3300, () => {
  console.log("http://localhost:3300");
});

import express from "express";
import cors from "cors";
import { corsMiddleware, corsOptions } from "./middleware/cors.middleware.js";
import actorController from "./controllers/misc/actor.controller.js";
import bookController from "./controllers/book/book.controller.js";
import genreController from "./controllers/misc/genre.controller.js";
import movieController from "./controllers/movie/movie.controller.js";
import { userController } from "./controllers/auth/user.controller.js";
import { groupController } from "./controllers/auth/group.controller.js";
import { createActor, getAllActors } from "./services/misc/actor.service.js";
import { name } from "ejs";
import { getAllBooks } from "./services/book/book.service.js";
import { getAllMovies } from "./services/movie/movie.service.js";
import { getAllGenres } from "./services/misc/genre.service.js";
import { GetAllUsers } from "./services/auth/user.service.js";



const app = express();

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
const actors = await getAllActors();
const books = await  getAllBooks();
const movies = await  getAllMovies();
const genres = await  getAllGenres();


    

  res.render("index",{
actors:actors,
books:books,
movies:movies,
genres:genres,


  });
});


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

app.listen(3300, () => {
  console.log("http://localhost:3300");
});
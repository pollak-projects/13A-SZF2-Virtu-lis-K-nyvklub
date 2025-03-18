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
import cookieParser from "cookie-parser";
import session from "express-session";
import { authController } from "./controllers/auth/auth.controller.js";
import uploadRouter from "./controllers/misc/upload.controller.js";
import { verifyUserGroups } from "./middleware/auth.middleware.js";

const app = express();

app.use(cors(corsOptions));
app.use(corsMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

app.use(
  session({
    name: "session_id",
    secret: "test_secret",
    resave: false,
    saveUninitialized: true,
    proxy: true,
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
      domain: "pollakkonyvklub.info",
      sameSite: "none",
    },
  })
);

app.set("view engine", "ejs");

app.use("/actors", actorController);
app.use("/books", bookController);
app.use("/genres", genreController);
app.use("/movies", movieController);

app.use("/users", verifyUserGroups(["ADMIN"]), userController);
app.use("/groups", verifyUserGroups(['ADMIN']), groupController);
app.use("/auth", authController);
app.use("/upload", verifyUserGroups(["ADMIN"]), uploadRouter);






app.get("/", async (req, res) => {
  res.render("index", {
    books: await getAllBooks(),
    actors: await getAllActors(),
    genres: await getAllGenres(),
    movies: await getAllMovies(),
    users: await GetAllUsers(),
    
  });
});

app.get("/table", verifyUserGroups(["ADMIN"]), async (req, res) => {
  const userData = await GetAllUsers();
  const groupsData = await Groups();
  res.render("table", {
    users: userData,
    groups: groupsData,
  });
});

app.get("/groups", verifyUserGroups(["ADMIN"]), async (req, res) => {
  const groups = await listAllGroup();
  res.render("groups", {
    groups: groups,
  });
});

app.get("/token", verifyUserGroups(["ADMIN"]), async (req, res) => {
  res.render("token", {
    tokenData: await listAllTokens(),
  });
});

app.get("/forgotpassword", (req, res) => {
  res.render("forgotpassword");
});

app.get("/changepassword", (req, res) => {
  res.render("changepassword");
});

app.get("/register", async (req, res) => {
  res.render("register");
});

app.listen(3300, () => {
  console.log("Server is running on http://localhost:3300");
});

export default app;
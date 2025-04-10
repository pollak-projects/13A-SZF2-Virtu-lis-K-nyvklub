// ========================== Core Modules ==========================
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsMiddleware, corsOptions } from "./middleware/cors.middleware.js";
import { verifyUserGroups } from "./middleware/auth.middleware.js";
import { requireAuth } from "./middleware/requireAuth.middleware.js";

// ========================== Controllers ==========================
import actorController from "./controllers/misc/actor.controller.js";
import bookController from "./controllers/book/book.controller.js";
import genreController from "./controllers/misc/genre.controller.js";
import tvshowController from "./controllers/tv/tvShow.controller.js";
import movieController from "./controllers/movie/movie.controller.js";
import { userController } from "./controllers/auth/user.controller.js";
import { groupController } from "./controllers/auth/group.controller.js";
import { authController } from "./controllers/auth/auth.controller.js";
import creativeRouter from "./controllers/misc/creative.controller.js";
import uploadRouter from "./controllers/misc/upload.controller.js";
import characteractorRouter from "./controllers/misc/characteractor.controller.js";

// ========================== Services ==========================
import { getAllBooks } from "./services/book/book.service.js";
import { getAllActors } from "./services/misc/actor.service.js";
import { getAllGenres } from "./services/misc/genre.service.js";
import { getAllMovies } from "./services/movie/movie.service.js";
import { GetAllUsers, Groups } from "./services/auth/user.service.js";
import { listAllGroup } from "./services/auth/group.service.js";

// ========================== Configuration ==========================
dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ========================== Middleware Usage ==========================
app.use(cors(corsOptions));
app.use(corsMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use(requireAuth());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(
  session({
    name: "session_id",
    secret: "test_secret",
    resave: false,
    saveUninitialized: true,
    proxy: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
      ...(process.env.NODE_ENV === "production" && {
        domain: "pollakkonyvklub.info",
      }),
      sameSite: "none",
    },
  })
);

app.set("view engine", "ejs");

// ========================== Routes ==========================
// Public Routes
app.use("/actors", actorController);
app.use("/actor", actorController);
app.use("/books", bookController);
app.use("/genres", genreController);
app.use("/movies", movieController);
app.use("/tvshows", tvshowController);
app.use("/creatives", creativeRouter);
app.use("/auth", authController);
app.use("/", characteractorRouter);
app.use("/profile", requireAuth(), userController);
app.use("/upload", verifyUserGroups(["ADMIN"]), uploadRouter);

// Admin Routes
app.use("/users", verifyUserGroups(["ADMIN"]), userController);
app.use("/groups", verifyUserGroups(["ADMIN"]), groupController);

// Render Routes
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

app._router.stack.forEach(function (r) {
  if (r.route && r.route.path) {
    console.log(
      "Route:",
      r.route.path,
      "Methods:",
      Object.keys(r.route.methods)
    );
  }
});

// ========================== Server ==========================
app.listen(3300, () => {
  console.log("Server is running on http://localhost:3300");
});

export default app;

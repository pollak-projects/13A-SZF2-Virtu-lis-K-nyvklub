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
import cookieParser from "cookie-parser";
import session from "express-session";
import { listAllGroup } from "./services/auth/group.service.js";
import { listAllTokens } from "./services/auth/auth.service.js";
import { verifyUserGroups } from "./middleware/auth.middleware.js";
import { GetAllUsers, Groups } from "./services/auth/user.service.js";
import { authController } from "./controllers/auth/auth.controller.js";
import { userController } from "./controllers/auth/user.controller.js";
import { groupController } from "./controllers/auth/group.controller.js";


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
app.use("/user", verifyUserGroups(["ADMIN", "USER"]), userController);
app.use("/auth", authController);
app.use("/group", verifyUserGroups(["ADMIN"]), groupController)

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    name: "asd",
    secret: "test",
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

app.set("view engine", "ejs")

app.get("/", async (req, res) => {
  res.render("index", {});
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
  console.log("http://localhost:3300");
});
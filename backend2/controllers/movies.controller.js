import express from "express";
import { listAllMovies}  from "../services/movies.service.js";
const router = express.Router();

router.get("/getAll", async (req, res) => {
  const moviedata = await listAllMovies();
  res.status(200).json(moviedata);
});

export { router as moviesController };
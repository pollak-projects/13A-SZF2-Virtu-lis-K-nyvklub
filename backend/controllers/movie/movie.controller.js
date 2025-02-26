import express from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../../services/movie/movie.service.js";

const movieRouter = express.Router();

movieRouter.get("/movies", async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to fetch movies" });
  }
});

movieRouter.get("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await getMovieById(id);
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movie" });
  }
});

movieRouter.post("/movies", async (req, res) => {
  try {
    const { title, director } = req.body;
    const newMovie = await createMovie({ title, director });
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: "Failed to create movie" });
  }
});

movieRouter.put("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, director } = req.body;
    const updatedMovie = await updateMovie(id, {
      title,
      director,
    });
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: "Failed to update movie" });
  }
});

movieRouter.delete("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteMovie(id);
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete movie" });
  }
});

export default movieRouter;

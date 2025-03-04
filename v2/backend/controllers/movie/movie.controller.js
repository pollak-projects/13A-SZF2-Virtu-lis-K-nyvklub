import express from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../../services/movie/movie.service.js";

const movieRouter = express.Router();

movieRouter.get("/getAllMovies", async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch movies" });
  }
});

movieRouter.get("/getMovieById/:id", async (req, res) => {
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

movieRouter.post("/createMovie", async (req, res) => {
  try {
    const { title, releaseYear, description, director_Id } = req.body;
    const newMovie = await createMovie({
      title,
      releaseYear,
      description,
      director_Id,
    });
    res.status(201).json(newMovie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create movie" });
  }
});

movieRouter.put("/updateMovie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, releaseYear, description, director_Id } = req.body;
    const updatedMovie = await updateMovie(id, {
      title,
      releaseYear,
      description,
      director_Id,
    });
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: "Failed to update movie" });
  }
});

movieRouter.delete("/deleteMovie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteMovie(id);
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete movie" });
  }
});

export default movieRouter;

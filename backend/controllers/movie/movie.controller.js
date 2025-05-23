// ========================== Core Modules ==========================
import express from "express";
import multer from "multer";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../../services/movie/movie.service.js";
import { verifyUserGroups } from "../../middleware/auth.middleware.js";

// ========================== Router Setup ==========================
const movieRouter = express.Router();
const upload = multer({ dest: "uploads/movie/" });

// ========================== GET Routes ==========================
movieRouter.get("/getAllMovies", async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.error("Error in getAllMovies:", error);
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
    console.error("Error in getMovieById:", error);
    res.status(500).json({ message: "Failed to fetch movie" });
  }
});

// ========================== POST Routes ==========================
movieRouter.post("/upload", verifyUserGroups(["ADMIN"]), upload.single("coverArt"), async (req, res) => {
  try {
    const { title, directorId, releaseYear, description } = req.body;
    const coverArt = req.file ? `/uploads/movie/${req.file.filename}` : null;

    const newMovie = await createMovie({
      title,
      director_Id: parseInt(directorId),
      releaseYear: parseInt(releaseYear),
      description,
      coverArt,
    });

    res.status(201).json(newMovie);
  } catch (error) {
    console.error("Error uploading movie:", error);
    res.status(500).json({ message: "Failed to upload movie" });
  }
});

// ========================== PUT Routes ==========================
movieRouter.put("/updateMovie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedMovie = await updateMovie(id, data);
    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error("Error in updateMovie:", error);
    res.status(500).json({ message: "Failed to update movie" });
  }
});

// ========================== DELETE Routes ==========================
movieRouter.delete("/deleteMovie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteMovie(id);
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error("Error in deleteMovie:", error);
    res.status(500).json({ message: "Failed to delete movie" });
  }
});

export default movieRouter;

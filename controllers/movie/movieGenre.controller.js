import express from "express";
import movieGenreService from "../../services/movie/movieGenre.service.js";

const movieGenreRouter = express.Router();

movieGenreRouter.get("/moviegenres", async (req, res) => {
  try {
    const movieGenres = await movieGenreService.getAllMovieGenres();
    res.status(200).json(movieGenres);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movie genres" });
  }
});

movieGenreRouter.get("/moviegenres/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movieGenre = await movieGenreService.getMovieGenreById(id);
    if (movieGenre) {
      res.status(200).json(movieGenre);
    } else {
      res.status(404).json({ message: "Movie genre not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movie genre" });
  }
});

movieGenreRouter.post("/moviegenres", async (req, res) => {
  try {
    const { name } = req.body;
    const newMovieGenre = await movieGenreService.createMovieGenre({ name });
    res.status(201).json(newMovieGenre);
  } catch (error) {
    res.status(500).json({ message: "Failed to create movie genre" });
  }
});

movieGenreRouter.put("/moviegenres/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedMovieGenre = await movieGenreService.updateMovieGenre(id, {
      name,
    });
    res.status(200).json(updatedMovieGenre);
  } catch (error) {
    res.status(500).json({ message: "Failed to update movie genre" });
  }
});

movieGenreRouter.delete("/moviegenres/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await movieGenreService.deleteMovieGenre(id);
    res.status(200).json({ message: "Movie genre deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete movie genre" });
  }
});

export default movieGenreRouter;

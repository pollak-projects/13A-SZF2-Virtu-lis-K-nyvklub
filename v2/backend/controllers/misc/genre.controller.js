import express from "express";
import {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre,
} from "../../services/misc/genre.service.js";

const genreRouter = express.Router();

genreRouter.get("/genres", async (req, res) => {
  try {
    const genres = await getAllGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch genres" });
  }
});

genreRouter.get("/genres/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await getGenreById(id);
    if (genre) {
      res.status(200).json(genre);
    } else {
      res.status(404).json({ message: "Genre not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch genre" });
  }
});

genreRouter.post("/genres", async (req, res) => {
  try {
    const data = req.body;
    const newGenre = await createGenre(data);
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(500).json({ message: "Failed to create genre" });
  }
});

genreRouter.put("/genres/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedGenre = await updateGenre(id, data);
    res.status(200).json(updatedGenre);
  } catch (error) {
    res.status(500).json({ message: "Failed to update genre" });
  }
});

genreRouter.delete("/genres/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteGenre(id);
    res.status(200).json({ message: "Genre deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete genre" });
  }
});

export default genreRouter;

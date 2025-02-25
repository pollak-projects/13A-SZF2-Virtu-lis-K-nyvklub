import express from "express";
import tvGenreService from "../../services/tv/tvGenre.service.js";

const tvGenreRouter = express.Router();

tvGenreRouter.get("/tvgenres", async (req, res) => {
  try {
    const tvGenres = await tvGenreService.getAllTvGenres();
    res.status(200).json(tvGenres);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV genres" });
  }
});

tvGenreRouter.get("/tvgenres/:tvShowId/:genreId", async (req, res) => {
  try {
    const { tvShowId, genreId } = req.params;
    const tvGenre = await tvGenreService.getTvGenreById(tvShowId, genreId);
    if (tvGenre) {
      res.status(200).json(tvGenre);
    } else {
      res.status(404).json({ message: "TV genre not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV genre" });
  }
});

tvGenreRouter.post("/tvgenres", async (req, res) => {
  try {
    const data = req.body;
    const newTvGenre = await tvGenreService.createTvGenre(data);
    res.status(201).json(newTvGenre);
  } catch (error) {
    res.status(500).json({ message: "Failed to create TV genre" });
  }
});

tvGenreRouter.put("/tvgenres/:tvShowId/:genreId", async (req, res) => {
  try {
    const { tvShowId, genreId } = req.params;
    const data = req.body;
    const updatedTvGenre = await tvGenreService.updateTvGenre(
      tvShowId,
      genreId,
      data
    );
    res.status(200).json(updatedTvGenre);
  } catch (error) {
    res.status(500).json({ message: "Failed to update TV genre" });
  }
});

tvGenreRouter.delete("/tvgenres/:tvShowId/:genreId", async (req, res) => {
  try {
    const { tvShowId, genreId } = req.params;
    await tvGenreService.deleteTvGenre(tvShowId, genreId);
    res.status(200).json({ message: "TV genre deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete TV genre" });
  }
});

export default tvGenreRouter;

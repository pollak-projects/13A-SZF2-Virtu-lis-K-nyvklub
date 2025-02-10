import express from "express";
import tvService from "../../services/tv/tvShow.service.js";

const tvRouter = express.Router();

tvRouter.get("/tvshows", async (req, res) => {
  try {
    const tvShows = await tvService.getAllTVShows();
    res.status(200).json(tvShows);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV shows" });
  }
});

tvRouter.get("/tvshows/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tvShow = await tvService.getTVShowById(id);
    if (tvShow) {
      res.status(200).json(tvShow);
    } else {
      res.status(404).json({ message: "TV show not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV show" });
  }
});

tvRouter.post("/tvshows", async (req, res) => {
  try {
    const { title, creator } = req.body;
    const newTVShow = await tvService.createTVShow({ title, creator });
    res.status(201).json(newTVShow);
  } catch (error) {
    res.status(500).json({ message: "Failed to create TV show" });
  }
});

tvRouter.put("/tvshows/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, creator } = req.body;
    const updatedTVShow = await tvService.updateTVShow(id, { title, creator });
    res.status(200).json(updatedTVShow);
  } catch (error) {
    res.status(500).json({ message: "Failed to update TV show" });
  }
});

tvRouter.delete("/tvshows/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tvService.deleteTVShow(id);
    res.status(200).json({ message: "TV show deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete TV show" });
  }
});

export default tvRouter;

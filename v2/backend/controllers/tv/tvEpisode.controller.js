import express from "express";
import tvEpisodeService from "../../services/tv/tvEpisode.service.js";

const tvEpisodeRouter = express.Router();

tvEpisodeRouter.get("/tvepisodes", async (req, res) => {
  try {
    const tvEpisodes = await tvEpisodeService.getAllTVEpisodes();
    res.status(200).json(tvEpisodes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV episodes" });
  }
});

tvEpisodeRouter.get("/tvepisodes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tvEpisode = await tvEpisodeService.getTVEpisodeById(id);
    if (tvEpisode) {
      res.status(200).json(tvEpisode);
    } else {
      res.status(404).json({ message: "TV episode not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV episode" });
  }
});

tvEpisodeRouter.post("/tvepisodes", async (req, res) => {
  try {
    const { title, seasonId } = req.body;
    const newTVEpisode = await tvEpisodeService.createTVEpisode({
      title,
      seasonId,
    });
    res.status(201).json(newTVEpisode);
  } catch (error) {
    res.status(500).json({ message: "Failed to create TV episode" });
  }
});

tvEpisodeRouter.put("/tvepisodes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, seasonId } = req.body;
    const updatedTVEpisode = await tvEpisodeService.updateTVEpisode(id, {
      title,
      seasonId,
    });
    res.status(200).json(updatedTVEpisode);
  } catch (error) {
    res.status(500).json({ message: "Failed to update TV episode" });
  }
});

tvEpisodeRouter.delete("/tvepisodes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tvEpisodeService.deleteTVEpisode(id);
    res.status(200).json({ message: "TV episode deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete TV episode" });
  }
});

export default tvEpisodeRouter;

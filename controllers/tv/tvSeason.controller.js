import express from "express";
import tvSeasonService from "../../services/tv/tvSeason.service.js";

const tvSeasonRouter = express.Router();

tvSeasonRouter.get("/tvseasons", async (req, res) => {
  try {
    const tvSeasons = await tvSeasonService.getAllTVSeasons();
    res.status(200).json(tvSeasons);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV seasons" });
  }
});

tvSeasonRouter.get("/tvseasons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tvSeason = await tvSeasonService.getTVSeasonById(id);
    if (tvSeason) {
      res.status(200).json(tvSeason);
    } else {
      res.status(404).json({ message: "TV season not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV season" });
  }
});

tvSeasonRouter.post("/tvseasons", async (req, res) => {
  try {
    const { title, tvShowId } = req.body;
    const newTVSeason = await tvSeasonService.createTVSeason({
      title,
      tvShowId,
    });
    res.status(201).json(newTVSeason);
  } catch (error) {
    res.status(500).json({ message: "Failed to create TV season" });
  }
});

tvSeasonRouter.put("/tvseasons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, tvShowId } = req.body;
    const updatedTVSeason = await tvSeasonService.updateTVSeason(id, {
      title,
      tvShowId,
    });
    res.status(200).json(updatedTVSeason);
  } catch (error) {
    res.status(500).json({ message: "Failed to update TV season" });
  }
});

tvSeasonRouter.delete("/tvseasons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tvSeasonService.deleteTVSeason(id);
    res.status(200).json({ message: "TV season deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete TV season" });
  }
});

export default tvSeasonRouter;

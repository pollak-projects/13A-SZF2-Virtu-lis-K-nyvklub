import express from "express";
import {
  getAllTVShows,
  getTVShowById,
  createTVShow,
  updateTVShow,
  deleteTVShow,
} from "../../services/tv/tvShow.service.js";

const tvRouter = express.Router();

tvRouter.get("/getAllTVShows", async (req, res) => {
  try {
    const tvShows = await getAllTVShows();
    res.status(200).json(tvShows);
  } catch (error) {
    console.error("Error in getAllTVShows:", error);
    res.status(500).json({ message: "Failed to fetch TV shows" });
  }
});

tvRouter.get("/getTVShowById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tvShow = await getTVShowById(id);
    if (tvShow) {
      res.status(200).json(tvShow);
    } else {
      res.status(404).json({ message: "TV show not found" });
    }
  } catch (error) {
    console.error("Error in getTVShowById:", error);
    res.status(500).json({ message: "Failed to fetch TV show" });
  }
});

tvRouter.post("/createTVShow", async (req, res) => {
  try {
    const data = req.body;
    const newTVShow = await createTVShow(data);
    res.status(201).json(newTVShow);
  } catch (error) {
    console.error("Error in createTVShow:", error);
    res.status(500).json({ message: "Failed to create TV show" });
  }
});

tvRouter.put("/updateTVShow/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedTVShow = await updateTVShow(id, data);
    res.status(200).json(updatedTVShow);
  } catch (error) {
    console.error("Error in updateTVShow:", error);
    res.status(500).json({ message: "Failed to update TV show" });
  }
});

tvRouter.delete("/deleteTVShow/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTVShow(id);
    res.status(200).json({ message: "TV show deleted successfully" });
  } catch (error) {
    console.error("Error in deleteTVShow:", error);
    res.status(500).json({ message: "Failed to delete TV show" });
  }
});

export default tvRouter;
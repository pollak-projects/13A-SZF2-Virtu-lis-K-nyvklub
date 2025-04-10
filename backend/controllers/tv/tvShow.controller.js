import express from "express";
import multer from "multer";
import {
  getAllTVShows,
  getTVShowById,
  createTVShow,
  updateTVShow,
  deleteTVShow,
} from "../../services/tv/tvShow.service.js";

const tvshowRouter = express.Router();
const upload = multer({ dest: "uploads/tv/" });

tvshowRouter.post("/upload", upload.single("coverArt"), async (req, res) => {
  try {
    const { title, creatorId, releaseYear, seasons, description } = req.body;
    const coverArt = req.file ? `/uploads/tv/${req.file.filename}` : null;

    const newTVShow = await createTVShow({
      title,
      creator_Id: parseInt(creatorId),
      releaseYear: parseInt(releaseYear),
      seasons: parseInt(seasons),
      description,
      coverArt,
    });

    res.status(201).json(newTVShow);
  } catch (error) {
    console.error("Error uploading TV show:", error);
    res.status(500).json({ message: "Failed to upload TV show" });
  }
});

tvshowRouter.get("/getAllTVShows", async (req, res) => {
  try {
    const tvshows = await getAllTVShows();
    res.status(200).json(tvshows);
  } catch (error) {
    console.error("Error in getAllTVShows:", error);
    res.status(500).json({ message: "Failed to fetch TV shows" });
  }
});

tvshowRouter.get("/getTVShowById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tvshow = await getTVShowById(id);
    if (tvshow) {
      res.status(200).json(tvshow);
    } else {
      res.status(404).json({ message: "TV show not found" });
    }
  } catch (error) {
    console.error("Error in getTVShowById:", error);
    res.status(500).json({ message: "Failed to fetch TV show" });
  }
});

tvshowRouter.put("/updateTVShow/:id", async (req, res) => {
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

tvshowRouter.delete("/deleteTVShow/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTVShow(id);
    res.status(200).json({ message: "TV show deleted successfully" });
  } catch (error) {
    console.error("Error in deleteTVShow:", error);
    res.status(500).json({ message: "Failed to delete TV show" });
  }
});

export default tvshowRouter;

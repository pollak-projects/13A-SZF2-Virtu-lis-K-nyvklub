import express from 'express';
import multer from 'multer';
import { PrismaClient } from "@prisma/client";
import { 
  getAllTVShows, 
  getTVShowById, 
  createTVShow, 
  updateTVShow, 
  deleteTVShow 
} from "../../services/tv/tvShow.service.js";

const prisma = new PrismaClient();
const tvRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

tvRouter.post('/upload', upload.single('coverArt'), async (req, res) => {
  try {
    const { title, creator, releaseYear, seasons, description } = req.body;
    const coverArt = req.file ? `/uploads/${req.file.filename}` : null;

    let creatorEntity;
    try {
      creatorEntity = await prisma.creative.findFirst({
        where: { 
          name: creator,
          creator_show: true
        }
      });
      
      if (!creatorEntity) {
        creatorEntity = await prisma.creative.create({
          data: {
            name: creator,
            creator_show: true,
            author_book: false,
            director_movie: false
          }
        });
      }
    } catch (error) {
      console.error('Error finding/creating creator:', error);
      return res.status(500).json({ message: 'Failed to process creator information' });
    }

    const newTVShow = await createTVShow({
      title,
      creator_Id: creatorEntity.id,
      seasons: parseInt(seasons),
      description,
      coverArt,
    });

    res.status(201).json(newTVShow);
  } catch (error) {
    console.error('Error uploading TV show:', error);
    res.status(500).json({ message: 'Failed to upload TV show' });
  }
});

tvRouter.get("/getAllTVShows", async (req, res) => {
  try {
    const tvShows = await getAllTVShows();
    res.status(200).json(tvShows);
  } catch (error) {
    console.error("Error in /getAllTVShows:", error.message);
    res.status(500).json({ message: "Failed to fetch TV shows" });
  }
});

tvRouter.get("/getTVShowById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tvShow = await getTVShowById(id);
    if (tvShow) res.status(200).json(tvShow);
    else res.status(404).json({ message: "TV show not found" });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV show" });
  }
});

tvRouter.post("/createTVShow", async (req, res) => {
  try {
    const data = req.body;
    const newTVShow = await createTVShow(data);
    res.status(201).json(newTVShow);
  } catch (error) {
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
    res.status(500).json({ message: "Failed to update TV show" });
  }
});

tvRouter.delete("/deleteTVShow/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTVShow(id);
    res.status(200).json({ message: "TV show deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete TV show" });
  }
});

export default tvRouter;
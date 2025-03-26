import express from "express";
import multer from "multer";
import {
  getAllCreatives,
  getCreativeById,
  createCreative,
  updateCreative,
  deleteCreative,
  uploadCreative,
} from "../../services/misc/creative.service.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const creativeRouter = express.Router();
const upload = multer({ dest: "uploads/creative/" });

creativeRouter.post("/upload", upload.single("picture"), async (req, res) => {
  try {
    const { name, author_book, director_movie, creator_show } = req.body;
    const picture = req.file ? `/uploads/creative/${req.file.filename}` : null;

    const newCreative = await uploadCreative({
      name,
      picture,
      author_book: author_book === "true",
      director_movie: director_movie === "true",
      creator_show: creator_show === "true",
    });

    res.status(201).json(newCreative);
  } catch (error) {
    console.error("Error uploading creative:", error);
    res.status(500).json({ message: "Failed to upload creative" });
  }
});

creativeRouter.get("/creatives", async (req, res) => {
  try {
    const creatives = await getAllCreatives();
    res.status(200).json(creatives);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch creatives" });
  }
});

creativeRouter.get("/creatives/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const creative = await getCreativeById(id);
    if (creative) {
      res.status(200).json(creative);
    } else {
      res.status(404).json({ message: "Creative not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch creative" });
  }
});

creativeRouter.post("/creatives", async (req, res) => {
  try {
    const data = req.body;
    const newCreative = await createCreative(data);
    res.status(201).json(newCreative);
  } catch (error) {
    res.status(500).json({ message: "Failed to create creative" });
  }
});

creativeRouter.put("/creatives/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedCreative = await updateCreative(id, data);
    res.status(200).json(updatedCreative);
  } catch (error) {
    res.status(500).json({ message: "Failed to update creative" });
  }
});

creativeRouter.delete("/creatives/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCreative(id);
    res.status(200).json({ message: "Creative deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete creative" });
  }
});

//--------------------------------------------------------------------------------DROPDOWN ROUTES--------------------------------------------------------------------------------//
creativeRouter.get("/authors", async (req, res) => {
  //
  try {
    //
    const authors = await prisma.creative.findMany({
      //
      where: { author_book: true }, //
    }); //
    res.status(200).json(authors); //
  } catch (error) {
    //
    console.error("Error fetching authors:", error); //
    res.status(500).json({ message: "Failed to fetch authors" }); //
  } //
}); //
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
creativeRouter.get("/directors", async (req, res) => {
  //
  try {
    //
    const directors = await prisma.creative.findMany({
      //
      where: { director_movie: true }, //
    }); //
    res.status(200).json(directors); //
  } catch (error) {
    //
    console.error("Error fetching directors:", error); //
    res.status(500).json({ message: "Failed to fetch directors" }); //
  } //
}); //
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
creativeRouter.get("/creators", async (req, res) => {
  try {
    const creators = await prisma.creative.findMany({
      where: { creator_show: true },
    });
    res.status(200).json(creators);
  } catch (error) {
    console.error("Error fetching creators:", error);
    res.status(500).json({ message: "Failed to fetch creators" });
  }
}); //                                                                                                                                                                              //
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

export default creativeRouter;

import express from "express";
import multer from "multer";
import { PrismaClient } from "@prisma/client";
import upload from "../../middleware/upload.middleware.js";

const uploadRouter = express.Router();

uploadRouter.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { entityId, entityType } = req.body;
    const filePath = `/uploads/${req.file.filename}`;

    if (entityType === "book") {
      await prisma.book.update({
        where: { id: parseInt(entityId) },
        data: { coverArt: filePath },
      });
    } else if (entityType === "movie") {
      await prisma.movie.update({
        where: { id: parseInt(entityId) },
        data: { coverArt: filePath },
      });
    } else if (entityType === "tvshow") {
      await prisma.tvShow.update({
        where: { id: parseInt(entityId) },
        data: { coverArt: filePath },
      });
    } else {
      return res.status(400).json({ message: "Invalid entity type" });
    }

    res.status(200).json({ message: "File uploaded successfully", filePath });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "Failed to upload file" });
  }
});

export default uploadRouter;
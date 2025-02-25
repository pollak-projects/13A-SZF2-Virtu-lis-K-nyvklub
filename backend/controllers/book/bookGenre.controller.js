import express from "express";
import bookGenreService from "../../services/book/bookGenre.service.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const bookGenreRouter = express.Router();

bookGenreRouter.get("/bookgenres", async (req, res) => {
  try {
    const bookGenres = await bookGenreService.getAllBookGenres();
    res.status(200).json(bookGenres);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book genres" });
  }
});

bookGenreRouter.get("/bookgenres/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bookGenre = await bookGenreService.getBookGenreById(id);
    if (bookGenre) {
      res.status(200).json(bookGenre);
    } else {
      res.status(404).json({ message: "Book genre not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book genre" });
  }
});

bookGenreRouter.post("/bookgenres", async (req, res) => {
  try {
    const { name } = req.body;
    const newBookGenre = await bookGenreService.createBookGenre({ name });
    res.status(201).json(newBookGenre);
  } catch (error) {
    res.status(500).json({ message: "Failed to create book genre" });
  }
});

bookGenreRouter.put("/bookgenres/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedBookGenre = await bookGenreService.updateBookGenre(id, {
      name,
    });
    res.status(200).json(updatedBookGenre);
  } catch (error) {
    res.status(500).json({ message: "Failed to update book genre" });
  }
});

bookGenreRouter.delete("/bookgenres/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await bookGenreService.deleteBookGenre(id);
    res.status(200).json({ message: "Book genre deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete book genre" });
  }
});

export default bookGenreRouter;

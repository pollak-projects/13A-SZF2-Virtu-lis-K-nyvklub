import express from "express";
import multer from "multer";
import { PrismaClient } from "@prisma/client";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../../services/book/book.service.js";

const prisma = new PrismaClient();
const bookRouter = express.Router();
const upload = multer({ dest: "uploads/book/" });

bookRouter.post("/upload", upload.single("coverArt"), async (req, res) => {
  try {
    const { title, authorId, publishYear, isbn, description } = req.body;
    const coverArt = req.file ? `/uploads/book/${req.file.filename}` : null;

    const newBook = await createBook({
      title,
      author_Id: parseInt(authorId),
      releaseYear: parseInt(publishYear),
      isbn,
      description,
      coverArt,
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error uploading book:", error);
    res.status(500).json({ message: "Failed to upload book" });
  }
});

bookRouter.get("/getAllBooks", async (req, res) => {
  try {
    const books = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error in getAllBooks:", error);
    res.status(500).json({ message: "Failed to fetch books" });
  }
});

bookRouter.get("/getBookById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await getBookById(id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error("Error in getBookById:", error);
    res.status(500).json({ message: "Failed to fetch book" });
  }
});

bookRouter.post("/createBook", async (req, res) => {
  try {
    const data = req.body;
    const newBook = await createBook(data);
    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error in createBook:", error);
    res.status(500).json({ message: "Failed to create book" });
  }
});

bookRouter.put("/updateBook/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedBook = await updateBook(id, data);
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error("Error in updateBook:", error);
    res.status(500).json({ message: "Failed to update book" });
  }
});

bookRouter.delete("/deleteBook/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteBook(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error in deleteBook:", error);
    res.status(500).json({ message: "Failed to delete book" });
  }
});

export default bookRouter;

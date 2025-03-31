// ========================== Core Modules ==========================
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

// ========================== Setup ==========================
const prisma = new PrismaClient();
const bookRouter = express.Router();
// Fájlfeltöltési konfiguráció a könyvborítók számára
const upload = multer({ dest: "uploads/book/" });

// ========================== GET Routes ==========================
bookRouter.get("/getAllBooks", async (req, res) => {
  try {
    // Összes könyv lekérése az adatbázisból
    const books = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error in getAllBooks:", error);
    res.status(500).json({ message: "Failed to fetch books" });
  }
});

bookRouter.get("/getBookById/:id", async (req, res) => {
  try {
    // Egy könyv lekérése azonosító alapján
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

// ========================== POST Routes ==========================
bookRouter.post("/upload", upload.single("coverArt"), async (req, res) => {
  try {
    // Könyv feltöltése borítóképpel együtt
    const { title, authorId, publishYear, isbn, description } = req.body;
    // Ha van feltöltött fájl, elmentjük az útvonalát
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

bookRouter.post("/createBook", async (req, res) => {
  try {
    // Új könyv létrehozása borítókép nélkül
    const data = req.body;
    const newBook = await createBook(data);
    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error in createBook:", error);
    res.status(500).json({ message: "Failed to create book" });
  }
});

// ========================== PUT Routes ==========================
bookRouter.put("/updateBook/:id", async (req, res) => {
  try {
    // Könyv adatainak frissítése azonosító alapján
    const { id } = req.params;
    const data = req.body;
    const updatedBook = await updateBook(id, data);
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error("Error in updateBook:", error);
    res.status(500).json({ message: "Failed to update book" });
  }
});

// ========================== DELETE Routes ==========================
bookRouter.delete("/deleteBook/:id", async (req, res) => {
  try {
    // Könyv törlése az adatbázisból azonosító alapján
    const { id } = req.params;
    await deleteBook(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error in deleteBook:", error);
    res.status(500).json({ message: "Failed to delete book" });
  }
});

export default bookRouter;

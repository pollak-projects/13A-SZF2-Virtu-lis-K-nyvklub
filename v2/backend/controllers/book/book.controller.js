import express from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../../services/book/book.service.js";

const bookRouter = express.Router();

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
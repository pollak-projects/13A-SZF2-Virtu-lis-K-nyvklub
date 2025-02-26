import express from "express";
import {
  getAllBooks,
  getBookById,
  getBooksByAuthorId,
  createBook,
  updateBook,
  deleteBook,
} from "../../services/book/book.service.js";

const bookRouter = express.Router();

bookRouter.get("/books", async (req, res) => {
  try {
    const books = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to fetch books" });
  }
});

bookRouter.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await getBookById(id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book" });
  }
});

bookRouter.get("/books/:id", async (req, res) => {
  try {
    const { author_id } = req.params;
    const books = await getBooksByAuthorId(author_id);
    if (books) {
      res.status(200).json(books);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book" });
  }
});

bookRouter.post("/books", async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = await createBook({ title, author });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Failed to create book" });
  }
});

bookRouter.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author } = req.body;
    const updatedBook = await updateBook(id, { title, author });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Failed to update book" });
  }
});

bookRouter.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteBook(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete book" });
  }
});

export default bookRouter;

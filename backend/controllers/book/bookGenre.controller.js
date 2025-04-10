// ========================== Core Modules ==========================
import express from "express";
import { 
  getAllBookGenres, 
  getBookGenreById, 
  createBookGenre, 
  updateBookGenre, 
  deleteBookGenre 
} from "../../services/book/bookGenre.service.js";

// ========================== Router Setup ==========================
const bookGenreRouter = express.Router();

// ========================== GET Routes ==========================
bookGenreRouter.get("/bookgenres", async (req, res) => {
  try {
    // Összes könyv műfaj lekérése az adatbázisból
    const bookGenres = await getAllBookGenres();
    res.status(200).json(bookGenres);
  } catch (error) {
    console.error("Error fetching book genres:", error);
    res.status(500).json({ message: "Failed to fetch book genres" });
  }
});

bookGenreRouter.get("/bookgenres/:id", async (req, res) => {
  try {
    // Egy könyv műfaj lekérése azonosító alapján
    const { id } = req.params;
    const bookGenre = await getBookGenreById(id);
    if (bookGenre) {
      res.status(200).json(bookGenre);
    } else {
      res.status(404).json({ message: "Book genre not found" });
    }
  } catch (error) {
    console.error("Error fetching book genre:", error);
    res.status(500).json({ message: "Failed to fetch book genre" });
  }
});

// ========================== POST Routes ==========================
bookGenreRouter.post("/bookgenres", async (req, res) => {
  try {
    // Új könyv műfaj létrehozása a kapott adatok alapján
    const { name } = req.body;
    const newBookGenre = await createBookGenre({ name });
    res.status(201).json(newBookGenre);
  } catch (error) {
    console.error("Error creating book genre:", error);
    res.status(500).json({ message: "Failed to create book genre" });
  }
});

// ========================== PUT Routes ==========================
bookGenreRouter.put("/bookgenres/:id", async (req, res) => {
  try {
    // Meglévő könyv műfaj frissítése azonosító alapján
    const { id } = req.params;
    const { name } = req.body;
    const updatedBookGenre = await updateBookGenre(id, {
      name,
    });
    res.status(200).json(updatedBookGenre);
  } catch (error) {
    console.error("Error updating book genre:", error);
    res.status(500).json({ message: "Failed to update book genre" });
  }
});

// ========================== DELETE Routes ==========================
bookGenreRouter.delete("/bookgenres/:id", async (req, res) => {
  try {
    // Könyv műfaj törlése az adatbázisból azonosító alapján
    const { id } = req.params;
    await deleteBookGenre(id);
    res.status(200).json({ message: "Book genre deleted successfully" });
  } catch (error) {
    console.error("Error deleting book genre:", error);
    res.status(500).json({ message: "Failed to delete book genre" });
  }
});

export default bookGenreRouter;

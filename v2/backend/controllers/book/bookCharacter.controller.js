// ========================== Core Modules ==========================
import express from "express";
import {
  getAllBookCharacters,
  getBookCharacterById,
  createBookCharacter,
  updateBookCharacter,
  deleteBookCharacter,
} from "../../services/book/bookCharacter.service.js";

// ========================== Router Setup ==========================
const bookCharacterRouter = express.Router();

// ========================== GET Routes ==========================
bookCharacterRouter.get("/bookcharacters", async (req, res) => {
  try {
    // Összes könyv-karakter kapcsolat lekérése az adatbázisból
    const bookCharacters = await getAllBookCharacters();
    res.status(200).json(bookCharacters);
  } catch (error) {
    console.error("Error fetching book characters:", error);
    res.status(500).json({ message: "Failed to fetch book characters" });
  }
});

bookCharacterRouter.get("/bookcharacters/:bookId/:characterId", async (req, res) => {
  try {
    // Egy konkrét könyv-karakter kapcsolat lekérése a két azonosító alapján
    const { bookId, characterId } = req.params;
    const bookCharacter = await getBookCharacterById(bookId, characterId);
    if (bookCharacter) {
      res.status(200).json(bookCharacter);
    } else {
      res.status(404).json({ message: "Book character not found" });
    }
  } catch (error) {
    console.error("Error fetching book character:", error);
    res.status(500).json({ message: "Failed to fetch book character" });
  }
});

// ========================== POST Routes ==========================
bookCharacterRouter.post("/bookcharacters", async (req, res) => {
  try {
    // Új könyv-karakter kapcsolat létrehozása a kérés törzsében kapott adatokkal
    const data = req.body;
    const newBookCharacter = await createBookCharacter(data);
    res.status(201).json(newBookCharacter);
  } catch (error) {
    console.error("Error creating book character:", error);
    res.status(500).json({ message: "Failed to create book character" });
  }
});

// ========================== PUT Routes ==========================
bookCharacterRouter.put("/bookcharacters/:bookId/:characterId", async (req, res) => {
  try {
    // Meglévő könyv-karakter kapcsolat frissítése az URL paraméterek és a kérés törzse alapján
    const { bookId, characterId } = req.params;
    const data = req.body;
    const updatedBookCharacter = await updateBookCharacter(bookId, characterId, data);
    res.status(200).json(updatedBookCharacter);
  } catch (error) {
    console.error("Error updating book character:", error);
    res.status(500).json({ message: "Failed to update book character" });
  }
});

// ========================== DELETE Routes ==========================
bookCharacterRouter.delete("/bookcharacters/:bookId/:characterId", async (req, res) => {
  try {
    // Könyv-karakter kapcsolat törlése az adatbázisból azonosítók alapján
    const { bookId, characterId } = req.params;
    await deleteBookCharacter(bookId, characterId);
    res.status(200).json({ message: "Book character deleted successfully" });
  } catch (error) {
    console.error("Error deleting book character:", error);
    res.status(500).json({ message: "Failed to delete book character" });
  }
});

export default bookCharacterRouter;
import express from "express";
import {
  getAllBookCharacters,
  getBookCharacterById,
  createBookCharacter,
  updateBookCharacter,
  deleteBookCharacter,
} from "../../services/book/bookCharacter.service.js";

const bookCharacterRouter = express.Router();

bookCharacterRouter.get("/bookcharacters", async (req, res) => {
  try {
    const bookCharacters = await getAllBookCharacters();
    res.status(200).json(bookCharacters);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book characters" });
  }
});

bookCharacterRouter.get("/bookcharacters/:bookId/:characterId", async (req, res) => {
  try {
    const { bookId, characterId } = req.params;
    const bookCharacter = await getBookCharacterById(bookId, characterId);
    if (bookCharacter) {
      res.status(200).json(bookCharacter);
    } else {
      res.status(404).json({ message: "Book character not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book character" });
  }
});

bookCharacterRouter.post("/bookcharacters", async (req, res) => {
  try {
    const data = req.body;
    const newBookCharacter = await createBookCharacter(data);
    res.status(201).json(newBookCharacter);
  } catch (error) {
    res.status(500).json({ message: "Failed to create book character" });
  }
});

bookCharacterRouter.put("/bookcharacters/:bookId/:characterId", async (req, res) => {
  try {
    const { bookId, characterId } = req.params;
    const data = req.body;
    const updatedBookCharacter = await updateBookCharacter(bookId, characterId, data);
    res.status(200).json(updatedBookCharacter);
  } catch (error) {
    res.status(500).json({ message: "Failed to update book character" });
  }
});

bookCharacterRouter.delete("/bookcharacters/:bookId/:characterId", async (req, res) => {
  try {
    const { bookId, characterId } = req.params;
    await deleteBookCharacter(bookId, characterId);
    res.status(200).json({ message: "Book character deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete book character" });
  }
});

export default bookCharacterRouter;
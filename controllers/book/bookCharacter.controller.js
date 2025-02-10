import express from "express";
import bookCharacterService from "../../services/book/bookCharacter.service.js";

const bookCharacterRouter = express.Router();

bookCharacterRouter.get("/bookcharacters", async (req, res) => {
  try {
    const bookCharacters = await bookCharacterService.getAllBookCharacters();
    res.status(200).json(bookCharacters);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book characters" });
  }
});

bookCharacterRouter.get("/bookcharacters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bookCharacter = await bookCharacterService.getBookCharacterById(id);
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
    const { name, bookId } = req.body;
    const newBookCharacter = await bookCharacterService.createBookCharacter({
      name,
      bookId,
    });
    res.status(201).json(newBookCharacter);
  } catch (error) {
    res.status(500).json({ message: "Failed to create book character" });
  }
});

bookCharacterRouter.put("/bookcharacters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, bookId } = req.body;
    const updatedBookCharacter = await bookCharacterService.updateBookCharacter(
      id,
      { name, bookId }
    );
    res.status(200).json(updatedBookCharacter);
  } catch (error) {
    res.status(500).json({ message: "Failed to update book character" });
  }
});

bookCharacterRouter.delete("/bookcharacters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await bookCharacterService.deleteBookCharacter(id);
    res.status(200).json({ message: "Book character deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete book character" });
  }
});

export default bookCharacterRouter;

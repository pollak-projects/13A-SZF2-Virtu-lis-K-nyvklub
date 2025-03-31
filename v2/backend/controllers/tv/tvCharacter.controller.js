// ========================== Core Modules ==========================
import express from "express";
import tvCharacterService from "../../services/tv/tvCharacter.service.js";

// ========================== Router Setup ==========================
const tvCharacterRouter = express.Router();

// ========================== GET Routes ==========================
tvCharacterRouter.get("/tvcharacters", async (req, res) => {
  try {
    const tvCharacters = await tvCharacterService.getAllTVCharacters();
    res.status(200).json(tvCharacters);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV characters" });
  }
});

tvCharacterRouter.get("/tvcharacters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tvCharacter = await tvCharacterService.getTVCharacterById(id);
    if (tvCharacter) {
      res.status(200).json(tvCharacter);
    } else {
      res.status(404).json({ message: "TV character not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV character" });
  }
});

// ========================== POST Routes ==========================
tvCharacterRouter.post("/tvcharacters", async (req, res) => {
  try {
    const { name, tvShowId } = req.body;
    const newTVCharacter = await tvCharacterService.createTVCharacter({
      name,
      tvShowId,
    });
    res.status(201).json(newTVCharacter);
  } catch (error) {
    res.status(500).json({ message: "Failed to create TV character" });
  }
});

// ========================== PUT Routes ==========================
tvCharacterRouter.put("/tvcharacters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, tvShowId } = req.body;
    const updatedTVCharacter = await tvCharacterService.updateTVCharacter(id, {
      name,
      tvShowId,
    });
    res.status(200).json(updatedTVCharacter);
  } catch (error) {
    res.status(500).json({ message: "Failed to update TV character" });
  }
});

// ========================== DELETE Routes ==========================
tvCharacterRouter.delete("/tvcharacters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tvCharacterService.deleteTVCharacter(id);
    res.status(200).json({ message: "TV character deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete TV character" });
  }
});

export default tvCharacterRouter;

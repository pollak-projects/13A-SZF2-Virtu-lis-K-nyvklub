import express from "express";
import characterService from "../../services/misc/character.service.js";

const characterRouter = express.Router();

characterRouter.get("/characters", async (req, res) => {
  try {
    const characters = await characterService.getAllCharacters();
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch characters" });
  }
});

characterRouter.get("/characters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const character = await characterService.getCharacterById(id);
    if (character) {
      res.status(200).json(character);
    } else {
      res.status(404).json({ message: "Character not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch character" });
  }
});

characterRouter.post("/characters", async (req, res) => {
  try {
    const data = req.body;
    const newCharacter = await characterService.createCharacter(data);
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(500).json({ message: "Failed to create character" });
  }
});

characterRouter.put("/characters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedCharacter = await characterService.updateCharacter(id, data);
    res.status(200).json(updatedCharacter);
  } catch (error) {
    res.status(500).json({ message: "Failed to update character" });
  }
});

characterRouter.delete("/characters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await characterService.deleteCharacter(id);
    res.status(200).json({ message: "Character deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete character" });
  }
});

export default characterRouter;

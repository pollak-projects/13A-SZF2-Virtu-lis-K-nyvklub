// ========================== Core Modules ==========================
import express from "express";
import {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from "../../services/misc/character.service.js";

// ========================== Router Setup ==========================
const characterRouter = express.Router();

// ========================== GET Routes ==========================
characterRouter.get("/characters", async (req, res) => {
  try {
    // Összes karakter lekérése
    const characters = await getAllCharacters();
    res.status(200).json(characters);
  } catch (error) {
    console.error("Error fetching characters:", error);
    res.status(500).json({ message: "Failed to fetch characters" });
  }
});

characterRouter.get("/characters/:id", async (req, res) => {
  try {
    // Egy karakter lekérése azonosító alapján
    const { id } = req.params;
    const character = await getCharacterById(id);
    if (character) {
      res.status(200).json(character);
    } else {
      res.status(404).json({ message: "Character not found" });
    }
  } catch (error) {
    console.error("Error fetching character:", error);
    res.status(500).json({ message: "Failed to fetch character" });
  }
});

// ========================== POST Routes ==========================
characterRouter.post("/characters", async (req, res) => {
  try {
    // Új karakter létrehozása
    const data = req.body;
    const newCharacter = await createCharacter(data);
    res.status(201).json(newCharacter);
  } catch (error) {
    console.error("Error creating character:", error);
    res.status(500).json({ message: "Failed to create character" });
  }
});

// ========================== PUT Routes ==========================
characterRouter.put("/characters/:id", async (req, res) => {
  try {
    // Karakter frissítése
    const { id } = req.params;
    const data = req.body;
    const updatedCharacter = await updateCharacter(id, data);
    res.status(200).json(updatedCharacter);
  } catch (error) {
    console.error("Error updating character:", error);
    res.status(500).json({ message: "Failed to update character" });
  }
});

// ========================== DELETE Routes ==========================
characterRouter.delete("/characters/:id", async (req, res) => {
  try {
    // Karakter törlése
    const { id } = req.params;
    await deleteCharacter(id);
    res.status(200).json({ message: "Character deleted successfully" });
  } catch (error) {
    console.error("Error deleting character:", error);
    res.status(500).json({ message: "Failed to delete character" });
  }
});

export default characterRouter;

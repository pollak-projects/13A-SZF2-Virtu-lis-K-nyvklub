// ========================== Core Modules ==========================
import express from "express";
import { 
  getAllCharacterActors, 
  getCharacterActorById, 
  createCharacterActor, 
  updateCharacterActor, 
  deleteCharacterActor,
  getCharacterActorsByMovieId,
  getCharacterActorsByTvShowId
} from "../../services/misc/characterActor.service.js";

// ========================== Router Setup ==========================
const characterActorRouter = express.Router();

// ========================== GET Routes ==========================
characterActorRouter.get("/characteractors", async (req, res) => {
  try {
    // Összes karakter-színész kapcsolat lekérése
    const characterActors = await getAllCharacterActors();
    res.status(200).json(characterActors);
  } catch (error) {
    console.error("Error fetching character actors:", error);
    res.status(500).json({ message: "Failed to fetch character actors" });
  }
});

characterActorRouter.get(
  "/characteractors/:characterId/:actorId",
  async (req, res) => {
    try {
      // Egy karakter-színész kapcsolat lekérése azonosítók alapján
      const { characterId, actorId } = req.params;
      const characterActor = await getCharacterActorById(
        characterId,
        actorId
      );
      if (characterActor) {
        res.status(200).json(characterActor);
      } else {
        res.status(404).json({ message: "Character actor not found" });
      }
    } catch (error) {
      console.error("Error fetching character actor:", error);
      res.status(500).json({ message: "Failed to fetch character actor" });
    }
  }
);

characterActorRouter.get("/characteractors/movie/:movieId/characters", async (req, res) => {
  try {
    // Film karaktereinek és színészeinek lekérése
    const { movieId } = req.params;
    const characterActors = await getCharacterActorsByMovieId(movieId);
    res.status(200).json(characterActors);
  } catch (error) {
    console.error("Error fetching movie character-actors:", error);
    res.status(500).json({ message: "Failed to fetch movie character-actors" });
  }
});

characterActorRouter.get("/characteractors/tvshow/:tvShowId/characters", async (req, res) => {
  try {
    // TV műsor karaktereinek és színészeinek lekérése
    const { tvShowId } = req.params;
    const characterActors = await getCharacterActorsByTvShowId(tvShowId);
    res.status(200).json(characterActors);
  } catch (error) {
    console.error("Error fetching TV show character-actors:", error);
    res.status(500).json({ message: "Failed to fetch TV show character-actors" });
  }
});

// ========================== POST Routes ==========================
characterActorRouter.post("/characteractors", async (req, res) => {
  try {
    // Új karakter-színész kapcsolat létrehozása
    const data = req.body;
    const newCharacterActor = await createCharacterActor(data);
    res.status(201).json(newCharacterActor);
  } catch (error) {
    console.error("Error creating character actor:", error);
    res.status(500).json({ message: "Failed to create character actor" });
  }
});

// ========================== PUT Routes ==========================
characterActorRouter.put(
  "/characteractors/:characterId/:actorId",
  async (req, res) => {
    try {
      // Karakter-színész kapcsolat frissítése
      const { characterId, actorId } = req.params;
      const data = req.body;
      const updatedCharacterActor = await updateCharacterActor(
        characterId,
        actorId,
        data
      );
      res.status(200).json(updatedCharacterActor);
    } catch (error) {
      console.error("Error updating character actor:", error);
      res.status(500).json({ message: "Failed to update character actor" });
    }
  }
);

// ========================== DELETE Routes ==========================
characterActorRouter.delete(
  "/characteractors/:characterId/:actorId",
  async (req, res) => {
    try {
      // Karakter-színész kapcsolat törlése
      const { characterId, actorId } = req.params;
      await deleteCharacterActor(characterId, actorId);
      res.status(200).json({ message: "Character actor deleted successfully" });
    } catch (error) {
      console.error("Error deleting character actor:", error);
      res.status(500).json({ message: "Failed to delete character actor" });
    }
  }
);

export default characterActorRouter;

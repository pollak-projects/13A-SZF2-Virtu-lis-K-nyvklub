import express from "express";
import characterActorService from "../../services/misc/characterActor.service.js";

const characterActorRouter = express.Router();

characterActorRouter.get("/characteractors", async (req, res) => {
  try {
    const characterActors = await characterActorService.getAllCharacterActors();
    res.status(200).json(characterActors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch character actors" });
  }
});

characterActorRouter.get(
  "/characteractors/:characterId/:actorId",
  async (req, res) => {
    try {
      const { characterId, actorId } = req.params;
      const characterActor = await characterActorService.getCharacterActorById(
        characterId,
        actorId
      );
      if (characterActor) {
        res.status(200).json(characterActor);
      } else {
        res.status(404).json({ message: "Character actor not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch character actor" });
    }
  }
);

characterActorRouter.post("/characteractors", async (req, res) => {
  try {
    const data = req.body;
    const newCharacterActor = await characterActorService.createCharacterActor(
      data
    );
    res.status(201).json(newCharacterActor);
  } catch (error) {
    res.status(500).json({ message: "Failed to create character actor" });
  }
});

characterActorRouter.put(
  "/characteractors/:characterId/:actorId",
  async (req, res) => {
    try {
      const { characterId, actorId } = req.params;
      const data = req.body;
      const updatedCharacterActor =
        await characterActorService.updateCharacterActor(
          characterId,
          actorId,
          data
        );
      res.status(200).json(updatedCharacterActor);
    } catch (error) {
      res.status(500).json({ message: "Failed to update character actor" });
    }
  }
);

characterActorRouter.delete(
  "/characteractors/:characterId/:actorId",
  async (req, res) => {
    try {
      const { characterId, actorId } = req.params;
      await characterActorService.deleteCharacterActor(characterId, actorId);
      res.status(200).json({ message: "Character actor deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete character actor" });
    }
  }
);

export default characterActorRouter;

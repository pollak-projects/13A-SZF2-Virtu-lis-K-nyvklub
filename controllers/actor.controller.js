/* REDO REDO REDO REDO
import express from "express";
import actorService from "../services/actor.service.js";

const router = express.Router();

router.get("/actors", async (req, res) => {
  try {
    const actors = await actorService.getAllActors();
    res.status(200).json(actors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch actors" });
  }
});

router.get("/actors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const actor = await actorService.getActorById(id);
    if (actor) {
      res.status(200).json(actor);
    } else {
      res.status(404).json({ message: "Actor not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch actor" });
  }
});

router.post("/actors", async (req, res) => {
  try {
    const { name, picture } = req.body;
    const newActor = await actorService.createActor({ name, picture });
    res.status(201).json(newActor);
  } catch (error) {
    res.status(500).json({ message: "Failed to create actor" });
  }
});

router.put("/actors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, picture } = req.body;
    const updatedActor = await actorService.updateActor(id, { name, picture });
    res.status(200).json(updatedActor);
  } catch (error) {
    res.status(500).json({ message: "Failed to update actor" });
  }
});

router.delete("/actors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await actorService.deleteActor(id);
    res.status(204).json({ message: "Actor successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete actor" });
  }
});

export { router as actorController };
*/

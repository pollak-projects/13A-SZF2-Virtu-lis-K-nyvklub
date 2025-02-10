import express from "express";
import actorService from "../../services/misc/actor.service.js";

const actorRouter = express.Router();

actorRouter.get("/actors", async (req, res) => {
  try {
    const actors = await actorService.getAllActors();
    res.status(200).json(actors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch actors" });
  }
});

actorRouter.get("/actors/:id", async (req, res) => {
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

actorRouter.post("/actors", async (req, res) => {
  try {
    const data = req.body;
    const newActor = await actorService.createActor(data);
    res.status(201).json(newActor);
  } catch (error) {
    res.status(500).json({ message: "Failed to create actor" });
  }
});

actorRouter.put("/actors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedActor = await actorService.updateActor(id, data);
    res.status(200).json(updatedActor);
  } catch (error) {
    res.status(500).json({ message: "Failed to update actor" });
  }
});

actorRouter.delete("/actors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await actorService.deleteActor(id);
    res.status(200).json({ message: "Actor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete actor" });
  }
});

export default actorRouter;

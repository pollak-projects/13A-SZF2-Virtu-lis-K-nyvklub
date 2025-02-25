import express from "express";
import tvShowActorService from "../../services/tv/tvShowActor.service.js";

const tvShowActorRouter = express.Router();

tvShowActorRouter.get("/tvshowactors", async (req, res) => {
  try {
    const tvShowActors = await tvShowActorService.getAllTvShowActors();
    res.status(200).json(tvShowActors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV show actors" });
  }
});

tvShowActorRouter.get("/tvshowactors/:tvShowId/:actorId", async (req, res) => {
  try {
    const { tvShowId, actorId } = req.params;
    const tvShowActor = await tvShowActorService.getTvShowActorById(
      tvShowId,
      actorId
    );
    if (tvShowActor) {
      res.status(200).json(tvShowActor);
    } else {
      res.status(404).json({ message: "TV show actor not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch TV show actor" });
  }
});

tvShowActorRouter.post("/tvshowactors", async (req, res) => {
  try {
    const data = req.body;
    const newTvShowActor = await tvShowActorService.createTvShowActor(data);
    res.status(201).json(newTvShowActor);
  } catch (error) {
    res.status(500).json({ message: "Failed to create TV show actor" });
  }
});

tvShowActorRouter.put("/tvshowactors/:tvShowId/:actorId", async (req, res) => {
  try {
    const { tvShowId, actorId } = req.params;
    const data = req.body;
    const updatedTvShowActor = await tvShowActorService.updateTvShowActor(
      tvShowId,
      actorId,
      data
    );
    res.status(200).json(updatedTvShowActor);
  } catch (error) {
    res.status(500).json({ message: "Failed to update TV show actor" });
  }
});

tvShowActorRouter.delete(
  "/tvshowactors/:tvShowId/:actorId",
  async (req, res) => {
    try {
      const { tvShowId, actorId } = req.params;
      await tvShowActorService.deleteTvShowActor(tvShowId, actorId);
      res.status(200).json({ message: "TV show actor deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete TV show actor" });
    }
  }
);

export default tvShowActorRouter;

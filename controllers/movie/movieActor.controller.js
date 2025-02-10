import express from "express";
import movieActorService from "../../services/movie/movieActor.service.js";

const movieActorRouter = express.Router();

movieActorRouter.get("/movieactors", async (req, res) => {
  try {
    const movieActors = await movieActorService.getAllMovieActors();
    res.status(200).json(movieActors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movie actors" });
  }
});

movieActorRouter.get("/movieactors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movieActor = await movieActorService.getMovieActorById(id);
    if (movieActor) {
      res.status(200).json(movieActor);
    } else {
      res.status(404).json({ message: "Movie actor not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movie actor" });
  }
});

movieActorRouter.post("/movieactors", async (req, res) => {
  try {
    const { name, movieId } = req.body;
    const newMovieActor = await movieActorService.createMovieActor({
      name,
      movieId,
    });
    res.status(201).json(newMovieActor);
  } catch (error) {
    res.status(500).json({ message: "Failed to create movie actor" });
  }
});

movieActorRouter.put("/movieactors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, movieId } = req.body;
    const updatedMovieActor = await movieActorService.updateMovieActor(id, {
      name,
      movieId,
    });
    res.status(200).json(updatedMovieActor);
  } catch (error) {
    res.status(500).json({ message: "Failed to update movie actor" });
  }
});

movieActorRouter.delete("/movieactors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await movieActorService.deleteMovieActor(id);
    res.status(200).json({ message: "Movie actor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete movie actor" });
  }
});

export default movieActorRouter;

import express from "express";
import movieCharacterService from "../../services/movie/movieCharacter.service.js";

const movieCharacterRouter = express.Router();

movieCharacterRouter.get("/moviecharacters", async (req, res) => {
  try {
    const movieCharacters = await movieCharacterService.getAllMovieCharacters();
    res.status(200).json(movieCharacters);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movie characters" });
  }
});

movieCharacterRouter.get("/moviecharacters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movieCharacter = await movieCharacterService.getMovieCharacterById(
      id
    );
    if (movieCharacter) {
      res.status(200).json(movieCharacter);
    } else {
      res.status(404).json({ message: "Movie character not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movie character" });
  }
});

movieCharacterRouter.post("/moviecharacters", async (req, res) => {
  try {
    const { name, movieId } = req.body;
    const newMovieCharacter = await movieCharacterService.createMovieCharacter({
      name,
      movieId,
    });
    res.status(201).json(newMovieCharacter);
  } catch (error) {
    res.status(500).json({ message: "Failed to create movie character" });
  }
});

movieCharacterRouter.put("/moviecharacters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, movieId } = req.body;
    const updatedMovieCharacter =
      await movieCharacterService.updateMovieCharacter(id, { name, movieId });
    res.status(200).json(updatedMovieCharacter);
  } catch (error) {
    res.status(500).json({ message: "Failed to update movie character" });
  }
});

movieCharacterRouter.delete("/moviecharacters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await movieCharacterService.deleteMovieCharacter(id);
    res.status(200).json({ message: "Movie character deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete movie character" });
  }
});

export default movieCharacterRouter;

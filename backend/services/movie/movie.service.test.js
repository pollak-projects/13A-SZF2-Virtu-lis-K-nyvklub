// ========================== Core Modules ==========================
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "./movie.service.js";
import { createCreative, deleteCreative } from "../misc/creative.service.js";

// ========================== Test Setup ==========================
let createdMovieIds = [];
let createdDirectorIds = [];

afterEach(async () => {
  for (const movieId of createdMovieIds) {
    try {
      await deleteMovie(movieId);
    } catch (error) {
      console.log(`Could not delete test movie ${movieId}`);
    }
  }

  for (const directorId of createdDirectorIds) {
    try {
      await deleteCreative(directorId);
    } catch (error) {
      console.log(`Could not delete test director ${directorId}`);
    }
  }

  createdMovieIds = [];
  createdDirectorIds = [];
});

// ========================== Test Cases ==========================

describe("createMovie", () => {
  it("should create a new movie", async () => {
    const testDirector = await createCreative({
      name: "Test Director",
      author_book: false,
      director_movie: true,
      creator_show: false,
    });
    createdDirectorIds.push(testDirector.id);

    const data = {
      title: "Test Movie",
      director: testDirector.name,
      releaseYear: 2021,
      description: "Testing createMovie",
      coverArt: null,
    };
    const result = await createMovie(data);
    createdMovieIds.push(result.id);

    expect(result).toHaveProperty("id");
    expect(result.title).toBe(data.title);
  });

  it("should create a movie with a new director", async () => {
    const uniqueDirectorName = `New Director ${Date.now()}`;
    const data = {
      title: "Test Movie With New Director",
      director: uniqueDirectorName,
      releaseYear: 2022,
      description: "Testing createMovie with new director",
      coverArt: null,
    };

    const result = await createMovie(data);
    createdMovieIds.push(result.id);

    const directorId = result.director_Id;
    if (directorId) createdDirectorIds.push(directorId);

    expect(result).toHaveProperty("id");
    expect(result.title).toBe(data.title);
  });
});

describe("getAllMovies", () => {
  it("should return an array of movies", async () => {
    const movies = await getAllMovies();
    expect(Array.isArray(movies)).toBe(true);
  });
});

describe("getMovieById", () => {
  it("should return a movie by ID", async () => {
    const testDirector = await createCreative({
      name: "Test Director",
      author_book: false,
      director_movie: true,
      creator_show: false,
    });
    createdDirectorIds.push(testDirector.id);

    const newMovie = await createMovie({
      title: "Test Movie",
      director: testDirector.name,
      releaseYear: 2020,
      description: "Test movie for getMovieById",
    });
    createdMovieIds.push(newMovie.id);

    const foundMovie = await getMovieById(newMovie.id);
    expect(foundMovie).not.toBeNull();
    expect(foundMovie.id).toBe(newMovie.id);
  });
});

describe("updateMovie", () => {
  it("should update an existing movie", async () => {
    const testDirector = await createCreative({
      name: "Test Director",
      author_book: false,
      director_movie: true,
      creator_show: false,
    });
    createdDirectorIds.push(testDirector.id);

    const newMovie = await createMovie({
      title: "To Update",
      director: testDirector.name,
      releaseYear: 2018,
      description: "Test movie for updateMovie",
    });
    createdMovieIds.push(newMovie.id);

    const updated = await updateMovie(newMovie.id, { title: "Updated Title" });
    expect(updated.title).toBe("Updated Title");
  });
});

describe("deleteMovie", () => {
  it("should delete an existing movie", async () => {
    const testDirector = await createCreative({
      name: "Delete Test Director",
      author_book: false,
      director_movie: true,
      creator_show: false,
    });
    createdDirectorIds.push(testDirector.id);

    const newMovie = await createMovie({
      title: "To Delete",
      director: testDirector.name,
      releaseYear: 2017,
      description: "Test movie for deleteMovie",
    });

    const deleted = await deleteMovie(newMovie.id);
    expect(deleted.id).toBe(newMovie.id);
  });
});
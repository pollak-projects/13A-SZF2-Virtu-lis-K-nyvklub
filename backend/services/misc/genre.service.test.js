// ========================== Core Modules ==========================
import {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre,
} from "./genre.service.js";

// ========================== Test Setup ==========================
let createdGenreIds = [];

afterEach(async () => {
  for (const genreId of createdGenreIds) {
    try {
      await deleteGenre(genreId);
    } catch (error) {
      console.log(`Could not delete test genre ${genreId}`);
    }
  }

  createdGenreIds = [];
});

// ========================== Test Cases ==========================

describe("createGenre", () => {
  it("should create a new genre", async () => {
    const data = {
      genre: "Test Genre",
      description: "A test genre created for unit testing"
    };
    const result = await createGenre(data);
    createdGenreIds.push(result.id);

    expect(result).toHaveProperty("id");
    expect(result.genre).toBe(data.genre);
    expect(result.description).toBe(data.description);
  });
});

describe("getAllGenres", () => {
  it("should return an array of genres", async () => {
    const genres = await getAllGenres();
    expect(Array.isArray(genres)).toBe(true);
  });
});

describe("getGenreById", () => {
  it("should return a genre by ID", async () => {
    const newGenre = await createGenre({
      genre: "Get By ID Genre",
      description: "Test genre for getGenreById"
    });
    createdGenreIds.push(newGenre.id);

    const foundGenre = await getGenreById(newGenre.id);
    expect(foundGenre).not.toBeNull();
    expect(foundGenre.id).toBe(newGenre.id);
    expect(foundGenre.genre).toBe("Get By ID Genre");
  });
});

describe("updateGenre", () => {
  it("should update an existing genre", async () => {
    const newGenre = await createGenre({
      genre: "To Update",
      description: "Test genre for updateGenre"
    });
    createdGenreIds.push(newGenre.id);

    const updated = await updateGenre(newGenre.id, { 
      genre: "Updated Genre",
      description: "Updated description" 
    });
    
    expect(updated.genre).toBe("Updated Genre");
    expect(updated.description).toBe("Updated description");
  });
});

describe("deleteGenre", () => {
  it("should delete an existing genre", async () => {
    const newGenre = await createGenre({
      genre: "To Delete",
      description: "Test genre for deleteGenre"
    });

    const deleted = await deleteGenre(newGenre.id);
    expect(deleted.id).toBe(newGenre.id);
    
    try {
      await getGenreById(newGenre.id);
      fail('Expected genre to be deleted');
    } catch (error) {
    }
  });
});
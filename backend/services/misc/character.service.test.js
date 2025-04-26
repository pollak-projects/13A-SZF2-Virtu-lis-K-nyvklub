// ========================== Core Modules ==========================
import {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from "./character.service.js";

// ========================== Test Setup ==========================
let createdCharacterIds = [];

afterEach(async () => {
  for (const characterId of createdCharacterIds) {
    try {
      await deleteCharacter(characterId);
    } catch (error) {
      console.log(`Could not delete test character ${characterId}`);
    }
  }

  createdCharacterIds = [];
});

// ========================== Test Cases ==========================

describe("createCharacter", () => {
  it("should create a new character", async () => {
    const data = {
      name: "Test Character",
    };
    const result = await createCharacter(data);
    createdCharacterIds.push(result.id);

    expect(result).toHaveProperty("id");
    expect(result.name).toBe(data.name);
  });
});

describe("getAllCharacters", () => {
  it("should return an array of characters", async () => {
    const characters = await getAllCharacters();
    expect(Array.isArray(characters)).toBe(true);
  });
});

describe("getCharacterById", () => {
  it("should return a character by ID", async () => {
    const newCharacter = await createCharacter({
      name: "Get By ID Character",
    });
    createdCharacterIds.push(newCharacter.id);

    const foundCharacter = await getCharacterById(newCharacter.id);
    expect(foundCharacter).not.toBeNull();
    expect(foundCharacter.id).toBe(newCharacter.id);
  });
});

describe("updateCharacter", () => {
  it("should update an existing character", async () => {
    const newCharacter = await createCharacter({
      name: "To Update",
    });
    createdCharacterIds.push(newCharacter.id);

    const updated = await updateCharacter(newCharacter.id, { 
      name: "Updated Name" 
    });
    
    expect(updated.name).toBe("Updated Name");
  });
});

describe("deleteCharacter", () => {
  it("should delete an existing character", async () => {
    const newCharacter = await createCharacter({
      name: "To Delete",
    });

    const deleted = await deleteCharacter(newCharacter.id);
    expect(deleted.id).toBe(newCharacter.id);
    
    try {
      await getCharacterById(newCharacter.id);
      fail('Expected character to be deleted');
    } catch (error) {
    }
  });
});
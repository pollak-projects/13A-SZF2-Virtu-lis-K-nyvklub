// ========================== Core Modules ==========================
import {
  getAllActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor,
} from "./actor.service.js";

// ========================== Test Setup ==========================
let createdActorIds = [];

afterEach(async () => {
  for (const actorId of createdActorIds) {
    try {
      await deleteActor(actorId);
    } catch (error) {
      console.log(`Could not delete test actor ${actorId}`);
    }
  }

  createdActorIds = [];
});

// ========================== Test Cases ==========================

describe("createActor", () => {
  it("should create a new actor", async () => {
    const data = {
      name: "Test Actor",
      picture: null,
    };
    const result = await createActor(data);
    createdActorIds.push(result.id);

    expect(result).toHaveProperty("id");
    expect(result.name).toBe(data.name);
  });
});

describe("getAllActors", () => {
  it("should return an array of actors", async () => {
    const actors = await getAllActors();
    expect(Array.isArray(actors)).toBe(true);
  });
});

describe("getActorById", () => {
  it("should return an actor by ID", async () => {
    const newActor = await createActor({
      name: "Get By ID Actor",
      picture: null,
    });
    createdActorIds.push(newActor.id);

    const foundActor = await getActorById(newActor.id);
    expect(foundActor).not.toBeNull();
    expect(foundActor.id).toBe(newActor.id);
  });
});

describe("updateActor", () => {
  it("should update an existing actor", async () => {
    const newActor = await createActor({
      name: "To Update",
      picture: null,
    });
    createdActorIds.push(newActor.id);

    const updated = await updateActor(newActor.id, { 
      name: "Updated Name" 
    });
    
    expect(updated.name).toBe("Updated Name");
  });
});

describe("deleteActor", () => {
  it("should delete an existing actor", async () => {
    const newActor = await createActor({
      name: "To Delete",
      picture: null,
    });

    const deleted = await deleteActor(newActor.id);
    expect(deleted.id).toBe(newActor.id);
    
    try {
      await getActorById(newActor.id);
      fail('Expected actor to be deleted');
    } catch (error) {
    }
  });
});
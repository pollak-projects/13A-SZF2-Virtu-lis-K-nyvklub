// ========================== Core Modules ==========================
import {
  getAllTVShows,
  getTVShowById,
  createTVShow,
  updateTVShow,
  deleteTVShow,
} from "./tvShow.service.js";
import { createCreative, deleteCreative } from "../misc/creative.service.js";

// ========================== Test Setup ==========================
let createdTVShowIds = [];
let createdCreatorIds = [];

afterEach(async () => {
  for (const tvShowId of createdTVShowIds) {
    try {
      await deleteTVShow(tvShowId);
    } catch (error) {
      console.log(`Could not delete test TV show ${tvShowId}`);
    }
  }

  for (const creatorId of createdCreatorIds) {
    try {
      await deleteCreative(creatorId);
    } catch (error) {
      console.log(`Could not delete test creator ${creatorId}`);
    }
  }

  createdTVShowIds = [];
  createdCreatorIds = [];
});

// ========================== Test Cases ==========================

describe("createTVShow", () => {
  it("should create a new TV show", async () => {
    const testCreator = await createCreative({
      name: "Test Creator",
      author_book: false,
      director_movie: false,
      creator_show: true,
    });
    createdCreatorIds.push(testCreator.id);

    const data = {
      title: "Test TV Show",
      creator_Id: testCreator.id,
      seasons: 1,
      description: "Testing createTVShow",
      coverArt: null,
    };
    const result = await createTVShow(data);
    createdTVShowIds.push(result.id);

    expect(result).toHaveProperty("id");
    expect(result.title).toBe(data.title);
  });
});

describe("getAllTVShows", () => {
  it("should return an array of TV shows", async () => {
    const tvShows = await getAllTVShows();
    expect(Array.isArray(tvShows)).toBe(true);
  });
});

describe("getTVShowById", () => {
  it("should return a TV show by ID", async () => {
    const testCreator = await createCreative({
      name: "Test Creator",
      author_book: false,
      director_movie: false,
      creator_show: true,
    });
    createdCreatorIds.push(testCreator.id);

    const newTVShow = await createTVShow({
      title: "Test TV Show for getById",
      creator_Id: testCreator.id,
      seasons: 2,
      description: "Test TV show for getTVShowById",
    });
    createdTVShowIds.push(newTVShow.id);

    const foundTVShow = await getTVShowById(newTVShow.id);
    expect(foundTVShow).not.toBeNull();
    expect(foundTVShow.id).toBe(newTVShow.id);
  });
});

describe("updateTVShow", () => {
  it("should update an existing TV show", async () => {
    const testCreator = await createCreative({
      name: "Test Creator",
      author_book: false,
      director_movie: false,
      creator_show: true,
    });
    createdCreatorIds.push(testCreator.id);

    const newTVShow = await createTVShow({
      title: "To Update",
      creator_Id: testCreator.id,
      seasons: 1,
      description: "Test TV show for updateTVShow",
    });
    createdTVShowIds.push(newTVShow.id);

    const updated = await updateTVShow(newTVShow.id, { title: "Updated Title", seasons: 3 });
    expect(updated.title).toBe("Updated Title");
    expect(updated.seasons).toBe(3);
  });
});

describe("deleteTVShow", () => {
  it("should delete an existing TV show", async () => {
    const testCreator = await createCreative({
      name: "Test Delete Creator",
      author_book: false,
      director_movie: false,
      creator_show: true,
    });
    createdCreatorIds.push(testCreator.id);

    const newTVShow = await createTVShow({
      title: "To Delete",
      creator_Id: testCreator.id,
      seasons: 1,
      description: "Test TV show for deleteTVShow",
    });

    const deleted = await deleteTVShow(newTVShow.id);
    expect(deleted.id).toBe(newTVShow.id);

    try {
      await getTVShowById(newTVShow.id);
      fail('Expected TV show to be deleted');
    } catch (error) {
    }
  });
});
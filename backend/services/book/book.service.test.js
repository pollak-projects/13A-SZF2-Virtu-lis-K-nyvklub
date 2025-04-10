// ========================== Core Modules ==========================
import {
  getAllBooks,
  getBookById,
  getBooksByAuthorId,
  createBook,
  updateBook,
  deleteBook,
} from "./book.service.js";
import { createCreative, deleteCreative } from "../misc/creative.service.js";

// ========================== Test Setup ==========================
let createdBookIds = [];
let createdAuthorIds = [];

afterEach(async () => {
  for (const bookId of createdBookIds) {
    try {
      await deleteBook(bookId);
    } catch (error) {
      console.log(`Could not delete test book ${bookId}`);
    }
  }

  for (const authorId of createdAuthorIds) {
    try {
      await deleteCreative(authorId);
    } catch (error) {
      console.log(`Could not delete test author ${authorId}`);
    }
  }

  createdBookIds = [];
  createdAuthorIds = [];
});

// ========================== Test Cases ==========================

describe("createBook", () => {
  it("should create a new book", async () => {
    const testAuthor = await createCreative({
      name: "Test Author",
      author_book: true,
      director_movie: false,
      creator_show: false,
    });
    createdAuthorIds.push(testAuthor.id);

    const data = {
      title: "Test Book",
      author_Id: testAuthor.id,
      releaseYear: 2021,
      description: "Testing createBook",
      coverArt: null,
    };
    const result = await createBook(data);
    createdBookIds.push(result.id);

    expect(result).toHaveProperty("id");
    expect(result.title).toBe(data.title);
  });
});

describe("getAllBooks", () => {
  it("should return an array of books", async () => {
    const books = await getAllBooks();
    expect(Array.isArray(books)).toBe(true);
  });
});

describe("getBookById", () => {
  it("should return a book by ID", async () => {
    const testAuthor = await createCreative({
      name: "Test Author",
      author_book: true,
      director_movie: false,
      creator_show: false,
    });
    createdAuthorIds.push(testAuthor.id);

    const newBook = await createBook({
      title: "Test Book",
      author_Id: testAuthor.id,
      releaseYear: 2020,
      description: "Test book for getBookById",
    });
    createdBookIds.push(newBook.id);

    const foundBook = await getBookById(newBook.id);
    expect(foundBook).not.toBeNull();
    expect(foundBook.id).toBe(newBook.id);
  });
});

describe("getBooksByAuthorId", () => {
  it("should return books by the given author ID", async () => {
    const testAuthor = await createCreative({
      name: "Test Author",
      author_book: true,
      director_movie: false,
      creator_show: false,
    });
    createdAuthorIds.push(testAuthor.id);

    const newBook = await createBook({
      title: "Author Book",
      author_Id: testAuthor.id,
      releaseYear: 2019,
      description: "Test book for getBooksByAuthorId",
    });
    createdBookIds.push(newBook.id);

    const books = await getBooksByAuthorId(testAuthor.id);
    expect(books.length).toBeGreaterThan(0);
  });
});

describe("updateBook", () => {
  it("should update an existing book", async () => {
    const testAuthor = await createCreative({
      name: "Test Author",
      author_book: true,
      director_movie: false,
      creator_show: false,
    });
    createdAuthorIds.push(testAuthor.id);

    const newBook = await createBook({
      title: "To Update",
      author_Id: testAuthor.id,
      releaseYear: 2018,
      description: "Test book for updateBook",
    });
    createdBookIds.push(newBook.id);

    const updated = await updateBook(newBook.id, { title: "Updated Title" });
    expect(updated.title).toBe("Updated Title");
  });
});

describe("deleteBook", () => {
  it("should delete an existing book", async () => {
    const testAuthor = await createCreative({
      name: "Delete Test Author",
      author_book: true,
      director_movie: false,
      creator_show: false,
    });
    createdAuthorIds.push(testAuthor.id);

    const newBook = await createBook({
      title: "To Delete",
      author_Id: testAuthor.id,
      releaseYear: 2017,
      description: "Test book for deleteBook",
    });

    const deleted = await deleteBook(newBook.id);
    expect(deleted.id).toBe(newBook.id);
  });
});
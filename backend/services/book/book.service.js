// ========================== Core Modules ==========================
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ========================== Services ==========================
export async function getAllBooks() {
  try {
    return await prisma.book.findMany({
      include: {
        author: true, // Az összes könyv lekérése, szerzői adatokkal együtt
      },
    });
  } catch (error) {
    console.error("Error fetching all books:", error);
    throw new Error("Failed to fetch books");
  }
}

export async function getBookById(id) {
  try {
    return await prisma.book.findUnique({
      where: { id: parseInt(id) },
      include: {
        author: true, // Egy adott könyv lekérése azonosító alapján, szerzői adatokkal együtt
      },
    });
  } catch (error) {
    console.error(`Error fetching book with ID ${id}:`, error);
    throw new Error("Failed to fetch book");
  }
}

export async function getBooksByAuthorId(authorId) {
  try {
    return await prisma.book.findMany({
      where: { author_Id: parseInt(authorId) }, // Egy adott szerző könyveinek lekérése
    });
  } catch (error) {
    console.error(`Error fetching books by author ID ${authorId}:`, error);
    throw new Error("Failed to fetch books by author");
  }
}

export async function createBook(data) {
  try {
    return await prisma.book.create({
      data, // Új könyv létrehozása az adatbázisban
    });
  } catch (error) {
    console.error("Error creating book:", error);
    throw new Error("Failed to create book");
  }
}

export async function updateBook(id, data) {
  try {
    return await prisma.book.update({
      where: { id: parseInt(id) },
      data, // Egy meglévő könyv frissítése azonosító alapján
    });
  } catch (error) {
    console.error(`Error updating book with ID ${id}:`, error);
    throw new Error("Failed to update book");
  }
}

export async function deleteBook(id) {
  try {
    return await prisma.book.delete({
      where: { id: parseInt(id) }, // Egy könyv törlése azonosító alapján
    });
  } catch (error) {
    console.error(`Error deleting book with ID ${id}:`, error);
    throw new Error("Failed to delete book");
  }
}
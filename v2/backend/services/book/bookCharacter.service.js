// ========================== Core Modules ==========================
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ========================== Alap lekérdezések ==========================
export async function getAllBookCharacters() {
  return await prisma.bookCharacter.findMany();
}

export async function getBookCharacterById(bookId, characterId) {
  return await prisma.bookCharacter.findUnique({
    where: { book_Id: parseInt(bookId), character_Id: parseInt(characterId) },
  });
}

// ========================== CRUD Műveletek ==========================
export async function createBookCharacter(data) {
  return await prisma.bookCharacter.create({
    data,
  });
}

export async function updateBookCharacter(bookId, characterId, data) {
  return await prisma.bookCharacter.update({
    where: { book_Id: parseInt(bookId), character_Id: parseInt(characterId) },
    data,
  });
}

export async function deleteBookCharacter(bookId, characterId) {
  // Könyv-karakter kapcsolat törlése
  return await prisma.bookCharacter.delete({
    where: { book_Id: parseInt(bookId), character_Id: parseInt(characterId) },
  });
}
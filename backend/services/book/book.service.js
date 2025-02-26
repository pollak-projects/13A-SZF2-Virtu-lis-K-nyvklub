import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllBooks() {
  return await prisma.book.findMany();
}

export async function getBookById(id) {
  return await prisma.book.findUnique({
    where: { id: parseInt(id) },
  });
}

export async function getBooksByGenreId(genreId) {
  return await prisma.bookGenre
    .findMany({
      where: { genre_Id: parseInt(genreId) },
      include: { book: true },
    })
    .then((bookGenres) => bookGenres.map((bg) => bg.book));
}

export async function getBooksByCharacterId(characterId) {
  return await prisma.bookCharacter
    .findMany({
      where: { character_Id: parseInt(characterId) },
      include: { book: true },
    })
    .then((bookCharacters) => bookCharacters.map((bc) => bc.book));
}

export async function getBooksByAuthorId(authorId) {
  return await prisma.bookAuthor
    .findMany({
      where: { author_Id: parseInt(authorId) },
      include: { book: true },
    })
    .then((bookAuthors) => bookAuthors.map((ba) => ba.book));
}

export async function createBook(data) {
  return await prisma.book.create({
    data,
  });
}

export async function updateBook(id, data) {
  return await prisma.book.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteBook(id) {
  return await prisma.book.delete({
    where: { id: parseInt(id) },
  });
}

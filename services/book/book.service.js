const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BookService {
  async getAllBooks() {
    return await prisma.book.findMany();
  }

  async getBookById(id) {
    return await prisma.book.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async getBooksByGenreId(genreId) {
    return await prisma.bookGenre
      .findMany({
        where: { genre_Id: parseInt(genreId) },
        include: { book: true },
      })
      .then((bookGenres) => bookGenres.map((bg) => bg.book));
  }

  async getBooksByCharacterId(characterId) {
    return await prisma.bookCharacter
      .findMany({
        where: { character_Id: parseInt(characterId) },
        include: { book: true },
      })
      .then((bookCharacters) => bookCharacters.map((bc) => bc.book));
  }

  async getBooksByAuthorId(authorId) {
    return await prisma.bookAuthor
      .findMany({
        where: { author_Id: parseInt(authorId) },
        include: { book: true },
      })
      .then((bookAuthors) => bookAuthors.map((ba) => ba.book));
  }

  async createBook(data) {
    return await prisma.book.create({
      data,
    });
  }

  async updateBook(id, data) {
    return await prisma.book.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async deleteBook(id) {
    return await prisma.book.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = new BookService();

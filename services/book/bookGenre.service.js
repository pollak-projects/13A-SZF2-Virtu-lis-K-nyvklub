const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BookGenreService {
  async getAllBookGenres() {
    return await prisma.bookGenre.findMany();
  }

  async getBookGenreById(bookId, genreId) {
    return await prisma.bookGenre.findUnique({
      where: { book_Id: parseInt(bookId), genre_Id: parseInt(genreId) },
    });
  }

  async createBookGenre(data) {
    return await prisma.bookGenre.create({
      data,
    });
  }

  async updateBookGenre(bookId, genreId, data) {
    return await prisma.bookGenre.update({
      where: { book_Id: parseInt(bookId), genre_Id: parseInt(genreId) },
      data,
    });
  }

  async deleteBookGenre(bookId, genreId) {
    return await prisma.bookGenre.delete({
      where: { book_Id: parseInt(bookId), genre_Id: parseInt(genreId) },
    });
  }
}

module.exports = new BookGenreService();

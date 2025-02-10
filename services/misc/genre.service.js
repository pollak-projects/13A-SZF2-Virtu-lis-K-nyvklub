const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class GenreService {
  async getAllGenres() {
    return await prisma.genre.findMany();
  }

  async getGenreById(id) {
    return await prisma.genre.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async createGenre(data) {
    return await prisma.genre.create({
      data,
    });
  }

  async updateGenre(id, data) {
    return await prisma.genre.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async deleteGenre(id) {
    return await prisma.genre.delete({
      where: { id: parseInt(id) },
    });
  }
}

  //-----------------------------------------------FILMEK-----------------------------------------------\\

module.exports = new GenreService();

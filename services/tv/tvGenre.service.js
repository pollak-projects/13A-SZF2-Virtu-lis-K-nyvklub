const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class TvGenreService {
  async getAllTvGenres() {
    return await prisma.tvGenre.findMany();
  }

  async getTvGenreById(tvShowId, genreId) {
    return await prisma.tvGenre.findUnique({
      where: { tvShow_Id: parseInt(tvShowId), genre_Id: parseInt(genreId) },
    });
  }

  async createTvGenre(data) {
    return await prisma.tvGenre.create({
      data,
    });
  }

  async updateTvGenre(tvShowId, genreId, data) {
    return await prisma.tvGenre.update({
      where: { tvShow_Id: parseInt(tvShowId), genre_Id: parseInt(genreId) },
      data,
    });
  }

  async deleteTvGenre(tvShowId, genreId) {
    return await prisma.tvGenre.delete({
      where: { tvShow_Id: parseInt(tvShowId), genre_Id: parseInt(genreId) },
    });
  }
}

module.exports = new TvGenreService();

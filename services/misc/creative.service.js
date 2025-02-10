const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CreativeService {
  async getAllCreatives() {
    return await prisma.creative.findMany();
  }

  async getCreativeById(id) {
    return await prisma.creative.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async getAuthors() {
    return await prisma.creative.findMany({
      where: { author_book: true },
    });
  }

  async getDirectors() {
    return await prisma.creative.findMany({
      where: { director_movie: true },
    });
  }

  async getCreators() {
    return await prisma.creative.findMany({
      where: { creator_show: true },
    });
  }

  async createCreative(data) {
    return await prisma.creative.create({
      data,
    });
  }

  async updateCreative(id, data) {
    return await prisma.creative.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async deleteCreative(id) {
    return await prisma.creative.delete({
      where: { id: parseInt(id) },
    });
  }

  async getCreativesByMovieId(movieId) {
    return await prisma.movieCreative
      .findMany({
        where: { movie_Id: parseInt(movieId) },
        include: { creative: true },
      })
      .then((movieCreatives) => movieCreatives.map((mc) => mc.creative));
  }

  async getCreativesByTvShowId(tvShowId) {
    return await prisma.tvShowCreative
      .findMany({
        where: { tvShow_Id: parseInt(tvShowId) },
        include: { creative: true },
      })
      .then((tvShowCreatives) => tvShowCreatives.map((tc) => tc.creative));
  }

  async getCreativesByBookId(bookId) {
    return await prisma.bookCreative
      .findMany({
        where: { book_Id: parseInt(bookId) },
        include: { creative: true },
      })
      .then((bookCreatives) => bookCreatives.map((bc) => bc.creative));
  }
}

module.exports = new CreativeService();

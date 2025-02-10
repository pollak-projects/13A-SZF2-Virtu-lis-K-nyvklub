const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class MovieGenreService {
  async getAllMovieGenres() {
    return await prisma.movieGenre.findMany();
  }

  async getMovieGenreById(movieId, genreId) {
    return await prisma.movieGenre.findUnique({
      where: { movie_Id: parseInt(movieId), genre_Id: parseInt(genreId) },
    });
  }

  async createMovieGenre(data) {
    return await prisma.movieGenre.create({
      data,
    });
  }

  async updateMovieGenre(movieId, genreId, data) {
    return await prisma.movieGenre.update({
      where: { movie_Id: parseInt(movieId), genre_Id: parseInt(genreId) },
      data,
    });
  }

  async deleteMovieGenre(movieId, genreId) {
    return await prisma.movieGenre.delete({
      where: { movie_Id: parseInt(movieId), genre_Id: parseInt(genreId) },
    });
  }
}

module.exports = new MovieGenreService();

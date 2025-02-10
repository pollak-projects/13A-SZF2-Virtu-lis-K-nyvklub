const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class MovieService {
  async getAllMovies() {
    return await prisma.movie.findMany();
  }

  async getMovieById(id) {
    return await prisma.movie.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async getMoviesByGenreId(genreId) {
    return await prisma.movieGenre
      .findMany({
        where: { genre_Id: parseInt(genreId) },
        include: { movie: true },
      })
      .then((movieGenres) => movieGenres.map((mg) => mg.movie));
  }

  async getMoviesByActorId(actorId) {
    return await prisma.movieActor
      .findMany({
        where: { actor_Id: parseInt(actorId) },
        include: { movie: true },
      })
      .then((movieActors) => movieActors.map((ma) => ma.movie));
  }

  async getMoviesByCharacterId(characterId) {
    return await prisma.movieCharacter
      .findMany({
        where: { character_Id: parseInt(characterId) },
        include: { movie: true },
      })
      .then((movieCharacters) => movieCharacters.map((mc) => mc.movie));
  }

  async createMovie(data) {
    return await prisma.movie.create({
      data,
    });
  }

  async updateMovie(id, data) {
    return await prisma.movie.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async deleteMovie(id) {
    return await prisma.movie.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = new MovieService();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class MovieActorService {
  async getAllMovieActors() {
    return await prisma.movieActor.findMany();
  }

  async getMovieActorById(movieId, actorId) {
    return await prisma.movieActor.findUnique({
      where: { movie_Id: parseInt(movieId), actor_Id: parseInt(actorId) },
    });
  }

  async createMovieActor(data) {
    return await prisma.movieActor.create({
      data,
    });
  }

  async updateMovieActor(movieId, actorId, data) {
    return await prisma.movieActor.update({
      where: { movie_Id: parseInt(movieId), actor_Id: parseInt(actorId) },
      data,
    });
  }

  async deleteMovieActor(movieId, actorId) {
    return await prisma.movieActor.delete({
      where: { movie_Id: parseInt(movieId), actor_Id: parseInt(actorId) },
    });
  }
}

module.exports = new MovieActorService();

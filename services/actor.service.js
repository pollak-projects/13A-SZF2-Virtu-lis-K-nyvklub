const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ActorService {
  async getAllActors() {
    return await prisma.actor.findMany();
  }

  async getActorById(id) {
    return await prisma.actor.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async getActorsByMovieId(movieId) {
    return await prisma.movieActor
      .findMany({
        where: { movie_Id: parseInt(movieId) },
        include: { actor: true },
      })
      .then((movieActors) => movieActors.map((ma) => ma.actor));
  }

  async getActorsByTvShowId(tvShowId) {
    return await prisma.tvShowActor
      .findMany({
        where: { tvShow_Id: parseInt(tvShowId) },
        include: { actor: true },
      })
      .then((tvShowActors) => tvShowActors.map((tsa) => tsa.actor));
  }

  async createActor(data) {
    return await prisma.actor.create({
      data,
    });
  }

  async updateActor(id, data) {
    return await prisma.actor.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async deleteActor(id) {
    return await prisma.actor.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = new ActorService();

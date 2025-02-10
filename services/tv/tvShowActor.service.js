const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class TvShowActorService {
  async getAllTvShowActors() {
    return await prisma.tvShowActor.findMany();
  }

  async getTvShowActorById(tvShowId, actorId) {
    return await prisma.tvShowActor.findUnique({
      where: { tvShow_Id: parseInt(tvShowId), actor_Id: parseInt(actorId) },
    });
  }

  async createTvShowActor(data) {
    return await prisma.tvShowActor.create({
      data,
    });
  }

  async updateTvShowActor(tvShowId, actorId, data) {
    return await prisma.tvShowActor.update({
      where: { tvShow_Id: parseInt(tvShowId), actor_Id: parseInt(actorId) },
      data,
    });
  }

  async deleteTvShowActor(tvShowId, actorId) {
    return await prisma.tvShowActor.delete({
      where: { tvShow_Id: parseInt(tvShowId), actor_Id: parseInt(actorId) },
    });
  }
}

module.exports = new TvShowActorService();

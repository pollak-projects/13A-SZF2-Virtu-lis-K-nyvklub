const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class TVShowService {
  async getAllTVShows() {
    return await prisma.tvShow.findMany();
  }

  async getTVShowById(id) {
    return await prisma.tvShow.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async getTVShowsByCreatorId(creatorId) {
    return await prisma.tvShow.findMany({
      where: { creatorId: parseInt(creatorId) },
      include: { tvShow: true },
    });
  }

  async createTVShow(data) {
    return await prisma.tvShow.create({
      data,
    });
  }

  async updateTVShow(id, data) {
    return await prisma.tvShow.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async deleteTVShow(id) {
    return await prisma.tvShow.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = new TVShowService();

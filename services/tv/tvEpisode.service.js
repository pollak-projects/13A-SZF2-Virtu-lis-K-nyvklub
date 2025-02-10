const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class EpisodeService {
  async getAllEpisodes() {
    return await prisma.episode.findMany();
  }

  async getEpisodeById(id) {
    return await prisma.episode.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async getEpisodesBySeasonId(seasonId) {
    return await prisma.episode.findMany({
      where: { seasonId: parseInt(seasonId) },
    });
  }

  async createEpisode(data) {
    return await prisma.episode.create({
      data,
    });
  }

  async updateEpisode(id, data) {
    return await prisma.episode.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async deleteEpisode(id) {
    return await prisma.episode.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = new EpisodeService();

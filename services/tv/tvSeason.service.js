const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class SeasonService {
  async getAllSeasons() {
    return await prisma.season.findMany();
  }

  async getSeasonById(id) {
    return await prisma.season.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async getSeasonsByTVShowId(tvShowId) {
    return await prisma.season.findMany({
      where: { tvShowId: parseInt(tvShowId) },
    });
  }

  async createSeason(data) {
    return await prisma.season.create({
      data,
    });
  }

  async updateSeason(id, data) {
    return await prisma.season.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async deleteSeason(id) {
    return await prisma.season.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = new SeasonService();

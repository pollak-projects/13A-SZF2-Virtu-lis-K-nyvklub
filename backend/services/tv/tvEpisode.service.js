const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

  export async function getAllEpisodes() {
    return await prisma.episode.findMany();
  }

  export async function getEpisodeById(id) {
    return await prisma.episode.findUnique({
      where: { id: parseInt(id) },
    });
  }

  export async function getEpisodesBySeasonId(seasonId) {
    return await prisma.episode.findMany({
      where: { seasonId: parseInt(seasonId) },
    });
  }

  export async function createEpisode(data) {
    return await prisma.episode.create({
      data,
    });
  }

  export async function updateEpisode(id, data) {
    return await prisma.episode.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  export async function deleteEpisode(id) {
    return await prisma.episode.delete({
      where: { id: parseInt(id) },
    });
  }


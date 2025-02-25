const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function getAllSeasons() {
  return await prisma.season.findMany();
}

export async function getSeasonById(id) {
  return await prisma.season.findUnique({
    where: { id: parseInt(id) },
  });
}

export async function getSeasonsByTVShowId(tvShowId) {
  return await prisma.season.findMany({
    where: { tvShowId: parseInt(tvShowId) },
  });
}

export async function createSeason(data) {
  return await prisma.season.create({
    data,
  });
}

export async function updateSeason(id, data) {
  return await prisma.season.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteSeason(id) {
  return await prisma.season.delete({
    where: { id: parseInt(id) },
  });
}

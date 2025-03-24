import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllTVSeasons() {
  return prisma.tvSeason.findMany({
    include: {
      tvShow: true,
      episodes: true,
    },
  });
}

export async function getTVSeasonById(id) {
  return prisma.tvSeason.findUnique({
    where: { id: parseInt(id) },
    include: {
      tvShow: {
        include: { creator: true },
      },
      episodes: true,
    },
  });
}

export async function createTVSeason(data) {
  return prisma.tvSeason.create({
    data,
  });
}

export async function updateTVSeason(id, data) {
  return prisma.tvSeason.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteTVSeason(id) {
  return prisma.tvSeason.delete({
    where: { id: parseInt(id) },
  });
}
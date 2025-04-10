import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllTVEpisodes() {
  return prisma.tvEpisode.findMany({
    include: { tvSeason: true },
  });
}

export async function getTVEpisodeById(id) {
  return prisma.tvEpisode.findUnique({
    where: { id: parseInt(id) },
    include: { tvSeason: true },
  });
}

export async function createTVEpisode(data) {
  return prisma.tvEpisode.create({
    data,
  });
}

export async function updateTVEpisode(id, data) {
  return prisma.tvEpisode.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteTVEpisode(id) {
  return prisma.tvEpisode.delete({
    where: { id: parseInt(id) },
  });
}
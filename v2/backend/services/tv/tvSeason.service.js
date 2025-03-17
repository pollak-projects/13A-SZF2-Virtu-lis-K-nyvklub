import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllTVSeasons() {
  try {
    return await prisma.tvSeason.findMany({
      include: {
        tvShow: true,
        episodes: true,
      },
    });
  } catch (error) {
    throw new Error("Failed to fetch TV seasons");
  }
}

export async function getTVSeasonById(id) {
  try {
    return await prisma.tvSeason.findUnique({
      where: { id: parseInt(id) },
      include: {
        tvShow: true,
        episodes: true,
      },
    });
  } catch (error) {
    throw new Error("Failed to fetch TV season");
  }
}

export async function createTVSeason(data) {
  try {
    return await prisma.tvSeason.create({
      data,
    });
  } catch (error) {
    throw new Error("Failed to create TV season");
  }
}

export async function updateTVSeason(id, data) {
  try {
    return await prisma.tvSeason.update({
      where: { id: parseInt(id) },
      data,
    });
  } catch (error) {
    throw new Error("Failed to update TV season");
  }
}

export async function deleteTVSeason(id) {
  try {
    return await prisma.tvSeason.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    throw new Error("Failed to delete TV season");
  }
}
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllTVEpisodes() {
  try {
    return await prisma.tvEpisode.findMany();
  } catch (error) {
    throw new Error("Failed to fetch TV episodes");
  }
}

export async function getTVEpisodeById(id) {
  try {
    return await prisma.tvEpisode.findUnique({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    throw new Error("Failed to fetch TV episode");
  }
}

export async function createTVEpisode(data) {
  try {
    return await prisma.tvEpisode.create({
      data,
    });
  } catch (error) {
    throw new Error("Failed to create TV episode");
  }
}

export async function updateTVEpisode(id, data) {
  try {
    return await prisma.tvEpisode.update({
      where: { id: parseInt(id) },
      data,
    });
  } catch (error) {
    throw new Error("Failed to update TV episode");
  }
}

export async function deleteTVEpisode(id) {
  try {
    return await prisma.tvEpisode.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    throw new Error("Failed to delete TV episode");
  }
}
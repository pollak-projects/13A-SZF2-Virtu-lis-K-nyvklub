import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllTVShows() {
  try {
    return await prisma.tvShow.findMany({
      include: {
        creator: true,
        tvSeasons: {
          include: {
            episodes: true,
          },
        },
        tvShowActors: {
          include: { actor: true },
        },
        TvCharacters: { // Corrected field name
          include: { character: true },
        },
        TvGenres: {
          include: { genre: true },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching TV shows:", error);
    throw new Error("Database query failed");
  }
}

export async function getTVShowById(id) {
  return await prisma.tvShow.findUnique({
    where: { id: parseInt(id) },
    include: {
      creator: true,
      tvSeasons: {
        include: { episodes: true },
      },
      tvShowActors: { include: { actor: true } },
      TvChars: { include: { character: true } },
      TvGenres: { include: { genre: true } },
    },
  });
}

export async function createTVShow(data) {
  return await prisma.tvShow.create({
    data,
  });
}

export async function updateTVShow(id, data) {
  return await prisma.tvShow.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteTVShow(id) {
  return await prisma.tvShow.delete({
    where: { id: parseInt(id) },
  });
}
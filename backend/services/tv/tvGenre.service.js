const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function getAllTvGenres() {
  return await prisma.tvGenre.findMany();
}

export async function getTvGenreById(tvShowId, genreId) {
  return await prisma.tvGenre.findUnique({
    where: { tvShow_Id: parseInt(tvShowId), genre_Id: parseInt(genreId) },
  });
}

export async function createTvGenre(data) {
  return await prisma.tvGenre.create({
    data,
  });
}

export async function updateTvGenre(tvShowId, genreId, data) {
  return await prisma.tvGenre.update({
    where: { tvShow_Id: parseInt(tvShowId), genre_Id: parseInt(genreId) },
    data,
  });
}

export async function deleteTvGenre(tvShowId, genreId) {
  return await prisma.tvGenre.delete({
    where: { tvShow_Id: parseInt(tvShowId), genre_Id: parseInt(genreId) },
  });
}

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllTvGenres() {
  return prisma.tvGenre.findMany({
    include: { tvShow: true, genre: true },
  });
}

export async function getTvGenreById(tvShowId, genreId) {
  return prisma.tvGenre.findUnique({
    where: {
      tvShow_Id_genre_Id: {
        tvShow_Id: parseInt(tvShowId),
        genre_Id: parseInt(genreId),
      },
    },
    include: { tvShow: true, genre: true },
  });
}

export async function createTvGenre(data) {
  return prisma.tvGenre.create({
    data,
  });
}

export async function updateTvGenre(tvShowId, genreId, data) {
  return prisma.tvGenre.update({
    where: {
      tvShow_Id_genre_Id: {
        tvShow_Id: parseInt(tvShowId),
        genre_Id: parseInt(genreId),
      },
    },
    data,
  });
}

export async function deleteTvGenre(tvShowId, genreId) {
  return prisma.tvGenre.delete({
    where: {
      tvShow_Id_genre_Id: {
        tvShow_Id: parseInt(tvShowId),
        genre_Id: parseInt(genreId),
      },
    },
  });
}
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function getAllMovieGenres() {
  return await prisma.movieGenre.findMany();
}

export async function getMovieGenreById(movieId, genreId) {
  return await prisma.movieGenre.findUnique({
    where: { movie_Id: parseInt(movieId), genre_Id: parseInt(genreId) },
  });
}

export async function createMovieGenre(data) {
  return await prisma.movieGenre.create({
    data,
  });
}

export async function updateMovieGenre(movieId, genreId, data) {
  return await prisma.movieGenre.update({
    where: { movie_Id: parseInt(movieId), genre_Id: parseInt(genreId) },
    data,
  });
}

export async function deleteMovieGenre(movieId, genreId) {
  return await prisma.movieGenre.delete({
    where: { movie_Id: parseInt(movieId), genre_Id: parseInt(genreId) },
  });
}

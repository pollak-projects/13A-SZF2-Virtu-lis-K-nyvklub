const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function getAllCreatives() {
  return await prisma.creative.findMany();
}

export async function getCreativeById(id) {
  return await prisma.creative.findUnique({
    where: { id: parseInt(id) },
  });
}

export async function getAuthors() {
  return await prisma.creative.findMany({
    where: { author_book: true },
  });
}

export async function getDirectors() {
  return await prisma.creative.findMany({
    where: { director_movie: true },
  });
}

export async function getCreators() {
  return await prisma.creative.findMany({
    where: { creator_show: true },
  });
}

export async function createCreative(data) {
  return await prisma.creative.create({
    data,
  });
}

export async function updateCreative(id, data) {
  return await prisma.creative.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteCreative(id) {
  return await prisma.creative.delete({
    where: { id: parseInt(id) },
  });
}

export async function getCreativesByMovieId(movieId) {
  return await prisma.movieCreative
    .findMany({
      where: { movie_Id: parseInt(movieId) },
      include: { creative: true },
    })
    .then((movieCreatives) => movieCreatives.map((mc) => mc.creative));
}

export async function getCreativesByTvShowId(tvShowId) {
  return await prisma.tvShowCreative
    .findMany({
      where: { tvShow_Id: parseInt(tvShowId) },
      include: { creative: true },
    })
    .then((tvShowCreatives) => tvShowCreatives.map((tc) => tc.creative));
}

export async function getCreativesByBookId(bookId) {
  return await prisma.bookCreative
    .findMany({
      where: { book_Id: parseInt(bookId) },
      include: { creative: true },
    })
    .then((bookCreatives) => bookCreatives.map((bc) => bc.creative));
}

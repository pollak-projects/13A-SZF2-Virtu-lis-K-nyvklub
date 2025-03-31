// ========================== Core Modules ==========================
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ========================== Services ==========================

export async function uploadCreative(data) {
  // Új kreatív feltöltése az adatbázisba
  try {
    return await prisma.creative.create({
      data: {
        name: data.name,
        picture: data.picture,
        author_book: data.author_book,
        director_movie: data.director_movie,
        creator_show: data.creator_show,
      },
    });
  } catch (error) {
    console.error("Error uploading creative:", error);
    throw new Error("Failed to upload creative");
  }
}

export async function getAllCreatives() {
  // Az összes kreatív lekérdezése
  return await prisma.creative.findMany({
    include: {
      picture: true,
    },
  });
}

export async function getCreativeById(id) {
  // Egy adott kreatív lekérdezése azonosító alapján
  return await prisma.creative.findUnique({
    where: { id: parseInt(id) },
    include: {
      picture: true,
    },
  });
}

export async function getAuthors() {
  // Csak azokat a kreatívokat adja vissza, akik szerzők
  return await prisma.creative.findMany({
    where: { author_book: true },
    include: {
      picture: true,
    },
  });
}

export async function getDirectors() {
  // Csak azokat a kreatívokat adja vissza, akik rendezők
  return await prisma.creative.findMany({
    where: { director_movie: true },
    include: {
      picture: true,
    },
  });
}

export async function getCreators() {
  // Csak azokat a kreatívokat adja vissza, akik sorozat készítők
  return await prisma.creative.findMany({
    where: { creator_show: true },
    include: {
      picture: true,
    },
  });
}

export async function createCreative(data) {
  // Új kreatív létrehozása
  return await prisma.creative.create({
    data,
  });
}

export async function updateCreative(id, data) {
  // Egy meglévő kreatív frissítése azonosító alapján
  return await prisma.creative.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteCreative(id) {
  // Egy kreatív törlése azonosító alapján
  return await prisma.creative.delete({
    where: { id: parseInt(id) },
  });
}

// ========================== Movie Creatives ==========================

export async function getCreativesByMovieId(movieId) {
  // Egy adott filmhez tartozó kreatívok lekérdezése
  return await prisma.movieCreative
    .findMany({
      where: { movie_Id: parseInt(movieId) },
      include: { creative: true },
    })
    .then((movieCreatives) => movieCreatives.map((mc) => mc.creative));
}

// ========================== TV Show Creatives ==========================

export async function getCreativesByTvShowId(tvShowId) {
  // Egy adott sorozathoz tartozó kreatívok lekérdezése
  return await prisma.tvShowCreative
    .findMany({
      where: { tvShow_Id: parseInt(tvShowId) },
      include: { creative: true },
    })
    .then((tvShowCreatives) => tvShowCreatives.map((tc) => tc.creative));
}

// ========================== Book Creatives ==========================

export async function getCreativesByBookId(bookId) {
  // Egy adott könyvhöz tartozó kreatívok lekérdezése
  return await prisma.bookCreative
    .findMany({
      where: { book_Id: parseInt(bookId) },
      include: { creative: true },
    })
    .then((bookCreatives) => bookCreatives.map((bc) => bc.creative));
}

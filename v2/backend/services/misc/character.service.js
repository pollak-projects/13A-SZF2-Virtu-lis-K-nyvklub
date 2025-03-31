// ========================== Core Modules ==========================
import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ========================== Services ==========================
export async function getAllCharacters() {
  return await prisma.character.findMany();
}

export async function getCharacterById(id) {
  return await prisma.character.findUnique({
    where: { id: parseInt(id) },
  });
}

// ========================== Movie Characters ==========================
export async function getCharactersByMovieId(movieId) {
  return await prisma.movieCharacter
    .findMany({
      where: { movie_Id: parseInt(movieId) },
      include: { character: true },
    })
    .then((movieCharacters) => movieCharacters.map((mc) => mc.character));
  // Filmhez tartozó karakterek lekérése
}

// ========================== TV Show Characters ==========================
export async function getCharactersByTvShowId(tvShowId) {
  return await prisma.tvCharacter
    .findMany({
      where: { tvShow_Id: parseInt(tvShowId) },
      include: { character: true },
    })
    .then((tvShowCharacters) => tvShowCharacters.map((tc) => tc.character));
  // Sorozathoz tartozó karakterek lekérése
}

// ========================== Book Characters ==========================
export async function getCharactersByBookId(tvShowId) {
  return await prisma.bookCharacter
    .findMany({
      where: { book_Id: parseInt(tvShowId) },
      include: { character: true },
    })
    .then((bookCharacters) => bookCharacters.map((tc) => tc.character));
  // Könyvhöz tartozó karakterek lekérése
}

// ========================== CRUD Operations ==========================
export async function createCharacter(data) {
  return await prisma.character.create({
    data,
  });
  // Új karakter létrehozása
}

export async function updateCharacter(id, data) {
  return await prisma.character.update({
    where: { id: parseInt(id) },
    data,
  });
  // Karakter adatainak frissítése
}

export async function deleteCharacter(id) {
  return await prisma.character.delete({
    where: { id: parseInt(id) },
  });
  // Karakter törlése
}

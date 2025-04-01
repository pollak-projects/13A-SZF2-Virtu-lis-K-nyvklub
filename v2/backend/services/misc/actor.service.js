// ========================== Core Modules ==========================
import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ========================== Services ==========================
export async function getAllActors() {
  return await prisma.actor.findMany();
}

export async function getActorById(id) {
  return await prisma.actor.findUnique({
    where: { id: parseInt(id) },
  });
}

// ========================== Movie Actors ==========================
export async function getActorsByMovieId(movieId) {
  return await prisma.movieActor
    .findMany({
      where: { movie_Id: parseInt(movieId) },
      include: { actor: true },
    })
    .then((movieActors) => movieActors.map((ma) => ma.actor));
  // Filmhez tartozó színészek lekérdezése
}

// ========================== TV Show Actors ==========================
export async function getActorsByTvShowId(tvShowId) {
  return await prisma.tvShowActor
    .findMany({
      where: { tvShow_Id: parseInt(tvShowId) },
      include: { actor: true },
    })
    .then((tvShowActors) => tvShowActors.map((tsa) => tsa.actor));
  // Sorozathoz tartozó színészek lekérdezése
}

// ========================== CRUD Operations ==========================
export async function createActor(data) {
  return await prisma.actor.create({
    data,
  });
  // Új színész létrehozása
}

export async function updateActor(id, data) {
  return await prisma.actor.update({
    where: { id: parseInt(id) },
    data,
  });
  // Színész adatainak frissítése
}

export async function deleteActor(id) {
  return await prisma.actor.delete({
    where: { id: parseInt(id) },
  });
  // Színész törlése
}

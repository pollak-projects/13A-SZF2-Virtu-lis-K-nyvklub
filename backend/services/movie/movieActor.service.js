import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllMovieActors() {
  return await prisma.movieActor.findMany();
}

export async function getMovieActorById(movieId, actorId) {
  return await prisma.movieActor.findUnique({
    where: { movie_Id: parseInt(movieId), actor_Id: parseInt(actorId) },
  });
}

export async function createMovieActor(data) {
  return await prisma.movieActor.create({
    data,
  });
}

export async function updateMovieActor(movieId, actorId, data) {
  return await prisma.movieActor.update({
    where: { movie_Id: parseInt(movieId), actor_Id: parseInt(actorId) },
    data,
  });
}

export async function deleteMovieActor(movieId, actorId) {
  return await prisma.movieActor.delete({
    where: { movie_Id: parseInt(movieId), actor_Id: parseInt(actorId) },
  });
}

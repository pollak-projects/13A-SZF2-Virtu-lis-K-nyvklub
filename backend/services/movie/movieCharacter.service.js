import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllMovieCharacters() {
  return await prisma.movieCharacter.findMany();
}

export async function getMovieCharacterById(movieId, characterId) {
  return await prisma.movieCharacter.findUnique({
    where: {
      movie_Id: parseInt(movieId),
      character_Id: parseInt(characterId),
    },
  });
}

export async function createMovieCharacter(data) {
  return await prisma.movieCharacter.create({
    data,
  });
}

export async function updateMovieCharacter(movieId, characterId, data) {
  return await prisma.movieCharacter.update({
    where: {
      movie_Id: parseInt(movieId),
      character_Id: parseInt(characterId),
    },
    data,
  });
}

export async function deleteMovieCharacter(movieId, characterId) {
  return await prisma.movieCharacter.delete({
    where: {
      movie_Id: parseInt(movieId),
      character_Id: parseInt(characterId),
    },
  });
}

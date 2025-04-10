// ========================== Core Modules ==========================
import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ========================== Services ==========================
export async function getAllCharacterActors() {
  return await prisma.characterActor.findMany();
}

export async function getCharacterActorById(characterId, actorId) {
  return await prisma.characterActor.findUnique({
    where: {
      character_Id: parseInt(characterId),
      actor_Id: parseInt(actorId),
    },
  });
}

export async function createCharacterActor(data) {
  return await prisma.characterActor.create({
    data,
  });
}

export async function updateCharacterActor(characterId, actorId, data) {
  return await prisma.characterActor.update({
    where: {
      character_Id: parseInt(characterId),
      actor_Id: parseInt(actorId),
    },
    data,
  });
}

export async function deleteCharacterActor(characterId, actorId) {
  return await prisma.characterActor.delete({
    where: {
      character_Id: parseInt(characterId),
      actor_Id: parseInt(actorId),
    },
  });
}

// ========================== Movie Character Actors ==========================
export async function getCharacterActorsByMovieId(movieId) {
  const movieCharacters = await prisma.movieCharacter.findMany({
    where: { movie_Id: parseInt(movieId) },
    include: {
      character: true,
    },
  });

  const result = [];
  for (const mc of movieCharacters) {
    const characterActors = await prisma.characterActor.findMany({
      where: { character_Id: mc.character.id },
      include: {
        actor: true,
      },
    });

    if (characterActors.length === 0) {
      result.push({
        character: {
          id: mc.character.id,
          name: mc.character.name,
        },
        actor: null,
      });
    } else {
      result.push({
        character: {
          id: mc.character.id,
          name: mc.character.name,
        },
        actor: characterActors[0].actor,
      });
    }
  }

  console.log(`Talált karakterek száma a filmhez (ID: ${movieId}): ${result.length}`);
  return result;
}

// ========================== TV Show Character Actors ==========================
export async function getCharacterActorsByTvShowId(tvShowId) {
  const tvShowCharacters = await prisma.tvCharacter.findMany({
    where: { tvShow_Id: parseInt(tvShowId) },
    include: {
      character: true,
    },
  });

  const result = [];
  for (const tc of tvShowCharacters) {
    const characterActors = await prisma.characterActor.findMany({
      where: { character_Id: tc.character.id },
      include: {
        actor: true,
      },
    });

    if (characterActors.length === 0) {
      result.push({
        character: {
          id: tc.character.id,
          name: tc.character.name,
        },
        actor: null,
      });
    } else {
      result.push({
        character: {
          id: tc.character.id,
          name: tc.character.name,
        },
        actor: characterActors[0].actor,
      });
    }
  }

  console.log(`Talált karakterek száma a sorozathoz (ID: ${tvShowId}): ${result.length}`);
  return result;
}

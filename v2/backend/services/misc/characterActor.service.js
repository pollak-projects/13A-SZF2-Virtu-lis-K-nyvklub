import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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

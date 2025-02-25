const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function getAllTvCharacters() {
  return await prisma.tvCharacter.findMany();
}

export async function getTvCharacterById(tvShowId, characterId) {
  return await prisma.tvCharacter.findUnique({
    where: {
      tvShow_Id: parseInt(tvShowId),
      character_Id: parseInt(characterId),
    },
  });
}

export async function createTvCharacter(data) {
  return await prisma.tvCharacter.create({
    data,
  });
}

export async function updateTvCharacter(tvShowId, characterId, data) {
  return await prisma.tvCharacter.update({
    where: {
      tvShow_Id: parseInt(tvShowId),
      character_Id: parseInt(characterId),
    },
    data,
  });
}

export async function deleteTvCharacter(tvShowId, characterId) {
  return await prisma.tvCharacter.delete({
    where: {
      tvShow_Id: parseInt(tvShowId),
      character_Id: parseInt(characterId),
    },
  });
}

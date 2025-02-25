const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function getAllCharacters() {
  return await prisma.character.findMany();
}

export async function getCharacterById(id) {
  return await prisma.character.findUnique({
    where: { id: parseInt(id) },
  });
}

export async function getCharactersByMovieId(movieId) {
  return await prisma.movieCharacter
    .findMany({
      where: { movie_Id: parseInt(movieId) },
      include: { character: true },
    })
    .then((movieCharacters) => movieCharacters.map((mc) => mc.character));
}

export async function getCharactersByTvShowId(tvShowId) {
  return await prisma.tvCharacter
    .findMany({
      where: { tvShow_Id: parseInt(tvShowId) },
      include: { character: true },
    })
    .then((tvShowCharacters) => tvShowCharacters.map((tc) => tc.character));
}

export async function getCharactersByBookId(tvShowId) {
  return await prisma.bookCharacter
    .findMany({
      where: { book_Id: parseInt(tvShowId) },
      include: { character: true },
    })
    .then((bookCharacters) => bookCharacters.map((tc) => tc.character));
}

export async function createCharacter(data) {
  return await prisma.character.create({
    data,
  });
}

export async function updateCharacter(id, data) {
  return await prisma.character.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteCharacter(id) {
  return await prisma.character.delete({
    where: { id: parseInt(id) },
  });
}

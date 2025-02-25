const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function getMovieById(id) {
  return await prisma.movie.findUnique({
    where: { id: parseInt(id) },
  });
}

export async function getMoviesByGenreId(genreId) {
  return await prisma.movieGenre
    .findMany({
      where: { genre_Id: parseInt(genreId) },
      include: { movie: true },
    })
    .then((movieGenres) => movieGenres.map((mg) => mg.movie));
}

export async function getMoviesByActorId(actorId) {
  return await prisma.movieActor
    .findMany({
      where: { actor_Id: parseInt(actorId) },
      include: { movie: true },
    })
    .then((movieActors) => movieActors.map((ma) => ma.movie));
}

export async function getMoviesByCharacterId(characterId) {
  return await prisma.movieCharacter
    .findMany({
      where: { character_Id: parseInt(characterId) },
      include: { movie: true },
    })
    .then((movieCharacters) => movieCharacters.map((mc) => mc.movie));
}

export async function createMovie(data) {
  return await prisma.movie.create({
    data,
  });
}

export async function updateMovie(id, data) {
  return await prisma.movie.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteMovie(id) {
  return await prisma.movie.delete({
    where: { id: parseInt(id) },
  });
}

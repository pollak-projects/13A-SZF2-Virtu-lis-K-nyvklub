const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function getAllTvShowActors() {
  return await prisma.tvShowActor.findMany();
}

export async function getTvShowActorById(tvShowId, actorId) {
  return await prisma.tvShowActor.findUnique({
    where: { tvShow_Id: parseInt(tvShowId), actor_Id: parseInt(actorId) },
  });
}

export async function createTvShowActor(data) {
  return await prisma.tvShowActor.create({
    data,
  });
}

export async function updateTvShowActor(tvShowId, actorId, data) {
  return await prisma.tvShowActor.update({
    where: { tvShow_Id: parseInt(tvShowId), actor_Id: parseInt(actorId) },
    data,
  });
}

export async function deleteTvShowActor(tvShowId, actorId) {
  return await prisma.tvShowActor.delete({
    where: { tvShow_Id: parseInt(tvShowId), actor_Id: parseInt(actorId) },
  });
}

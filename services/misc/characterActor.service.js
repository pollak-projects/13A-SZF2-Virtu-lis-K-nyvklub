const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CharacterActorService {
  async getAllCharacterActors() {
    return await prisma.characterActor.findMany();
  }

  async getCharacterActorById(characterId, actorId) {
    return await prisma.characterActor.findUnique({
      where: {
        character_Id: parseInt(characterId),
        actor_Id: parseInt(actorId),
      },
    });
  }

  async createCharacterActor(data) {
    return await prisma.characterActor.create({
      data,
    });
  }

  async updateCharacterActor(characterId, actorId, data) {
    return await prisma.characterActor.update({
      where: {
        character_Id: parseInt(characterId),
        actor_Id: parseInt(actorId),
      },
      data,
    });
  }

  async deleteCharacterActor(characterId, actorId) {
    return await prisma.characterActor.delete({
      where: {
        character_Id: parseInt(characterId),
        actor_Id: parseInt(actorId),
      },
    });
  }
}

module.exports = new CharacterActorService();

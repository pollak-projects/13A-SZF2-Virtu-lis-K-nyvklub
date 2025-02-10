const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class TvCharacterService {
  async getAllTvCharacters() {
    return await prisma.tvCharacter.findMany();
  }

  async getTvCharacterById(tvShowId, characterId) {
    return await prisma.tvCharacter.findUnique({
      where: {
        tvShow_Id: parseInt(tvShowId),
        character_Id: parseInt(characterId),
      },
    });
  }

  async createTvCharacter(data) {
    return await prisma.tvCharacter.create({
      data,
    });
  }

  async updateTvCharacter(tvShowId, characterId, data) {
    return await prisma.tvCharacter.update({
      where: {
        tvShow_Id: parseInt(tvShowId),
        character_Id: parseInt(characterId),
      },
      data,
    });
  }

  async deleteTvCharacter(tvShowId, characterId) {
    return await prisma.tvCharacter.delete({
      where: {
        tvShow_Id: parseInt(tvShowId),
        character_Id: parseInt(characterId),
      },
    });
  }
}

module.exports = new TvCharacterService();

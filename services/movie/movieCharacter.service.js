const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class MovieCharacterService {
  async getAllMovieCharacters() {
    return await prisma.movieCharacter.findMany();
  }

  async getMovieCharacterById(movieId, characterId) {
    return await prisma.movieCharacter.findUnique({
      where: {
        movie_Id: parseInt(movieId),
        character_Id: parseInt(characterId),
      },
    });
  }

  async createMovieCharacter(data) {
    return await prisma.movieCharacter.create({
      data,
    });
  }

  async updateMovieCharacter(movieId, characterId, data) {
    return await prisma.movieCharacter.update({
      where: {
        movie_Id: parseInt(movieId),
        character_Id: parseInt(characterId),
      },
      data,
    });
  }

  async deleteMovieCharacter(movieId, characterId) {
    return await prisma.movieCharacter.delete({
      where: {
        movie_Id: parseInt(movieId),
        character_Id: parseInt(characterId),
      },
    });
  }
}

module.exports = new MovieCharacterService();

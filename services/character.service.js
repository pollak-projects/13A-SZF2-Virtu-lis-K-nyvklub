const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CharacterService {
  async getAllCharacters() {
    return await prisma.character.findMany();
  }

  async getCharacterById(id) {
    return await prisma.character.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async getCharactersByMovieId(movieId) {
    return await prisma.movieCharacter
      .findMany({
        where: { movie_Id: parseInt(movieId) },
        include: { character: true },
      })
      .then((movieCharacters) => movieCharacters.map((mc) => mc.character));
  }

  async getCharactersByTvShowId(tvShowId) {
    return await prisma.tvCharacter
      .findMany({
        where: { tvShow_Id: parseInt(tvShowId) },
        include: { character: true },
      })
      .then((tvShowCharacters) => tvShowCharacters.map((tc) => tc.character));
  }

  async getCharactersByBookId(tvShowId) {
    return await prisma.bookCharacter
      .findMany({
        where: { book_Id: parseInt(tvShowId) },
        include: { character: true },
      })
      .then((bookCharacters) => bookCharacters.map((tc) => tc.character));
  }

  async createCharacter(data) {
    return await prisma.character.create({
      data,
    });
  }

  async updateCharacter(id, data) {
    return await prisma.character.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async deleteCharacter(id) {
    return await prisma.character.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = new CharacterService();

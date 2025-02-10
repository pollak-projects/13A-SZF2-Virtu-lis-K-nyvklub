const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BookCharacterService {
  async getAllBookCharacters() {
    return await prisma.bookCharacter.findMany();
  }

  async getBookCharacterById(bookId, characterId) {
    return await prisma.bookCharacter.findUnique({
      where: { book_Id: parseInt(bookId), character_Id: parseInt(characterId) },
    });
  }

  async createBookCharacter(data) {
    return await prisma.bookCharacter.create({
      data,
    });
  }

  async updateBookCharacter(bookId, characterId, data) {
    return await prisma.bookCharacter.update({
      where: { book_Id: parseInt(bookId), character_Id: parseInt(characterId) },
      data,
    });
  }

  async deleteBookCharacter(bookId, characterId) {
    return await prisma.bookCharacter.delete({
      where: { book_Id: parseInt(bookId), character_Id: parseInt(characterId) },
    });
  }
}

module.exports = new BookCharacterService();

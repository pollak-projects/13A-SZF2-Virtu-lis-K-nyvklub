// ========================== Core Modules ==========================
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ========================== GET Functions ==========================
export async function getAllMovies() {
  try {
    return await prisma.movie.findMany({
      include: {
        director: true,
        actors: true,
        genres: true,
        characters: true,
      },
    });
  } catch (error) {
    console.error("Error fetching all movies:", error);
    throw new Error("Failed to fetch movies");
  }
}

export async function getMovieById(id) {
  try {
    return await prisma.movie.findUnique({
      where: { id: parseInt(id) },
      include: {
        director: true,
      },
    });
  } catch (error) {
    console.error(`Error fetching movie with ID ${id}:`, error);
    throw new Error("Failed to fetch movie");
  }
}

// ========================== CREATE Functions ==========================
export async function createMovie(data) {
  try {
    const director = await prisma.creative.findFirst({
      where: { name: data.director },
    });

    let directorId;

    if (director) {
      directorId = director.id;
    } else {
      const newDirector = await prisma.creative.create({
        data: { 
          name: data.director, 
          director_movie: true,
          author_book: false,
          creator_show: false
        },
      });
      directorId = newDirector.id;
    }

    return await prisma.movie.create({
      data: {
        title: data.title,
        releaseYear: data.releaseYear,
        description: data.description,
        coverArt: data.coverArt,
        director: {
          connect: { id: directorId },
        },
      },
    });
  } catch (error) {
    console.error("Error creating movie:", error);
    throw new Error("Failed to create movie");
  }
}

// ========================== UPDATE Functions ==========================
export async function updateMovie(id, data) {
  try {
    return await prisma.movie.update({
      where: { id: parseInt(id) },
      data,
    });
  } catch (error) {
    console.error(`Error updating movie with ID ${id}:`, error);
    throw new Error("Failed to update movie");
  }
}

// ========================== DELETE Functions ==========================
export async function deleteMovie(id) {
  try {
    return await prisma.movie.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error(`Error deleting movie with ID ${id}:`, error);
    throw new Error("Failed to delete movie");
  }
}
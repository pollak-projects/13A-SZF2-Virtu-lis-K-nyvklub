import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Get all favorites by user ID
router.get("/user/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    
    // Get all types of favorites for the user
    const [bookFavorites, movieFavorites, tvShowFavorites] = await Promise.all([
      prisma.userBookRating.findMany({
        where: { 
          userId,
          favorite: true 
        },
        include: {
          book: {
            select: {
              id: true,
              title: true,
              coverArt: true,
              author: {
                select: {
                  name: true
                }
              }
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.userMovieRating.findMany({
        where: { 
          userId,
          favorite: true 
        },
        include: {
          movie: {
            select: {
              id: true,
              title: true,
              coverArt: true,
              director: {
                select: {
                  name: true
                }
              }
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.userTVShowRating.findMany({
        where: { 
          userId,
          favorite: true 
        },
        include: {
          tvShow: {
            select: {
              id: true,
              title: true,
              coverArt: true,
              creator: {
                select: {
                  name: true
                }
              }
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      })
    ]);
    
    // Format the results
    const formattedBookFavorites = bookFavorites.map(favorite => ({
      id: favorite.book.id,
      type: 'books',
      title: favorite.book.title,
      coverArt: favorite.book.coverArt,
      creator: favorite.book.author?.name || 'Ismeretlen szerző'
    }));
    
    const formattedMovieFavorites = movieFavorites.map(favorite => ({
      id: favorite.movie.id,
      type: 'movies',
      title: favorite.movie.title,
      coverArt: favorite.movie.coverArt,
      creator: favorite.movie.director?.name || 'Ismeretlen rendező'
    }));
    
    const formattedTVShowFavorites = tvShowFavorites.map(favorite => ({
      id: favorite.tvShow.id,
      type: 'series',
      title: favorite.tvShow.title,
      coverArt: favorite.tvShow.coverArt,
      creator: favorite.tvShow.creator?.name || 'Ismeretlen készítő'
    }));
    
    // Combine all favorites
    const allFavorites = [
      ...formattedBookFavorites,
      ...formattedMovieFavorites,
      ...formattedTVShowFavorites
    ];
    
    res.status(200).json(allFavorites);
  } catch (error) {
    console.error("Error fetching user favorites:", error);
    res.status(500).json({ message: "Failed to fetch user favorites" });
  }
});

export default router;
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Get all reviews by user ID
router.get("/user/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    
    // Get all types of reviews for the user
    const [bookRatings, movieRatings, tvShowRatings] = await Promise.all([
      prisma.userBookRating.findMany({
        where: { userId },
        include: {
          book: {
            select: {
              title: true,
              coverArt: true
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.userMovieRating.findMany({
        where: { userId },
        include: {
          movie: {
            select: {
              title: true,
              coverArt: true
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.userTVShowRating.findMany({
        where: { userId },
        include: {
          tvShow: {
            select: {
              title: true,
              coverArt: true
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      })
    ]);
    
    // Format the results
    const formattedBookRatings = bookRatings.map(rating => ({
      id: rating.id,
      mediaType: 'books',
      mediaId: rating.bookId,
      mediaTitle: rating.book.title,
      coverArt: rating.book.coverArt,
      rating: rating.rating,
      title: rating.title,
      content: rating.content,
      favorite: rating.favorite,
      createdAt: rating.createdAt
    }));
    
    const formattedMovieRatings = movieRatings.map(rating => ({
      id: rating.id,
      mediaType: 'movies',
      mediaId: rating.movieId,
      mediaTitle: rating.movie.title,
      coverArt: rating.movie.coverArt,
      rating: rating.rating,
      title: rating.title,
      content: rating.content,
      favorite: rating.favorite,
      createdAt: rating.createdAt
    }));
    
    const formattedTVShowRatings = tvShowRatings.map(rating => ({
      id: rating.id,
      mediaType: 'series',
      mediaId: rating.tvShowId,
      mediaTitle: rating.tvShow.title,
      coverArt: rating.tvShow.coverArt,
      rating: rating.rating,
      title: rating.title,
      content: rating.content,
      favorite: rating.favorite,
      createdAt: rating.createdAt
    }));
    
    // Combine all ratings and sort by creation date
    const allRatings = [
      ...formattedBookRatings,
      ...formattedMovieRatings,
      ...formattedTVShowRatings
    ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    res.status(200).json(allRatings);
  } catch (error) {
    console.error("Error fetching user reviews:", error);
    res.status(500).json({ message: "Failed to fetch user reviews" });
  }
});

export default router;
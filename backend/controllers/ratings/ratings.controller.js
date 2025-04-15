import express from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();

const getUserIdFromToken = async (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Invalid authorization header');
  }
  
  const token = authHeader.split(' ')[1];
  const data = await prisma.maindata.findFirst();
  
  if (!data || !data.JWTSecret) {
    throw new Error('Server configuration error');
  }
  
  const decoded = jwt.verify(token, data.JWTSecret, {
    algorithm: data.JWTAlgorithm || 'HS256'
  });
  
  return decoded.sub || decoded.id;
};

router.get("/book/:bookId", async (req, res) => {
  try {
    const userId = await getUserIdFromToken(req);
    const bookId = parseInt(req.params.bookId);
    
    const rating = await prisma.userBookRating.findUnique({
      where: {
        userId_bookId: {
          userId: parseInt(userId),
          bookId: bookId
        }
      }
    });
    
    if (rating) {
      res.status(200).json(rating);
    } else {
      res.status(404).json({ message: "Rating not found" });
    }
  } catch (error) {
    console.error("Error fetching book rating:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
});

router.get("/movie/:movieId", async (req, res) => {
  try {
    const userId = await getUserIdFromToken(req);
    const movieId = parseInt(req.params.movieId);
    
    const rating = await prisma.userMovieRating.findUnique({
      where: {
        userId_movieId: {
          userId: parseInt(userId),
          movieId: movieId
        }
      }
    });
    
    if (rating) {
      res.status(200).json(rating);
    } else {
      res.status(404).json({ message: "Rating not found" });
    }
  } catch (error) {
    console.error("Error fetching movie rating:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
});

router.get("/tvshow/:tvShowId", async (req, res) => {
  try {
    const userId = await getUserIdFromToken(req);
    const tvShowId = parseInt(req.params.tvShowId);
    
    const rating = await prisma.userTVShowRating.findUnique({
      where: {
        userId_tvShowId: {
          userId: parseInt(userId),
          tvShowId: tvShowId
        }
      }
    });
    
    if (rating) {
      res.status(200).json(rating);
    } else {
      res.status(404).json({ message: "Rating not found" });
    }
  } catch (error) {
    console.error("Error fetching TV show rating:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
});

router.post("/book", async (req, res) => {
  try {
    const userId = await getUserIdFromToken(req);
    const { mediaId, rating, favorite, title, content } = req.body;
    
    const newRating = await prisma.userBookRating.create({
      data: {
        userId: parseInt(userId),
        bookId: mediaId,
        rating: parseInt(rating),
        favorite: !!favorite,
        title: title,
        content: content || ""
      }
    });
    
    res.status(201).json(newRating);
  } catch (error) {
    console.error("Error creating book rating:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
});

router.post("/movie", async (req, res) => {
  try {
    const userId = await getUserIdFromToken(req);
    const { mediaId, rating, favorite, title, content } = req.body;
    
    const newRating = await prisma.userMovieRating.create({
      data: {
        userId: parseInt(userId),
        movieId: mediaId,
        rating: parseInt(rating),
        favorite: !!favorite,
        title: title,
        content: content || ""
      }
    });
    
    res.status(201).json(newRating);
  } catch (error) {
    console.error("Error creating movie rating:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
});

router.post("/tvshow", async (req, res) => {
  try {
    const userId = await getUserIdFromToken(req);
    const { mediaId, rating, favorite, title, content } = req.body;
    
    const newRating = await prisma.userTVShowRating.create({
      data: {
        userId: parseInt(userId),
        tvShowId: mediaId,
        rating: parseInt(rating),
        favorite: !!favorite,
        title: title,
        content: content || ""
      }
    });
    
    res.status(201).json(newRating);
  } catch (error) {
    console.error("Error creating TV show rating:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
});

router.put("/book/:bookId", async (req, res) => {
  try {
    const userId = await getUserIdFromToken(req);
    const bookId = parseInt(req.params.bookId);
    const { rating, favorite, title, content } = req.body;
    
    const updatedRating = await prisma.userBookRating.update({
      where: {
        userId_bookId: {
          userId: parseInt(userId),
          bookId: bookId
        }
      },
      data: {
        rating: parseInt(rating),
        favorite: !!favorite,
        title: title,
        content: content || "",
        updatedAt: new Date()
      }
    });
    
    res.status(200).json(updatedRating);
  } catch (error) {
    console.error("Error updating book rating:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
});

// Update movie rating
router.put("/movie/:movieId", async (req, res) => {
  try {
    const userId = await getUserIdFromToken(req);
    const movieId = parseInt(req.params.movieId);
    const { rating, favorite, title, content } = req.body;
    
    const updatedRating = await prisma.userMovieRating.update({
      where: {
        userId_movieId: {
          userId: parseInt(userId),
          movieId: movieId
        }
      },
      data: {
        rating: parseInt(rating),
        favorite: !!favorite,
        title: title,
        content: content || "",
        updatedAt: new Date()
      }
    });
    
    res.status(200).json(updatedRating);
  } catch (error) {
    console.error("Error updating movie rating:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
});

// Update TV show rating
router.put("/tvshow/:tvShowId", async (req, res) => {
  try {
    const userId = await getUserIdFromToken(req);
    const tvShowId = parseInt(req.params.tvShowId);
    const { rating, favorite, title, content } = req.body;
    
    const updatedRating = await prisma.userTVShowRating.update({
      where: {
        userId_tvShowId: {
          userId: parseInt(userId),
          tvShowId: tvShowId
        }
      },
      data: {
        rating: parseInt(rating),
        favorite: !!favorite,
        title: title,
        content: content || "",
        updatedAt: new Date()
      }
    });
    
    res.status(200).json(updatedRating);
  } catch (error) {
    console.error("Error updating TV show rating:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
});

// Get all book ratings
router.get("/book/:bookId/all", async (req, res) => {
  try {
    const bookId = parseInt(req.params.bookId);
    
    const ratings = await prisma.userBookRating.findMany({
      where: {
        bookId: bookId
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            username: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    res.status(200).json(ratings);
  } catch (error) {
    console.error("Error fetching book ratings:", error);
    res.status(500).json({ message: "Failed to fetch ratings" });
  }
});

router.get("/movie/:movieId/all", async (req, res) => {
  try {
    const movieId = parseInt(req.params.movieId);
    
    const ratings = await prisma.userMovieRating.findMany({
      where: {
        movieId: movieId
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            username: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    res.status(200).json(ratings);
  } catch (error) {
    console.error("Error fetching movie ratings:", error);
    res.status(500).json({ message: "Failed to fetch ratings" });
  }
});

router.get("/tvshow/:tvShowId/all", async (req, res) => {
  try {
    const tvShowId = parseInt(req.params.tvShowId);
    
    const ratings = await prisma.userTVShowRating.findMany({
      where: {
        tvShowId: tvShowId
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            username: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    res.status(200).json(ratings);
  } catch (error) {
    console.error("Error fetching TV show ratings:", error);
    res.status(500).json({ message: "Failed to fetch ratings" });
  }
});

export default router;
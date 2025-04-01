import express from 'express';
import {
    forgotPassword,
    userUpdate,
    userDelete,
    GetAllUsers,
    Groups,
} from "../../services/auth/user.service.js";

const router = express.Router();


// Felhasználók lekérése
router.get("/getAll", async (req, res) => {
    try {
        const users = await GetAllUsers();
        res.status(201).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
});

// Jelszó-visszaállítás
router.get("/forgot-password", async (req, res) => {
    const { id } = req.body;
    try {
        const user = await forgotPassword(id);
        res.status(200).json(user);
    }   catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Felhasználói adatok frissítése
router.put("/update", async (req, res) => {
    const { id, username, email, groupId } = req.body;
    try {
        const user = await userUpdate(id, username, email, groupId);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Felhasználó törlése  
router.delete("/delete", async (req, res) => {
    const { id } = req.body;
    try {
        const user = await userDelete(id);
        res.status(200).json(user);
    }   catch (error) {
        res.status(400).json(error.message);
    }
});

// Felhasználói csoportok lekérése
router.get("/getGroups", async (req, res) => {
    try {
        const groups = await Groups();
        res.status(200).json(groups);
    }   catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Felhasználó lekérése ID alapján
router.get("/getById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const tokenUserId = req.user?.id;
    
    if (parseInt(id) !== tokenUserId && req.user?.group?.name !== 'ADMIN') {
      return res.status(403).json({ message: "You can only view your own profile" });
    }
    
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        avatar: true,
        bio: true,
        createdAt: true,
        bookReviews: true,
        movieReviews: true,
        tvShowReviews: true,
        group: true
      }
    });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Failed to fetch user profile" });
  }
});

export { router as userController };
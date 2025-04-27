// ========================== Importok ==========================
import express from "express";
import {
    verifyjwt,
    updateMainData,
    listAllTokens,
    passChange,
    login,
    register,
    verifyEmailToken
} from "../../services/auth/auth.service.js";
import { SendEmail, SendVerificationEmail } from "../../services/auth/emailsender.js";
import * as crypto from "crypto";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; 
import multer from "multer";
import path from "path";
const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), 'uploads/profile'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, 'avatar-' + uniqueSuffix + ext);
  }
});

const uploadAvatar = multer({ 
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only images are allowed'));
  }
});

// ========================== Router beállítása ==========================
const router = express.Router();

// ========================== GET-ek ==========================
router.get("/verify", async (req, res) => {
    // Token kinyerése cookie-ból vagy headerből
    const access_token = req.cookies.access_token
        ? req.cookies.access_token
        : req.headers.authorization.split(" ")[1];
    const refresh_token = req.cookies.refresh_token
        ? req.cookies.refresh_token
        : req.headers.refresh_token;

    if (!access_token || !refresh_token)
        res.status(401).json({ message: "Nem található Acces / Refresh token" });
    else {
        verifyjwt(access_token, refresh_token).then((data) => {
            if (data == "OK") {
                res.status(200).json({ message: "OK" });
            } else {
                // Ha a token frissült, új cookie beállítása
                res.cookie("access_token", data, {
                    maxAge: 24 * 60 * 60 * 1000,
                    sameSite: "none",
                    secure: true,
                    httpOnly: false,
                    path: "/",
                });
                res.status(200).json({ message: "Refreshed" });
            }
        })
        .catch((err) => {
            // Érvénytelen token esetén cookie-k törlése
            res.clearCookie("access_token");
            res.clearCookie("refresh_token");
            res.status(403).json({ message: err });
        });
    }
});

router.get("/test-email", async (req, res) => {
    try {
        // Teszt email küldése
        await SendVerificationEmail(
            "your-test-email@example.com", 
            "TestUser", 
            "http://localhost:3300/test-verification"
        );
        res.send("Test email sent successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to send test email");
    }
});

router.get("/verify-email", async (req, res) => {
    try {
        const { token } = req.query;
        
        if (!token) {
            return res.render("verification-error", { message: "Érvénytelen vagy hiányzó megerősítő token" });
        }
        
        // Token ellenőrzése és felhasználói fiók aktiválása
        const verified = await verifyEmailToken(token);
        
        if (!verified) {
            return res.render("verification-error", { message: "Érvénytelen vagy lejárt megerősítő link" });
        }
        
        // Sikeres ellenőrzés esetén átirányítás
        return res.render("verification-success", { redirectUrl: "http://localhost:5173/login" });
    } catch (error) {
        console.error("Email verification error:", error);
        return res.render("verification-error", { message: "Hiba történt az e-mail megerősítése során" });
    }
});

router.get("/listAllTokens", async (req, res) => {
    try {
        // Összes token lekérdezése
        const tokens = await listAllTokens();
        res.status(200).json(tokens);
    } catch (error) {
        res.status(500).json({ message: "Failed to list all tokens" });
    }
});

// Fix the /me endpoint
router.get("/me", async (req, res) => {
  try {
    // Extract token from header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "Authorization header required" });
    }
    
    const token = authHeader.split(' ')[1];
    
    // Get JWT secret from database
    const data = await prisma.maindata.findFirst();
    if (!data) {
      return res.status(500).json({ message: "JWT configuration not found" });
    }
    
    try {
      // Verify token using the secret from database
      const decoded = jwt.verify(token, data.JWTSecret, {
        algorithm: data.JWTAlgorithm || 'HS256'
      });
      
      const userId = decoded.sub || decoded.id;
      
      // Find user with their group
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { group: true }
      });
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Return user data with group info
      res.status(200).json(user);
    } catch (jwtError) {
      console.error("JWT verification error:", jwtError);
      return res.status(401).json({ message: "Invalid token" });
    }
  } catch (error) {
    console.error("Auth error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get current user data with token verification
router.get("/user", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    const token = authHeader.split(' ')[1];
    
    // Get data source for JWT verification
    const data = await prisma.maindata.findFirst();
    
    if (!data || !data.JWTSecret) {
      return res.status(500).json({ message: "Server configuration error" });
    }
    
    // Verify token
    const decoded = jwt.verify(token, data.JWTSecret, {
      algorithm: data.JWTAlgorithm || 'HS256'
    });
    
    // Get user info using the correct relationship field names
    const userId = decoded.sub || decoded.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        bookRatings: true,
        movieRatings: true,
        tvShowRatings: true,
        group: true
      }
    });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Return user data
    res.status(200).json(user);
  } catch (error) {
    console.error("Auth error:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
});

// ========================== POST-ok ==========================
router.post("/register", async (req, res) => {
    const { username, email, password, name, groupName } = req.body;
    try {
        // Ellenőrző token generálása
        const verificationToken = crypto.randomBytes(32).toString('hex');
        
        // Felhasználó regisztrálása a verifikációs tokennel
        await register(username, email, password, name, groupName, verificationToken);
        
        // Verifikációs URL generálása
        const verificationUrl = `http://localhost:3300/auth/verify-email?token=${verificationToken}`;
        
        // Megerősítő email küldése
        await SendVerificationEmail(email, username, verificationUrl);
        
        res.status(201).json({ message: "Regisztráció sikeres. Kérjük, ellenőrizze e-mailjét a fiók aktiválásához." });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Hiba történt a regisztráció során" });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const tokens = await login(username, password);
        
        if (tokens.message) {
            return res.status(401).json({ message: tokens.message });
        }
        
        // Access token beállítása cookie-ként
        res.cookie("access_token", tokens.access_token, {
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production", 
            httpOnly: false,
            path: "/",
        });
        
        // Refresh token beállítása cookie-ként
        res.cookie("refresh_token", tokens.refresh_token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, 
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            httpOnly: false,
            path: "/",
        });
        
        res.status(200).json(tokens);
    } catch (error) {
        if (error.message === "EMAIL_NOT_VERIFIED") {
            res.status(403).json({ message: "Kérjük, erősítse meg e-mail címét a bejelentkezés előtt" });
        } else {
            res.status(401).json({ message: "Helytelen felhasználónév vagy jelszó" });
        }
    }
});

router.post("/passChange", async (req, res) => {
    const { oldpass, newpass, id } = req.body;
    
    try {
        const result = await passChange(oldpass, newpass, id);
        
        if (result === false) {
            return res.status(400).json({ message: "Az új jelszó nem egyezhet meg a régivel" });
        }
        
        res.status(200).json({ message: "Jelszó sikeresen megváltoztatva" });
    } catch (error) {
        console.error("Password change error:", error);
        res.status(500).json({ message: "Hiba történt a jelszó módosítása során" });
    }
});

router.put("/profile", uploadAvatar.single('avatar'), async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Authorization header required" });
        }
        
        const token = authHeader.split(' ')[1];
        
        const data = await prisma.maindata.findFirst();
        if (!data) {
            return res.status(500).json({ message: "Server configuration error" });
        }
        
        const decoded = jwt.verify(token, data.JWTSecret, {
            algorithm: data.JWTAlgorithm || 'HS256'
        });
        
        const userId = decoded.sub || decoded.id;
        
        const { name, email, password } = req.body;
        
        const updateData = {};
        
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        
        if (req.file) {
            updateData.avatar = `/uploads/profile/${req.file.filename}`;
        }
        
        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }
        
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: updateData
        });
        
        res.status(200).json({ 
            message: "Profile updated successfully",
            user: {
                id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                avatar: updatedUser.avatar
            }
        });
    } catch (error) {
        console.error("Error updating profile:", error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Invalid token" });
        }
        res.status(500).json({ message: "Failed to update profile" });
    }
});

export { router as authController };
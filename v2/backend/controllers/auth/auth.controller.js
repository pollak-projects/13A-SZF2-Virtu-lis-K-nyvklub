// ========================== Core Modules ==========================
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

// ========================== Router Setup ==========================
const router = express.Router();

// ========================== GET Routes ==========================
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

// ========================== POST Routes ==========================
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
        // Jelszó módosítása
        await passChange(oldpass, newpass, id);
        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to change password" });
    }
});

router.post("/sendEmail", async (req, res) => {
    const { useremail } = req.body;
    try {
        // Email küldése a felhasználónak
        await SendEmail(useremail);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send email" });
    }
});

router.post("/logout", (req, res) => {
    // Összes hitelesítéssel kapcsolatos cookie törlése
    res.clearCookie("access_token", {
        path: "/",
    });
    res.clearCookie("refresh_token", {
        path: "/",
    });
    res.clearCookie("sid", {
        path: "/",
    });
    res.status(200).json({ message: "Logget out" });
});

// ========================== PUT Routes ==========================
router.put("/updateMainData", async (req, res) => {
    const { JWTAlgorithm, JWTExpiration, JWTSecret, RefreshTokenAlgorithm, RefreshTokenSecret, RefreshTokenExpiration } = req.body;
    try {
        // JWT konfigurációs adatok frissítése
        await updateMainData(JWTAlgorithm, JWTExpiration, JWTSecret, RefreshTokenAlgorithm, RefreshTokenSecret, RefreshTokenExpiration);
        res.status(200).json({ message: "Main data updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to update main data" });
    }
});

export { router as authController };
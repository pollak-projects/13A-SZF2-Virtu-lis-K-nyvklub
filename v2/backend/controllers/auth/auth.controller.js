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

const router = express.Router();

router.get("/verify", async (req, res) => {
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
                res.cookie("access_token", data, {
                    maxAge: 24 * 60 * 60 * 1000,
                    sameSite: "none",
                    secure: true,
                    httpOnly: false,
                    domain: "pollakkonyklub.info",
                    path: "/",
                });
                res.status(200).json({ message: "Refreshed" });
            }
        })
        .catch((err) => {
            res.clearCookie("access_token");
            res.clearCookie("refresh_token");
            res.status(403).json({ message: err });
        });
    }
});

router.post("/register", async (req, res) => {
    const { username, email, password, name, groupName } = req.body;
    try {
        // Generate verification token
        const verificationToken = crypto.randomBytes(32).toString('hex');
        
        // Register user with verification token
        await register(username, email, password, name, groupName, verificationToken);
        
        // Generate verification URL
        const verificationUrl = `http://localhost:3300/auth/verify-email?token=${verificationToken}`;
        
        // Send verification email
        await SendVerificationEmail(email, username, verificationUrl);
        
        res.status(201).json({ message: "Regisztráció sikeres. Kérjük, ellenőrizze e-mailjét a fiók aktiválásához." });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Hiba történt a regisztráció során" });
    }
});

router.get("/test-email", async (req, res) => {
    try {
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

// New endpoint for email verification
router.get("/verify-email", async (req, res) => {
    try {
        const { token } = req.query;
        
        if (!token) {
            return res.render("verification-error", { message: "Érvénytelen vagy hiányzó megerősítő token" });
        }
        
        // Verify the token and activate user account
        const verified = await verifyEmailToken(token);
        
        if (!verified) {
            return res.render("verification-error", { message: "Érvénytelen vagy lejárt megerősítő link" });
        }
        
        // Render success template
        return res.render("verification-success", { redirectUrl: "http://localhost:5173/login" });
    } catch (error) {
        console.error("Email verification error:", error);
        return res.render("verification-error", { message: "Hiba történt az e-mail megerősítése során" });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const tokens = await login(username, password);
        res.cookie("access_token", tokens.token, {
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: "none",
            secure: true,
            httpOnly: false,
            domain: "pollakkonyklub.info",
            path: "/",
        });
        
        res.cookie("refresh_token", tokens.refresh_token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "none",
            secure: true,
            httpOnly: false,
            domain: "pollakkonyklub.info",
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

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const tokens = await login(username, password);
        res.status(200).json(tokens);
    } catch (error) {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

router.put("/updateMainData", async (req, res) => {
    const { JWTAlgorithm, JWTExpiration, JWTSecret, RefreshTokenAlgorithm, RefreshTokenSecret, RefreshTokenExpiration } = req.body;
    try {
        await updateMainData(JWTAlgorithm, JWTExpiration, JWTSecret, RefreshTokenAlgorithm, RefreshTokenSecret, RefreshTokenExpiration);
        res.status(200).json({ message: "Main data updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to update main data" });
    }
});

router.get("/listAllTokens", async (req, res) => {
    try {
        const tokens = await listAllTokens();
        res.status(200).json(tokens);
    } catch (error) {
        res.status(500).json({ message: "Failed to list all tokens" });
    }
});

router.post("/passChange", async (req, res) => {
    const { oldpass, newpass, id } = req.body;
    try {
        await passChange(oldpass, newpass, id);
        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to change password" });
    }
});

router.post("/sendEmail", async (req, res) => {
    const { useremail } = req.body;
    try {
        await SendEmail(useremail);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send email" });
    }
});

router.post("/logout", (req, res) => {
    res.clearCookie("access_token", {
        domain: "pollakkonyvklub.info",
        path: "/",
    });
    res.clearCookie("refresh_token", {
        domain: "pollakkonyvklub.info",
        path: "/",
    });
    res.clearCookie("sid", {
        domain: "pollakkonyvklub.info",
        path: "/",
    });
    res.status(200).json({ message: "Logget out" });
})

export { router as authController };
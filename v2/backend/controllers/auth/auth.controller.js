import express from "express";
import {
    verifyjwt,
    updateMainData,
    listAllTokens,
    passwordChange,
    login,
    register
} from "../../services/auth/auth.service.js";
import { SendEmail } from "../../services/auth/emailsender.js";

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
        await register(username, email, password, name, groupName);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to register user" });
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

router.post("/passwordChange", async (req, res) => {
    const { oldpass, newpass, id } = req.body;
    try {
        await passwordChange(oldpass, newpass, id);
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
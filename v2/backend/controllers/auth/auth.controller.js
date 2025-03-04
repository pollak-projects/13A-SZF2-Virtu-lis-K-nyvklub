import express from "express";
import {
    verifyjwt,
    updateMainData,
    listAllTokens,
    passwordChange,
    login,
    register
} from "../services/auth.service.js";
 import {SendEmail} from "../../services/auth/emailsender.js"
import { ref } from "vue";

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
            }
            else {
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
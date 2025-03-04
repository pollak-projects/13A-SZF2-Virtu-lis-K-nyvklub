import express from 'express';
import {
    forgotPassword,
    userUpdate,
    userDelete,
    GetAllUsers,
    Groups,
} from "../../services/auth/user.service.js";

const router = express.Router();

router.get("/getAll", async (req, res) => {
    try {
        const users = await GetAllUsers();
        res.status(201).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
});


// PASSWORD RESET
router.get("/forgot-password", async (req, res) => {
    const { id } = req.body;
    try {
        const user = await forgotPassword(id);
        res.status(200).json(user);
    }   catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// EMAIL, NAME CHANGE
router.put("/update", async (req, res) => {
    const { id, username, email, groupId } = req.body;
    try {
        const user = await userUpdate(id, username, email, groupId);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ACCOUNT DELETE
router.delete("delete", async (req, res) => {
    const { id } = req.body;
    try {
        const user = await userDelete(id);
        res.status(200).json(user);
    }   catch (error) {
        res.status(400).json(error.message);
    }
});

router.get("/getGroups", async (req, res) => {
    try {
        const groups = await Groups();
        res.status(200).json(groups);
    }   catch (error) {
        res.status(400).json(error,message);
    }
});


export { router as userController };
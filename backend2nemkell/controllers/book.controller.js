import express from "express";
import { listAllBooks } from "../services/actor.service.js";
const router = express.Router();

router.get("/getAll", async (req, res) => {
  const data = await listAllBooks();
  res.status(200).json(data);
});
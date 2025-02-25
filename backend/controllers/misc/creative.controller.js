import express from "express";
import {
  getAllCreatives,
  getCreativeById,
  createCreative,
  updateCreative,
  deleteCreative,
} from "../../services/misc/creative.service.js";

const creativeRouter = express.Router();

creativeRouter.get("/creatives", async (req, res) => {
  try {
    const creatives = await getAllCreatives();
    res.status(200).json(creatives);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch creatives" });
  }
});

creativeRouter.get("/creatives/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const creative = await getCreativeById(id);
    if (creative) {
      res.status(200).json(creative);
    } else {
      res.status(404).json({ message: "Creative not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch creative" });
  }
});

creativeRouter.post("/creatives", async (req, res) => {
  try {
    const data = req.body;
    const newCreative = await createCreative(data);
    res.status(201).json(newCreative);
  } catch (error) {
    res.status(500).json({ message: "Failed to create creative" });
  }
});

creativeRouter.put("/creatives/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedCreative = await updateCreative(id, data);
    res.status(200).json(updatedCreative);
  } catch (error) {
    res.status(500).json({ message: "Failed to update creative" });
  }
});

creativeRouter.delete("/creatives/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCreative(id);
    res.status(200).json({ message: "Creative deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete creative" });
  }
});

export default creativeRouter;

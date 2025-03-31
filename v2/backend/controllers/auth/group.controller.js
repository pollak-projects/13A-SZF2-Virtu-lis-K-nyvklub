// ========================== Core Modules ==========================
import express from 'express';
import { listAllGroup, addGroup, deleteGroup, updateGroup } from '../../services/auth/group.service.js';

// ========================== Router Setup ==========================
const router = express.Router();

// ========================== GET Routes ==========================
router.get("/getAll", async (req, res) => {
    try {
        // Összes csoport lekérdezése az adatbázisból
        const data = await listAllGroup();
        res.status(200).json(data);
    } catch (error) {
        console.error("Hiba a csoportok lekérdezésekor:", error);
        res.status(500).json({ message: "Nem sikerült lekérdezni a csoportokat" });
    }
});

// ========================== POST Routes ==========================
router.post("/add", async (req, res) => {
    try {
        const { name } = req.body;
        
        // Új csoport hozzáadása, ha már létezik, akkor hibát dob
        await addGroup(name);
        res.status(201).json({ message: "Csoport sikeresen létrehozva" });
    } catch (error) {
        // Duplikált adat esetén 409-es hibakód
        res.status(409).json({ message: "Duplicated data" });
    }
});

// ========================== DELETE Routes ==========================
router.delete("/delete", async (req, res) => {
    try {
        const { name } = req.body;
        
        // Csoport törlése név alapján
        await deleteGroup(name);
        res.status(204).json({ message: "Group successfully deleted" });
    } catch (error) {
        console.error("Hiba a csoport törlésekor:", error);
        res.status(500).json({ message: "Nem sikerült törölni a csoportot" });
    }
});

// ========================== PUT Routes ==========================
router.put("/update", async (req, res) => {
    try {
        const { name, newname } = req.body;
        
        // Csoport nevének frissítése új névre
        await updateGroup(name, newname);
        res.status(200).json({ message: "Group name successfully updated" });
    } catch (error) {
        console.error("Hiba a csoport frissítésekor:", error);
        res.status(500).json({ message: "Nem sikerült frissíteni a csoport nevét" });
    }
});

export { router as groupController };
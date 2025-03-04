import express from 'express';
import { listAllGroup, addGroup, deleteGroup, updateGroup} from '../../services/auth/group.service.js';


const router = express.Router();

// LIST THE EXISTING GROUPS
router.get("/getAll", async (req, res) => {
    const data = await listAllGroup();
    res.status(200).json(data);    
})


// ADD NEW GROUP
router.post("/add", async (req, res) => {
    const { name } = req.body;

    await addGroup(name).then(() => {
        res.status(409).json({
            message: "Duplicated data"
        })
    })
})

//DELETE GROUP
router.delete("/delete", async (req, res) => {
    const { name } = req.body;
    
    await deleteGroup(name);
    res.status(204).json({
        message: "Group successfully deleted"
    })
})

//UPDATE GROUP NAME
router.put("update", async (req, res) => {
    const { name, newname } = req.body;
    
    await updateGroup(name, newname);
    res.status(200).json({
        message: "Group name successfully updated"
    })
})

export { router as groupController };
import express from "express";
import {listAllActors }from "../services/actor.service.js";
const router = express.Router();

router.get("/actors", async (req, res) => {
  const data = await listAllActors();
  res.status(200).json(data);
});

export async function add(name, picture) {
  await prisma.actor
    .create({
      data: {
        name: name,
        picture: picture
      },
    })
    .catch((err) => {
      console.error(err);
      throw new Error();
    });
}
export { router as actorController };

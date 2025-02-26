import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();

const prisma = new PrismaClient();

export async function listAllActors() {
    const data = await prisma.actor.findMany();

    return data;
};


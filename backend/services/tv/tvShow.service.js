import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllTVShows() {
  return await prisma.tvShow.findMany();
}

export async function getTVShowById(id) {
  return await prisma.tvShow.findUnique({
    where: { id: parseInt(id) },
  });
}

export async function getTVShowsByCreatorId(creatorId) {
  return await prisma.tvShow.findMany({
    where: { creatorId: parseInt(creatorId) },
    include: { tvShow: true },
  });
}

export async function createTVShow(data) {
  return await prisma.tvShow.create({
    data,
  });
}

export async function updateTVShow(id, data) {
  return await prisma.tvShow.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteTVShow(id) {
  return await prisma.tvShow.delete({
    where: { id: parseInt(id) },
  });
}

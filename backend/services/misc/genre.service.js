import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllGenres() {
  return await prisma.genre.findMany();
}

export async function getGenreById(id) {
  return await prisma.genre.findUnique({
    where: { id: parseInt(id) },
  });
}

export async function createGenre(data) {
  return await prisma.genre.create({
    data,
  });
}

export async function updateGenre(id, data) {
  return await prisma.genre.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function deleteGenre(id) {
  return await prisma.genre.delete({
    where: { id: parseInt(id) },
  });
}

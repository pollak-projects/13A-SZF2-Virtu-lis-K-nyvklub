import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllBookGenres() {
  return await prisma.bookGenre.findMany();
}

export async function getBookGenreById(bookId, genreId) {
  return await prisma.bookGenre.findUnique({
    where: { book_Id: parseInt(bookId), genre_Id: parseInt(genreId) },
  });
}

export async function createBookGenre(data) {
  return await prisma.bookGenre.create({
    data,
  });
}

export async function updateBookGenre(bookId, genreId, data) {
  return await prisma.bookGenre.update({
    where: { book_Id: parseInt(bookId), genre_Id: parseInt(genreId) },
    data,
  });
}

export async function deleteBookGenre(bookId, genreId) {
  return await prisma.bookGenre.delete({
    where: { book_Id: parseInt(bookId), genre_Id: parseInt(genreId) },
  });
}

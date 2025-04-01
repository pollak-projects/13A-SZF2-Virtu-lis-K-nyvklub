// ========================== Core Modules ==========================
import { PrismaClient } from "@prisma/client";
import { encrypt } from "../../lib/hash.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// ========================== Felhasználó Lekérdezések ==========================
export async function GetAllUsers() {
    const users = await prisma.user.findMany();
    return users;
}

export async function GetAllUsersById(id) {
    const data = await prisma.user.findMany({
        where: {
            id: id,
        },
    });
    return data;
}

// ========================== Jelszó Kezelés ==========================
export async function forgotPassword(id) {
    // Véletlenszerű 8 karakteres jelszó generálása
    const newPass = Math.random().toString(36).slice(-8);

    await prisma.user.update({
        where: {
            email: id,
        },
        data: {
            password: newPass,
        },
    });

    return newPass;
}

// ========================== Felhasználó Módosítás ==========================
export async function userUpdate(id, name, email, groupId) {
    await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            username: name,
            email: email,
            groupName: groupId,
        },
    });
}

export async function userDelete(id) {
    await prisma.user.delete({
        where: {
            id: id,
        },
    });
}

// ========================== Csoport Kezelés ==========================
export async function Groups(){
    const groups = await prisma.user.findMany();
    
    return groups;
}
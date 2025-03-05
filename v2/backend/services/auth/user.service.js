import { PrismaClient } from "@prisma/client";
import { encrypt } from "../../lib/hash.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function GetAllUsers() {
    const users = await prisma.user.findMany();

    return users;
}

export async function forgotPassword(id) {
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

export async function Groups(){
    const groups = await prisma.user.findMany();
    
    return groups;
}

export async function GetAllUsersById(id) {
    const data = await prisma.user.findMany({
        where: {
            id: id,
        },
    });
    return data;
}
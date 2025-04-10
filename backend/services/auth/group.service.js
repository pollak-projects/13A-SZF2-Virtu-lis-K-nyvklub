import { PrismaClient } from "@prisma/client";

import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function listAllGroup() {
    const data = await prisma.groups.findMany({
        include: {
            users: true
        }
    });

    return data;
}

export async function addGroup(name) {
    await prisma.groups.create({
        data: {
            name: name,
        }
    }).catch((err) => {
        console.error(err)
        throw new Error();
    })
}

export async function updateGroup(name, newname) {
    await prisma.groups.update({
        where: {
            name: name
        },
        data: {
            name: newname
        }
    })
}

export async function deleteGroup(name, newname) {
    await prisma.groups.delete({
        where: {
            name: name
        },
        data: {
            name: newname
        }
    })
}
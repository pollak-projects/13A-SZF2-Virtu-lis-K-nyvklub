import { PrismaClient } from "@prisma/client";
import crypto, { verify } from "crypto";
import { encrypt } from "../../lib/hash.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

//---------------------------------------------- TOKEN MANAGEMENT ----------------------------------------------\\

export async function verifyjwt(access_token, refresh_token) {
    const data = await prisma.maindata.findFirst();

    return new Promise((resolve, reject) => {
        jwt.verify(
            access_token,
            data.JWTSecret,
            {
                algorithm: data.JWTAlgorithm,
            },
            async (err, decoded) => {
                console.error(err);

                if (decoded) resolve("OK");

                if (err && err.message === "jwt expired") {
                    const ref = await verifyRefreshToken(refresh_token);
                    const tokenWithIgnore = await verifyWithIgnoreExpiration(
                        access_token
                    );

                    console.log(tokenWithIgnore);
                    console.log(ref);

                    if (ref && tokenWithIgnore && ref.sub === tokenWithIgnore.sub) {
                        resolve(
                            createNewToken(
                                tokenWithIgnore.sub,
                                tokenWithIgnore.name,
                                tokenWithIgnore.email,
                                tokenWithIgnore.userGroup
                            )
                        );
                    } else {
                        reject("Error while refreshing the token");
                    }
                } else if (err) reject("Error while refreshing the token");
            }
        );
    });
}

async function verifyRefreshToken(refresh_token) {
    const data = await prisma.maindata.findFirst();
    let ret;
    try {
        ret = jwt.verify(refresh_token, data.RefreshTokenSecret, {
            algorithm: data.RefreshTokenAlgorithm,
        });
    }  catch (err) {
        ret = null;
    }

    return ret;
}

async function verifyWithIgnoreExpiration(token) {
    const data = await prisma.maindata.findFirst();
    let ret;
    try {
        ret = jwt.verify(token, data.JWTSecret, {
            algorithm: data.JWTAlgorithm,
            ignoreExpiration: true,
        });
    } catch (err) {
        ret = null;
    }

    return ret;
}

async function createNewToken(id, name, email, groupName) {
    const data = await prisma.maindata.findFirst();
    
    console.log("Creating token with: ", id, name, email, groupName);

    return jwt.sign(
        {
            sub: id,
            name: name,
            email: email,
            userGroup: groupName,
        },
        data.JWTSecret,
        {
            expiresIn: data.JWTExpiration,
            algorithm: data.JWTAlgorithm,
        }
    );
}

export async function createForgotToken(userId) {
    const token = crypto.randomBytes(50).toString("hex");
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);

    try {
        await prisma.user.update({
            where: { id: userId },
            data: {
                ForgotToken: token,
                ForgotTokenExpiresAt: expiresAt,
            },
        });
        return token;
    } catch (err) {
        return err;
    }
}

export async function updateMainData(
    JWTAlgorithm,
    JWTExpiration,
    JWTSecret,
    RefreshTokenAlgorithm,
    RefreshTokenSecret,
    RefreshTokenExpiration
) {
    try {
        await prisma.maindata.update({
            where: {
                id: "5a97ea0a-a19f-11ef-95f3-0a0027000007"
            },
            data: {
                JWTAlgorithm: JWTAlgorithm,
                JWTExpiration: Number(JWTExpiration),
                JWTSecret: JWTSecret,
                RefreshTokenAlgorithm: RefreshTokenAlgorithm,
                RefreshTokenExpiration: Number(RefreshTokenExpiration),
                RefreshTokenSecret: RefreshTokenSecret,
            },
        });
        return "Az adat sikeresen frissítve";
    }   catch (err) {
        return err;
    }
}

export async function listAllTokens() {
    const data = await prisma.maindata.findUnique({
        where: {
            id: "5a97ea0a-a19f-11ef-95f3-0a0027000007",
        },
    });

    return data;
}

//---------------------------------------------- USER REGISTRATION ----------------------------------------------\\

export async function register(username, email, password, name, groupName, verificationToken) {
    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [
                { username: username },
                { email: email }
            ]
        }
    });

    if (existingUser) {
        throw new Error("Felhasználó vagy email cím már foglalt");
    }
    
    const passEncrypted = await encrypt(password);
    
    try {
        let group = await prisma.group.findFirst({
            where: { 
                name: groupName || "USER" 
            }
        });
        if (!group) {
            group = await prisma.group.findFirst({
                where: { name: "USER" }
            });
            if (!group) {
                group = await prisma.group.create({
                    data: {
                        name: "USER",
                        read: true,
                        write: false,
                        update: false,
                        delete: false
                    }
                });
            }
        }
        
        const profilePics = ['pfp1.jpg', 'pfp2.jpg', 'pfp3.jpg'];
        const randomProfilePic = `/uploads/profile/${profilePics[Math.floor(Math.random() * profilePics.length)]}`;
        
        const user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: passEncrypted,
                name: name || username,
                verified: false,
                verificationToken: verificationToken,
                avatar: randomProfilePic,
                group: {
                    connect: {
                        id: group.id
                    }
                }
            },
        });
        
        return user;
    } catch (error) {
        console.error("Registration error:", error);
        throw new Error("Hiba történt a regisztráció során");
    }
}

export async function verifyEmailToken(token) {
    const user = await prisma.user.findFirst({
        where: { verificationToken: token }
    });

    if (!user) {
        return false;
    }

    try {
        await prisma.user.update({
            where: { id: user.id },
            data: {
                verified: true,
                verificationToken: null
            }
        });
        return true;
    } catch (error) {
        console.error("Email verification error:", error);
        return false;
    }
}

//---------------------------------------------- USER AUTHENTICATION ----------------------------------------------\\

export async function login(username, password) {
    const user = await prisma.user.findUnique({
        where: {
            username: username,
        },
    }).catch((error) => {
        return error.message;
    });

    if (!user) {
        return { message: "Hibás felhasználónév vagy jelszó" };
    }

    if (!user.verified) {
        return { message: "EMAIL_NOT_VERIFIED" };
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return { message: "Hibás felhasználónév vagy jelszó" };
    }

    const data = await prisma.maindata.findFirst();

    if(!data) {
        return { message: "Hiba történt a bejelentkezéskor" };
    }

    const token = jwt.sign({
        sub: user.id,
        name: user.name,
        email: user.email,
        userGroup: user.groupName,
    },
    data.JWTSecret,
    {
        expiresIn: data.JWTExpiration,
        algorithm: data.JWTAlgorithm,
    });

    const refreshToken = jwt.sign(
        {
            sub: user.id,
        },
        data.RefreshTokenSecret,
        {
            expiresIn: data.RefreshTokenExpiration,
            algorithm: data.RefreshTokenAlgorithm,
        }
    );

    return {
        access_token: token,
        refresh_token: refreshToken,
        user_id: user.id,
    };
}

//---------------------------------------------- USER MANAGEMENT ----------------------------------------------\\

export async function passChange(oldpass, newpass, id) {
    if (oldpass !== newpass) {
        const data = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                password: await encrypt(newpass), 
            },
        });
        return data;
    } else {
        return false;
    }
}
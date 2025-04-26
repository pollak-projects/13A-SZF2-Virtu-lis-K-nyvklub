// ========================== Core Modules ==========================
import {
  GetAllUsers,
  GetAllUsersById,
  forgotPassword,
  userUpdate,
  userDelete,
  Groups
} from "./user.service.js";
import { PrismaClient } from "@prisma/client";
import { encrypt } from "../../lib/hash.js";

const prisma = new PrismaClient();

// ========================== Test Setup ==========================
let createdUserIds = [];

afterEach(async () => {
  for (const userId of createdUserIds) {
    try {
      await prisma.user.delete({
        where: { id: userId }
      });
    } catch (error) {
      console.log(`Could not delete test user ${userId}`);
    }
  }

  createdUserIds = [];
});

// ========================== Test Cases ==========================

describe("GetAllUsersById", () => {
  it("should return a user by ID", async () => {
    // Create a test user first
    const testUser = await prisma.user.create({
      data: {
        username: "testuser",
        email: "test@example.com",
        password: await encrypt("password123"),
        name: "Test User",
        verified: true,
        group: {
          connect: {
            name: "USER"
          }
        }
      }
    });
    createdUserIds.push(testUser.id);

    const foundUsers = await GetAllUsersById(testUser.id);
    expect(foundUsers.length).toBeGreaterThan(0);
    expect(foundUsers[0].id).toBe(testUser.id);
  });
});

describe("forgotPassword", () => {
  it("should generate a new password for a user", async () => {
    // Create a test user first
    const testUser = await prisma.user.create({
      data: {
        username: "passwordreset",
        email: "reset@example.com",
        password: await encrypt("originalpass"),
        name: "Reset User",
        verified: true,
        group: {
          connect: {
            name: "USER"
          }
        }
      }
    });
    createdUserIds.push(testUser.id);

    const newPassword = await forgotPassword(testUser.email);
    expect(newPassword).toBeDefined();
    expect(typeof newPassword).toBe("string");
    expect(newPassword.length).toBeGreaterThan(0);

    // Check that the password has actually changed
    const updatedUser = await prisma.user.findUnique({
      where: { id: testUser.id }
    });
    expect(updatedUser.password).not.toBe(await encrypt("originalpass"));
  });
});


describe("userDelete", () => {
  it("should delete a user", async () => {
    const timestamp = Date.now();
    const testUser = await prisma.user.create({
      data: {
        username: `deleteuser_${timestamp}`,
        email: `delete_${timestamp}@example.com`,
        password: await encrypt("password123"),
        name: "Delete User",
        verified: true,
        group: {
          connect: {
            name: "USER"
          }
        }
      }
    });
    
    await userDelete(testUser.id);
    
    const deletedUser = await prisma.user.findUnique({
      where: { id: testUser.id }
    });
    
    expect(deletedUser).toBeNull();
  });
});
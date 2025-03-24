/*
  Warnings:

  - A unique constraint covering the columns `[ForgotToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `book` ADD COLUMN `isbn` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `ForgotToken` VARCHAR(100) NULL,
    ADD COLUMN `ForgotTokenExpiresAt` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `maindata` (
    `id` VARCHAR(191) NOT NULL,
    `JWTSecret` VARCHAR(191) NOT NULL,
    `JWTExpiration` INTEGER NOT NULL,
    `JWTAlgorithm` VARCHAR(191) NOT NULL,
    `RefreshTokenSecret` VARCHAR(191) NOT NULL,
    `RefreshTokenExpiration` INTEGER NOT NULL,
    `RefreshTokenAlgorithm` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_ForgotToken_key` ON `User`(`ForgotToken`);

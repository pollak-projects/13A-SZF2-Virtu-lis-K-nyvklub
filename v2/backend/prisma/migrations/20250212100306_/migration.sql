/*
  Warnings:

  - Added the required column `author_book` to the `Creative` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creator_show` to the `Creative` table without a default value. This is not possible if the table is not empty.
  - Added the required column `director_movie` to the `Creative` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `creative` ADD COLUMN `author_book` BOOLEAN NOT NULL,
    ADD COLUMN `creator_show` BOOLEAN NOT NULL,
    ADD COLUMN `director_movie` BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE `Director` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

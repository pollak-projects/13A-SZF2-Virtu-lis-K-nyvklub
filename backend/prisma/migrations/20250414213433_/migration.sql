-- CreateTable
CREATE TABLE `Actor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `picture` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `author_Id` INTEGER NOT NULL,
    `releaseYear` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `coverArt` VARCHAR(191) NULL,
    `isbn` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieActor` (
    `movie_Id` INTEGER NOT NULL,
    `actor_Id` INTEGER NOT NULL,

    PRIMARY KEY (`movie_Id`, `actor_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieGenre` (
    `movie_Id` INTEGER NOT NULL,
    `genre_Id` INTEGER NOT NULL,

    PRIMARY KEY (`movie_Id`, `genre_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieCharacter` (
    `character_Id` INTEGER NOT NULL,
    `movie_Id` INTEGER NOT NULL,

    PRIMARY KEY (`character_Id`, `movie_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserMovieRating` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `movieId` INTEGER NOT NULL,
    `rating` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `favorite` BOOLEAN NOT NULL DEFAULT false,
    `content` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `UserMovieRating_userId_movieId_key`(`userId`, `movieId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TvShowActor` (
    `tvShow_Id` INTEGER NOT NULL,
    `actor_Id` INTEGER NOT NULL,

    PRIMARY KEY (`tvShow_Id`, `actor_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TvGenre` (
    `tvShow_Id` INTEGER NOT NULL,
    `genre_Id` INTEGER NOT NULL,

    PRIMARY KEY (`tvShow_Id`, `genre_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TvCharacter` (
    `tvShow_Id` INTEGER NOT NULL,
    `character_Id` INTEGER NOT NULL,

    PRIMARY KEY (`tvShow_Id`, `character_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserTVShowRating` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `tvShowId` INTEGER NOT NULL,
    `rating` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `favorite` BOOLEAN NOT NULL DEFAULT false,
    `content` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `UserTVShowRating_userId_tvShowId_key`(`userId`, `tvShowId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BookGenre` (
    `book_Id` INTEGER NOT NULL,
    `genre_Id` INTEGER NOT NULL,

    PRIMARY KEY (`book_Id`, `genre_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BookCharacter` (
    `book_Id` INTEGER NOT NULL,
    `character_Id` INTEGER NOT NULL,

    PRIMARY KEY (`book_Id`, `character_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserBookRating` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `bookId` INTEGER NOT NULL,
    `rating` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `favorite` BOOLEAN NOT NULL DEFAULT false,
    `content` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `UserBookRating_userId_bookId_key`(`userId`, `bookId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterActor` (
    `character_Id` INTEGER NOT NULL,
    `actor_Id` INTEGER NOT NULL,

    PRIMARY KEY (`character_Id`, `actor_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Creative` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `picture` VARCHAR(191) NULL,
    `author_book` BOOLEAN NOT NULL,
    `director_movie` BOOLEAN NOT NULL,
    `creator_show` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `genre` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `read` BOOLEAN NOT NULL DEFAULT false,
    `write` BOOLEAN NOT NULL DEFAULT false,
    `update` BOOLEAN NOT NULL DEFAULT false,
    `delete` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Group_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `director_Id` INTEGER NOT NULL,
    `releaseYear` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `coverArt` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TvEpisode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `episodeNumber` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `releaseDate` DATETIME(3) NOT NULL,
    `tvSeason_Id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TvSeason` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `seasonNumber` INTEGER NOT NULL,
    `releaseYear` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `tvShow_Id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TvShow` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `creator_Id` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `seasons` INTEGER NOT NULL,
    `coverArt` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `groupId` INTEGER NOT NULL,
    `ForgotToken` VARCHAR(100) NULL,
    `ForgotTokenExpiresAt` DATETIME(3) NULL,
    `verified` BOOLEAN NOT NULL DEFAULT false,
    `verificationToken` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `lastLogin` DATETIME(3) NULL,
    `name` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_ForgotToken_key`(`ForgotToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_author_Id_fkey` FOREIGN KEY (`author_Id`) REFERENCES `Creative`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieActor` ADD CONSTRAINT `MovieActor_movie_Id_fkey` FOREIGN KEY (`movie_Id`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieActor` ADD CONSTRAINT `MovieActor_actor_Id_fkey` FOREIGN KEY (`actor_Id`) REFERENCES `Actor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieGenre` ADD CONSTRAINT `MovieGenre_movie_Id_fkey` FOREIGN KEY (`movie_Id`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieGenre` ADD CONSTRAINT `MovieGenre_genre_Id_fkey` FOREIGN KEY (`genre_Id`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieCharacter` ADD CONSTRAINT `MovieCharacter_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieCharacter` ADD CONSTRAINT `MovieCharacter_movie_Id_fkey` FOREIGN KEY (`movie_Id`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserMovieRating` ADD CONSTRAINT `UserMovieRating_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserMovieRating` ADD CONSTRAINT `UserMovieRating_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `Movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TvShowActor` ADD CONSTRAINT `TvShowActor_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `TvShow`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TvShowActor` ADD CONSTRAINT `TvShowActor_actor_Id_fkey` FOREIGN KEY (`actor_Id`) REFERENCES `Actor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TvGenre` ADD CONSTRAINT `TvGenre_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `TvShow`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TvGenre` ADD CONSTRAINT `TvGenre_genre_Id_fkey` FOREIGN KEY (`genre_Id`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TvCharacter` ADD CONSTRAINT `TvCharacter_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `TvShow`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TvCharacter` ADD CONSTRAINT `TvCharacter_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTVShowRating` ADD CONSTRAINT `UserTVShowRating_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTVShowRating` ADD CONSTRAINT `UserTVShowRating_tvShowId_fkey` FOREIGN KEY (`tvShowId`) REFERENCES `TvShow`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookGenre` ADD CONSTRAINT `BookGenre_book_Id_fkey` FOREIGN KEY (`book_Id`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookGenre` ADD CONSTRAINT `BookGenre_genre_Id_fkey` FOREIGN KEY (`genre_Id`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookCharacter` ADD CONSTRAINT `BookCharacter_book_Id_fkey` FOREIGN KEY (`book_Id`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookCharacter` ADD CONSTRAINT `BookCharacter_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserBookRating` ADD CONSTRAINT `UserBookRating_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserBookRating` ADD CONSTRAINT `UserBookRating_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterActor` ADD CONSTRAINT `CharacterActor_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterActor` ADD CONSTRAINT `CharacterActor_actor_Id_fkey` FOREIGN KEY (`actor_Id`) REFERENCES `Actor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_director_Id_fkey` FOREIGN KEY (`director_Id`) REFERENCES `Creative`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TvEpisode` ADD CONSTRAINT `TvEpisode_tvSeason_Id_fkey` FOREIGN KEY (`tvSeason_Id`) REFERENCES `TvSeason`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TvSeason` ADD CONSTRAINT `TvSeason_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `TvShow`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TvShow` ADD CONSTRAINT `TvShow_creator_Id_fkey` FOREIGN KEY (`creator_Id`) REFERENCES `Creative`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

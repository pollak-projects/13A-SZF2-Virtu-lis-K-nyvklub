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
    `description` VARCHAR(191) NOT NULL,
    `coverArt` VARCHAR(191) NULL,

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
CREATE TABLE `Director` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `genre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `director_Id` INTEGER NOT NULL,
    `releaseYear` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
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
    `description` VARCHAR(191) NOT NULL,
    `seasons` INTEGER NOT NULL,
    `coverArt` VARCHAR(191) NULL,

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
ALTER TABLE `BookGenre` ADD CONSTRAINT `BookGenre_book_Id_fkey` FOREIGN KEY (`book_Id`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookGenre` ADD CONSTRAINT `BookGenre_genre_Id_fkey` FOREIGN KEY (`genre_Id`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookCharacter` ADD CONSTRAINT `BookCharacter_book_Id_fkey` FOREIGN KEY (`book_Id`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookCharacter` ADD CONSTRAINT `BookCharacter_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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

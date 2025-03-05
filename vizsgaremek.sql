/*
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Feb 11. 09:24
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `vizsgaremek`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `actor`
--

CREATE TABLE `actor` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `picture` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `actor`
--

INSERT INTO `actor` (`id`, `name`, `picture`) VALUES
(1, 'Bryan Cranston', NULL),
(2, 'Aaron Paul', NULL),
(3, 'Emilia Clarke', NULL),
(4, 'Kit Harington', NULL),
(5, 'Leonardo DiCaprio', NULL),
(6, 'Joseph Gordon-Levitt', NULL),
(7, 'Sam Neill', NULL),
(8, 'Laura Dern', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `author_Id` int(11) NOT NULL,
  `releaseYear` int(11) NOT NULL,
  `description` varchar(191) NOT NULL,
  `coverArt` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `book`
--

INSERT INTO `book` (`id`, `title`, `author_Id`, `releaseYear`, `description`, `coverArt`) VALUES
(1, 'Harry Potter and the Philosopher\'s Stone', 6, 1997, 'A young wizard\'s journey begins.', NULL),
(2, 'A Game of Thrones', 7, 1996, 'The first book in the A Song of Ice and Fire series.', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bookcharacter`
--

CREATE TABLE `bookcharacter` (
  `book_Id` int(11) NOT NULL,
  `character_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `bookcharacter`
--

INSERT INTO `bookcharacter` (`book_Id`, `character_Id`) VALUES
(1, 9),
(1, 10),
(1, 11),
(2, 12),
(2, 13);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bookgenre`
--

CREATE TABLE `bookgenre` (
  `book_Id` int(11) NOT NULL,
  `genre_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `bookgenre`
--

INSERT INTO `bookgenre` (`book_Id`, `genre_Id`) VALUES
(1, 5),
(2, 5);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `character`
--

CREATE TABLE `character` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `character`
--

INSERT INTO `character` (`id`, `name`) VALUES
(1, 'Walter White'),
(2, 'Jesse Pinkman'),
(3, 'Daenerys Targaryen'),
(4, 'Jon Snow'),
(5, 'Dom Cobb'),
(6, 'Robert Fischer'),
(7, 'Dr. Alan Grant'),
(8, 'Dr. Ellie Sattler'),
(9, 'Harry Potter'),
(10, 'Hermione Granger'),
(11, 'Ron Weasley'),
(12, 'Eddard Stark'),
(13, 'Daenerys Targaryen');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `characteractor`
--

CREATE TABLE `characteractor` (
  `character_Id` int(11) NOT NULL,
  `actor_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `characteractor`
--

INSERT INTO `characteractor` (`character_Id`, `actor_Id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `creative`
--

CREATE TABLE `creative` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `picture` varchar(191) DEFAULT NULL,
  `author_book` tinyint(1) NOT NULL,
  `director_movie` tinyint(1) NOT NULL,
  `creator_show` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `creative`
--

INSERT INTO `creative` (`id`, `name`, `picture`, `author_book`, `director_movie`, `creator_show`) VALUES
(1, 'Vince Gilligan', NULL, 0, 0, 1),
(2, 'David Benioff', NULL, 0, 0, 1),
(3, 'D.B. Weiss', NULL, 0, 0, 1),
(4, 'Christopher Nolan', NULL, 0, 1, 0),
(5, 'Steven Spielberg', NULL, 0, 1, 0),
(6, 'J.K. Rowling', NULL, 1, 0, 0),
(7, 'George R.R. Martin', NULL, 1, 0, 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `genre` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `genre`
--

INSERT INTO `genre` (`id`, `genre`, `description`) VALUES
(1, 'Drama', 'A genre that relies on the emotional and relational development of realistic characters.'),
(2, 'Fantasy', 'A genre that uses magic and other supernatural forms as a primary element of plot, theme, and/or setting.'),
(3, 'Science Fiction', 'A genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science.'),
(4, 'Adventure', 'A genre that typically involves danger, risk, and excitement.'),
(5, 'Fantasy', 'A genre that uses magic and other supernatural forms as a primary element of plot, theme, and/or setting.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `director_Id` int(11) NOT NULL,
  `releaseYear` int(11) NOT NULL,
  `description` varchar(191) NOT NULL,
  `coverArt` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `movie`
--

INSERT INTO `movie` (`id`, `title`, `director_Id`, `releaseYear`, `description`, `coverArt`) VALUES
(1, 'Inception', 4, 2010, 'A thief who steals corporate secrets through the use of dream-sharing technology.', NULL),
(2, 'Jurassic Park', 5, 1993, 'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park\'s cloned dinosaurs to run loose.', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `movieactor`
--

CREATE TABLE `movieactor` (
  `movie_Id` int(11) NOT NULL,
  `actor_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `movieactor`
--

INSERT INTO `movieactor` (`movie_Id`, `actor_Id`) VALUES
(1, 5),
(1, 6),
(2, 7),
(2, 8);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `moviecharacter`
--

CREATE TABLE `moviecharacter` (
  `character_Id` int(11) NOT NULL,
  `movie_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `moviecharacter`
--

INSERT INTO `moviecharacter` (`character_Id`, `movie_Id`) VALUES
(5, 1),
(6, 1),
(7, 2),
(8, 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `moviegenre`
--

CREATE TABLE `moviegenre` (
  `movie_Id` int(11) NOT NULL,
  `genre_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `moviegenre`
--

INSERT INTO `moviegenre` (`movie_Id`, `genre_Id`) VALUES
(1, 3),
(2, 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tvcharacter`
--

CREATE TABLE `tvcharacter` (
  `tvShow_Id` int(11) NOT NULL,
  `character_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `tvcharacter`
--

INSERT INTO `tvcharacter` (`tvShow_Id`, `character_Id`) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tvepisode`
--

CREATE TABLE `tvepisode` (
  `id` int(11) NOT NULL,
  `episodeNumber` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `releaseDate` datetime(3) NOT NULL,
  `tvSeason_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `tvepisode`
--

INSERT INTO `tvepisode` (`id`, `episodeNumber`, `title`, `description`, `releaseDate`, `tvSeason_Id`) VALUES
(1, 1, 'Pilot', 'Walter White, a high school chemistry teacher, learns he has cancer.', '2008-01-20 00:00:00.000', 1),
(2, 1, 'Winter Is Coming', 'Eddard Stark is torn between his family and an old friend.', '2011-04-17 00:00:00.000', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tvgenre`
--

CREATE TABLE `tvgenre` (
  `tvShow_Id` int(11) NOT NULL,
  `genre_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `tvgenre`
--

INSERT INTO `tvgenre` (`tvShow_Id`, `genre_Id`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tvseason`
--

CREATE TABLE `tvseason` (
  `id` int(11) NOT NULL,
  `seasonNumber` int(11) NOT NULL,
  `releaseYear` int(11) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `tvShow_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `tvseason`
--

INSERT INTO `tvseason` (`id`, `seasonNumber`, `releaseYear`, `description`, `tvShow_Id`) VALUES
(1, 1, 2008, 'Season 1 of Breaking Bad', 1),
(2, 1, 2011, 'Season 1 of Game of Thrones', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tvshow`
--

CREATE TABLE `tvshow` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `creator_Id` int(11) NOT NULL,
  `description` varchar(191) NOT NULL,
  `seasons` int(11) NOT NULL,
  `coverArt` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `tvshow`
--

INSERT INTO `tvshow` (`id`, `title`, `creator_Id`, `description`, `seasons`, `coverArt`) VALUES
(1, 'Breaking Bad', 1, 'A high school chemistry teacher turned methamphetamine producer.', 5, NULL),
(2, 'Game of Thrones', 2, 'Nine noble families fight for control over the lands of Westeros.', 8, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tvshowactor`
--

CREATE TABLE `tvshowactor` (
  `tvShow_Id` int(11) NOT NULL,
  `actor_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `tvshowactor`
--

INSERT INTO `tvshowactor` (`tvShow_Id`, `actor_Id`) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('a8e8cf32-3f72-4d30-bcc0-10059638ec03', 'b5afac004e5943a09263fa73722e11f2def1338680c30f3ad9e9455b6b311502', '2025-02-11 07:28:56.868', '20250211072856_', NULL, NULL, '2025-02-11 07:28:56.317', 1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Book_author_Id_fkey` (`author_Id`);

--
-- A tábla indexei `bookcharacter`
--
ALTER TABLE `bookcharacter`
  ADD PRIMARY KEY (`book_Id`,`character_Id`),
  ADD KEY `BookCharacter_character_Id_fkey` (`character_Id`);

--
-- A tábla indexei `bookgenre`
--
ALTER TABLE `bookgenre`
  ADD PRIMARY KEY (`book_Id`,`genre_Id`),
  ADD KEY `BookGenre_genre_Id_fkey` (`genre_Id`);

--
-- A tábla indexei `character`
--
ALTER TABLE `character`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `characteractor`
--
ALTER TABLE `characteractor`
  ADD PRIMARY KEY (`character_Id`,`actor_Id`),
  ADD KEY `CharacterActor_actor_Id_fkey` (`actor_Id`);

--
-- A tábla indexei `creative`
--
ALTER TABLE `creative`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Movie_director_Id_fkey` (`director_Id`);

--
-- A tábla indexei `movieactor`
--
ALTER TABLE `movieactor`
  ADD PRIMARY KEY (`movie_Id`,`actor_Id`),
  ADD KEY `MovieActor_actor_Id_fkey` (`actor_Id`);

--
-- A tábla indexei `moviecharacter`
--
ALTER TABLE `moviecharacter`
  ADD PRIMARY KEY (`character_Id`,`movie_Id`),
  ADD KEY `MovieCharacter_movie_Id_fkey` (`movie_Id`);

--
-- A tábla indexei `moviegenre`
--
ALTER TABLE `moviegenre`
  ADD PRIMARY KEY (`movie_Id`,`genre_Id`),
  ADD KEY `MovieGenre_genre_Id_fkey` (`genre_Id`);

--
-- A tábla indexei `tvcharacter`
--
ALTER TABLE `tvcharacter`
  ADD PRIMARY KEY (`tvShow_Id`,`character_Id`),
  ADD KEY `TvCharacter_character_Id_fkey` (`character_Id`);

--
-- A tábla indexei `tvepisode`
--
ALTER TABLE `tvepisode`
  ADD PRIMARY KEY (`id`),
  ADD KEY `TvEpisode_tvSeason_Id_fkey` (`tvSeason_Id`);

--
-- A tábla indexei `tvgenre`
--
ALTER TABLE `tvgenre`
  ADD PRIMARY KEY (`tvShow_Id`,`genre_Id`),
  ADD KEY `TvGenre_genre_Id_fkey` (`genre_Id`);

--
-- A tábla indexei `tvseason`
--
ALTER TABLE `tvseason`
  ADD PRIMARY KEY (`id`),
  ADD KEY `TvSeason_tvShow_Id_fkey` (`tvShow_Id`);

--
-- A tábla indexei `tvshow`
--
ALTER TABLE `tvshow`
  ADD PRIMARY KEY (`id`),
  ADD KEY `TvShow_creator_Id_fkey` (`creator_Id`);

--
-- A tábla indexei `tvshowactor`
--
ALTER TABLE `tvshowactor`
  ADD PRIMARY KEY (`tvShow_Id`,`actor_Id`),
  ADD KEY `TvShowActor_actor_Id_fkey` (`actor_Id`);

--
-- A tábla indexei `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `actor`
--
ALTER TABLE `actor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `character`
--
ALTER TABLE `character`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT a táblához `creative`
--
ALTER TABLE `creative`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `tvepisode`
--
ALTER TABLE `tvepisode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `tvseason`
--
ALTER TABLE `tvseason`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `tvshow`
--
ALTER TABLE `tvshow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `Book_author_Id_fkey` FOREIGN KEY (`author_Id`) REFERENCES `creative` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `bookcharacter`
--
ALTER TABLE `bookcharacter`
  ADD CONSTRAINT `BookCharacter_book_Id_fkey` FOREIGN KEY (`book_Id`) REFERENCES `book` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `BookCharacter_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `character` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `bookgenre`
--
ALTER TABLE `bookgenre`
  ADD CONSTRAINT `BookGenre_book_Id_fkey` FOREIGN KEY (`book_Id`) REFERENCES `book` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `BookGenre_genre_Id_fkey` FOREIGN KEY (`genre_Id`) REFERENCES `genre` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `characteractor`
--
ALTER TABLE `characteractor`
  ADD CONSTRAINT `CharacterActor_actor_Id_fkey` FOREIGN KEY (`actor_Id`) REFERENCES `actor` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterActor_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `character` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `movie`
--
ALTER TABLE `movie`
  ADD CONSTRAINT `Movie_director_Id_fkey` FOREIGN KEY (`director_Id`) REFERENCES `creative` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `movieactor`
--
ALTER TABLE `movieactor`
  ADD CONSTRAINT `MovieActor_actor_Id_fkey` FOREIGN KEY (`actor_Id`) REFERENCES `actor` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `MovieActor_movie_Id_fkey` FOREIGN KEY (`movie_Id`) REFERENCES `movie` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `moviecharacter`
--
ALTER TABLE `moviecharacter`
  ADD CONSTRAINT `MovieCharacter_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `character` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `MovieCharacter_movie_Id_fkey` FOREIGN KEY (`movie_Id`) REFERENCES `movie` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `moviegenre`
--
ALTER TABLE `moviegenre`
  ADD CONSTRAINT `MovieGenre_genre_Id_fkey` FOREIGN KEY (`genre_Id`) REFERENCES `genre` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `MovieGenre_movie_Id_fkey` FOREIGN KEY (`movie_Id`) REFERENCES `movie` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `tvcharacter`
--
ALTER TABLE `tvcharacter`
  ADD CONSTRAINT `TvCharacter_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `character` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `TvCharacter_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `tvshow` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `tvepisode`
--
ALTER TABLE `tvepisode`
  ADD CONSTRAINT `TvEpisode_tvSeason_Id_fkey` FOREIGN KEY (`tvSeason_Id`) REFERENCES `tvseason` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `tvgenre`
--
ALTER TABLE `tvgenre`
  ADD CONSTRAINT `TvGenre_genre_Id_fkey` FOREIGN KEY (`genre_Id`) REFERENCES `genre` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `TvGenre_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `tvshow` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `tvseason`
--
ALTER TABLE `tvseason`
  ADD CONSTRAINT `TvSeason_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `tvshow` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `tvshow`
--
ALTER TABLE `tvshow`
  ADD CONSTRAINT `TvShow_creator_Id_fkey` FOREIGN KEY (`creator_Id`) REFERENCES `creative` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `tvshowactor`
--
ALTER TABLE `tvshowactor`
  ADD CONSTRAINT `TvShowActor_actor_Id_fkey` FOREIGN KEY (`actor_Id`) REFERENCES `actor` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `TvShowActor_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `tvshow` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
*/


-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2025 at 09:57 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vizsgaremek`
--

-- --------------------------------------------------------

--
-- Table structure for table `actor`
--

CREATE TABLE `actor` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `picture` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `actor`
--

INSERT INTO `actor` (`id`, `name`, `picture`) VALUES
(1, 'Bryan Cranston', '/uploads/actor/bryan_cranston.png'),
(2, 'Aaron Paul', '/uploads/actor/aaron_paul.png'),
(3, 'Peter Dinklage', '/uploads/actor/peter_dinklage.png'),
(4, 'Emilia Clarke', '/uploads/actor/emilia_clarke.png'),
(5, 'Sarah Paulson', '/uploads/actor/sarah_paulson.png'),
(6, 'Joel McHale', '/uploads/actor/joel_mchale.png'),
(7, 'Phoebe Waller-Bridge', '/uploads/actor/phoebe_waller-bridge.png'),
(8, 'Ellen Pompeo', '/uploads/actor/ellen_pompeo.png'),
(9, 'Michaela Coel', '/uploads/actor/michaela_coel.png'),
(10, 'Mike Judge', '/uploads/actor/mike_judge.png'),
(11, 'Donald Glover', '/uploads/actor/donald_glover.png'),
(12, 'James Gandolfini', '/uploads/actor/james_gandolfini.png'),
(13, 'Idris Elba', '/uploads/actor/idris_elba.png'),
(14, 'Leonardo DiCaprio', '/uploads/actor/leonardo_dicaprio.png'),
(15, 'Joseph Gordon-Levitt', '/uploads/actor/joseph_gordon-levitt.png'),
(16, 'Marion Cotillard', '/uploads/actor/marion_cotillard.png'),
(17, 'Corinne Marchand', '/uploads/actor/corinne_marchand.png'),
(18, 'Robert De Niro', '/uploads/actor/robert_de_niro.png'),
(19, 'Ray Liotta', '/uploads/actor/ray_liotta.png'),
(20, 'Joe Pesci', '/uploads/actor/joe_pesci.png'),
(21, 'Sándor Csányi', '/uploads/actor/sandor_csanyi.png'),
(22, 'Zoltán Mucsi', '/uploads/actor/zoltan_mucsi.png'),
(23, 'Klaus Maria Brandauer', '/uploads/actor/klaus_maria_brandauer.png'),
(24, 'Anthony Perkins', '/uploads/actor/anthony_perkins.png'),
(25, 'Janet Leigh', '/uploads/actor/janet_leigh.png'),
(26, 'Toshiro Mifune', '/uploads/actor/toshiro_mifune.png'),
(27, 'Mark Hamill', '/uploads/actor/mark_hamill.png'),
(28, 'Harrison Ford', '/uploads/actor/harrison_ford.png'),
(29, 'Carrie Fisher', '/uploads/actor/carrie_fisher.png'),
(30, 'Marlon Brando', '/uploads/actor/marlon_brando.png'),
(31, 'Al Pacino', '/uploads/actor/al_pacino.png'),
(32, 'James Caan', '/uploads/actor/james_caan.png'),
(33, 'Jeremy Renner', '/uploads/actor/jeremy_renner.png'),
(34, 'Jack Nicholson', '/uploads/actor/jack_nicholson.png'),
(35, 'Shelley Duvall', '/uploads/actor/shelley_duvall.png'),
(36, 'James Stewart', '/uploads/actor/james_stewart.png'),
(37, 'Kim Novak', '/uploads/actor/kim_novak.png'),
(38, 'János Derzsi', '/uploads/actor/janos_derzsi.png'),
(39, 'Erika Bók', '/uploads/actor/erika_bok.png'),
(56, 'Test Actor 1745704306515', NULL),
(57, 'Test Actor 1745704306655', NULL),
(59, 'Test Actor 1745704306769', NULL),
(64, 'Test Actor 1745704311202', NULL),
(65, 'Test Actor 1745704311315', NULL),
(67, 'Test Actor 1745704311396', NULL),
(72, 'Test Actor 1745704325402', NULL),
(73, 'Test Actor 1745704325500', NULL),
(75, 'Test Actor 1745704325579', NULL),
(80, 'Test Actor 1745704394088', NULL),
(81, 'Test Actor 1745704394178', NULL),
(83, 'Test Actor 1745704394286', NULL),
(88, 'Test Actor 1745704398517', NULL),
(89, 'Test Actor 1745704398693', NULL),
(91, 'Test Actor 1745704398848', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `author_Id` int(11) NOT NULL,
  `releaseYear` int(11) NOT NULL,
  `description` text NOT NULL,
  `coverArt` varchar(191) DEFAULT NULL,
  `isbn` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `title`, `author_Id`, `releaseYear`, `description`, `coverArt`, `isbn`) VALUES
(1, 'Updated', 11, 1949, 'Egy disztópikus regény, amely egy totalitárius államban játszódik, ahol a Nagy Testvér mindent lát és irányít. A történet Winston Smith életét követi, aki megpróbálja megérteni és szembeszállni a rendszerrel. A regény az egyéni szabadság, a hatalom és az igazság kérdéseit vizsgálja, miközben bemutatja a propaganda és az agymosás hatásait.', '/uploads/book/1984.png', NULL),
(2, 'Animal Farm', 11, 1945, 'Egy allegorikus novella, amely egy farm állatainak lázadását meséli el az emberi gazdájuk ellen. A történet a hatalom korrupcióját és a forradalmak eltorzulását mutatja be, miközben szatirikusan ábrázolja a politikai rendszerek működését. Az állatok közötti konfliktusok és árulások a társadalmi egyenlőség illúzióját tárják fel.', '/uploads/book/Animal_Farm.png', NULL),
(3, 'Crime and Punishment', 4, 1866, 'Egy regény, amely egy szegény ex-diák, Rodion Raskolnikov mentális gyötrelmeit és erkölcsi dilemmáit követi nyomon, miután elkövet egy gyilkosságot. A történet mélyen filozófiai és pszichológiai, az emberi természet, a bűn és a megváltás kérdéseit vizsgálja. A regény bemutatja a társadalmi igazságtalanságokat és az emberi szenvedés mélységeit.', '/uploads/book/Crime_and_Punishment.png', NULL),
(4, 'Emma', 1, 1815, 'Egy regény, amely egy fiatal nő, Emma Woodhouse életét követi, aki saját magát tartja a házasságok mesterének, miközben saját érzelmi éretlenségével küzd. A történet tele van humorral, romantikával és társadalmi megfigyelésekkel, miközben bemutatja a viktoriánus Anglia társadalmi normáit és osztályrendszerét.', '/uploads/book/Emma.png', NULL),
(5, 'For Whom the Bell Tolls', 5, 1940, 'Egy regény, amely a spanyol polgárháború idején játszódik, és egy amerikai robbantási szakértő, Robert Jordan történetét meséli el. A regény a háború borzalmait, az emberi kapcsolatok erejét és a személyes áldozatok jelentőségét vizsgálja. A történet tele van érzelmi mélységgel és filozófiai elmélkedésekkel az élet értelméről és a halál elkerülhetetlenségéről.', '/uploads/book/For_Whom_the_Bell_Tolls.png', NULL),
(6, 'The Master and Margarita', 2, 1967, 'Egy regény, amely a Sátán látogatását meséli el a Szovjetunióban, miközben párhuzamosan egy bibliai történetet is bemutat. A történet tele van szatírával, misztikummal és filozófiai elmélkedésekkel a hatalomról, a művészetről és az emberi természetről. A regény a szovjet társadalom kritikája, miközben a szerelem és az áldozat erejét is bemutatja.', '/uploads/book/Master_and_Margarita.png', NULL),
(7, 'Mrs Dalloway', 12, 1925, 'Egy regény, amely egyetlen nap eseményeit követi nyomon Clarissa Dalloway életében, miközben visszaemlékezéseken keresztül feltárja a múltját. A történet az idő múlásának, az emberi kapcsolatok bonyolultságának és a belső világ gazdagságának témáit vizsgálja. A regény modernista stílusban íródott, és mélyen emberi portrét fest a főszereplőről.', '/uploads/book/Mrs_Dalloway.png', NULL),
(8, 'Murder on the Orient Express', 3, 1934, 'Egy detektívregény, amely Hercule Poirot nyomozását követi egy luxusvonaton történt gyilkosság ügyében. A történet tele van fordulatokkal, rejtélyekkel és izgalmas karakterekkel, miközben bemutatja Poirot zseniális logikáját és megfigyelőképességét. A regény a klasszikus krimi műfaj egyik legkiemelkedőbb alkotása.', '/uploads/book/Murder_on_the_Orient_Express.png', NULL),
(9, 'One Hundred Years of Solitude', 9, 1967, 'Egy regény, amely a Buendía család történetét meséli el a képzeletbeli Macondo városában. A történet tele van mágikus realizmussal, családi tragédiákkal és történelmi eseményekkel, miközben az emberi sors és az idő ciklikusságának témáit vizsgálja. A regény a latin-amerikai irodalom egyik legfontosabb műve.', '/uploads/book/One_Hundred_Years_of_Solitude.png', NULL),
(10, 'Pride and Prejudice', 1, 1813, 'Egy romantikus regény, amely Elizabeth Bennet és Mr. Darcy kapcsolatát követi, miközben bemutatja a viktoriánus Anglia társadalmi normáit és osztályrendszerét. A történet tele van humorral, romantikával és éles társadalmi megfigyelésekkel, miközben az előítéletek és a büszkeség leküzdésének témáit vizsgálja.', '/uploads/book/Pride_and_Prejudice.png', NULL),
(11, 'The Metamorphosis', 7, 1915, 'Egy novella, amely egy férfi, Gregor Samsa történetét meséli el, aki egy reggel óriási rovarrá változva ébred. A történet az elidegenedés, a családi kapcsolatok és az emberi lét abszurditásának témáit vizsgálja. A mű Kafka szimbolikus és filozófiai írásainak egyik legismertebb darabja.', '/uploads/book/The_Metamorphosis.png', NULL),
(12, 'A kőszívű ember fiai', 6, 1869, 'Egy regény, amely a magyar szabadságharc idején játszódik, és egy család történetét meséli el, akik különböző oldalakon állnak a konfliktusban. A történet tele van hazafisággal, romantikával és drámai fordulatokkal, miközben bemutatja a magyar történelem egyik legfontosabb időszakát.', '/uploads/book/A_kőszívű_ember_fiai.png', NULL),
(13, 'A Pál utcai fiúk', 10, 1906, 'Egy regény, amely egy csapat iskolás fiú történetét meséli el, akik megpróbálják megvédeni játszóterüket egy rivális bandától. A történet a barátság, a bátorság és az áldozat témáit vizsgálja, miközben bemutatja a gyermeki világ egyszerűségét és mélységét.', '/uploads/book/A_Pál_utcai_fiúk.png', NULL),
(14, 'Abigél', 13, 1970, 'Egy regény, amely egy fiatal lány, Gina történetét meséli el, akit egy szigorú bentlakásos iskolába küldenek a második világháború idején. A történet tele van rejtélyekkel, érzelmi mélységekkel és a felnőtté válás kihívásaival, miközben bemutatja a háború hatásait az egyéni sorsokra.', '/uploads/book/Abigél.png', NULL),
(15, 'Az ajtó', 13, 1987, 'Egy regény, amely egy író és házvezetőnője, Emerence kapcsolatát meséli el, miközben feltárja a múlt titkait és a bizalom törékenységét. A történet tele van érzelmi mélységekkel, filozófiai elmélkedésekkel és az emberi kapcsolatok bonyolultságának bemutatásával.', '/uploads/book/Az_ajtó.png', NULL),
(16, 'Az arany ember', 6, 1872, 'Egy regény, amely egy kereskedő, Timár Mihály történetét meséli el, aki egy hajótörés révén gazdagságra tesz szert. A történet tele van romantikával, kalandokkal és erkölcsi dilemmákkal, miközben bemutatja a boldogság keresésének és az emberi természet összetettségének témáit.', '/uploads/book/Az_arany_ember.png', NULL),
(17, 'Édes Anna', 8, 1926, 'Egy regény, amely egy cselédlány, Édes Anna történetét meséli el, aki végül meggyilkolja munkaadóit. A történet az emberi lélek mélységeit, a társadalmi igazságtalanságokat és az elnyomás hatásait vizsgálja, miközben bemutatja a magyar társadalom árnyoldalait.', '/uploads/book/Édes_Anna.png', NULL),
(18, 'Esti Kornél', 8, 1933, 'Egy novellagyűjtemény, amely Kornél Esti életének különböző epizódjait meséli el. A történetek tele vannak humorral, melankóliával és filozófiai elmélkedésekkel, miközben bemutatják az emberi lét abszurditását és szépségét.', '/uploads/book/Esti_Kornél.png', NULL),
(117, 'awdasdaw', 3, 1231, 'sdwasd', '/uploads/book/bf5901830b52b841a15542b3bbe0b7b8', 'adwdsa');

-- --------------------------------------------------------

--
-- Table structure for table `bookcharacter`
--

CREATE TABLE `bookcharacter` (
  `book_Id` int(11) NOT NULL,
  `character_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bookcharacter`
--

INSERT INTO `bookcharacter` (`book_Id`, `character_Id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18);

-- --------------------------------------------------------

--
-- Table structure for table `bookgenre`
--

CREATE TABLE `bookgenre` (
  `book_Id` int(11) NOT NULL,
  `genre_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bookgenre`
--

INSERT INTO `bookgenre` (`book_Id`, `genre_Id`) VALUES
(1, 2),
(2, 7),
(3, 4),
(4, 6),
(5, 1),
(6, 4),
(7, 5),
(8, 3),
(9, 8),
(10, 6),
(11, 1),
(12, 9),
(13, 9),
(14, 9),
(15, 9),
(16, 9),
(17, 9),
(18, 9);

-- --------------------------------------------------------

--
-- Table structure for table `character`
--

CREATE TABLE `character` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `character`
--

INSERT INTO `character` (`id`, `name`) VALUES
(1, 'Winston Smith'),
(2, 'Boxer'),
(3, 'Rodion Raskolnikov'),
(4, 'Emma Woodhouse'),
(5, 'Robert Jordan'),
(6, 'Woland'),
(7, 'Clarissa Dalloway'),
(8, 'Hercule Poirot'),
(9, 'Aureliano Buendía'),
(10, 'Elizabeth Bennet'),
(11, 'Gregor Samsa'),
(12, 'Baradlay Richárd'),
(13, 'Nemecsek Ernő'),
(14, 'Gina'),
(15, 'Emerence'),
(16, 'Timár Mihály'),
(17, 'Édes Anna'),
(18, 'Esti Kornél'),
(19, 'Walter White'),
(20, 'Saul Goodman'),
(21, 'Jeff Winger'),
(22, 'Fleabag'),
(23, 'Meredith Grey'),
(24, 'Arabella'),
(25, 'Hank Hill'),
(26, 'Rick Sanchez'),
(27, 'Tony Soprano'),
(28, 'Omar Little'),
(29, 'Dom Cobb'),
(30, 'Cléo'),
(31, 'Henry Hill'),
(32, 'Tommy DeVito'),
(33, 'Bulcsú'),
(34, 'Hendrik Höfgen'),
(35, 'Norman Bates'),
(36, 'Marion Crane'),
(37, 'Kambei Shimada'),
(38, 'Luke Skywalker'),
(39, 'Han Solo'),
(40, 'Princess Leia'),
(41, 'Travis Bickle'),
(42, 'Vito Corleone'),
(43, 'Michael Corleone'),
(44, 'Sonny Corleone'),
(45, 'William James'),
(46, 'Jack Torrance'),
(47, 'Wendy Torrance'),
(48, 'Dr. David Bowman'),
(49, 'Scottie Ferguson'),
(50, 'Madeleine Elster'),
(51, 'Ohlsdorfer'),
(52, 'Ohlsdorfer lánya'),
(53, 'Test Character 1745704306494'),
(54, 'Test Character 1745704306651'),
(56, 'Test Character 1745704306755'),
(57, 'Test Character 1745704311107'),
(58, 'Test Character 1745704311310'),
(60, 'Test Character 1745704311393'),
(61, 'Test Character 1745704325378'),
(62, 'Test Character 1745704325495'),
(64, 'Test Character 1745704325575'),
(65, 'Test Character 1745704394074'),
(66, 'Test Character 1745704394172'),
(68, 'Test Character 1745704394282'),
(69, 'Test Character 1745704398443'),
(70, 'Test Character 1745704398666'),
(72, 'Test Character 1745704398845');

-- --------------------------------------------------------

--
-- Table structure for table `characteractor`
--

CREATE TABLE `characteractor` (
  `character_Id` int(11) NOT NULL,
  `actor_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `characteractor`
--

INSERT INTO `characteractor` (`character_Id`, `actor_Id`) VALUES
(19, 1),
(20, 2),
(21, 6),
(22, 7),
(23, 8),
(24, 9),
(25, 10),
(27, 12),
(28, 13),
(29, 14),
(30, 17),
(31, 19),
(32, 20),
(33, 21),
(34, 23),
(35, 24),
(36, 25),
(37, 26),
(38, 27),
(39, 28),
(40, 29),
(41, 18),
(42, 30),
(43, 31),
(44, 32),
(45, 33),
(46, 34),
(47, 35),
(49, 36),
(50, 37),
(51, 38),
(52, 39),
(53, 56),
(54, 57),
(56, 59),
(57, 64),
(58, 65),
(60, 67),
(61, 72),
(62, 73),
(64, 75),
(65, 80),
(66, 81),
(68, 83),
(69, 88),
(70, 89),
(72, 91);

-- --------------------------------------------------------

--
-- Table structure for table `creative`
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
-- Dumping data for table `creative`
--

INSERT INTO `creative` (`id`, `name`, `picture`, `author_book`, `director_movie`, `creator_show`) VALUES
(1, 'Jane Austen', '/uploads/creative/Austen.png', 1, 0, 0),
(2, 'Mikhail Bulgakov', '/uploads/creative/Bulgakov.png', 1, 0, 0),
(3, 'Agatha Christie', '/uploads/creative/Christie.png', 1, 0, 0),
(4, 'Fyodor Dostoevsky', '/uploads/creative/Dostoevsky.png', 1, 0, 0),
(5, 'Ernest Hemingway', '/uploads/creative/Hemingway.png', 1, 0, 0),
(6, 'Mór Jókai', '/uploads/creative/Jókai.png', 1, 0, 0),
(7, 'Franz Kafka', '/uploads/creative/Kafka.png', 1, 0, 0),
(8, 'Dezső Kosztolányi', '/uploads/creative/Kosztolányi.png', 1, 0, 0),
(9, 'Gabriel García Márquez', '/uploads/creative/Marquez.png', 1, 0, 0),
(10, 'Ferenc Molnár', '/uploads/creative/Molnár.png', 1, 0, 0),
(11, 'George Orwell', '/uploads/creative/Orwell.png', 1, 0, 0),
(12, 'Virginia Woolf', '/uploads/creative/Woolf.png', 1, 0, 0),
(13, 'Magda Szabó', NULL, 1, 0, 0),
(14, 'Hirohiko Araki', '/uploads/creative/Araki.jpg', 0, 0, 1),
(15, 'David Chase', '/uploads/creative/Chase.png', 0, 0, 1),
(16, 'Michaela Coel', '/uploads/creative/Coel.png', 0, 0, 1),
(17, 'Vince Gilligan', '/uploads/creative/Gilligan.jpg', 0, 0, 1),
(18, 'Dan Harmon', '/uploads/creative/Harmon.png', 0, 0, 1),
(19, 'Mike Judge', '/uploads/creative/Judge.png', 0, 0, 1),
(20, 'Ryan Murphy', '/uploads/creative/Murphy.png', 0, 0, 1),
(21, 'Shonda Rhimes', '/uploads/creative/Rhimes.png', 0, 0, 1),
(22, 'David Simon', '/uploads/creative/Simon.png', 0, 0, 1),
(23, 'Phoebe Waller-Bridge', '/uploads/creative/Waller-Bridge.png', 0, 0, 1),
(24, 'Akira Kurosawa', '/uploads/creative/Akira.jpg', 0, 1, 0),
(25, 'Nimród Antal', '/uploads/creative/Antal.png', 0, 1, 0),
(26, 'Kathryn Bigelow', '/uploads/creative/Bigelow.png', 0, 1, 0),
(27, 'Francis Ford Coppola', '/uploads/creative/Coppola.png', 0, 1, 0),
(28, 'Alfred Hitchcock', '/uploads/creative/Hitchcock.jpg', 0, 1, 0),
(29, 'Stanley Kubrick', '/uploads/creative/Kubrick.jpg', 0, 1, 0),
(30, 'George Lucas', '/uploads/creative/Lucas.jpg', 0, 1, 0),
(31, 'Christopher Nolan', '/uploads/creative/Nolan.png', 0, 1, 0),
(32, 'Martin Scorsese', '/uploads/creative/Scorsese.jpg', 0, 1, 0),
(33, 'István Szabó', '/uploads/creative/Szabó_Ist.png', 0, 1, 0),
(34, 'Béla Tarr', '/uploads/creative/Tarr.png', 0, 1, 0),
(35, 'Agnès Varda', '/uploads/creative/Varda.png', 0, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `genre` varchar(191) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`id`, `genre`, `description`) VALUES
(1, 'Fikció', 'A fikció olyan irodalmi művek gyűjtőneve, amelyek a képzelet szüleményei, nem pedig a valóság tényein alapulnak. Ezek a művek gyakran olyan történeteket mesélnek el, amelyek teljesen kitaláltak, vagy a valóság elemeit ötvözik a képzelet szülte eseményekkel. A fikció célja lehet a szórakoztatás, az érzelmek kiváltása, vagy akár a társadalmi kérdések vizsgálata is.'),
(2, 'Disztópia', 'A disztópikus irodalom olyan történeteket mutat be, amelyek egy sötét, elnyomó és gyakran kegyetlen társadalomban játszódnak. Ezek a művek gyakran a jövőben játszódnak, és a társadalmi, politikai vagy technológiai fejlődés negatív következményeit vizsgálják. A disztópikus történetek célja, hogy figyelmeztessenek a jelenlegi tendenciák veszélyeire, miközben mélyen emberi kérdéseket is boncolgatnak, mint például a szabadság, az egyenlőség és az emberi méltóság.'),
(3, 'Rejtély', 'A rejtély műfajába tartozó irodalmi művek középpontjában egy bűncselekmény, talány vagy megoldásra váró probléma áll. Ezek a történetek gyakran izgalmasak és fordulatosak, miközben az olvasót arra ösztönzik, hogy együtt gondolkodjon a szereplőkkel a megoldás érdekében. A rejtélyek célja nemcsak a szórakoztatás, hanem az emberi természet és a társadalmi igazságosság kérdéseinek vizsgálata is.'),
(4, 'Orosz irodalom', 'Az orosz irodalom a világirodalom egyik leggazdagabb és legmélyebb hagyományokkal rendelkező ága. Ezek az irodalmi művek gyakran foglalkoznak az emberi lélek mélységeivel, a társadalmi igazságtalanságokkal és az erkölcsi dilemmákkal. Az orosz irodalom nagy klasszikusai, mint Dosztojevszkij, Tolsztoj vagy Bulgakov, olyan univerzális kérdéseket vetnek fel, amelyek ma is relevánsak.'),
(5, 'Modernizmus', 'A modernista irodalom a hagyományos formák és narratívák elutasításával jött létre, és új, kísérletező megközelítéseket alkalmazott. Ezek a művek gyakran foglalkoznak az idő, az identitás és az emberi tapasztalat komplexitásával. A modernizmus célja, hogy új perspektívákat nyújtson az olvasónak, miközben a nyelv és a forma határait feszegeti.'),
(6, 'Romantika', 'A romantikus irodalom a szerelem, az érzelmek és az emberi kapcsolatok témáit helyezi előtérbe. Ezek a történetek gyakran idealizált világokat mutatnak be, ahol a szereplők érzelmi utazásai állnak a középpontban. A romantikus művek célja, hogy az olvasót elvarázsolják, miközben az emberi szív mélységeit és bonyolultságát tárják fel.'),
(7, 'Szatíra', 'A szatirikus irodalom humor, irónia és túlzás segítségével mutatja be a társadalmi, politikai vagy kulturális problémákat. Ezek a művek gyakran kritikusak és provokatívak, miközben szórakoztató módon hívják fel a figyelmet a világ abszurditásaira. A szatíra célja, hogy megnevettessen, miközben elgondolkodtat és változásra ösztönöz.'),
(8, 'Mágikus realizmus', 'A mágikus realizmus olyan irodalmi műfaj, amely a valóságos világot ötvözi a mágikus vagy természetfeletti elemekkel. Ezek a történetek gyakran a mindennapi életet mutatják be, miközben a csodák és a varázslat természetes részei a szereplők világának. A mágikus realizmus célja, hogy új perspektívát nyújtson az olvasónak, miközben a valóság és a képzelet határait feszegeti.'),
(9, 'Magyar irodalom', 'A magyar irodalom gazdag és sokszínű hagyományokkal rendelkezik, amely a magyar történelem, kultúra és társadalom mélyreható vizsgálatát tükrözi. Ezek a művek gyakran foglalkoznak a nemzeti identitás, a szabadság és az emberi sors kérdéseivel. A magyar irodalom klasszikusai, mint Jókai, Kosztolányi vagy Szabó Magda, időtálló értékeket és univerzális üzeneteket hordoznak.'),
(10, 'Dráma', 'A drámai irodalom az emberi érzelmek és konfliktusok mélyreható ábrázolására összpontosít. Ezek a művek gyakran komoly és érzelmileg megterhelő témákat dolgoznak fel, miközben az emberi természet és a társadalmi kapcsolatok komplexitását vizsgálják. A dráma célja, hogy az olvasót vagy nézőt érzelmileg megérintse és elgondolkodtassa.'),
(11, 'Komédia', 'A komédia műfajába tartozó irodalmi művek célja, hogy megnevettessék és szórakoztassák az olvasót. Ezek a történetek gyakran humoros helyzeteket, félreértéseket és színes karaktereket mutatnak be, miközben a társadalmi normák és emberi gyengeségek paródiáját nyújtják. A komédia célja, hogy könnyedebb oldalról közelítse meg az élet kihívásait, miközben pozitív üzeneteket közvetít.'),
(12, 'Tudományos-fantasztikus', 'A tudományos-fantasztikus irodalom olyan történeteket mutat be, amelyek a tudományos felfedezések és technológiai fejlődés képzeletbeli következményeit vizsgálják. Ezek a művek gyakran a jövőben játszódnak, és olyan kérdéseket vetnek fel, mint az emberiség sorsa, az űrkutatás vagy a mesterséges intelligencia. A sci-fi célja, hogy az olvasót elgondolkodtassa a tudomány és az emberi természet kapcsolatáról.'),
(13, 'Thriller', 'A thriller műfajába tartozó irodalmi művek izgalmas és feszült történeteket mesélnek el, amelyek gyakran fordulatokkal és váratlan eseményekkel teli cselekményt kínálnak. Ezek a művek célja, hogy az olvasót a székéhez szegezzék, miközben a feszültség és a rejtély fokozatosan bontakozik ki. A thriller gyakran foglalkozik az emberi psziché sötét oldalával és a túlélés kérdéseivel.'),
(14, 'Horror', 'A horror irodalom célja, hogy félelmet, rettegést vagy undort váltson ki az olvasóból. Ezek a történetek gyakran természetfeletti lényeket, sötét helyszíneket és nyomasztó atmoszférát mutatnak be, miközben az emberi félelmek és szorongások mélyére hatolnak. A horror célja, hogy az olvasót szembesítse saját félelmeivel, miközben szórakoztat és borzongat.'),
(15, 'Krimi', 'A krimi műfajába tartozó irodalmi művek a bűncselekmények, azok felderítése és az elkövetők motivációinak vizsgálatára összpontosítanak. Ezek a történetek gyakran izgalmasak és fordulatosak, miközben az olvasót arra ösztönzik, hogy együtt gondolkodjon a nyomozóval a rejtély megoldásán. A krimi célja, hogy szórakoztasson, miközben az igazság és az emberi természet kérdéseit is boncolgatja.'),
(16, 'Háborús', 'A háborús irodalom a háború borzalmait, hősiességét és emberi áldozatait mutatja be. Ezek a történetek gyakran a frontvonalon játszódnak, és a katonák, civilek vagy túlélők szemszögéből ábrázolják a konfliktusokat. A háborús irodalom célja, hogy az olvasót elgondolkodtassa a háború értelmetlenségéről és az emberi élet törékenységéről.'),
(17, 'Művészfilm', 'A művészfilm műfajába tartozó irodalmi művek elsősorban esztétikai célokat szolgálnak, és gyakran kísérletező formákat és narratívákat alkalmaznak. Ezek a történetek mélyebb filozófiai vagy érzelmi kérdéseket vizsgálnak, miközben a hagyományos szórakoztatás helyett az önkifejezésre és a művészi értékekre helyezik a hangsúlyt. A művészfilm célja, hogy az olvasót vagy nézőt új perspektívákra ösztönözze, miközben a művészet határait feszegeti.'),
(18, 'Kaland', 'A kaland műfajába tartozó irodalmi művek izgalmas és gyakran veszélyes utazásokat vagy küldetéseket mutatnak be. Ezek a történetek tele vannak akcióval, fordulatokkal és hősies tettekkel, miközben a szereplők különböző kihívásokkal néznek szembe. A kaland célja, hogy az olvasót elvarázsolja és inspirálja, miközben a bátorság, a kitartás és a felfedezés örömét ünnepli.');

-- --------------------------------------------------------

--
-- Table structure for table `group`
--

CREATE TABLE `group` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `read` tinyint(1) NOT NULL DEFAULT 0,
  `write` tinyint(1) NOT NULL DEFAULT 0,
  `update` tinyint(1) NOT NULL DEFAULT 0,
  `delete` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `group`
--

INSERT INTO `group` (`id`, `name`, `read`, `write`, `update`, `delete`) VALUES
(1, 'ADMIN', 1, 1, 1, 1),
(2, 'USER', 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `maindata`
--

CREATE TABLE `maindata` (
  `id` varchar(191) NOT NULL,
  `JWTSecret` varchar(191) NOT NULL,
  `JWTExpiration` int(11) NOT NULL,
  `JWTAlgorithm` varchar(191) NOT NULL,
  `RefreshTokenSecret` varchar(191) NOT NULL,
  `RefreshTokenExpiration` int(11) NOT NULL,
  `RefreshTokenAlgorithm` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `maindata`
--

INSERT INTO `maindata` (`id`, `JWTSecret`, `JWTExpiration`, `JWTAlgorithm`, `RefreshTokenSecret`, `RefreshTokenExpiration`, `RefreshTokenAlgorithm`) VALUES
('', 'AlXCJ7sQXmlnzAVBpvRzAV59y9YL1jsM', 86400, 'HS256', 'CcY9L4VhE2knXmh88oszQkgmdyh9TXs6', 604800, 'HS256');

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `director_Id` int(11) NOT NULL,
  `releaseYear` int(11) NOT NULL,
  `description` text NOT NULL,
  `coverArt` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `title`, `director_Id`, `releaseYear`, `description`, `coverArt`) VALUES
(1, '2001: A Space Odyssey', 29, 1968, 'Amikor rejtélyes monolitot fedeznek fel a Hold felszínén, egy űrhajót küldenek a Jupiterhez, hogy megtalálják az eredetét. A film az emberi evolúció különböző fázisait követi nyomon, a primitív emberszabásúaktól kezdve a modern emberen át a következő fejlődési szintig. A történet középpontjában az ember és a technológia, különösen a mesterséges intelligencia kapcsolata áll, melyet a HAL 9000 számítógép testesít meg. A film vizuálisan lenyűgöző képi világával és filozófiai mélységével a sci-fi műfaj egyik meghatározó alkotása. Stanley Kubrick rendezése a művészfilm és a mainstream sci-fi határán egyensúlyoz, miközben az emberiség múltjáról, jelenéről és jövőjéről gondolkodtat el. A lassan kibontakozó, meditatív történetvezetés és a forradalmi vizuális effektek új mércét állítottak fel a filmművészetben.', '/uploads/movie/2001_Space_Odyssey.png'),
(2, 'Cléo from 5 to 7', 35, 1962, 'A film egy fiatal énekesnő, Cléo életének két óráját követi nyomon, miközben orvosi vizsgálati eredményeire vár, attól félve, hogy rákos lehet. A valós időben játszódó történet során Cléo Párizs utcáin vándorol, mélyen elmerülve saját halandóságának gondolataiban. A francia új hullám kiemelkedő alkotásaként a film érzékenyen ábrázolja a női identitás kérdéseit, a szépség mulandóságát és az élet törékenységét. Cléo útja során találkozik különböző emberekkel, akik akaratlanul is hatással vannak életfelfogására, miközben a néző tanúja lehet belső átalakulásának a felszínes popsztárból egy mélyebb önismerettel rendelkező nővé. Agnès Varda rendezése mesteri módon használja a városi környezetet mint a főszereplő lelkiállapotának tükröződését, miközben a fekete-fehér képi világ és az időnkénti színes jelenetek kontrasztja vizuálisan is kifejezi Cléo belső vívódásait.', '/uploads/movie/Cléo.png'),
(3, 'Inception', 31, 2010, 'Egy tolvaj, aki vállalati titkokat lop el az álmok megosztására szolgáló technológia segítségével, egy különleges feladatot kap: egy ötlet elültetését egy célpont elméjében. A történet Dom Cobb, a főszereplő életét követi, aki nemcsak a bűnözés világában próbál boldogulni, hanem saját múltjának démonjaival is küzd. Az álomvilág rétegei között játszódó cselekmény tele van izgalmas fordulatokkal, miközben a valóság és az illúzió határai elmosódnak. A film mélyen filozófiai kérdéseket vet fel az emberi tudat, az emlékek és az identitás természetéről. Christopher Nolan rendezése lenyűgöző vizuális effektekkel és komplex narratívával mutatja be az álmok világának végtelen lehetőségeit, miközben a karakterek érzelmi mélységeit is feltárja. Az Inception nemcsak egy akciódús sci-fi, hanem egy érzelmileg gazdag történet is, amely az emberi kapcsolatok és a megbocsátás erejét vizsgálja.', '/uploads/movie/Inception.png'),
(4, 'Goodfellas', 32, 1990, 'A film Henry Hill életét és a maffiában betöltött szerepét mutatja be, amely magában foglalja feleségével, Karen Hill-lel való kapcsolatát, valamint maffia társai, Jimmy Conway és Tommy DeVito közötti dinamikát az olasz-amerikai bűnszervezetben. A történet Henry Hill és barátai felemelkedését és bukását követi nyomon 1955-től 1980-ig, bemutatva a maffia világának kegyetlenségét és csillogását. A film részletesen ábrázolja a kapzsiság, az árulás, a pénz, a hatalom és a gyilkosság témáit, miközben betekintést nyújt a maffia belső működésébe. A történet középpontjában két legjobb barát áll: egy maffia végrehajtó és egy kaszinóvezető, akik egymással versengenek egy szerencsejáték-birodalom irányításáért és egy gyors életet élő, vonzó nő kegyeiért. A film mélyen emberi pillanatokat és drámai fordulatokat tár fel, miközben bemutatja a maffia világának sötét oldalát és a benne élők személyes küzdelmeit. Martin Scorsese rendezése mesterien ötvözi a feszültséget, a drámát és a karakterek érzelmi mélységeit, miközben a nézőt elgondolkodtatja a hatalom és a lojalitás kérdéseiről. A Goodfellas nemcsak a bűnözés világának hiteles ábrázolása, hanem egy időtálló történet a barátságról, az árulásról és az emberi természet összetettségéről.', '/uploads/movie/Goodfellas.png'),
(5, 'Kontroll', 25, 2003, 'A film a budapesti metró sötét és misztikus világában játszódik, ahol a jegyellenőrök mindennapjait követhetjük nyomon. A történet középpontjában Bulcsú áll, aki a föld alatti világban él és dolgozik, miközben próbálja feldolgozni múltját és megtalálni önmagát. A film tele van humorral, drámával és izgalmas fordulatokkal, miközben bemutatja a jegyellenőrök és az utasok közötti konfliktusokat, valamint a metró alagútjainak rejtélyes és nyomasztó atmoszféráját. A Kontroll nemcsak egy izgalmas thriller, hanem egy mélyen emberi történet is, amely az identitás, a magány és a megváltás kérdéseit vizsgálja. Nimród Antal rendezése mesterien ötvözi a sötét humor és a feszültség elemeit, miközben a budapesti metró világa szinte önálló karakterként jelenik meg a filmben. A történet során Bulcsú és társai különböző kihívásokkal néznek szembe, amelyek próbára teszik kitartásukat és emberi kapcsolataikat. A Kontroll egyedi látványvilágával és atmoszférájával a magyar filmművészet egyik kiemelkedő alkotása.', '/uploads/movie/Kontroll.png'),
(6, 'Mephisto', 33, 1981, 'Egy német színész, Hendrik Höfgen történetét meséli el, aki a náci Németország felemelkedése idején váratlan sikert ér el a Faust című darabban nyújtott alakításával. A film mélyen vizsgálja a művészet és a politika közötti kapcsolatot, valamint azt, hogy az egyén milyen kompromisszumokat köt a hatalom és a siker érdekében. Höfgen karaktere a Faust történetének modern átirataként jelenik meg, aki eladja a lelkét a hírnévért és a hatalomért, miközben egyre inkább elveszíti erkölcsi iránytűjét. A történet bemutatja, hogyan válik a művészet a propaganda eszközévé, és hogyan használják ki a művészeket a politikai rendszerek. A film a személyes és társadalmi felelősség kérdéseit is boncolgatja, miközben Höfgen belső vívódásait és önazonosságának elvesztését tárja fel. István Szabó rendezése érzékenyen ábrázolja a karakterek érzelmi mélységeit, miközben a korszak történelmi és politikai kontextusát is hitelesen jeleníti meg. A Mephisto nemcsak egy történelmi dráma, hanem egy időtálló tanulságokkal teli mű, amely az emberi gyengeségeket és a hatalom korrumpáló erejét vizsgálja.', '/uploads/movie/Mephisto.png'),
(7, 'Psycho', 28, 1960, 'Egy titkárnő, Marion Crane, elkeseredett lépésre szánja el magát, amikor ellop egy nagyobb összeget munkaadójától, hogy új életet kezdjen szerelmével. Menekülése során egy távoli motelben száll meg, amelyet egy fiatal férfi, Norman Bates üzemeltet, aki látszólag az anyja uralma alatt áll. A történet fokozatosan bontakozik ki, ahogy Marion eltűnése után a nővére és egy magánnyomozó próbálják felderíteni a rejtélyt. A film mesterien építi a feszültséget, miközben a nézők betekintést nyernek Norman Bates zavaros pszichéjébe és a motel sötét titkaiba. Alfred Hitchcock rendezése forradalmi volt a horror és a thriller műfajában, különösen a híres zuhanyzós jelenet révén, amely a filmtörténet egyik legismertebb és legikonikusabb pillanata lett. A Psycho nemcsak a bűn és a bűnhődés témáit vizsgálja, hanem az emberi elme mélységeit és a családi kapcsolatok torzulásait is feltárja. A film a suspense mesterműve, amely a nézőket folyamatosan bizonytalanságban tartja, miközben a végkifejlet sokkoló és felejthetetlen fordulatot hoz.', '/uploads/movie/Psycho.png'),
(8, 'Seven Samurai', 24, 1954, 'Egy szegény japán falu lakói kétségbeesetten keresnek segítséget, amikor banditák fenyegetik őket, hogy elrabolják terményeiket és megélhetésüket. A falusiak végül hét szamurájt bérelnek fel, akik vállalják, hogy megvédik őket a támadóktól. A történet a szamurájok és a falusiak közötti kapcsolat fejlődését mutatja be, miközben a közös cél érdekében összefognak. A film mélyen emberi pillanatokat tár fel, ahogy a szamurájok nemcsak harci képességeiket, hanem bölcsességüket és emberségüket is megosztják a falusiakkal. Akira Kurosawa rendezése mesterien ötvözi az akciót, a drámát és a filozófiai elmélkedéseket, miközben a becsület, az áldozat és a közösség erejének témáit vizsgálja. A film lenyűgöző képi világa és ikonikus karakterei révén a japán filmművészet egyik legkiemelkedőbb alkotásává vált, amely generációk óta inspirálja a filmkészítőket világszerte.', '/uploads/movie/Seven_Samurai.png'),
(9, 'Star Wars: Episode IV - A New Hope', 30, 1977, 'Luke Skywalker, egy fiatal farmfiú, aki a Tatuin bolygón él, váratlanul belekeveredik a galaxis sorsát meghatározó eseményekbe, amikor találkozik Obi-Wan Kenobival, egy visszavonult Jedi lovaggal. A történet során Luke csatlakozik egy lázadó csoporthoz, amely a gonosz Galaktikus Birodalom ellen harcol, és megpróbálja megsemmisíteni a Halálcsillagot, a Birodalom pusztító fegyverét. Útja során barátokra lel Han Solo, egy vakmerő csempész, és Leia hercegnő, a lázadók vezetője személyében. A film tele van izgalmas űrcsatákkal, lenyűgöző idegen világokkal és mély érzelmi pillanatokkal, miközben Luke felfedezi saját erejét és a Jedi örökségét. A történet a bátorság, a barátság és a remény erejét hangsúlyozza, miközben bemutatja a jó és a gonosz közötti örök küzdelmet. George Lucas rendezése forradalmi vizuális effektekkel és ikonikus zenei aláfestéssel új mércét állított fel a sci-fi műfajban, és a Star Wars univerzumot a popkultúra egyik legmeghatározóbb részévé tette.', '/uploads/movie/Star_Wars_IV.png'),
(10, 'Taxi Driver', 32, 1976, 'Egy mentálisan instabil vietnámi veterán, Travis Bickle, éjszakai taxisofőrként dolgozik New York városában, miközben egyre mélyebbre süllyed az elszigeteltség és a paranoia világába. A film bemutatja Travis magányos életét, ahogy próbálja megtalálni helyét egy olyan társadalomban, amelyet erkölcsi hanyatlás és erőszak jellemez. Travis belső vívódásai és a város sötét oldalával való találkozásai fokozatosan egyre szélsőségesebb gondolatokhoz és tettekhez vezetik. A történet során megismerkedik Betsyvel, egy politikai kampány munkatársával, akit idealizál, valamint Iris-szel, egy fiatal prostituálttal, akit megpróbál megmenteni a kizsákmányolás világából. A film mélyen filozófiai és pszichológiai kérdéseket vet fel az emberi természet, az erkölcs és a társadalmi igazságtalanság témáiról. Martin Scorsese rendezése mesterien ábrázolja Travis fokozatos mentális összeomlását, miközben a nézőt is arra készteti, hogy elgondolkodjon a modern városi élet árnyoldalain. A Taxi Driver ikonikus képi világa, erőteljes színészi alakításai és mélyen emberi története a filmtörténet egyik legmeghatározóbb alkotásává tette.', '/uploads/movie/Taxi_Driver.png'),
(11, 'The Godfather', 27, 1972, 'A film egy olasz-amerikai maffiacsalád, a Corleone család történetét meséli el, amelynek középpontjában Vito Corleone, a család idősödő patriarchája áll. A történet bemutatja, hogyan próbálja Vito átadni a hatalmat fiának, Michael Corleonénak, aki kezdetben vonakodik részt venni a család bűnözői ügyleteiben. A film mélyen ábrázolja a családi kötelékek, a lojalitás és a hatalom kérdéseit, miközben a néző betekintést nyer a maffia világának sötét és kegyetlen oldalába. A történet során Michael fokozatosan átalakul, és végül átveszi a család irányítását, miközben szembesül a döntései erkölcsi és személyes következményeivel. A film tele van drámai fordulatokkal, erőteljes érzelmi pillanatokkal és ikonikus jelenetekkel, amelyek a filmtörténet meghatározó részévé váltak. Francis Ford Coppola rendezése mesterien ötvözi a családi drámát és a bűnügyi történetet, miközben a karakterek mély érzelmi és pszichológiai rétegeit tárja fel. A Keresztapa nemcsak a maffia világának hiteles ábrázolása, hanem egy időtálló történet a hatalom, az árulás és a család erejéről, amely generációk óta lenyűgözi a nézőket.', '/uploads/movie/The_Godfather.png'),
(12, 'The Hurt Locker', 26, 2008, 'Az iraki háború idején egy bombahatástalanító egység mindennapjait követhetjük nyomon, akik rendkívül veszélyes helyzetekkel néznek szembe. A történet középpontjában William James őrmester áll, aki a csapat új vezetőjeként érkezik, és merész, gyakran vakmerő megközelítése megosztja társait. A film bemutatja a háború brutalitását és a katonák pszichológiai terheit, miközben a bombák hatástalanítása során a feszültség folyamatosan fokozódik. A történet nemcsak a háborús helyzetek fizikai veszélyeit tárja fel, hanem a katonák közötti dinamikát, a bizalom és a konfliktusok kérdéseit is. A film mélyen emberi pillanatokkal és érzelmi mélységekkel ábrázolja a háború hatását az egyénekre, miközben a túlélésért folytatott küzdelem és a kötelességtudat közötti ellentmondásokat is vizsgálja. Kathryn Bigelow rendezése mesterien ötvözi az akciót és a drámát, miközben a nézőt a háború valóságának közvetlen közelébe hozza. A film a bátorság, a félelem és az emberi kitartás témáit járja körül, miközben a háború értelmetlenségére és az emberi élet törékenységére is rámutat.', '/uploads/movie/The_Hurt_Locker.png'),
(13, 'The Shining', 29, 1980, 'Egy család egy elhagyatott szállodába költözik a téli szezonra, ahol a magány és a természetfeletti erők fokozatosan hatalmukba kerítik az apát, Jack Torrance-t. A szálloda múltja sötét titkokat rejt, amelyek lassan felszínre törnek, miközben Jack mentális állapota egyre romlik. A történet bemutatja, hogyan válik a család a szálloda gonosz energiáinak áldozatává, miközben a feszültség és a rettegés fokozatosan eluralkodik. A kisfiú, Danny, különleges képessége, az úgynevezett \"ragyogás\" révén látomásokat kap a szálloda múltjáról és jövőjéről, amelyek segítenek neki és édesanyjának, Wendynek, megérteni a veszélyt, amelyben vannak. A film a családi kapcsolatok széthullását, az elszigeteltség hatásait és az emberi psziché törékenységét vizsgálja. Stanley Kubrick rendezése mesterien ötvözi a pszichológiai drámát és a természetfeletti horrort, miközben a szálloda nyomasztó atmoszférája szinte önálló karakterként jelenik meg. A történet tele van ikonikus jelenetekkel, amelyek a filmtörténet meghatározó pillanataivá váltak, és a nézőt folyamatosan bizonytalanságban tartják, miközben a végkifejlet sokkoló és felejthetetlen fordulatot hoz.', '/uploads/movie/The_Shining.png'),
(14, 'Vertigo', 28, 1958, 'Egy volt rendőrnyomozó, aki magasságtól való félelmet fejlesztett ki, miután szemtanúja volt egy halálesetnek, egy különös ügybe keveredik, amelyben egy régi ismerős arra kéri, hogy kövesse a feleségét, aki furcsa és megmagyarázhatatlan viselkedést mutat. A történet során a nyomozó egyre mélyebben belemerül a nő életébe, és fokozatosan megszállottjává válik, miközben saját félelmeivel és múltjának traumáival is szembe kell néznie. A film a szerelem, az identitás és az illúzió témáit vizsgálja, miközben Hitchcock mesterien építi a feszültséget és a rejtélyt. A történet tele van váratlan fordulatokkal, érzelmi mélységekkel és pszichológiai összetettséggel, miközben a nézőt folyamatosan bizonytalanságban tartja. A Vertigo nemcsak egy izgalmas thriller, hanem egy mélyen filozófiai és érzelmi utazás is, amely az emberi természet legmélyebb rétegeit tárja fel. Hitchcock rendezése ikonikus képi világgal és lenyűgöző zenei aláfestéssel teszi a filmet a filmtörténet egyik legkiemelkedőbb alkotásává.', '/uploads/movie/Vertigo.png'),
(15, 'The Turin Horse', 34, 2011, 'Egy vidéki paraszt és lánya mindennapjait követhetjük nyomon, akik egy elhagyatott tanyán élnek, távol a civilizációtól. A történet középpontjában a paraszt hűséges lova áll, amely egyre gyengébbé válik, és már nem képes ellátni feladatait. A film lassú, meditatív tempóban mutatja be a mindennapi élet monotonitását, miközben a szereplők fokozatosan szembesülnek az életük kilátástalanságával és a természet könyörtelen erejével. A szélviharok, a sötétség és a magány atmoszférája egyre nyomasztóbbá válik, ahogy a történet előrehalad. A film filozófiai mélységeket érint, az emberi lét törékenységét, az elmúlás elkerülhetetlenségét és a természet erejével való küzdelmet vizsgálva. Béla Tarr rendezése mesterien ötvözi a minimalista képi világot és a szimbolikus jelentéseket, miközben a nézőt arra készteti, hogy elgondolkodjon az emberi élet értelmén és a világban elfoglalt helyünkön. A történet végül a teljes reménytelenség és az elkerülhetetlen végzet érzésével zárul, amely mélyen megrázó és felejthetetlen élményt nyújt.', '/uploads/movie/Turin_Horse.png');

-- --------------------------------------------------------

--
-- Table structure for table `movieactor`
--

CREATE TABLE `movieactor` (
  `movie_Id` int(11) NOT NULL,
  `actor_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `movieactor`
--

INSERT INTO `movieactor` (`movie_Id`, `actor_Id`) VALUES
(2, 17),
(3, 14),
(3, 15),
(3, 16),
(4, 18),
(4, 19),
(4, 20),
(5, 21),
(5, 22),
(6, 23),
(7, 24),
(7, 25),
(8, 26),
(9, 27),
(9, 28),
(9, 29),
(10, 18),
(11, 30),
(11, 31),
(11, 32),
(12, 33),
(13, 34),
(13, 35),
(14, 36),
(14, 37),
(15, 38),
(15, 39);

-- --------------------------------------------------------

--
-- Table structure for table `moviecharacter`
--

CREATE TABLE `moviecharacter` (
  `character_Id` int(11) NOT NULL,
  `movie_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `moviecharacter`
--

INSERT INTO `moviecharacter` (`character_Id`, `movie_Id`) VALUES
(29, 3),
(30, 2),
(31, 4),
(32, 4),
(33, 5),
(34, 6),
(35, 7),
(36, 7),
(37, 8),
(38, 9),
(39, 9),
(40, 9),
(41, 10),
(42, 11),
(43, 11),
(44, 11),
(45, 12),
(46, 13),
(47, 13),
(48, 1),
(49, 14),
(50, 14),
(51, 15),
(52, 15);

-- --------------------------------------------------------

--
-- Table structure for table `moviegenre`
--

CREATE TABLE `moviegenre` (
  `movie_Id` int(11) NOT NULL,
  `genre_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `moviegenre`
--

INSERT INTO `moviegenre` (`movie_Id`, `genre_Id`) VALUES
(1, 12),
(2, 10),
(2, 17),
(3, 12),
(3, 13),
(4, 10),
(4, 15),
(5, 11),
(5, 13),
(6, 10),
(7, 13),
(7, 14),
(8, 10),
(8, 18),
(9, 12),
(9, 18),
(10, 10),
(10, 15),
(11, 10),
(11, 15),
(12, 13),
(12, 16),
(13, 14),
(14, 3),
(14, 13),
(15, 10),
(15, 17);

-- --------------------------------------------------------

--
-- Table structure for table `tvcharacter`
--

CREATE TABLE `tvcharacter` (
  `tvShow_Id` int(11) NOT NULL,
  `character_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tvcharacter`
--

INSERT INTO `tvcharacter` (`tvShow_Id`, `character_Id`) VALUES
(2, 19),
(3, 20),
(4, 21),
(5, 22),
(6, 23),
(7, 24),
(8, 25),
(9, 26),
(10, 27),
(12, 28);

-- --------------------------------------------------------

--
-- Table structure for table `tvepisode`
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
-- Dumping data for table `tvepisode`
--

INSERT INTO `tvepisode` (`id`, `episodeNumber`, `title`, `description`, `releaseDate`, `tvSeason_Id`) VALUES
(1, 1, 'Pilot', 'Walter White, egy középiskolai kémiatanár, megtudja, hogy halálos rákbetegsége van, és úgy dönt, hogy biztosítja családja anyagi jövőjét. Elkeseredettségében és a kémiában szerzett tudását fe', '2008-01-20 00:00:00.000', 1),
(2, 1, 'Uno', 'Jimmy McGill, egy kisstílű ügyvéd, aki alig boldogul, megpróbálja megváltoztatni életét, miután egy jótékonysági cselekedet inspirálja. Az epizód bemutatja Jimmy küzdelmét, hogy kitörjön a si', '2015-02-08 00:00:00.000', 3),
(3, 1, 'Pilot', 'Egy volt ügyvéd, Jeff Winger, kénytelen visszatérni a közösségi főiskolára, hogy megszerezze a diplomáját, miután kiderül, hogy korábbi végzettsége hamis. Az epizód bemutatja Jeff próbálkozás', '2009-09-17 00:00:00.000', 4);

-- --------------------------------------------------------

--
-- Table structure for table `tvgenre`
--

CREATE TABLE `tvgenre` (
  `tvShow_Id` int(11) NOT NULL,
  `genre_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tvgenre`
--

INSERT INTO `tvgenre` (`tvShow_Id`, `genre_Id`) VALUES
(1, 10),
(2, 10),
(3, 10),
(4, 11),
(5, 11),
(6, 10),
(7, 10),
(8, 11),
(9, 12),
(10, 10),
(11, 10),
(12, 10);

-- --------------------------------------------------------

--
-- Table structure for table `tvseason`
--

CREATE TABLE `tvseason` (
  `id` int(11) NOT NULL,
  `seasonNumber` int(11) NOT NULL,
  `releaseYear` int(11) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `tvShow_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tvseason`
--

INSERT INTO `tvseason` (`id`, `seasonNumber`, `releaseYear`, `description`, `tvShow_Id`) VALUES
(1, 1, 2008, 'First season of Breaking Bad', 2),
(2, 2, 2009, 'Second season of Breaking Bad', 2),
(3, 1, 2015, 'First season of Better Call Saul', 3),
(4, 1, 2009, 'First season of Community', 4),
(5, 1, 2016, 'First season of Fleabag', 5),
(6, 1, 2005, 'First season of Grey\'s Anatomy', 6),
(7, 1, 2020, 'First season of I May Destroy You', 7),
(8, 1, 1997, 'First season of King of the Hill', 8),
(9, 1, 2013, 'First season of Rick and Morty', 9),
(10, 1, 1999, 'First season of The Sopranos', 10),
(11, 1, 2017, 'First season of The Deuce', 11),
(12, 1, 2002, 'First season of The Wire', 12);

-- --------------------------------------------------------

--
-- Table structure for table `tvshow`
--

CREATE TABLE `tvshow` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `creator_Id` int(11) NOT NULL,
  `description` text NOT NULL,
  `seasons` int(11) NOT NULL,
  `coverArt` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tvshow`
--

INSERT INTO `tvshow` (`id`, `title`, `creator_Id`, `description`, `seasons`, `coverArt`) VALUES
(1, 'American Horror Story', 20, 'Egy antológia sorozat, amely különböző karakterekre és helyszínekre összpontosít, minden évad egy új történetet mesél el. A sorozat a horror műfaj különböző aspektusait tárja fel, beleértve a kísértetházakat, boszorkányokat, cirkuszi szörnyeket és apokaliptikus eseményeket. A történetek gyakran sötét, pszichológiai mélységeket érintenek, miközben társadalmi kérdéseket is boncolgatnak.', 10, '/uploads/tv/AHS.png'),
(2, 'Breaking Bad', 17, 'Egy középiskolai kémiatanár, akit rákos megbetegedéssel diagnosztizálnak, úgy dönt, hogy metamfetamint kezd gyártani és árusítani, hogy biztosítsa családja jövőjét. A sorozat a bűnözés világába való fokozatos elmerülését mutatja be, miközben a karakterek morális dilemmákkal és személyes konfliktusokkal szembesülnek. A történet a hatalom, a kapzsiság és a családi kötelékek témáit vizsgálja.', 5, '/uploads/tv/BB.png'),
(3, 'Better Call Saul', 17, 'Egy ügyvéd, Jimmy McGill, küzdelmei és átalakulása Saul Goodmanné, a Breaking Bad ikonikus karakterévé. A sorozat bemutatja Jimmy életének korai szakaszát, beleértve a családi és szakmai kihívásokat, valamint a bűnözői világba való fokozatos belépését. A történet mélyen emberi, tele humorral, drámával és váratlan fordulatokkal.', 6, '/uploads/tv/BCS.png'),
(4, 'Community', 18, 'Egy felfüggesztett ügyvéd kénytelen beiratkozni egy közösségi főiskolára, ahol egy színes személyiségekből álló tanári kar és diáksereg várja. A sorozat humoros és szatirikus módon mutatja be az oktatási rendszer és a társadalmi kapcsolatok dinamikáját. A karakterek közötti interakciók és a kreatív epizódok teszik a sorozatot egyedivé.', 6, '/uploads/tv/Community.png'),
(5, 'Fleabag', 23, 'Egy fiatal nő életét követi nyomon Londonban, aki próbál megbirkózni a veszteséggel, a családi konfliktusokkal és a modern élet kihívásaival. A sorozat egyedi humorral és érzelmi mélységgel mutatja be a főszereplő belső világát, miközben a nézőkkel közvetlenül kommunikál. A történet a magány, a szeretet és az önelfogadás témáit járja körül.', 2, '/uploads/tv/Fleabag.png'),
(6, 'Grey\'s Anatomy', 21, 'Egy orvosi dráma, amely a sebészeti gyakornokok és mentoraik személyes és szakmai életére összpontosít. A sorozat bemutatja a kórházi élet intenzív pillanatait, a bonyolult emberi kapcsolatokat és a karakterek fejlődését. A történet tele van érzelmi csúcspontokkal, tragédiákkal és felemelő pillanatokkal, miközben az orvosi etika és a személyes döntések kérdéseit is érinti.', 18, '/uploads/tv/Greys_Anatomy.png'),
(7, 'I May Destroy You', 16, 'Egy nő története, aki megpróbálja újraépíteni az életét egy szexuális támadás után. A sorozat mélyen személyes és provokatív módon tárja fel a trauma, a gyógyulás és az önazonosság kérdéseit. A történet a modern társadalom kihívásait és a kapcsolatok bonyolultságát is bemutatja.', 1, '/uploads/tv/IMDY.png'),
(8, 'King of the Hill', 19, 'Egy texasi propánkereskedő, Hank Hill, és családja mindennapjait követi nyomon. A sorozat humoros és szatirikus módon mutatja be az amerikai középosztály életét, miközben a családi kapcsolatok és a közösségi értékek fontosságát hangsúlyozza. A történetek gyakran hétköznapi problémákból indulnak ki, de mélyebb társadalmi kérdéseket is érintenek.', 13, '/uploads/tv/KOTH.png'),
(9, 'Rick and Morty', 18, 'Egy animációs sorozat, amely egy excentrikus, alkoholista tudós és unokája kalandjait követi nyomon különböző dimenziókban és univerzumokban. A sorozat tele van sötét humorral, filozófiai kérdésekkel és tudományos-fantasztikus elemekkel. A történetek gyakran a családi kapcsolatok és az emberi természet mélyebb aspektusait is vizsgálják.', 6, '/uploads/tv/RaM.png'),
(10, 'The Sopranos', 15, 'Egy New Jersey-i maffiafőnök, Tony Soprano, életét mutatja be, aki egyszerre próbálja kezelni a bűnözői világ kihívásait és a családi problémákat. A sorozat mélyen emberi és pszichológiai portrét fest a főszereplőről, miközben a hatalom, a lojalitás és a morális dilemmák kérdéseit vizsgálja. A történet tele van drámával, feszültséggel és váratlan fordulatokkal.', 6, '/uploads/tv/Sopranos.png'),
(11, 'The Deuce', 22, 'A pornóipar felemelkedését mutatja be New Yorkban az 1970-es évektől kezdve. A sorozat részletesen ábrázolja a társadalmi és gazdasági változásokat, amelyek a szexipar növekedéséhez vezettek. A történet a karakterek személyes küzdelmeit és a korszak kulturális dinamikáját is bemutatja.', 3, '/uploads/tv/The_Deuce.png'),
(12, 'The Wire', 22, 'Baltimore drogvilágát mutatja be a dílerek és a rendfenntartók szemszögéből. A sorozat realisztikus és részletes képet fest a város társadalmi és politikai problémáiról, miközben a karakterek személyes történeteire is nagy hangsúlyt fektet. A történet a hatalom, a korrupció és az igazságosság kérdéseit vizsgálja.', 5, '/uploads/tv/The_Wire.png');

-- --------------------------------------------------------

--
-- Table structure for table `tvshowactor`
--

CREATE TABLE `tvshowactor` (
  `tvShow_Id` int(11) NOT NULL,
  `actor_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tvshowactor`
--

INSERT INTO `tvshowactor` (`tvShow_Id`, `actor_Id`) VALUES
(1, 5),
(2, 1),
(2, 2),
(4, 6),
(4, 11),
(5, 7),
(6, 8),
(7, 9),
(8, 10),
(10, 12),
(12, 13);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `groupId` int(11) NOT NULL,
  `ForgotToken` varchar(100) DEFAULT NULL,
  `ForgotTokenExpiresAt` datetime(3) DEFAULT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `verificationToken` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `lastLogin` datetime(3) DEFAULT NULL,
  `name` varchar(191) DEFAULT NULL,
  `avatar` varchar(191) DEFAULT NULL,
  `bio` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `groupId`, `ForgotToken`, `ForgotTokenExpiresAt`, `verified`, `verificationToken`, `createdAt`, `updatedAt`, `lastLogin`, `name`, `avatar`, `bio`) VALUES
(2, 'Csongor', '$2a$10$MvTBLCKKvSi416b//hKNvuVjbHFGEpgnCYujz.Hop6M5gNdrnaPHW', 'laszlocsongor39@gmail.com', 1, NULL, NULL, 1, NULL, '2025-04-15 00:46:37.602', '2025-04-27 06:37:27.218', NULL, 'Csongor László', '/uploads/profile/avatar-1745735847207-731590422.png', NULL),
(3, 'Admin', '$2a$10$8KwEBO1JDFJynzvJEmiOguareumLS1NbrWFAxBqbPmI9JlvRZPD8C', 'pollak.bookclub@gmail.com', 1, NULL, NULL, 1, NULL, '0000-00-00 00:00:00.000', '0000-00-00 00:00:00.000', NULL, NULL, '/uploads/profile/adminPFP.png', NULL),
(4, 'Csongor2', '$2a$10$7HPv49WD1Tec/1Z7IS1G1euRghEs/qkWP8ZNAXbJdVBsUYOo36XyW', 'fancakedessert@gmail.com', 2, NULL, NULL, 1, NULL, '2025-04-15 01:19:36.195', '2025-04-15 01:34:58.573', NULL, 'csongor2', '/uploads/profie/pfp1.png', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `userbookrating`
--

CREATE TABLE `userbookrating` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `bookId` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `favorite` tinyint(1) NOT NULL DEFAULT 0,
  `content` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `userbookrating`
--

INSERT INTO `userbookrating` (`id`, `userId`, `bookId`, `rating`, `title`, `favorite`, `content`, `createdAt`, `updatedAt`) VALUES
(2, 2, 1, 5, 'Kemeny volt', 1, 'Wow.....', '2025-04-15 00:47:58.768', '2025-04-15 00:50:22.833'),
(3, 4, 2, 4, 'dwadsdawd', 1, 'dwasdawfasdwads', '2025-04-15 01:58:02.810', '2025-04-15 01:58:07.645'),
(4, 2, 2, 3, 'finom', 1, 'asdwads', '2025-04-15 02:00:01.007', '2025-04-15 02:00:01.007');

-- --------------------------------------------------------

--
-- Table structure for table `usermovierating`
--

CREATE TABLE `usermovierating` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `favorite` tinyint(1) NOT NULL DEFAULT 0,
  `content` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usermovierating`
--

INSERT INTO `usermovierating` (`id`, `userId`, `movieId`, `rating`, `title`, `favorite`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, 2, 'dwasdwad', 1, 'afwafs', '2025-04-15 02:01:07.493', '2025-04-15 02:01:07.493'),
(2, 2, 3, 1, 'Nem a legjobb NGL', 0, 'miamanóó', '2025-04-15 03:46:03.811', '2025-04-15 03:46:03.811');

-- --------------------------------------------------------

--
-- Table structure for table `usertvshowrating`
--

CREATE TABLE `usertvshowrating` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `tvShowId` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `favorite` tinyint(1) NOT NULL DEFAULT 0,
  `content` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usertvshowrating`
--

INSERT INTO `usertvshowrating` (`id`, `userId`, `tvShowId`, `rating`, `title`, `favorite`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 2, 7, 5, 'adwadwa', 1, 'aaaaaaaaaaaa', '2025-04-15 02:01:18.113', '2025-04-15 02:01:18.113'),
(2, 2, 2, 4, 'Kémiai Reakció: Sötét utazás a moralitás határain', 1, 'A Breaking Bad briliánsan egyensúlyoz a rendkívüli és a hétköznapi között, megteremtve a televíziózás egyik legmeggyőzőbb karaktertanulmányát. Bryan Cranston alakítása, ahogy a szelíd kémiatanárból könyörtelen drogbáróvá válik, egyszerűen lenyűgöző. Walter White fokozatos erkölcsi hanyatlása hátborzongatóan hiteles – egyszerre szurkolsz neki és borzadsz el a döntéseitől.\n\nA mellékszereplők hasonlóan kiemelkedőek. Aaron Paul Jesse Pinkman karaktere egy egydimenziós mellékszereplőből meglepően érzelmi mélységgel bíró alakká fejlődik. Giancarlo Esposito kiszámított Gus Fring alakításával a televíziózás egyik legemlékezetesebb gonosztevőjét teremti meg, míg Bob Odenkirk tökéletesen időzített komikus felüdülést nyújt mint a gátlástalan ügyvéd, Saul Goodman.\n\nVince Gilligan rendezése és a forgatókönyvírói csapat hatalmas elismerést érdemel a lassan kibontakozó történet megalkotásáért, amely jutalmazza a türelmet. A sorozat vizuális stílusa – a lenyűgöző új-mexikói tájtól a jellegzetes színpalettáig – újabb narratív réteget ad, amely a standard bűnügyi drámák fölé emeli.\n\nBár néha frusztrálónak találtam az ütemet (különösen a 3. évad közepén), és néhány mellékszereplő kevesebb fejlődést kapott, mint megérdemelte volna, ezek az apró hibák alig vonnak le az össz teljesítményből. A Breaking Bad nem mindig könnyű néznivaló – könyörtelen pillantása az erkölcsi kompromisszumok következményeire valóban zavaró lehet –, de továbbra is a televíziózás egyik legelgondolkodtatóbb és szakmailag legkiválóbb drámája marad.', '2025-04-15 03:45:34.667', '2025-04-15 03:45:34.667');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
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
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('560f3bf6-520a-4854-bbea-40482d003349', '24dbd97c88e8ac8d6bbe7c666994978a2f72b59ac003a7bdf2b0644ba018fb73', '2025-04-14 21:34:34.968', '20250414213433_', NULL, NULL, '2025-04-14 21:34:33.595', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Book_author_Id_fkey` (`author_Id`);

--
-- Indexes for table `bookcharacter`
--
ALTER TABLE `bookcharacter`
  ADD PRIMARY KEY (`book_Id`,`character_Id`),
  ADD KEY `BookCharacter_character_Id_fkey` (`character_Id`);

--
-- Indexes for table `bookgenre`
--
ALTER TABLE `bookgenre`
  ADD PRIMARY KEY (`book_Id`,`genre_Id`),
  ADD KEY `BookGenre_genre_Id_fkey` (`genre_Id`);

--
-- Indexes for table `character`
--
ALTER TABLE `character`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `characteractor`
--
ALTER TABLE `characteractor`
  ADD PRIMARY KEY (`character_Id`,`actor_Id`),
  ADD KEY `CharacterActor_actor_Id_fkey` (`actor_Id`);

--
-- Indexes for table `creative`
--
ALTER TABLE `creative`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Group_name_key` (`name`);

--
-- Indexes for table `maindata`
--
ALTER TABLE `maindata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Movie_director_Id_fkey` (`director_Id`);

--
-- Indexes for table `movieactor`
--
ALTER TABLE `movieactor`
  ADD PRIMARY KEY (`movie_Id`,`actor_Id`),
  ADD KEY `MovieActor_actor_Id_fkey` (`actor_Id`);

--
-- Indexes for table `moviecharacter`
--
ALTER TABLE `moviecharacter`
  ADD PRIMARY KEY (`character_Id`,`movie_Id`),
  ADD KEY `MovieCharacter_movie_Id_fkey` (`movie_Id`);

--
-- Indexes for table `moviegenre`
--
ALTER TABLE `moviegenre`
  ADD PRIMARY KEY (`movie_Id`,`genre_Id`),
  ADD KEY `MovieGenre_genre_Id_fkey` (`genre_Id`);

--
-- Indexes for table `tvcharacter`
--
ALTER TABLE `tvcharacter`
  ADD PRIMARY KEY (`tvShow_Id`,`character_Id`),
  ADD KEY `TvCharacter_character_Id_fkey` (`character_Id`);

--
-- Indexes for table `tvepisode`
--
ALTER TABLE `tvepisode`
  ADD PRIMARY KEY (`id`),
  ADD KEY `TvEpisode_tvSeason_Id_fkey` (`tvSeason_Id`);

--
-- Indexes for table `tvgenre`
--
ALTER TABLE `tvgenre`
  ADD PRIMARY KEY (`tvShow_Id`,`genre_Id`),
  ADD KEY `TvGenre_genre_Id_fkey` (`genre_Id`);

--
-- Indexes for table `tvseason`
--
ALTER TABLE `tvseason`
  ADD PRIMARY KEY (`id`),
  ADD KEY `TvSeason_tvShow_Id_fkey` (`tvShow_Id`);

--
-- Indexes for table `tvshow`
--
ALTER TABLE `tvshow`
  ADD PRIMARY KEY (`id`),
  ADD KEY `TvShow_creator_Id_fkey` (`creator_Id`);

--
-- Indexes for table `tvshowactor`
--
ALTER TABLE `tvshowactor`
  ADD PRIMARY KEY (`tvShow_Id`,`actor_Id`),
  ADD KEY `TvShowActor_actor_Id_fkey` (`actor_Id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_username_key` (`username`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD UNIQUE KEY `User_ForgotToken_key` (`ForgotToken`),
  ADD KEY `User_groupId_fkey` (`groupId`);

--
-- Indexes for table `userbookrating`
--
ALTER TABLE `userbookrating`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UserBookRating_userId_bookId_key` (`userId`,`bookId`),
  ADD KEY `UserBookRating_bookId_fkey` (`bookId`);

--
-- Indexes for table `usermovierating`
--
ALTER TABLE `usermovierating`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UserMovieRating_userId_movieId_key` (`userId`,`movieId`),
  ADD KEY `UserMovieRating_movieId_fkey` (`movieId`);

--
-- Indexes for table `usertvshowrating`
--
ALTER TABLE `usertvshowrating`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UserTVShowRating_userId_tvShowId_key` (`userId`,`tvShowId`),
  ADD KEY `UserTVShowRating_tvShowId_fkey` (`tvShowId`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actor`
--
ALTER TABLE `actor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=312;

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT for table `character`
--
ALTER TABLE `character`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=289;

--
-- AUTO_INCREMENT for table `creative`
--
ALTER TABLE `creative`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=429;

--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=155;

--
-- AUTO_INCREMENT for table `group`
--
ALTER TABLE `group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `tvepisode`
--
ALTER TABLE `tvepisode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tvseason`
--
ALTER TABLE `tvseason`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tvshow`
--
ALTER TABLE `tvshow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `userbookrating`
--
ALTER TABLE `userbookrating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usermovierating`
--
ALTER TABLE `usermovierating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usertvshowrating`
--
ALTER TABLE `usertvshowrating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `Book_author_Id_fkey` FOREIGN KEY (`author_Id`) REFERENCES `creative` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `bookcharacter`
--
ALTER TABLE `bookcharacter`
  ADD CONSTRAINT `BookCharacter_book_Id_fkey` FOREIGN KEY (`book_Id`) REFERENCES `book` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `BookCharacter_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `character` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `bookgenre`
--
ALTER TABLE `bookgenre`
  ADD CONSTRAINT `BookGenre_book_Id_fkey` FOREIGN KEY (`book_Id`) REFERENCES `book` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `BookGenre_genre_Id_fkey` FOREIGN KEY (`genre_Id`) REFERENCES `genre` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `characteractor`
--
ALTER TABLE `characteractor`
  ADD CONSTRAINT `CharacterActor_actor_Id_fkey` FOREIGN KEY (`actor_Id`) REFERENCES `actor` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterActor_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `character` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `movie`
--
ALTER TABLE `movie`
  ADD CONSTRAINT `Movie_director_Id_fkey` FOREIGN KEY (`director_Id`) REFERENCES `creative` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `movieactor`
--
ALTER TABLE `movieactor`
  ADD CONSTRAINT `MovieActor_actor_Id_fkey` FOREIGN KEY (`actor_Id`) REFERENCES `actor` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `MovieActor_movie_Id_fkey` FOREIGN KEY (`movie_Id`) REFERENCES `movie` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `moviecharacter`
--
ALTER TABLE `moviecharacter`
  ADD CONSTRAINT `MovieCharacter_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `character` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `MovieCharacter_movie_Id_fkey` FOREIGN KEY (`movie_Id`) REFERENCES `movie` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `moviegenre`
--
ALTER TABLE `moviegenre`
  ADD CONSTRAINT `MovieGenre_genre_Id_fkey` FOREIGN KEY (`genre_Id`) REFERENCES `genre` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `MovieGenre_movie_Id_fkey` FOREIGN KEY (`movie_Id`) REFERENCES `movie` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `tvcharacter`
--
ALTER TABLE `tvcharacter`
  ADD CONSTRAINT `TvCharacter_character_Id_fkey` FOREIGN KEY (`character_Id`) REFERENCES `character` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `TvCharacter_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `tvshow` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `tvepisode`
--
ALTER TABLE `tvepisode`
  ADD CONSTRAINT `TvEpisode_tvSeason_Id_fkey` FOREIGN KEY (`tvSeason_Id`) REFERENCES `tvseason` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `tvgenre`
--
ALTER TABLE `tvgenre`
  ADD CONSTRAINT `TvGenre_genre_Id_fkey` FOREIGN KEY (`genre_Id`) REFERENCES `genre` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `TvGenre_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `tvshow` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `tvseason`
--
ALTER TABLE `tvseason`
  ADD CONSTRAINT `TvSeason_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `tvshow` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `tvshow`
--
ALTER TABLE `tvshow`
  ADD CONSTRAINT `TvShow_creator_Id_fkey` FOREIGN KEY (`creator_Id`) REFERENCES `creative` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `tvshowactor`
--
ALTER TABLE `tvshowactor`
  ADD CONSTRAINT `TvShowActor_actor_Id_fkey` FOREIGN KEY (`actor_Id`) REFERENCES `actor` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `TvShowActor_tvShow_Id_fkey` FOREIGN KEY (`tvShow_Id`) REFERENCES `tvshow` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `User_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `group` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `userbookrating`
--
ALTER TABLE `userbookrating`
  ADD CONSTRAINT `UserBookRating_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UserBookRating_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usermovierating`
--
ALTER TABLE `usermovierating`
  ADD CONSTRAINT `UserMovieRating_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `movie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UserMovieRating_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usertvshowrating`
--
ALTER TABLE `usertvshowrating`
  ADD CONSTRAINT `UserTVShowRating_tvShowId_fkey` FOREIGN KEY (`tvShowId`) REFERENCES `tvshow` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UserTVShowRating_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- Start transaction for safer import
START TRANSACTION;

-- Create and populate Creative people (authors/directors/creators)
INSERT INTO creative (name, picture, author_book, director_movie, creator_show) VALUES
-- Authors
('Jane Austen', '/uploads/creative/Austen.png', 1, 0, 0),
('Mikhail Bulgakov', '/uploads/creative/Bulgakov.png', 1, 0, 0),
('Agatha Christie', '/uploads/creative/Christie.png', 1, 0, 0),
('Fyodor Dostoevsky', '/uploads/creative/Dostoevsky.png', 1, 0, 0),
('Ernest Hemingway', '/uploads/creative/Hemingway.png', 1, 0, 0),
('Mór Jókai', '/uploads/creative/Jókai.png', 1, 0, 0),
('Franz Kafka', '/uploads/creative/Kafka.png', 1, 0, 0),
('Dezső Kosztolányi', '/uploads/creative/Kosztolányi.png', 1, 0, 0),
('Gabriel García Márquez', '/uploads/creative/Marquez.png', 1, 0, 0),
('Ferenc Molnár', '/uploads/creative/Molnár.png', 1, 0, 0),
('George Orwell', '/uploads/creative/Orwell.png', 1, 0, 0),
('Virginia Woolf', '/uploads/creative/Woolf.png', 1, 0, 0),
('Magda Szabó', NULL, 1, 0, 0),

-- TV Creators
('Hirohiko Araki', '/uploads/creative/Araki.jpg', 0, 0, 1),
('David Chase', '/uploads/creative/Chase.png', 0, 0, 1),
('Michaela Coel', '/uploads/creative/Coel.png', 0, 0, 1),
('Vince Gilligan', '/uploads/creative/Gilligan.jpg', 0, 0, 1),
('Dan Harmon', '/uploads/creative/Harmon.png', 0, 0, 1),
('Mike Judge', '/uploads/creative/Judge.png', 0, 0, 1),
('Ryan Murphy', '/uploads/creative/Murphy.png', 0, 0, 1),
('Shonda Rhimes', '/uploads/creative/Rhimes.png', 0, 0, 1),
('David Simon', '/uploads/creative/Simon.png', 0, 0, 1),
('Phoebe Waller-Bridge', '/uploads/creative/Waller-Bridge.png', 0, 0, 1),

-- Directors
('Akira Kurosawa', '/uploads/creative/Akira.jpg', 0, 1, 0),
('Nimród Antal', '/uploads/creative/Antal.png', 0, 1, 0),
('Kathryn Bigelow', '/uploads/creative/Bigelow.png', 0, 1, 0),
('Francis Ford Coppola', '/uploads/creative/Coppola.png', 0, 1, 0),
('Alfred Hitchcock', '/uploads/creative/Hitchcock.jpg', 0, 1, 0),
('Stanley Kubrick', '/uploads/creative/Kubrick.jpg', 0, 1, 0),
('George Lucas', '/uploads/creative/Lucas.jpg', 0, 1, 0),
('Christopher Nolan', '/uploads/creative/Nolan.png', 0, 1, 0),
('Martin Scorsese', '/uploads/creative/Scorsese.jpg', 0, 1, 0),
('István Szabó', '/uploads/creative/Szabó_Ist.png', 0, 1, 0),
('Béla Tarr', '/uploads/creative/Tarr.png', 0, 1, 0),
('Agnès Varda', '/uploads/creative/Varda.png', 0, 1, 0);

-- Insert genres
INSERT INTO genre (genre, description) VALUES
('Fiction', 'Literary works of imagination rather than fact'),
('Dystopian', 'Fiction set in a society characterized by misery and oppression'),
('Mystery', 'Fiction dealing with the solution of a crime or puzzle'),
('Russian Literature', 'Literary works from Russian authors'),
('Modernist', 'Literary works characterized by a break from traditional forms'),
('Romance', 'Fiction dealing with love and relationships'),
('Satire', 'Literary works that use humor, irony, and exaggeration'),
('Magical Realism', 'Fiction with realistic narrative and elements of magic'),
('Hungarian Literature', 'Literary works from Hungarian authors'),
('Drama', 'Fiction focusing on serious, emotional subjects'),
('Comedy', 'Works intended to be humorous and entertaining'),
('Science Fiction', 'Fiction based on imagined scientific discoveries or developments'),
('Thriller', 'A genre of fiction with numerous, often overlapping subgenres'),
('Horror', 'A genre of fiction that is intended to frighten, scare, or disgust'),
('Crime', 'A genre that fictionalizes crimes, their detection, criminals, and their motives'),
('War', 'A genre of film that focuses on warfare'),
('Art Film', 'A genre that is typically serious, produced primarily for aesthetic reasons'),
('Adventure', 'A genre that features exciting and often dangerous journeys or quests');

-- Insert actor placeholders for potential TV show connections
INSERT INTO actor (name, picture) VALUES
('Bryan Cranston', NULL),
('Aaron Paul', NULL),
('Peter Dinklage', NULL),
('Emilia Clarke', NULL),
('Sarah Paulson', NULL),
('Joel McHale', NULL),
('Phoebe Waller-Bridge', NULL),
('Ellen Pompeo', NULL),
('Michaela Coel', NULL),
('Mike Judge', NULL),
('Donald Glover', NULL),
('James Gandolfini', NULL),
('Idris Elba', NULL);

-- Insert character placeholders for books and TV shows
INSERT INTO `character` (name) VALUES
('Winston Smith'),          -- 1984
('Boxer'),                  -- Animal Farm
('Rodion Raskolnikov'),     -- Crime and Punishment
('Emma Woodhouse'),         -- Emma
('Robert Jordan'),          -- For Whom the Bell Tolls
('Woland'),                 -- The Master and Margarita
('Clarissa Dalloway'),      -- Mrs Dalloway
('Hercule Poirot'),         -- Murder on the Orient Express
('Aureliano Buendía'),      -- One Hundred Years of Solitude
('Elizabeth Bennet'),       -- Pride and Prejudice
('Gregor Samsa'),           -- The Metamorphosis
('Baradlay Richárd'),       -- A kőszívű ember fiai
('Nemecsek Ernő'),          -- A Pál utcai fiúk
('Gina'),                   -- Abigél
('Emerence'),               -- Az ajtó
('Timár Mihály'),           -- Az arany ember
('Édes Anna'),              -- Édes Anna
('Esti Kornél'),            -- Esti Kornél
('Walter White'),           -- Breaking Bad
('Saul Goodman'),           -- Better Call Saul
('Jeff Winger'),            -- Community
('Fleabag'),                -- Fleabag
('Meredith Grey'),          -- Grey's Anatomy
('Arabella'),               -- I May Destroy You
('Hank Hill'),              -- King of the Hill
('Rick Sanchez'),           -- Rick and Morty
('Tony Soprano'),           -- The Sopranos
('Omar Little');            -- The Wire

-- Insert books with references to authors (creative)
INSERT INTO book (title, author_Id, releaseYear, description, coverArt) VALUES
-- Find author_Id values by matching with name in creative table
((SELECT '1984'), (SELECT id FROM creative WHERE name = 'George Orwell'), 1949, 'A dystopian novel set in a totalitarian state', '/uploads/book/1984.png'),
((SELECT 'Animal Farm'), (SELECT id FROM creative WHERE name = 'George Orwell'), 1945, 'An allegorical novella about a group of farm animals who rebel against their human farmer', '/uploads/book/Animal_Farm.png'),
((SELECT 'Crime and Punishment'), (SELECT id FROM creative WHERE name = 'Fyodor Dostoevsky'), 1866, 'A novel about the mental anguish and moral dilemmas of a poor ex-student', '/uploads/book/Crime_and_Punishment.png'),
((SELECT 'Emma'), (SELECT id FROM creative WHERE name = 'Jane Austen'), 1815, 'A novel about youthful hubris and romantic misunderstandings', '/uploads/book/Emma.png'),
((SELECT 'For Whom the Bell Tolls'), (SELECT id FROM creative WHERE name = 'Ernest Hemingway'), 1940, 'A novel set during the Spanish Civil War', '/uploads/book/For_Whom_the_Bell_Tolls.png'),
((SELECT 'The Master and Margarita'), (SELECT id FROM creative WHERE name = 'Mikhail Bulgakov'), 1967, 'A novel about the devil visiting the Soviet Union', '/uploads/book/Master_and_Margarita.png'),
((SELECT 'Mrs Dalloway'), (SELECT id FROM creative WHERE name = 'Virginia Woolf'), 1925, 'A novel that details a day in the life of Clarissa Dalloway', '/uploads/book/Mrs_Dalloway.png'),
((SELECT 'Murder on the Orient Express'), (SELECT id FROM creative WHERE name = 'Agatha Christie'), 1934, 'A detective novel featuring Hercule Poirot', '/uploads/book/Murder_on_the_Orient_Express.png'),
((SELECT 'One Hundred Years of Solitude'), (SELECT id FROM creative WHERE name = 'Gabriel García Márquez'), 1967, 'A novel about the Buendía family in the fictional town of Macondo', '/uploads/book/One_Hundred_Years_of_Solitude.png'),
((SELECT 'Pride and Prejudice'), (SELECT id FROM creative WHERE name = 'Jane Austen'), 1813, 'A romantic novel of manners', '/uploads/book/Pride_and_Prejudice.png'),
((SELECT 'The Metamorphosis'), (SELECT id FROM creative WHERE name = 'Franz Kafka'), 1915, 'A novella about a man who wakes up transformed into a giant insect', '/uploads/book/The_Metamorphosis.png'),
((SELECT 'A kőszívű ember fiai'), (SELECT id FROM creative WHERE name = 'Mór Jókai'), 1869, 'A novel about the Hungarian Revolution of 1848', '/uploads/book/A_kőszívű_ember_fiai.png'),
((SELECT 'A Pál utcai fiúk'), (SELECT id FROM creative WHERE name = 'Ferenc Molnár'), 1906, 'A novel about schoolboys defending their playground', '/uploads/book/A_Pál_utcai_fiúk.png'),
((SELECT 'Abigél'), (SELECT id FROM creative WHERE name = 'Magda Szabó'), 1970, 'A novel about a girl sent to a boarding school during WWII', '/uploads/book/Abigél.png'),
((SELECT 'Az ajtó'), (SELECT id FROM creative WHERE name = 'Magda Szabó'), 1987, 'A novel about the relationship between a writer and her housekeeper', '/uploads/book/Az_ajtó.png'),
((SELECT 'Az arany ember'), (SELECT id FROM creative WHERE name = 'Mór Jókai'), 1872, 'A novel about a merchant who becomes wealthy through a shipwreck', '/uploads/book/Az_arany_ember.png'),
((SELECT 'Édes Anna'), (SELECT id FROM creative WHERE name = 'Dezső Kosztolányi'), 1926, 'A novel about a servant girl who murders her employers', '/uploads/book/Édes_Anna.png'),
((SELECT 'Esti Kornél'), (SELECT id FROM creative WHERE name = 'Dezső Kosztolányi'), 1933, 'A collection of short stories about Kornél Esti', '/uploads/book/Esti_Kornél.png');

-- Insert TV shows with references to creators
INSERT INTO tvshow (title, creator_Id, description, seasons, coverArt) VALUES
((SELECT 'American Horror Story'), (SELECT id FROM creative WHERE name = 'Ryan Murphy'), 'An anthology series centering on different characters and locations', 10, '/uploads/tv/AHS.png'),
((SELECT 'Breaking Bad'), (SELECT id FROM creative WHERE name = 'Vince Gilligan'), 'A high school chemistry teacher diagnosed with cancer turns to producing and selling methamphetamine', 5, '/uploads/tv/BB.png'),
((SELECT 'Better Call Saul'), (SELECT id FROM creative WHERE name = 'Vince Gilligan'), 'The trials and tribulations of criminal lawyer Jimmy McGill before he established his strip-mall law office in Albuquerque', 6, '/uploads/tv/BCS.png'),
((SELECT 'Community'), (SELECT id FROM creative WHERE name = 'Dan Harmon'), 'A suspended lawyer is forced to enroll in a community college with an eclectic staff and student body', 6, '/uploads/tv/Community.png'),
((SELECT 'Fleabag'), (SELECT id FROM creative WHERE name = 'Phoebe Waller-Bridge'), 'A comedy series adapted from the award-winning play about a young woman trying to cope with life in London', 2, '/uploads/tv/Fleabag.png'),
((SELECT 'Grey''s Anatomy'), (SELECT id FROM creative WHERE name = 'Shonda Rhimes'), 'A drama centered on the personal and professional lives of surgical interns and their supervisors', 18, '/uploads/tv/Greys_Anatomy.png'),
((SELECT 'I May Destroy You'), (SELECT id FROM creative WHERE name = 'Michaela Coel'), 'The story of a woman who seeks to rebuild her life after a sexual assault', 1, '/uploads/tv/IMDY.png'),
((SELECT 'King of the Hill'), (SELECT id FROM creative WHERE name = 'Mike Judge'), 'A straight-laced propane salesman in Arlen, Texas tries to deal with the wacky antics of his family', 13, '/uploads/tv/KOTH.png'),
((SELECT 'Rick and Morty'), (SELECT id FROM creative WHERE name = 'Dan Harmon'), 'An animated series about the adventures of an eccentric, alcoholic scientist and his grandson', 6, '/uploads/tv/RaM.png'),
((SELECT 'The Sopranos'), (SELECT id FROM creative WHERE name = 'David Chase'), 'New Jersey mob boss Tony Soprano deals with personal and professional issues', 6, '/uploads/tv/Sopranos.png'),
((SELECT 'The Deuce'), (SELECT id FROM creative WHERE name = 'David Simon'), 'The rise of the porn industry in New York beginning in the 1970s', 3, '/uploads/tv/The_Deuce.png'),
((SELECT 'The Wire'), (SELECT id FROM creative WHERE name = 'David Simon'), 'Baltimore drug scene, seen through the eyes of drug dealers and law enforcement', 5, '/uploads/tv/The_Wire.png');

-- Create book-character relationships
INSERT INTO bookcharacter (book_Id, character_Id) VALUES
((SELECT id FROM book WHERE title = '1984'), (SELECT id FROM `character` WHERE name = 'Winston Smith')),
((SELECT id FROM book WHERE title = 'Animal Farm'), (SELECT id FROM `character` WHERE name = 'Boxer')),
((SELECT id FROM book WHERE title = 'Crime and Punishment'), (SELECT id FROM `character` WHERE name = 'Rodion Raskolnikov')),
((SELECT id FROM book WHERE title = 'Emma'), (SELECT id FROM `character` WHERE name = 'Emma Woodhouse')),
((SELECT id FROM book WHERE title = 'For Whom the Bell Tolls'), (SELECT id FROM `character` WHERE name = 'Robert Jordan')),
((SELECT id FROM book WHERE title = 'The Master and Margarita'), (SELECT id FROM `character` WHERE name = 'Woland')),
((SELECT id FROM book WHERE title = 'Mrs Dalloway'), (SELECT id FROM `character` WHERE name = 'Clarissa Dalloway')),
((SELECT id FROM book WHERE title = 'Murder on the Orient Express'), (SELECT id FROM `character` WHERE name = 'Hercule Poirot')),
((SELECT id FROM book WHERE title = 'One Hundred Years of Solitude'), (SELECT id FROM `character` WHERE name = 'Aureliano Buendía')),
((SELECT id FROM book WHERE title = 'Pride and Prejudice'), (SELECT id FROM `character` WHERE name = 'Elizabeth Bennet')),
((SELECT id FROM book WHERE title = 'The Metamorphosis'), (SELECT id FROM `character` WHERE name = 'Gregor Samsa')),
((SELECT id FROM book WHERE title = 'A kőszívű ember fiai'), (SELECT id FROM `character` WHERE name = 'Baradlay Richárd')),
((SELECT id FROM book WHERE title = 'A Pál utcai fiúk'), (SELECT id FROM `character` WHERE name = 'Nemecsek Ernő')),
((SELECT id FROM book WHERE title = 'Abigél'), (SELECT id FROM `character` WHERE name = 'Gina')),
((SELECT id FROM book WHERE title = 'Az ajtó'), (SELECT id FROM `character` WHERE name = 'Emerence')),
((SELECT id FROM book WHERE title = 'Az arany ember'), (SELECT id FROM `character` WHERE name = 'Timár Mihály')),
((SELECT id FROM book WHERE title = 'Édes Anna'), (SELECT id FROM `character` WHERE name = 'Édes Anna')),
((SELECT id FROM book WHERE title = 'Esti Kornél'), (SELECT id FROM `character` WHERE name = 'Esti Kornél'));

-- Create TV show-character relationships
INSERT INTO tvcharacter (tvShow_Id, character_Id) VALUES
((SELECT id FROM tvshow WHERE title = 'Breaking Bad'), (SELECT id FROM `character` WHERE name = 'Walter White')),
((SELECT id FROM tvshow WHERE title = 'Better Call Saul'), (SELECT id FROM `character` WHERE name = 'Saul Goodman')),
((SELECT id FROM tvshow WHERE title = 'Community'), (SELECT id FROM `character` WHERE name = 'Jeff Winger')),
((SELECT id FROM tvshow WHERE title = 'Fleabag'), (SELECT id FROM `character` WHERE name = 'Fleabag')),
((SELECT id FROM tvshow WHERE title = 'Grey''s Anatomy'), (SELECT id FROM `character` WHERE name = 'Meredith Grey')),
((SELECT id FROM tvshow WHERE title = 'I May Destroy You'), (SELECT id FROM `character` WHERE name = 'Arabella')),
((SELECT id FROM tvshow WHERE title = 'King of the Hill'), (SELECT id FROM `character` WHERE name = 'Hank Hill')),
((SELECT id FROM tvshow WHERE title = 'Rick and Morty'), (SELECT id FROM `character` WHERE name = 'Rick Sanchez')),
((SELECT id FROM tvshow WHERE title = 'The Sopranos'), (SELECT id FROM `character` WHERE name = 'Tony Soprano')),
((SELECT id FROM tvshow WHERE title = 'The Wire'), (SELECT id FROM `character` WHERE name = 'Omar Little'));

-- Associate books with genres
INSERT INTO bookgenre (book_Id, genre_Id) VALUES
((SELECT id FROM book WHERE title = '1984'), (SELECT id FROM genre WHERE genre = 'Dystopian')),
((SELECT id FROM book WHERE title = 'Animal Farm'), (SELECT id FROM genre WHERE genre = 'Satire')),
((SELECT id FROM book WHERE title = 'Crime and Punishment'), (SELECT id FROM genre WHERE genre = 'Russian Literature')),
((SELECT id FROM book WHERE title = 'Emma'), (SELECT id FROM genre WHERE genre = 'Romance')),
((SELECT id FROM book WHERE title = 'For Whom the Bell Tolls'), (SELECT id FROM genre WHERE genre = 'Fiction')),
((SELECT id FROM book WHERE title = 'The Master and Margarita'), (SELECT id FROM genre WHERE genre = 'Russian Literature')),
((SELECT id FROM book WHERE title = 'Mrs Dalloway'), (SELECT id FROM genre WHERE genre = 'Modernist')),
((SELECT id FROM book WHERE title = 'Murder on the Orient Express'), (SELECT id FROM genre WHERE genre = 'Mystery')),
((SELECT id FROM book WHERE title = 'One Hundred Years of Solitude'), (SELECT id FROM genre WHERE genre = 'Magical Realism')),
((SELECT id FROM book WHERE title = 'Pride and Prejudice'), (SELECT id FROM genre WHERE genre = 'Romance')),
((SELECT id FROM book WHERE title = 'The Metamorphosis'), (SELECT id FROM genre WHERE genre = 'Fiction')),
((SELECT id FROM book WHERE title = 'A kőszívű ember fiai'), (SELECT id FROM genre WHERE genre = 'Hungarian Literature')),
((SELECT id FROM book WHERE title = 'A Pál utcai fiúk'), (SELECT id FROM genre WHERE genre = 'Hungarian Literature')),
((SELECT id FROM book WHERE title = 'Abigél'), (SELECT id FROM genre WHERE genre = 'Hungarian Literature')),
((SELECT id FROM book WHERE title = 'Az ajtó'), (SELECT id FROM genre WHERE genre = 'Hungarian Literature')),
((SELECT id FROM book WHERE title = 'Az arany ember'), (SELECT id FROM genre WHERE genre = 'Hungarian Literature')),
((SELECT id FROM book WHERE title = 'Édes Anna'), (SELECT id FROM genre WHERE genre = 'Hungarian Literature')),
((SELECT id FROM book WHERE title = 'Esti Kornél'), (SELECT id FROM genre WHERE genre = 'Hungarian Literature'));

-- Associate TV shows with genres
INSERT INTO tvgenre (tvShow_Id, genre_Id) VALUES
((SELECT id FROM tvshow WHERE title = 'American Horror Story'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM tvshow WHERE title = 'Breaking Bad'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM tvshow WHERE title = 'Better Call Saul'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM tvshow WHERE title = 'Community'), (SELECT id FROM genre WHERE genre = 'Comedy')),
((SELECT id FROM tvshow WHERE title = 'Fleabag'), (SELECT id FROM genre WHERE genre = 'Comedy')),
((SELECT id FROM tvshow WHERE title = 'Grey''s Anatomy'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM tvshow WHERE title = 'I May Destroy You'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM tvshow WHERE title = 'King of the Hill'), (SELECT id FROM genre WHERE genre = 'Comedy')),
((SELECT id FROM tvshow WHERE title = 'Rick and Morty'), (SELECT id FROM genre WHERE genre = 'Science Fiction')),
((SELECT id FROM tvshow WHERE title = 'The Sopranos'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM tvshow WHERE title = 'The Deuce'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM tvshow WHERE title = 'The Wire'), (SELECT id FROM genre WHERE genre = 'Drama'));

-- Associate TV shows with actors
INSERT INTO tvshowactor (tvShow_Id, actor_Id) VALUES
((SELECT id FROM tvshow WHERE title = 'Breaking Bad'), (SELECT id FROM actor WHERE name = 'Bryan Cranston')),
((SELECT id FROM tvshow WHERE title = 'Breaking Bad'), (SELECT id FROM actor WHERE name = 'Aaron Paul')),
((SELECT id FROM tvshow WHERE title = 'Community'), (SELECT id FROM actor WHERE name = 'Joel McHale')),
((SELECT id FROM tvshow WHERE title = 'Community'), (SELECT id FROM actor WHERE name = 'Donald Glover')),
((SELECT id FROM tvshow WHERE title = 'Fleabag'), (SELECT id FROM actor WHERE name = 'Phoebe Waller-Bridge')),
((SELECT id FROM tvshow WHERE title = 'Grey''s Anatomy'), (SELECT id FROM actor WHERE name = 'Ellen Pompeo')),
((SELECT id FROM tvshow WHERE title = 'I May Destroy You'), (SELECT id FROM actor WHERE name = 'Michaela Coel')),
((SELECT id FROM tvshow WHERE title = 'King of the Hill'), (SELECT id FROM actor WHERE name = 'Mike Judge')),
((SELECT id FROM tvshow WHERE title = 'The Sopranos'), (SELECT id FROM actor WHERE name = 'James Gandolfini')),
((SELECT id FROM tvshow WHERE title = 'The Wire'), (SELECT id FROM actor WHERE name = 'Idris Elba')),
((SELECT id FROM tvshow WHERE title = 'American Horror Story'), (SELECT id FROM actor WHERE name = 'Sarah Paulson'));

-- Add TV seasons for shows
INSERT INTO tvseason (seasonNumber, releaseYear, description, tvShow_Id) VALUES
(1, 2008, 'First season of Breaking Bad', (SELECT id FROM tvshow WHERE title = 'Breaking Bad')),
(2, 2009, 'Second season of Breaking Bad', (SELECT id FROM tvshow WHERE title = 'Breaking Bad')),
(1, 2015, 'First season of Better Call Saul', (SELECT id FROM tvshow WHERE title = 'Better Call Saul')),
(1, 2009, 'First season of Community', (SELECT id FROM tvshow WHERE title = 'Community')),
(1, 2016, 'First season of Fleabag', (SELECT id FROM tvshow WHERE title = 'Fleabag')),
(1, 2005, 'First season of Grey''s Anatomy', (SELECT id FROM tvshow WHERE title = 'Grey''s Anatomy')),
(1, 2020, 'First season of I May Destroy You', (SELECT id FROM tvshow WHERE title = 'I May Destroy You')),
(1, 1997, 'First season of King of the Hill', (SELECT id FROM tvshow WHERE title = 'King of the Hill')),
(1, 2013, 'First season of Rick and Morty', (SELECT id FROM tvshow WHERE title = 'Rick and Morty')),
(1, 1999, 'First season of The Sopranos', (SELECT id FROM tvshow WHERE title = 'The Sopranos')),
(1, 2017, 'First season of The Deuce', (SELECT id FROM tvshow WHERE title = 'The Deuce')),
(1, 2002, 'First season of The Wire', (SELECT id FROM tvshow WHERE title = 'The Wire'));

-- Add some episodes for the TV seasons
INSERT INTO tvepisode (episodeNumber, title, description, releaseDate, tvSeason_Id) VALUES
(1, 'Pilot', 'Chemistry teacher Walter White learns he has cancer and decides to provide for his family by making methamphetamine.', '2008-01-20 00:00:00', (SELECT id FROM tvseason WHERE seasonNumber = 1 AND tvShow_Id = (SELECT id FROM tvshow WHERE title = 'Breaking Bad'))),
(1, 'Uno', 'Jimmy works his magic in the courtroom; after being inspired by an act of charity, Jimmy looks to change his way.', '2015-02-08 00:00:00', (SELECT id FROM tvseason WHERE seasonNumber = 1 AND tvShow_Id = (SELECT id FROM tvshow WHERE title = 'Better Call Saul'))),
(1, 'Pilot', 'An ex-lawyer is forced to return to community college to get a degree. However, he tries to use the experience to benefit his law firm and pursue a girl in his Spanish class.', '2009-09-17 00:00:00', (SELECT id FROM tvseason WHERE seasonNumber = 1 AND tvShow_Id = (SELECT id FROM tvshow WHERE title = 'Community')));

-- Insert movie characters
INSERT INTO `character` (name) VALUES
('Dom Cobb'),         -- Inception
('Cléo'),             -- Cléo from 5 to 7
('Henry Hill'),       -- Goodfellas
('Tommy DeVito'),     -- Goodfellas
('Bulcsú'),           -- Kontroll
('Hendrik Höfgen'),   -- Mephisto
('Norman Bates'),     -- Psycho
('Marion Crane'),     -- Psycho
('Kambei Shimada'),   -- Seven Samurai
('Luke Skywalker'),   -- Star Wars
('Han Solo'),         -- Star Wars
('Princess Leia'),    -- Star Wars
('Travis Bickle'),    -- Taxi Driver
('Vito Corleone'),    -- The Godfather
('Michael Corleone'), -- The Godfather
('Sonny Corleone'),   -- The Godfather
('William James'),    -- The Hurt Locker
('Jack Torrance'),    -- The Shining
('Wendy Torrance'),   -- The Shining
('Dr. David Bowman'), -- 2001: A Space Odyssey
('Scottie Ferguson'), -- Vertigo
('Madeleine Elster'), -- Vertigo
('Ohlsdorfer'),       -- The Turin Horse
('Ohlsdorfer''s daughter'); -- The Turin Horse

-- Insert movies with references to directors
INSERT INTO movie (title, director_Id, releaseYear, description, coverArt) VALUES
((SELECT '2001: A Space Odyssey'), (SELECT id FROM creative WHERE name = 'Stanley Kubrick'), 1968, 'After discovering a mysterious artifact buried on the Lunar surface, a spacecraft is sent to Jupiter to find its origins', '/uploads/movie/2001_Space_Odyssey.png'),
((SELECT 'Cléo from 5 to 7'), (SELECT id FROM creative WHERE name = 'Agnès Varda'), 1962, 'Follows a young singer over two hours as she awaits the results of a medical test', '/uploads/movie/Cléo.png'),
((SELECT 'Goodfellas'), (SELECT id FROM creative WHERE name = 'Martin Scorsese'), 1990, 'The story of Henry Hill and his life in the mob', '/uploads/movie/Goodfellas.png'),
((SELECT 'Inception'), (SELECT id FROM creative WHERE name = 'Christopher Nolan'), 2010, 'A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea', '/uploads/movie/Inception.png'),
((SELECT 'Kontroll'), (SELECT id FROM creative WHERE name = 'Nimród Antal'), 2003, 'A tale of ticket inspectors in the Budapest subway system', '/uploads/movie/Kontroll.png'),
((SELECT 'Mephisto'), (SELECT id FROM creative WHERE name = 'István Szabó'), 1981, 'A German stage actor finds unexpected success in the popularity of his performance in a Faustian play', '/uploads/movie/Mephisto.png'),
((SELECT 'Psycho'), (SELECT id FROM creative WHERE name = 'Alfred Hitchcock'), 1960, 'A secretary embezzles money and checks into a remote motel run by a young man under the domination of his mother', '/uploads/movie/Psycho.png'),
((SELECT 'Seven Samurai'), (SELECT id FROM creative WHERE name = 'Akira Kurosawa'), 1954, 'A poor village hires seven samurai to protect them from bandits', '/uploads/movie/Seven_Samurai.png'),
((SELECT 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM creative WHERE name = 'George Lucas'), 1977, 'Luke Skywalker joins forces with a Jedi Knight, a smuggler, and droids to save the galaxy', '/uploads/movie/Star_Wars_IV.png'),
((SELECT 'Taxi Driver'), (SELECT id FROM creative WHERE name = 'Martin Scorsese'), 1976, 'A mentally unstable veteran works as a nighttime taxi driver in New York City', '/uploads/movie/Taxi_Driver.png'),
((SELECT 'The Godfather'), (SELECT id FROM creative WHERE name = 'Francis Ford Coppola'), 1972, 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son', '/uploads/movie/The_Godfather.png'),
((SELECT 'The Hurt Locker'), (SELECT id FROM creative WHERE name = 'Kathryn Bigelow'), 2008, 'During the Iraq War, a bomb disposal team face increasingly perilous situations', '/uploads/movie/The_Hurt_Locker.png'),
((SELECT 'The Shining'), (SELECT id FROM creative WHERE name = 'Stanley Kubrick'), 1980, 'A family heads to an isolated hotel for the winter where a sinister presence influences the father', '/uploads/movie/The_Shining.png'),
((SELECT 'Vertigo'), (SELECT id FROM creative WHERE name = 'Alfred Hitchcock'), 1958, 'A former police detective develops a fear of heights after witnessing a death', '/uploads/movie/Vertigo.png'),
((SELECT 'The Turin Horse'), (SELECT id FROM creative WHERE name = 'Béla Tarr'), 2011, 'A rural farmer is forced to confront the mortality of his faithful horse', '/uploads/movie/Turin_Horse.png');

-- Insert movie actors
INSERT INTO actor (name, picture) VALUES
('Leonardo DiCaprio', NULL),
('Joseph Gordon-Levitt', NULL),
('Marion Cotillard', NULL),
('Corinne Marchand', NULL),
('Robert De Niro', NULL),
('Ray Liotta', NULL),
('Joe Pesci', NULL),
('Sándor Csányi', NULL),
('Zoltán Mucsi', NULL),
('Klaus Maria Brandauer', NULL),
('Anthony Perkins', NULL),
('Janet Leigh', NULL),
('Toshiro Mifune', NULL),
('Mark Hamill', NULL),
('Harrison Ford', NULL),
('Carrie Fisher', NULL),
('Marlon Brando', NULL),
('Al Pacino', NULL),
('James Caan', NULL),
('Jeremy Renner', NULL),
('Jack Nicholson', NULL),
('Shelley Duvall', NULL),
('James Stewart', NULL),
('Kim Novak', NULL),
('János Derzsi', NULL),
('Erika Bók', NULL);

-- Create movie-actor relationships
INSERT INTO movieactor (movie_Id, actor_Id) VALUES
-- Inception
((SELECT id FROM movie WHERE title = 'Inception'), (SELECT id FROM actor WHERE name = 'Leonardo DiCaprio')),
((SELECT id FROM movie WHERE title = 'Inception'), (SELECT id FROM actor WHERE name = 'Joseph Gordon-Levitt')),
((SELECT id FROM movie WHERE title = 'Inception'), (SELECT id FROM actor WHERE name = 'Marion Cotillard')),
-- Cléo from 5 to 7
((SELECT id FROM movie WHERE title = 'Cléo from 5 to 7'), (SELECT id FROM actor WHERE name = 'Corinne Marchand')),
-- Goodfellas
((SELECT id FROM movie WHERE title = 'Goodfellas'), (SELECT id FROM actor WHERE name = 'Robert De Niro')),
((SELECT id FROM movie WHERE title = 'Goodfellas'), (SELECT id FROM actor WHERE name = 'Ray Liotta')),
((SELECT id FROM movie WHERE title = 'Goodfellas'), (SELECT id FROM actor WHERE name = 'Joe Pesci')),
-- Kontroll
((SELECT id FROM movie WHERE title = 'Kontroll'), (SELECT id FROM actor WHERE name = 'Sándor Csányi')),
((SELECT id FROM movie WHERE title = 'Kontroll'), (SELECT id FROM actor WHERE name = 'Zoltán Mucsi')),
-- Mephisto
((SELECT id FROM movie WHERE title = 'Mephisto'), (SELECT id FROM actor WHERE name = 'Klaus Maria Brandauer')),
-- Psycho
((SELECT id FROM movie WHERE title = 'Psycho'), (SELECT id FROM actor WHERE name = 'Anthony Perkins')),
((SELECT id FROM movie WHERE title = 'Psycho'), (SELECT id FROM actor WHERE name = 'Janet Leigh')),
-- Seven Samurai
((SELECT id FROM movie WHERE title = 'Seven Samurai'), (SELECT id FROM actor WHERE name = 'Toshiro Mifune')),
-- Star Wars
((SELECT id FROM movie WHERE title = 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM actor WHERE name = 'Mark Hamill')),
((SELECT id FROM movie WHERE title = 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM actor WHERE name = 'Harrison Ford')),
((SELECT id FROM movie WHERE title = 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM actor WHERE name = 'Carrie Fisher')),
-- Taxi Driver
((SELECT id FROM movie WHERE title = 'Taxi Driver'), (SELECT id FROM actor WHERE name = 'Robert De Niro')),
-- The Godfather
((SELECT id FROM movie WHERE title = 'The Godfather'), (SELECT id FROM actor WHERE name = 'Marlon Brando')),
((SELECT id FROM movie WHERE title = 'The Godfather'), (SELECT id FROM actor WHERE name = 'Al Pacino')),
((SELECT id FROM movie WHERE title = 'The Godfather'), (SELECT id FROM actor WHERE name = 'James Caan')),
-- The Hurt Locker
((SELECT id FROM movie WHERE title = 'The Hurt Locker'), (SELECT id FROM actor WHERE name = 'Jeremy Renner')),
-- The Shining
((SELECT id FROM movie WHERE title = 'The Shining'), (SELECT id FROM actor WHERE name = 'Jack Nicholson')),
((SELECT id FROM movie WHERE title = 'The Shining'), (SELECT id FROM actor WHERE name = 'Shelley Duvall')),
-- Vertigo
((SELECT id FROM movie WHERE title = 'Vertigo'), (SELECT id FROM actor WHERE name = 'James Stewart')),
((SELECT id FROM movie WHERE title = 'Vertigo'), (SELECT id FROM actor WHERE name = 'Kim Novak')),
-- The Turin Horse
((SELECT id FROM movie WHERE title = 'The Turin Horse'), (SELECT id FROM actor WHERE name = 'János Derzsi')),
((SELECT id FROM movie WHERE title = 'The Turin Horse'), (SELECT id FROM actor WHERE name = 'Erika Bók'));

-- Create movie-character relationships
INSERT INTO moviecharacter (movie_Id, character_Id) VALUES
((SELECT id FROM movie WHERE title = 'Inception'), (SELECT id FROM `character` WHERE name = 'Dom Cobb')),
((SELECT id FROM movie WHERE title = 'Cléo from 5 to 7'), (SELECT id FROM `character` WHERE name = 'Cléo')),
((SELECT id FROM movie WHERE title = 'Goodfellas'), (SELECT id FROM `character` WHERE name = 'Henry Hill')),
((SELECT id FROM movie WHERE title = 'Goodfellas'), (SELECT id FROM `character` WHERE name = 'Tommy DeVito')),
((SELECT id FROM movie WHERE title = 'Kontroll'), (SELECT id FROM `character` WHERE name = 'Bulcsú')),
((SELECT id FROM movie WHERE title = 'Mephisto'), (SELECT id FROM `character` WHERE name = 'Hendrik Höfgen')),
((SELECT id FROM movie WHERE title = 'Psycho'), (SELECT id FROM `character` WHERE name = 'Norman Bates')),
((SELECT id FROM movie WHERE title = 'Psycho'), (SELECT id FROM `character` WHERE name = 'Marion Crane')),
((SELECT id FROM movie WHERE title = 'Seven Samurai'), (SELECT id FROM `character` WHERE name = 'Kambei Shimada')),
((SELECT id FROM movie WHERE title = 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM `character` WHERE name = 'Luke Skywalker')),
((SELECT id FROM movie WHERE title = 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM `character` WHERE name = 'Han Solo')),
((SELECT id FROM movie WHERE title = 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM `character` WHERE name = 'Princess Leia')),
((SELECT id FROM movie WHERE title = 'Taxi Driver'), (SELECT id FROM `character` WHERE name = 'Travis Bickle')),
((SELECT id FROM movie WHERE title = 'The Godfather'), (SELECT id FROM `character` WHERE name = 'Vito Corleone')),
((SELECT id FROM movie WHERE title = 'The Godfather'), (SELECT id FROM `character` WHERE name = 'Michael Corleone')),
((SELECT id FROM movie WHERE title = 'The Godfather'), (SELECT id FROM `character` WHERE name = 'Sonny Corleone')),
((SELECT id FROM movie WHERE title = 'The Hurt Locker'), (SELECT id FROM `character` WHERE name = 'William James')),
((SELECT id FROM movie WHERE title = 'The Shining'), (SELECT id FROM `character` WHERE name = 'Jack Torrance')),
((SELECT id FROM movie WHERE title = 'The Shining'), (SELECT id FROM `character` WHERE name = 'Wendy Torrance')),
((SELECT id FROM movie WHERE title = '2001: A Space Odyssey'), (SELECT id FROM `character` WHERE name = 'Dr. David Bowman')),
((SELECT id FROM movie WHERE title = 'Vertigo'), (SELECT id FROM `character` WHERE name = 'Scottie Ferguson')),
((SELECT id FROM movie WHERE title = 'Vertigo'), (SELECT id FROM `character` WHERE name = 'Madeleine Elster')),
((SELECT id FROM movie WHERE title = 'The Turin Horse'), (SELECT id FROM `character` WHERE name = 'Ohlsdorfer')),
((SELECT id FROM movie WHERE title = 'The Turin Horse'), (SELECT id FROM `character` WHERE name = 'Ohlsdorfer''s daughter'));


-- Create movie-genre relationships
INSERT INTO moviegenre (movie_Id, genre_Id) VALUES
((SELECT id FROM movie WHERE title = 'Inception'), (SELECT id FROM genre WHERE genre = 'Science Fiction')),
((SELECT id FROM movie WHERE title = 'Inception'), (SELECT id FROM genre WHERE genre = 'Thriller')),
((SELECT id FROM movie WHERE title = 'Cléo from 5 to 7'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM movie WHERE title = 'Cléo from 5 to 7'), (SELECT id FROM genre WHERE genre = 'Art Film')),
((SELECT id FROM movie WHERE title = 'Goodfellas'), (SELECT id FROM genre WHERE genre = 'Crime')),
((SELECT id FROM movie WHERE title = 'Goodfellas'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM movie WHERE title = 'Kontroll'), (SELECT id FROM genre WHERE genre = 'Comedy')),
((SELECT id FROM movie WHERE title = 'Kontroll'), (SELECT id FROM genre WHERE genre = 'Thriller')),
((SELECT id FROM movie WHERE title = 'Mephisto'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM movie WHERE title = 'Psycho'), (SELECT id FROM genre WHERE genre = 'Horror')),
((SELECT id FROM movie WHERE title = 'Psycho'), (SELECT id FROM genre WHERE genre = 'Thriller')),
((SELECT id FROM movie WHERE title = 'Seven Samurai'), (SELECT id FROM genre WHERE genre = 'Adventure')),
((SELECT id FROM movie WHERE title = 'Seven Samurai'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM movie WHERE title = 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM genre WHERE genre = 'Science Fiction')),
((SELECT id FROM movie WHERE title = 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM genre WHERE genre = 'Adventure')),
((SELECT id FROM movie WHERE title = 'Taxi Driver'), (SELECT id FROM genre WHERE genre = 'Crime')),
((SELECT id FROM movie WHERE title = 'Taxi Driver'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM movie WHERE title = 'The Godfather'), (SELECT id FROM genre WHERE genre = 'Crime')),
((SELECT id FROM movie WHERE title = 'The Godfather'), (SELECT id FROM genre WHERE genre = 'Drama')),
((SELECT id FROM movie WHERE title = 'The Hurt Locker'), (SELECT id FROM genre WHERE genre = 'War')),
((SELECT id FROM movie WHERE title = 'The Hurt Locker'), (SELECT id FROM genre WHERE genre = 'Thriller')),
((SELECT id FROM movie WHERE title = 'The Shining'), (SELECT id FROM genre WHERE genre = 'Horror')),
((SELECT id FROM movie WHERE title = '2001: A Space Odyssey'), (SELECT id FROM genre WHERE genre = 'Science Fiction')),
((SELECT id FROM movie WHERE title = 'Vertigo'), (SELECT id FROM genre WHERE genre = 'Mystery')),
((SELECT id FROM movie WHERE title = 'Vertigo'), (SELECT id FROM genre WHERE genre = 'Thriller')),
((SELECT id FROM movie WHERE title = 'The Turin Horse'), (SELECT id FROM genre WHERE genre = 'Art Film')),
((SELECT id FROM movie WHERE title = 'The Turin Horse'), (SELECT id FROM genre WHERE genre = 'Drama'));

-- Commit the transaction
COMMIT;
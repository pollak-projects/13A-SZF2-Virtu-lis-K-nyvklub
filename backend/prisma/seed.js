import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.creative.createMany({
    data: [
      { id: 1, name: 'Vince Gilligan', picture: null, author_book: false, director_movie: false, creator_show: true },
      { id: 2, name: 'David Benioff', picture: null, author_book: false, director_movie: false, creator_show: true },
      { id: 3, name: 'D.B. Weiss', picture: null, author_book: false, director_movie: false, creator_show: true },
      { id: 4, name: 'Christopher Nolan', picture: null, author_book: false, director_movie: true, creator_show: false },
      { id: 5, name: 'Steven Spielberg', picture: null, author_book: false, director_movie: true, creator_show: false },
      { id: 6, name: 'J.K. Rowling', picture: null, author_book: true, director_movie: false, creator_show: false },
      { id: 7, name: 'George R.R. Martin', picture: null, author_book: true, director_movie: false, creator_show: false },
    ],
  });

  await prisma.actor.createMany({
    data: [
      { id: 1, name: 'Bryan Cranston', picture: null },
      { id: 2, name: 'Aaron Paul', picture: null },
      { id: 3, name: 'Emilia Clarke', picture: null },
      { id: 4, name: 'Kit Harington', picture: null },
      { id: 5, name: 'Leonardo DiCaprio', picture: null },
      { id: 6, name: 'Joseph Gordon-Levitt', picture: null },
      { id: 7, name: 'Sam Neill', picture: null },
      { id: 8, name: 'Laura Dern', picture: null },
    ],
  });

  await prisma.book.createMany({
    data: [
      { id: 1, title: "Harry Potter and the Philosopher's Stone", author_Id: 6, releaseYear: 1997, description: "A young wizard's journey begins.", coverArt: null },
      { id: 2, title: 'A Game of Thrones', author_Id: 7, releaseYear: 1996, description: 'The first book in the A Song of Ice and Fire series.', coverArt: null },
    ],
  });

  await prisma.bookcharacter.createMany({
    data: [
      { book_Id: 1, character_Id: 9 },
      { book_Id: 1, character_Id: 10 },
      { book_Id: 1, character_Id: 11 },
      { book_Id: 2, character_Id: 12 },
      { book_Id: 2, character_Id: 13 },
    ],
  });

  await prisma.bookgenre.createMany({
    data: [
      { book_Id: 1, genre_Id: 5 },
      { book_Id: 2, genre_Id: 5 },
    ],
  });

  await prisma.character.createMany({
    data: [
      { id: 1, name: 'Walter White' },
      { id: 2, name: 'Jesse Pinkman' },
      { id: 3, name: 'Daenerys Targaryen' },
      { id: 4, name: 'Jon Snow' },
      { id: 5, name: 'Dom Cobb' },
      { id: 6, name: 'Robert Fischer' },
      { id: 7, name: 'Dr. Alan Grant' },
      { id: 8, name: 'Dr. Ellie Sattler' },
      { id: 9, name: 'Harry Potter' },
      { id: 10, name: 'Hermione Granger' },
      { id: 11, name: 'Ron Weasley' },
      { id: 12, name: 'Eddard Stark' },
      { id: 13, name: 'Daenerys Targaryen' },
    ],
  });

  await prisma.characteractor.createMany({
    data: [
      { character_Id: 1, actor_Id: 1 },
      { character_Id: 2, actor_Id: 2 },
      { character_Id: 3, actor_Id: 3 },
      { character_Id: 4, actor_Id: 4 },
      { character_Id: 5, actor_Id: 5 },
      { character_Id: 6, actor_Id: 6 },
      { character_Id: 7, actor_Id: 7 },
      { character_Id: 8, actor_Id: 8 },
    ],
  });

  await prisma.genre.createMany({
    data: [
      { id: 1, genre: 'Drama', description: 'A genre that relies on the emotional and relational development of realistic characters.' },
      { id: 2, genre: 'Fantasy', description: 'A genre that uses magic and other supernatural forms as a primary element of plot, theme, and/or setting.' },
      { id: 3, genre: 'Science Fiction', description: 'A genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science.' },
      { id: 4, genre: 'Adventure', description: 'A genre that typically involves danger, risk, and excitement.' },
      { id: 5, genre: 'Fantasy', description: 'A genre that uses magic and other supernatural forms as a primary element of plot, theme, and/or setting.' },
    ],
  });

  await prisma.movie.createMany({
    data: [
      { id: 1, title: 'Inception', director_Id: 4, releaseYear: 2010, description: 'A thief who steals corporate secrets through the use of dream-sharing technology.', coverArt: null },
      { id: 2, title: 'Jurassic Park', director_Id: 5, releaseYear: 1993, description: 'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park\'s cloned dinosaurs to run loose.', coverArt: null },
    ],
  });

  await prisma.movieactor.createMany({
    data: [
      { movie_Id: 1, actor_Id: 5 },
      { movie_Id: 1, actor_Id: 6 },
      { movie_Id: 2, actor_Id: 7 },
      { movie_Id: 2, actor_Id: 8 },
    ],
  });

  await prisma.moviecharacter.createMany({
    data: [
      { character_Id: 5, movie_Id: 1 },
      { character_Id: 6, movie_Id: 1 },
      { character_Id: 7, movie_Id: 2 },
      { character_Id: 8, movie_Id: 2 },
    ],
  });

  await prisma.moviegenre.createMany({
    data: [
      { movie_Id: 1, genre_Id: 3 },
      { movie_Id: 2, genre_Id: 4 },
    ],
  });

  await prisma.tvcharacter.createMany({
    data: [
      { tvShow_Id: 1, character_Id: 1 },
      { tvShow_Id: 1, character_Id: 2 },
      { tvShow_Id: 2, character_Id: 3 },
      { tvShow_Id: 2, character_Id: 4 },
    ],
  });

  await prisma.tvepisode.createMany({
    data: [
      { id: 1, episodeNumber: 1, title: 'Pilot', description: 'Walter White, a high school chemistry teacher, learns he has cancer.', releaseDate: new Date('2008-01-20T00:00:00.000Z'), tvSeason_Id: 1 },
      { id: 2, episodeNumber: 1, title: 'Winter Is Coming', description: 'Eddard Stark is torn between his family and an old friend.', releaseDate: new Date('2011-04-17T00:00:00.000Z'), tvSeason_Id: 2 },
    ],
  });

  await prisma.tvgenre.createMany({
    data: [
      { tvShow_Id: 1, genre_Id: 1 },
      { tvShow_Id: 2, genre_Id: 2 },
    ],
  });

  await prisma.tvseason.createMany({
    data: [
      { id: 1, seasonNumber: 1, releaseYear: 2008, description: 'Season 1 of Breaking Bad', tvShow_Id: 1 },
      { id: 2, seasonNumber: 1, releaseYear: 2011, description: 'Season 1 of Game of Thrones', tvShow_Id: 2 },
    ],
  });

  await prisma.tvshow.createMany({
    data: [
      { id: 1, title: 'Breaking Bad', creator_Id: 1, description: 'A high school chemistry teacher turned methamphetamine producer.', seasons: 5, coverArt: null },
      { id: 2, title: 'Game of Thrones', creator_Id: 2, description: 'Nine noble families fight for control over the lands of Westeros.', seasons: 8, coverArt: null },
    ],
  });

  await prisma.tvshowactor.createMany({
    data: [
      { tvShow_Id: 1, actor_Id: 1 },
      { tvShow_Id: 1, actor_Id: 2 },
      { tvShow_Id: 2, actor_Id: 3 },
      { tvShow_Id: 2, actor_Id: 4 },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
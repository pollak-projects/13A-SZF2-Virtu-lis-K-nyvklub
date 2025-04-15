import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Starting to seed database...');

    // Insert creative people (authors/directors/creators)
    console.log('Creating creative people...');
    const creatives = await prisma.creative.createMany({
      data: [
        // Authors
        { name: 'Jane Austen', picture: '/uploads/creative/Austen.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Mikhail Bulgakov', picture: '/uploads/creative/Bulgakov.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Agatha Christie', picture: '/uploads/creative/Christie.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Fyodor Dostoevsky', picture: '/uploads/creative/Dostoevsky.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Ernest Hemingway', picture: '/uploads/creative/Hemingway.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Mór Jókai', picture: '/uploads/creative/Jókai.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Franz Kafka', picture: '/uploads/creative/Kafka.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Dezső Kosztolányi', picture: '/uploads/creative/Kosztolányi.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Gabriel García Márquez', picture: '/uploads/creative/Marquez.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Ferenc Molnár', picture: '/uploads/creative/Molnár.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'George Orwell', picture: '/uploads/creative/Orwell.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Virginia Woolf', picture: '/uploads/creative/Woolf.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Magda Szabó', picture: null, author_book: true, director_movie: false, creator_show: false },
        
        // TV Creators
        { name: 'Hirohiko Araki', picture: '/uploads/creative/Araki.jpg', author_book: false, director_movie: false, creator_show: true },
        { name: 'David Chase', picture: '/uploads/creative/Chase.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Michaela Coel', picture: '/uploads/creative/Coel.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Vince Gilligan', picture: '/uploads/creative/Gilligan.jpg', author_book: false, director_movie: false, creator_show: true },
        { name: 'Dan Harmon', picture: '/uploads/creative/Harmon.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Mike Judge', picture: '/uploads/creative/Judge.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Ryan Murphy', picture: '/uploads/creative/Murphy.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Shonda Rhimes', picture: '/uploads/creative/Rhimes.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'David Simon', picture: '/uploads/creative/Simon.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Phoebe Waller-Bridge', picture: '/uploads/creative/Waller-Bridge.png', author_book: false, director_movie: false, creator_show: true },
        
        // Directors
        { name: 'Akira Kurosawa', picture: '/uploads/creative/Akira.jpg', author_book: false, director_movie: true, creator_show: false },
        { name: 'Nimród Antal', picture: '/uploads/creative/Antal.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Kathryn Bigelow', picture: '/uploads/creative/Bigelow.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Francis Ford Coppola', picture: '/uploads/creative/Coppola.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Alfred Hitchcock', picture: '/uploads/creative/Hitchcock.jpg', author_book: false, director_movie: true, creator_show: false },
        { name: 'Stanley Kubrick', picture: '/uploads/creative/Kubrick.jpg', author_book: false, director_movie: true, creator_show: false },
        { name: 'George Lucas', picture: '/uploads/creative/Lucas.jpg', author_book: false, director_movie: true, creator_show: false },
        { name: 'Christopher Nolan', picture: '/uploads/creative/Nolan.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Martin Scorsese', picture: '/uploads/creative/Scorsese.jpg', author_book: false, director_movie: true, creator_show: false },
        { name: 'István Szabó', picture: '/uploads/creative/Szabó_Ist.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Béla Tarr', picture: '/uploads/creative/Tarr.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Agnès Varda', picture: '/uploads/creative/Varda.png', author_book: false, director_movie: true, creator_show: false },
      ],
      skipDuplicates: true,
    });
    
    // Insert genres
    console.log('Creating genres...');
    const genres = await prisma.genre.createMany({
      data: [
        { genre: 'Fikció', description: 'A fikció olyan irodalmi művek gyűjtőneve, amelyek a képzelet szüleményei, nem pedig a valóság tényein alapulnak. Ezek a művek gyakran olyan történeteket mesélnek el, amelyek teljesen kitaláltak, vagy a valóság elemeit ötvözik a képzelet szülte eseményekkel. A fikció célja lehet a szórakoztatás, az érzelmek kiváltása, vagy akár a társadalmi kérdések vizsgálata is.' },
        { genre: 'Disztópia', description: 'A disztópikus irodalom olyan történeteket mutat be, amelyek egy sötét, elnyomó és gyakran kegyetlen társadalomban játszódnak. Ezek a művek gyakran a jövőben játszódnak, és a társadalmi, politikai vagy technológiai fejlődés negatív következményeit vizsgálják. A disztópikus történetek célja, hogy figyelmeztessenek a jelenlegi tendenciák veszélyeire, miközben mélyen emberi kérdéseket is boncolgatnak, mint például a szabadság, az egyenlőség és az emberi méltóság.' },
        { genre: 'Rejtély', description: 'A rejtély műfajába tartozó irodalmi művek középpontjában egy bűncselekmény, talány vagy megoldásra váró probléma áll. Ezek a történetek gyakran izgalmasak és fordulatosak, miközben az olvasót arra ösztönzik, hogy együtt gondolkodjon a szereplőkkel a megoldás érdekében. A rejtélyek célja nemcsak a szórakoztatás, hanem az emberi természet és a társadalmi igazságosság kérdéseinek vizsgálata is.' },
        { genre: 'Orosz irodalom', description: 'Az orosz irodalom a világirodalom egyik leggazdagabb és legmélyebb hagyományokkal rendelkező ága. Ezek az irodalmi művek gyakran foglalkoznak az emberi lélek mélységeivel, a társadalmi igazságtalanságokkal és az erkölcsi dilemmákkal. Az orosz irodalom nagy klasszikusai, mint Dosztojevszkij, Tolsztoj vagy Bulgakov, olyan univerzális kérdéseket vetnek fel, amelyek ma is relevánsak.' },
        { genre: 'Modernizmus', description: 'A modernista irodalom a hagyományos formák és narratívák elutasításával jött létre, és új, kísérletező megközelítéseket alkalmazott. Ezek a művek gyakran foglalkoznak az idő, az identitás és az emberi tapasztalat komplexitásával. A modernizmus célja, hogy új perspektívákat nyújtson az olvasónak, miközben a nyelv és a forma határait feszegeti.' },
        { genre: 'Romantika', description: 'A romantikus irodalom a szerelem, az érzelmek és az emberi kapcsolatok témáit helyezi előtérbe. Ezek a történetek gyakran idealizált világokat mutatnak be, ahol a szereplők érzelmi utazásai állnak a középpontban. A romantikus művek célja, hogy az olvasót elvarázsolják, miközben az emberi szív mélységeit és bonyolultságát tárják fel.' },
        { genre: 'Szatíra', description: 'A szatirikus irodalom humor, irónia és túlzás segítségével mutatja be a társadalmi, politikai vagy kulturális problémákat. Ezek a művek gyakran kritikusak és provokatívak, miközben szórakoztató módon hívják fel a figyelmet a világ abszurditásaira. A szatíra célja, hogy megnevettessen, miközben elgondolkodtat és változásra ösztönöz.' },
        { genre: 'Mágikus realizmus', description: 'A mágikus realizmus olyan irodalmi műfaj, amely a valóságos világot ötvözi a mágikus vagy természetfeletti elemekkel. Ezek a történetek gyakran a mindennapi életet mutatják be, miközben a csodák és a varázslat természetes részei a szereplők világának. A mágikus realizmus célja, hogy új perspektívát nyújtson az olvasónak, miközben a valóság és a képzelet határait feszegeti.' },
        { genre: 'Magyar irodalom', description: 'A magyar irodalom gazdag és sokszínű hagyományokkal rendelkezik, amely a magyar történelem, kultúra és társadalom mélyreható vizsgálatát tükrözi. Ezek a művek gyakran foglalkoznak a nemzeti identitás, a szabadság és az emberi sors kérdéseivel. A magyar irodalom klasszikusai, mint Jókai, Kosztolányi vagy Szabó Magda, időtálló értékeket és univerzális üzeneteket hordoznak.' },
        { genre: 'Dráma', description: 'A drámai irodalom az emberi érzelmek és konfliktusok mélyreható ábrázolására összpontosít. Ezek a művek gyakran komoly és érzelmileg megterhelő témákat dolgoznak fel, miközben az emberi természet és a társadalmi kapcsolatok komplexitását vizsgálják. A dráma célja, hogy az olvasót vagy nézőt érzelmileg megérintse és elgondolkodtassa.' },
        { genre: 'Komédia', description: 'A komédia műfajába tartozó irodalmi művek célja, hogy megnevettessék és szórakoztassák az olvasót. Ezek a történetek gyakran humoros helyzeteket, félreértéseket és színes karaktereket mutatnak be, miközben a társadalmi normák és emberi gyengeségek paródiáját nyújtják. A komédia célja, hogy könnyedebb oldalról közelítse meg az élet kihívásait, miközben pozitív üzeneteket közvetít.' },
        { genre: 'Tudományos-fantasztikus', description: 'A tudományos-fantasztikus irodalom olyan történeteket mutat be, amelyek a tudományos felfedezések és technológiai fejlődés képzeletbeli következményeit vizsgálják. Ezek a művek gyakran a jövőben játszódnak, és olyan kérdéseket vetnek fel, mint az emberiség sorsa, az űrkutatás vagy a mesterséges intelligencia. A sci-fi célja, hogy az olvasót elgondolkodtassa a tudomány és az emberi természet kapcsolatáról.' },
        { genre: 'Thriller', description: 'A thriller műfajába tartozó irodalmi művek izgalmas és feszült történeteket mesélnek el, amelyek gyakran fordulatokkal és váratlan eseményekkel teli cselekményt kínálnak. Ezek a művek célja, hogy az olvasót a székéhez szegezzék, miközben a feszültség és a rejtély fokozatosan bontakozik ki. A thriller gyakran foglalkozik az emberi psziché sötét oldalával és a túlélés kérdéseivel.' },
        { genre: 'Horror', description: 'A horror irodalom célja, hogy félelmet, rettegést vagy undort váltson ki az olvasóból. Ezek a történetek gyakran természetfeletti lényeket, sötét helyszíneket és nyomasztó atmoszférát mutatnak be, miközben az emberi félelmek és szorongások mélyére hatolnak. A horror célja, hogy az olvasót szembesítse saját félelmeivel, miközben szórakoztat és borzongat.' },
        { genre: 'Krimi', description: 'A krimi műfajába tartozó irodalmi művek a bűncselekmények, azok felderítése és az elkövetők motivációinak vizsgálatára összpontosítanak. Ezek a történetek gyakran izgalmasak és fordulatosak, miközben az olvasót arra ösztönzik, hogy együtt gondolkodjon a nyomozóval a rejtély megoldásán. A krimi célja, hogy szórakoztasson, miközben az igazság és az emberi természet kérdéseit is boncolgatja.' },
        { genre: 'Háborús', description: 'A háborús irodalom a háború borzalmait, hősiességét és emberi áldozatait mutatja be. Ezek a történetek gyakran a frontvonalon játszódnak, és a katonák, civilek vagy túlélők szemszögéből ábrázolják a konfliktusokat. A háborús irodalom célja, hogy az olvasót elgondolkodtassa a háború értelmetlenségéről és az emberi élet törékenységéről.' },
        { genre: 'Művészfilm', description: 'A művészfilm műfajába tartozó irodalmi művek elsősorban esztétikai célokat szolgálnak, és gyakran kísérletező formákat és narratívákat alkalmaznak. Ezek a történetek mélyebb filozófiai vagy érzelmi kérdéseket vizsgálnak, miközben a hagyományos szórakoztatás helyett az önkifejezésre és a művészi értékekre helyezik a hangsúlyt. A művészfilm célja, hogy az olvasót vagy nézőt új perspektívákra ösztönözze, miközben a művészet határait feszegeti.' },
        { genre: 'Kaland', description: 'A kaland műfajába tartozó irodalmi művek izgalmas és gyakran veszélyes utazásokat vagy küldetéseket mutatnak be. Ezek a történetek tele vannak akcióval, fordulatokkal és hősies tettekkel, miközben a szereplők különböző kihívásokkal néznek szembe. A kaland célja, hogy az olvasót elvarázsolja és inspirálja, miközben a bátorság, a kitartás és a felfedezés örömét ünnepli.' },
      ],
      skipDuplicates: true,
    });

    // Insert actors
    console.log('Creating actors...');
    await prisma.actor.createMany({
      data: [
        // TV show actors
        { name: 'Bryan Cranston', picture: '/uploads/actor/bryan_cranston.png' },
        { name: 'Aaron Paul', picture: '/uploads/actor/aaron_paul.png' },
        { name: 'Peter Dinklage', picture: '/uploads/actor/peter_dinklage.png' },
        { name: 'Emilia Clarke', picture: '/uploads/actor/emilia_clarke.png' },
        { name: 'Sarah Paulson', picture: '/uploads/actor/sarah_paulson.png' },
        { name: 'Joel McHale', picture: '/uploads/actor/joel_mchale.png' },
        { name: 'Phoebe Waller-Bridge', picture: '/uploads/actor/phoebe_waller-bridge.png' },
        { name: 'Ellen Pompeo', picture: '/uploads/actor/ellen_pompeo.png' },
        { name: 'Michaela Coel', picture: '/uploads/actor/michaela_coel.png' },
        { name: 'Mike Judge', picture: '/uploads/actor/mike_judge.png' },
        { name: 'Donald Glover', picture: '/uploads/actor/donald_glover.png' },
        { name: 'James Gandolfini', picture: '/uploads/actor/james_gandolfini.png' },
        { name: 'Idris Elba', picture: '/uploads/actor/idris_elba.png' },
        // Movie actors
        { name: 'Leonardo DiCaprio', picture: '/uploads/actor/leonardo_dicaprio.png' },
        { name: 'Joseph Gordon-Levitt', picture: '/uploads/actor/joseph_gordon-levitt.png' },
        { name: 'Marion Cotillard', picture: '/uploads/actor/marion_cotillard.png' },
        { name: 'Corinne Marchand', picture: '/uploads/actor/corinne_marchand.png' },
        { name: 'Robert De Niro', picture: '/uploads/actor/robert_de_niro.png' },
        { name: 'Ray Liotta', picture: '/uploads/actor/ray_liotta.png' },
        { name: 'Joe Pesci', picture: '/uploads/actor/joe_pesci.png' },
        { name: 'Sándor Csányi', picture: '/uploads/actor/sandor_csanyi.png' },
        { name: 'Zoltán Mucsi', picture: '/uploads/actor/zoltan_mucsi.png' },
        { name: 'Klaus Maria Brandauer', picture: '/uploads/actor/klaus_maria_brandauer.png' },
        { name: 'Anthony Perkins', picture: '/uploads/actor/anthony_perkins.png' },
        { name: 'Janet Leigh', picture: '/uploads/actor/janet_leigh.png' },
        { name: 'Toshiro Mifune', picture: '/uploads/actor/toshiro_mifune.png' },
        { name: 'Mark Hamill', picture: '/uploads/actor/mark_hamill.png' },
        { name: 'Harrison Ford', picture: '/uploads/actor/harrison_ford.png' },
        { name: 'Carrie Fisher', picture: '/uploads/actor/carrie_fisher.png' },
        { name: 'Marlon Brando', picture: '/uploads/actor/marlon_brando.png' },
        { name: 'Al Pacino', picture: '/uploads/actor/al_pacino.png' },
        { name: 'James Caan', picture: '/uploads/actor/james_caan.png' },
        { name: 'Jeremy Renner', picture: '/uploads/actor/jeremy_renner.png' },
        { name: 'Jack Nicholson', picture: '/uploads/actor/jack_nicholson.png' },
        { name: 'Shelley Duvall', picture: '/uploads/actor/shelley_duvall.png' },
        { name: 'James Stewart', picture: '/uploads/actor/james_stewart.png' },
        { name: 'Kim Novak', picture: '/uploads/actor/kim_novak.png' },
        { name: 'János Derzsi', picture: '/uploads/actor/janos_derzsi.png' },
        { name: 'Erika Bók', picture: '/uploads/actor/erika_bok.png' },
      ],
      skipDuplicates: true,
    });

    console.log('Creating characters...');
    await prisma.character.createMany({
      data: [
        // Book characters
        { name: 'Winston Smith' },
        { name: 'Boxer' },
        { name: 'Rodion Raskolnikov' },
        { name: 'Emma Woodhouse' },
        { name: 'Robert Jordan' },
        { name: 'Woland' },
        { name: 'Clarissa Dalloway' },
        { name: 'Hercule Poirot' },
        { name: 'Aureliano Buendía' },
        { name: 'Elizabeth Bennet' },
        { name: 'Gregor Samsa' },
        { name: 'Baradlay Richárd' },
        { name: 'Nemecsek Ernő' },
        { name: 'Gina' },
        { name: 'Emerence' },
        { name: 'Timár Mihály' },
        { name: 'Édes Anna' },
        { name: 'Esti Kornél' },
        // TV characters
        { name: 'Walter White' },
        { name: 'Saul Goodman' },
        { name: 'Jeff Winger' },
        { name: 'Fleabag' },
        { name: 'Meredith Grey' },
        { name: 'Arabella' },
        { name: 'Hank Hill' },
        { name: 'Rick Sanchez' },
        { name: 'Tony Soprano' },
        { name: 'Omar Little' },
        // Movie characters
        { name: 'Dom Cobb' },
        { name: 'Cléo' },
        { name: 'Henry Hill' },
        { name: 'Tommy DeVito' },
        { name: 'Bulcsú' },
        { name: 'Hendrik Höfgen' },
        { name: 'Norman Bates' },
        { name: 'Marion Crane' },
        { name: 'Kambei Shimada' },
        { name: 'Luke Skywalker' },
        { name: 'Han Solo' },
        { name: 'Princess Leia' },
        { name: 'Travis Bickle' },
        { name: 'Vito Corleone' },
        { name: 'Michael Corleone' },
        { name: 'Sonny Corleone' },
        { name: 'William James' },
        { name: 'Jack Torrance' },
        { name: 'Wendy Torrance' },
        { name: 'Dr. David Bowman' },
        { name: 'Scottie Ferguson' },
        { name: 'Madeleine Elster' },
        { name: 'Ohlsdorfer' },
        { name: 'Ohlsdorfer lánya' },
      ],
      skipDuplicates: true,
    });

    const allCreatives = await prisma.creative.findMany();
    const allGenres = await prisma.genre.findMany();
    const allCharacters = await prisma.character.findMany();
    const allActors = await prisma.actor.findMany();

    const getCreativeId = (name) => allCreatives.find(c => c.name === name)?.id;
    const getGenreId = (name) => allGenres.find(g => g.genre === name)?.id;
    const getCharacterId = (name) => allCharacters.find(c => c.name === name)?.id;
    const getActorId = (name) => allActors.find(a => a.name === name)?.id;

    console.log('Creating books...');
    const books = await Promise.all([
      // Original 5 books
      prisma.book.create({
        data: {
          title: '1984',
          author_Id: getCreativeId('George Orwell'),
          releaseYear: 1949,
          description: 'Egy disztópikus regény, amely egy totalitárius államban játszódik, ahol a Nagy Testvér mindent lát és irányít. A történet Winston Smith életét követi, aki megpróbálja megérteni és szembeszállni a rendszerrel. A regény az egyéni szabadság, a hatalom és az igazság kérdéseit vizsgálja, miközben bemutatja a propaganda és az agymosás hatásait.',
          coverArt: '/uploads/book/1984.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Animal Farm',
          author_Id: getCreativeId('George Orwell'),
          releaseYear: 1945,
          description: 'Egy allegorikus novella, amely egy farm állatainak lázadását meséli el az emberi gazdájuk ellen. A történet a hatalom korrupcióját és a forradalmak eltorzulását mutatja be, miközben szatirikusan ábrázolja a politikai rendszerek működését. Az állatok közötti konfliktusok és árulások a társadalmi egyenlőség illúzióját tárják fel.',
          coverArt: '/uploads/book/Animal_Farm.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Crime and Punishment',
          author_Id: getCreativeId('Fyodor Dostoevsky'),
          releaseYear: 1866,
          description: 'Egy regény, amely egy szegény ex-diák, Rodion Raskolnikov mentális gyötrelmeit és erkölcsi dilemmáit követi nyomon, miután elkövet egy gyilkosságot. A történet mélyen filozófiai és pszichológiai, az emberi természet, a bűn és a megváltás kérdéseit vizsgálja. A regény bemutatja a társadalmi igazságtalanságokat és az emberi szenvedés mélységeit.',
          coverArt: '/uploads/book/Crime_and_Punishment.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Emma',
          author_Id: getCreativeId('Jane Austen'),
          releaseYear: 1815,
          description: 'Egy regény, amely egy fiatal nő, Emma Woodhouse életét követi, aki saját magát tartja a házasságok mesterének, miközben saját érzelmi éretlenségével küzd. A történet tele van humorral, romantikával és társadalmi megfigyelésekkel, miközben bemutatja a viktoriánus Anglia társadalmi normáit és osztályrendszerét.',
          coverArt: '/uploads/book/Emma.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'For Whom the Bell Tolls',
          author_Id: getCreativeId('Ernest Hemingway'),
          releaseYear: 1940,
          description: 'Egy regény, amely a spanyol polgárháború idején játszódik, és egy amerikai robbantási szakértő, Robert Jordan történetét meséli el. A regény a háború borzalmait, az emberi kapcsolatok erejét és a személyes áldozatok jelentőségét vizsgálja. A történet tele van érzelmi mélységgel és filozófiai elmélkedésekkel az élet értelméről és a halál elkerülhetetlenségéről.',
          coverArt: '/uploads/book/For_Whom_the_Bell_Tolls.png',
        }
      }),
      
      // Additional books from SQL file
      prisma.book.create({
        data: {
          title: 'The Master and Margarita',
          author_Id: getCreativeId('Mikhail Bulgakov'),
          releaseYear: 1967,
          description: 'Egy regény, amely a Sátán látogatását meséli el a Szovjetunióban, miközben párhuzamosan egy bibliai történetet is bemutat. A történet tele van szatírával, misztikummal és filozófiai elmélkedésekkel a hatalomról, a művészetről és az emberi természetről. A regény a szovjet társadalom kritikája, miközben a szerelem és az áldozat erejét is bemutatja.',
          coverArt: '/uploads/book/Master_and_Margarita.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Mrs Dalloway',
          author_Id: getCreativeId('Virginia Woolf'),
          releaseYear: 1925,
          description: 'Egy regény, amely egyetlen nap eseményeit követi nyomon Clarissa Dalloway életében, miközben visszaemlékezéseken keresztül feltárja a múltját. A történet az idő múlásának, az emberi kapcsolatok bonyolultságának és a belső világ gazdagságának témáit vizsgálja. A regény modernista stílusban íródott, és mélyen emberi portrét fest a főszereplőről.',
          coverArt: '/uploads/book/Mrs_Dalloway.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Murder on the Orient Express',
          author_Id: getCreativeId('Agatha Christie'),
          releaseYear: 1934,
          description: 'Egy detektívregény, amely Hercule Poirot nyomozását követi egy luxusvonaton történt gyilkosság ügyében. A történet tele van fordulatokkal, rejtélyekkel és izgalmas karakterekkel, miközben bemutatja Poirot zseniális logikáját és megfigyelőképességét. A regény a klasszikus krimi műfaj egyik legkiemelkedőbb alkotása.',
          coverArt: '/uploads/book/Murder_on_the_Orient_Express.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'One Hundred Years of Solitude',
          author_Id: getCreativeId('Gabriel García Márquez'),
          releaseYear: 1967,
          description: 'Egy regény, amely a Buendía család történetét meséli el a képzeletbeli Macondo városában. A történet tele van mágikus realizmussal, családi tragédiákkal és történelmi eseményekkel, miközben az emberi sors és az idő ciklikusságának témáit vizsgálja. A regény a latin-amerikai irodalom egyik legfontosabb műve.',
          coverArt: '/uploads/book/One_Hundred_Years_of_Solitude.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Pride and Prejudice',
          author_Id: getCreativeId('Jane Austen'),
          releaseYear: 1813,
          description: 'Egy romantikus regény, amely Elizabeth Bennet és Mr. Darcy kapcsolatát követi, miközben bemutatja a viktoriánus Anglia társadalmi normáit és osztályrendszerét. A történet tele van humorral, romantikával és éles társadalmi megfigyelésekkel, miközben az előítéletek és a büszkeség leküzdésének témáit vizsgálja.',
          coverArt: '/uploads/book/Pride_and_Prejudice.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'The Metamorphosis',
          author_Id: getCreativeId('Franz Kafka'),
          releaseYear: 1915,
          description: 'Egy novella, amely egy férfi, Gregor Samsa történetét meséli el, aki egy reggel óriási rovarrá változva ébred. A történet az elidegenedés, a családi kapcsolatok és az emberi lét abszurditásának témáit vizsgálja. A mű Kafka szimbolikus és filozófiai írásainak egyik legismertebb darabja.',
          coverArt: '/uploads/book/The_Metamorphosis.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'A kőszívű ember fiai',
          author_Id: getCreativeId('Mór Jókai'),
          releaseYear: 1869,
          description: 'Egy regény, amely a magyar szabadságharc idején játszódik, és egy család történetét meséli el, akik különböző oldalakon állnak a konfliktusban. A történet tele van hazafisággal, romantikával és drámai fordulatokkal, miközben bemutatja a magyar történelem egyik legfontosabb időszakát.',
          coverArt: '/uploads/book/A_kőszívű_ember_fiai.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'A Pál utcai fiúk',
          author_Id: getCreativeId('Ferenc Molnár'),
          releaseYear: 1906,
          description: 'Egy regény, amely egy csapat iskolás fiú történetét meséli el, akik megpróbálják megvédeni játszóterüket egy rivális bandától. A történet a barátság, a bátorság és az áldozat témáit vizsgálja, miközben bemutatja a gyermeki világ egyszerűségét és mélységét.',
          coverArt: '/uploads/book/A_Pál_utcai_fiúk.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Abigél',
          author_Id: getCreativeId('Magda Szabó'),
          releaseYear: 1970,
          description: 'Egy regény, amely egy fiatal lány, Gina történetét meséli el, akit egy szigorú bentlakásos iskolába küldenek a második világháború idején. A történet tele van rejtélyekkel, érzelmi mélységekkel és a felnőtté válás kihívásaival, miközben bemutatja a háború hatásait az egyéni sorsokra.',
          coverArt: '/uploads/book/Abigél.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Az ajtó',
          author_Id: getCreativeId('Magda Szabó'),
          releaseYear: 1987,
          description: 'Egy regény, amely egy író és házvezetőnője, Emerence kapcsolatát meséli el, miközben feltárja a múlt titkait és a bizalom törékenységét. A történet tele van érzelmi mélységekkel, filozófiai elmélkedésekkel és az emberi kapcsolatok bonyolultságának bemutatásával.',
          coverArt: '/uploads/book/Az_ajtó.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Az arany ember',
          author_Id: getCreativeId('Mór Jókai'),
          releaseYear: 1872,
          description: 'Egy regény, amely egy kereskedő, Timár Mihály történetét meséli el, aki egy hajótörés révén gazdagságra tesz szert. A történet tele van romantikával, kalandokkal és erkölcsi dilemmákkal, miközben bemutatja a boldogság keresésének és az emberi természet összetettségének témáit.',
          coverArt: '/uploads/book/Az_arany_ember.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Édes Anna',
          author_Id: getCreativeId('Dezső Kosztolányi'),
          releaseYear: 1926,
          description: 'Egy regény, amely egy cselédlány, Édes Anna történetét meséli el, aki végül meggyilkolja munkaadóit. A történet az emberi lélek mélységeit, a társadalmi igazságtalanságokat és az elnyomás hatásait vizsgálja, miközben bemutatja a magyar társadalom árnyoldalait.',
          coverArt: '/uploads/book/Édes_Anna.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Esti Kornél',
          author_Id: getCreativeId('Dezső Kosztolányi'),
          releaseYear: 1933,
          description: 'Egy novellagyűjtemény, amely Kornél Esti életének különböző epizódjait meséli el. A történetek tele vannak humorral, melankóliával és filozófiai elmélkedésekkel, miközben bemutatják az emberi lét abszurditását és szépségét.',
          coverArt: '/uploads/book/Esti_Kornél.png',
        }
      }),
    ]);

    // Create TV shows
    console.log('Creating TV shows...');
    const tvShows = await Promise.all([
      // Original 2 TV shows
      prisma.tvshow.create({
        data: {
          title: 'American Horror Story',
          creator_Id: getCreativeId('Ryan Murphy'),
          description: 'Egy antológia sorozat, amely különböző karakterekre és helyszínekre összpontosít, minden évad egy új történetet mesél el. A sorozat a horror műfaj különböző aspektusait tárja fel, beleértve a kísértetházakat, boszorkányokat, cirkuszi szörnyeket és apokaliptikus eseményeket. A történetek gyakran sötét, pszichológiai mélységeket érintenek, miközben társadalmi kérdéseket is boncolgatnak.',
          seasons: 10,
          coverArt: '/uploads/tv/AHS.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'Breaking Bad',
          creator_Id: getCreativeId('Vince Gilligan'),
          description: 'Egy középiskolai kémiatanár, akit rákos megbetegedéssel diagnosztizálnak, úgy dönt, hogy metamfetamint kezd gyártani és árusítani, hogy biztosítsa családja jövőjét. A sorozat a bűnözés világába való fokozatos elmerülését mutatja be, miközben a karakterek morális dilemmákkal és személyes konfliktusokkal szembesülnek. A történet a hatalom, a kapzsiság és a családi kötelékek témáit vizsgálja.',
          seasons: 5,
          coverArt: '/uploads/tv/BB.png',
        }
      }),
      
      // Additional TV shows from SQL file
      prisma.tvshow.create({
        data: {
          title: 'Better Call Saul',
          creator_Id: getCreativeId('Vince Gilligan'),
          description: 'Egy ügyvéd, Jimmy McGill, küzdelmei és átalakulása Saul Goodmanné, a Breaking Bad ikonikus karakterévé. A sorozat bemutatja Jimmy életének korai szakaszát, beleértve a családi és szakmai kihívásokat, valamint a bűnözői világba való fokozatos belépését. A történet mélyen emberi, tele humorral, drámával és váratlan fordulatokkal.',
          seasons: 6,
          coverArt: '/uploads/tv/BCS.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'Community',
          creator_Id: getCreativeId('Dan Harmon'),
          description: 'Egy felfüggesztett ügyvéd kénytelen beiratkozni egy közösségi főiskolára, ahol egy színes személyiségekből álló tanári kar és diáksereg várja. A sorozat humoros és szatirikus módon mutatja be az oktatási rendszer és a társadalmi kapcsolatok dinamikáját. A karakterek közötti interakciók és a kreatív epizódok teszik a sorozatot egyedivé.',
          seasons: 6,
          coverArt: '/uploads/tv/Community.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'Fleabag',
          creator_Id: getCreativeId('Phoebe Waller-Bridge'),
          description: 'Egy fiatal nő életét követi nyomon Londonban, aki próbál megbirkózni a veszteséggel, a családi konfliktusokkal és a modern élet kihívásaival. A sorozat egyedi humorral és érzelmi mélységgel mutatja be a főszereplő belső világát, miközben a nézőkkel közvetlenül kommunikál. A történet a magány, a szeretet és az önelfogadás témáit járja körül.',
          seasons: 2,
          coverArt: '/uploads/tv/Fleabag.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: "Grey's Anatomy",
          creator_Id: getCreativeId('Shonda Rhimes'),
          description: 'Egy orvosi dráma, amely a sebészeti gyakornokok és mentoraik személyes és szakmai életére összpontosít. A sorozat bemutatja a kórházi élet intenzív pillanatait, a bonyolult emberi kapcsolatokat és a karakterek fejlődését. A történet tele van érzelmi csúcspontokkal, tragédiákkal és felemelő pillanatokkal, miközben az orvosi etika és a személyes döntések kérdéseit is érinti.',
          seasons: 18,
          coverArt: '/uploads/tv/Greys_Anatomy.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'I May Destroy You',
          creator_Id: getCreativeId('Michaela Coel'),
          description: 'Egy nő története, aki megpróbálja újraépíteni az életét egy szexuális támadás után. A sorozat mélyen személyes és provokatív módon tárja fel a trauma, a gyógyulás és az önazonosság kérdéseit. A történet a modern társadalom kihívásait és a kapcsolatok bonyolultságát is bemutatja.',
          seasons: 1,
          coverArt: '/uploads/tv/IMDY.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'King of the Hill',
          creator_Id: getCreativeId('Mike Judge'),
          description: 'Egy texasi propánkereskedő, Hank Hill, és családja mindennapjait követi nyomon. A sorozat humoros és szatirikus módon mutatja be az amerikai középosztály életét, miközben a családi kapcsolatok és a közösségi értékek fontosságát hangsúlyozza. A történetek gyakran hétköznapi problémákból indulnak ki, de mélyebb társadalmi kérdéseket is érintenek.',
          seasons: 13,
          coverArt: '/uploads/tv/KOTH.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'Rick and Morty',
          creator_Id: getCreativeId('Dan Harmon'),
          description: 'Egy animációs sorozat, amely egy excentrikus, alkoholista tudós és unokája kalandjait követi nyomon különböző dimenziókban és univerzumokban. A sorozat tele van sötét humorral, filozófiai kérdésekkel és tudományos-fantasztikus elemekkel. A történetek gyakran a családi kapcsolatok és az emberi természet mélyebb aspektusait is vizsgálják.',
          seasons: 6,
          coverArt: '/uploads/tv/RaM.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'The Sopranos',
          creator_Id: getCreativeId('David Chase'),
          description: 'Egy New Jersey-i maffiafőnök, Tony Soprano, életét mutatja be, aki egyszerre próbálja kezelni a bűnözői világ kihívásait és a családi problémákat. A sorozat mélyen emberi és pszichológiai portrét fest a főszereplőről, miközben a hatalom, a lojalitás és a morális dilemmák kérdéseit vizsgálja. A történet tele van drámával, feszültséggel és váratlan fordulatokkal.',
          seasons: 6,
          coverArt: '/uploads/tv/Sopranos.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'The Deuce',
          creator_Id: getCreativeId('David Simon'),
          description: 'A pornóipar felemelkedését mutatja be New Yorkban az 1970-es évektől kezdve. A sorozat részletesen ábrázolja a társadalmi és gazdasági változásokat, amelyek a szexipar növekedéséhez vezettek. A történet a karakterek személyes küzdelmeit és a korszak kulturális dinamikáját is bemutatja.',
          seasons: 3,
          coverArt: '/uploads/tv/The_Deuce.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'The Wire',
          creator_Id: getCreativeId('David Simon'),
          description: 'Baltimore drogvilágát mutatja be a dílerek és a rendfenntartók szemszögéből. A sorozat realisztikus és részletes képet fest a város társadalmi és politikai problémáiról, miközben a karakterek személyes történeteire is nagy hangsúlyt fektet. A történet a hatalom, a korrupció és az igazságosság kérdéseit vizsgálja.',
          seasons: 5,
          coverArt: '/uploads/tv/The_Wire.png',
        }
      }),
    ]);

    // Create movies
    console.log('Creating movies...');
    const movies = await Promise.all([
      // Original 2 movies
      prisma.movie.create({
        data: {
          title: '2001: A Space Odyssey',
          director_Id: getCreativeId('Stanley Kubrick'),
          releaseYear: 1968,
          description: 'Amikor rejtélyes monolitot fedeznek fel a Hold felszínén, egy űrhajót küldenek a Jupiterhez, hogy megtalálják az eredetét. A film az emberi evolúció különböző fázisait követi nyomon, a primitív emberszabásúaktól kezdve a modern emberen át a következő fejlődési szintig. A történet középpontjában az ember és a technológia, különösen a mesterséges intelligencia kapcsolata áll, melyet a HAL 9000 számítógép testesít meg.',
          coverArt: '/uploads/movie/2001_Space_Odyssey.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Inception',
          director_Id: getCreativeId('Christopher Nolan'),
          releaseYear: 2010,
          description: 'Egy tolvaj, aki vállalati titkokat lop el az álmok megosztására szolgáló technológia segítségével, egy különleges feladatot kap: egy ötlet elültetését egy célpont elméjében. A történet Dom Cobb, a főszereplő életét követi, aki nemcsak a bűnözés világában próbál boldogulni, hanem saját múltjának démonjaival is küzd.',
          coverArt: '/uploads/movie/Inception.png',
        }
      }),
      
      // Additional movies from SQL file
      prisma.movie.create({
        data: {
          title: 'Cléo from 5 to 7',
          director_Id: getCreativeId('Agnès Varda'),
          releaseYear: 1962,
          description: 'A film egy fiatal énekesnő, Cléo életének két óráját követi nyomon, miközben orvosi vizsgálati eredményeire vár, attól félve, hogy rákos lehet. A valós időben játszódó történet során Cléo Párizs utcáin vándorol, mélyen elmerülve saját halandóságának gondolataiban.',
          coverArt: '/uploads/movie/Cléo.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Goodfellas',
          director_Id: getCreativeId('Martin Scorsese'),
          releaseYear: 1990,
          description: 'A film Henry Hill életét és a maffiában betöltött szerepét mutatja be, amely magában foglalja feleségével, Karen Hill-lel való kapcsolatát, valamint maffia társai, Jimmy Conway és Tommy DeVito közötti dinamikát az olasz-amerikai bűnszervezetben.',
          coverArt: '/uploads/movie/Goodfellas.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Kontroll',
          director_Id: getCreativeId('Nimród Antal'),
          releaseYear: 2003,
          description: 'A film a budapesti metró sötét és misztikus világában játszódik, ahol a jegyellenőrök mindennapjait követhetjük nyomon. A történet középpontjában Bulcsú áll, aki a föld alatti világban él és dolgozik, miközben próbálja feldolgozni múltját és megtalálni önmagát.',
          coverArt: '/uploads/movie/Kontroll.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Mephisto',
          director_Id: getCreativeId('István Szabó'),
          releaseYear: 1981,
          description: 'Egy német színész, Hendrik Höfgen történetét meséli el, aki a náci Németország felemelkedése idején váratlan sikert ér el a Faust című darabban nyújtott alakításával. A film mélyen vizsgálja a művészet és a politika közötti kapcsolatot.',
          coverArt: '/uploads/movie/Mephisto.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Psycho',
          director_Id: getCreativeId('Alfred Hitchcock'),
          releaseYear: 1960,
          description: 'Egy titkárnő, Marion Crane, elkeseredett lépésre szánja el magát, amikor ellop egy nagyobb összeget munkaadójától, hogy új életet kezdjen szerelmével. Menekülése során egy távoli motelben száll meg, amelyet egy fiatal férfi, Norman Bates üzemeltet.',
          coverArt: '/uploads/movie/Psycho.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Seven Samurai',
          director_Id: getCreativeId('Akira Kurosawa'),
          releaseYear: 1954,
          description: 'Egy szegény japán falu lakói kétségbeesetten keresnek segítséget, amikor banditák fenyegetik őket, hogy elrabolják terményeiket és megélhetésüket. A falusiak végül hét szamurájt bérelnek fel, akik vállalják, hogy megvédik őket a támadóktól.',
          coverArt: '/uploads/movie/Seven_Samurai.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Star Wars: Episode IV - A New Hope',
          director_Id: getCreativeId('George Lucas'),
          releaseYear: 1977,
          description: 'Luke Skywalker, egy fiatal farmfiú, aki a Tatuin bolygón él, váratlanul belekeveredik a galaxis sorsát meghatározó eseményekbe, amikor találkozik Obi-Wan Kenobival, egy visszavonult Jedi lovaggal.',
          coverArt: '/uploads/movie/Star_Wars_IV.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Taxi Driver',
          director_Id: getCreativeId('Martin Scorsese'),
          releaseYear: 1976,
          description: 'Egy mentálisan instabil vietnámi veterán, Travis Bickle, éjszakai taxisofőrként dolgozik New York városában, miközben egyre mélyebbre süllyed az elszigeteltség és a paranoia világába.',
          coverArt: '/uploads/movie/Taxi_Driver.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'The Godfather',
          director_Id: getCreativeId('Francis Ford Coppola'),
          releaseYear: 1972,
          description: 'A film egy olasz-amerikai maffiacsalád, a Corleone család történetét meséli el, amelynek középpontjában Vito Corleone, a család idősödő patriarchája áll. A történet bemutatja, hogyan próbálja Vito átadni a hatalmat fiának, Michael Corleonénak.',
          coverArt: '/uploads/movie/The_Godfather.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'The Hurt Locker',
          director_Id: getCreativeId('Kathryn Bigelow'),
          releaseYear: 2008,
          description: 'Az iraki háború idején egy bombahatástalanító egység mindennapjait követhetjük nyomon, akik rendkívül veszélyes helyzetekkel néznek szembe. A történet középpontjában William James őrmester áll.',
          coverArt: '/uploads/movie/The_Hurt_Locker.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'The Shining',
          director_Id: getCreativeId('Stanley Kubrick'),
          releaseYear: 1980,
          description: 'Egy család egy elhagyatott szállodába költözik a téli szezonra, ahol a magány és a természetfeletti erők fokozatosan hatalmukba kerítik az apát, Jack Torrance-t. A szálloda múltja sötét titkokat rejt.',
          coverArt: '/uploads/movie/The_Shining.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Vertigo',
          director_Id: getCreativeId('Alfred Hitchcock'),
          releaseYear: 1958,
          description: 'Egy volt rendőrnyomozó, aki magasságtól való félelmet fejlesztett ki, miután szemtanúja volt egy halálesetnek, egy különös ügybe keveredik, amelyben egy régi ismerős arra kéri, hogy kövesse a feleségét.',
          coverArt: '/uploads/movie/Vertigo.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'The Turin Horse',
          director_Id: getCreativeId('Béla Tarr'),
          releaseYear: 2011,
          description: 'Egy vidéki paraszt és lánya mindennapjait követhetjük nyomon, akik egy elhagyatott tanyán élnek, távol a civilizációtól. A történet középpontjában a paraszt hűséges lova áll, amely egyre gyengébbé válik.',
          coverArt: '/uploads/movie/Turin_Horse.png',
        }
      }),
    ]);

    console.log('Creating relationships between entities...');
    
    // Book-character relationships
    console.log('Creating book-character relationships...');
    await Promise.all([
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === '1984').id,
          character_Id: getCharacterId('Winston Smith')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Animal Farm').id,
          character_Id: getCharacterId('Boxer')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Crime and Punishment').id,
          character_Id: getCharacterId('Rodion Raskolnikov')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Emma').id,
          character_Id: getCharacterId('Emma Woodhouse')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'For Whom the Bell Tolls').id,
          character_Id: getCharacterId('Robert Jordan')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'The Master and Margarita').id,
          character_Id: getCharacterId('Woland')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Mrs Dalloway').id,
          character_Id: getCharacterId('// filepath: d:\Downloads\13A-SZF2-Virtu-lis-K-nyvklub\backend\prisma\seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Starting to seed database...');

    // Insert creative people (authors/directors/creators)
    console.log('Creating creative people...');
    const creatives = await prisma.creative.createMany({
      data: [
        // Authors
        { name: 'Jane Austen', picture: '/uploads/creative/Austen.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Mikhail Bulgakov', picture: '/uploads/creative/Bulgakov.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Agatha Christie', picture: '/uploads/creative/Christie.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Fyodor Dostoevsky', picture: '/uploads/creative/Dostoevsky.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Ernest Hemingway', picture: '/uploads/creative/Hemingway.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Mór Jókai', picture: '/uploads/creative/Jókai.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Franz Kafka', picture: '/uploads/creative/Kafka.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Dezső Kosztolányi', picture: '/uploads/creative/Kosztolányi.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Gabriel García Márquez', picture: '/uploads/creative/Marquez.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Ferenc Molnár', picture: '/uploads/creative/Molnár.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'George Orwell', picture: '/uploads/creative/Orwell.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Virginia Woolf', picture: '/uploads/creative/Woolf.png', author_book: true, director_movie: false, creator_show: false },
        { name: 'Magda Szabó', picture: null, author_book: true, director_movie: false, creator_show: false },
        
        // TV Creators
        { name: 'Hirohiko Araki', picture: '/uploads/creative/Araki.jpg', author_book: false, director_movie: false, creator_show: true },
        { name: 'David Chase', picture: '/uploads/creative/Chase.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Michaela Coel', picture: '/uploads/creative/Coel.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Vince Gilligan', picture: '/uploads/creative/Gilligan.jpg', author_book: false, director_movie: false, creator_show: true },
        { name: 'Dan Harmon', picture: '/uploads/creative/Harmon.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Mike Judge', picture: '/uploads/creative/Judge.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Ryan Murphy', picture: '/uploads/creative/Murphy.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Shonda Rhimes', picture: '/uploads/creative/Rhimes.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'David Simon', picture: '/uploads/creative/Simon.png', author_book: false, director_movie: false, creator_show: true },
        { name: 'Phoebe Waller-Bridge', picture: '/uploads/creative/Waller-Bridge.png', author_book: false, director_movie: false, creator_show: true },
        
        // Directors
        { name: 'Akira Kurosawa', picture: '/uploads/creative/Akira.jpg', author_book: false, director_movie: true, creator_show: false },
        { name: 'Nimród Antal', picture: '/uploads/creative/Antal.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Kathryn Bigelow', picture: '/uploads/creative/Bigelow.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Francis Ford Coppola', picture: '/uploads/creative/Coppola.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Alfred Hitchcock', picture: '/uploads/creative/Hitchcock.jpg', author_book: false, director_movie: true, creator_show: false },
        { name: 'Stanley Kubrick', picture: '/uploads/creative/Kubrick.jpg', author_book: false, director_movie: true, creator_show: false },
        { name: 'George Lucas', picture: '/uploads/creative/Lucas.jpg', author_book: false, director_movie: true, creator_show: false },
        { name: 'Christopher Nolan', picture: '/uploads/creative/Nolan.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Martin Scorsese', picture: '/uploads/creative/Scorsese.jpg', author_book: false, director_movie: true, creator_show: false },
        { name: 'István Szabó', picture: '/uploads/creative/Szabó_Ist.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Béla Tarr', picture: '/uploads/creative/Tarr.png', author_book: false, director_movie: true, creator_show: false },
        { name: 'Agnès Varda', picture: '/uploads/creative/Varda.png', author_book: false, director_movie: true, creator_show: false },
      ],
      skipDuplicates: true,
    });
    
    // Insert genres
    console.log('Creating genres...');
    const genres = await prisma.genre.createMany({
      data: [
        { genre: 'Fikció', description: 'A fikció olyan irodalmi művek gyűjtőneve, amelyek a képzelet szüleményei, nem pedig a valóság tényein alapulnak. Ezek a művek gyakran olyan történeteket mesélnek el, amelyek teljesen kitaláltak, vagy a valóság elemeit ötvözik a képzelet szülte eseményekkel. A fikció célja lehet a szórakoztatás, az érzelmek kiváltása, vagy akár a társadalmi kérdések vizsgálata is.' },
        { genre: 'Disztópia', description: 'A disztópikus irodalom olyan történeteket mutat be, amelyek egy sötét, elnyomó és gyakran kegyetlen társadalomban játszódnak. Ezek a művek gyakran a jövőben játszódnak, és a társadalmi, politikai vagy technológiai fejlődés negatív következményeit vizsgálják. A disztópikus történetek célja, hogy figyelmeztessenek a jelenlegi tendenciák veszélyeire, miközben mélyen emberi kérdéseket is boncolgatnak, mint például a szabadság, az egyenlőség és az emberi méltóság.' },
        { genre: 'Rejtély', description: 'A rejtély műfajába tartozó irodalmi művek középpontjában egy bűncselekmény, talány vagy megoldásra váró probléma áll. Ezek a történetek gyakran izgalmasak és fordulatosak, miközben az olvasót arra ösztönzik, hogy együtt gondolkodjon a szereplőkkel a megoldás érdekében. A rejtélyek célja nemcsak a szórakoztatás, hanem az emberi természet és a társadalmi igazságosság kérdéseinek vizsgálata is.' },
        { genre: 'Orosz irodalom', description: 'Az orosz irodalom a világirodalom egyik leggazdagabb és legmélyebb hagyományokkal rendelkező ága. Ezek az irodalmi művek gyakran foglalkoznak az emberi lélek mélységeivel, a társadalmi igazságtalanságokkal és az erkölcsi dilemmákkal. Az orosz irodalom nagy klasszikusai, mint Dosztojevszkij, Tolsztoj vagy Bulgakov, olyan univerzális kérdéseket vetnek fel, amelyek ma is relevánsak.' },
        { genre: 'Modernizmus', description: 'A modernista irodalom a hagyományos formák és narratívák elutasításával jött létre, és új, kísérletező megközelítéseket alkalmazott. Ezek a művek gyakran foglalkoznak az idő, az identitás és az emberi tapasztalat komplexitásával. A modernizmus célja, hogy új perspektívákat nyújtson az olvasónak, miközben a nyelv és a forma határait feszegeti.' },
        { genre: 'Romantika', description: 'A romantikus irodalom a szerelem, az érzelmek és az emberi kapcsolatok témáit helyezi előtérbe. Ezek a történetek gyakran idealizált világokat mutatnak be, ahol a szereplők érzelmi utazásai állnak a középpontban. A romantikus művek célja, hogy az olvasót elvarázsolják, miközben az emberi szív mélységeit és bonyolultságát tárják fel.' },
        { genre: 'Szatíra', description: 'A szatirikus irodalom humor, irónia és túlzás segítségével mutatja be a társadalmi, politikai vagy kulturális problémákat. Ezek a művek gyakran kritikusak és provokatívak, miközben szórakoztató módon hívják fel a figyelmet a világ abszurditásaira. A szatíra célja, hogy megnevettessen, miközben elgondolkodtat és változásra ösztönöz.' },
        { genre: 'Mágikus realizmus', description: 'A mágikus realizmus olyan irodalmi műfaj, amely a valóságos világot ötvözi a mágikus vagy természetfeletti elemekkel. Ezek a történetek gyakran a mindennapi életet mutatják be, miközben a csodák és a varázslat természetes részei a szereplők világának. A mágikus realizmus célja, hogy új perspektívát nyújtson az olvasónak, miközben a valóság és a képzelet határait feszegeti.' },
        { genre: 'Magyar irodalom', description: 'A magyar irodalom gazdag és sokszínű hagyományokkal rendelkezik, amely a magyar történelem, kultúra és társadalom mélyreható vizsgálatát tükrözi. Ezek a művek gyakran foglalkoznak a nemzeti identitás, a szabadság és az emberi sors kérdéseivel. A magyar irodalom klasszikusai, mint Jókai, Kosztolányi vagy Szabó Magda, időtálló értékeket és univerzális üzeneteket hordoznak.' },
        { genre: 'Dráma', description: 'A drámai irodalom az emberi érzelmek és konfliktusok mélyreható ábrázolására összpontosít. Ezek a művek gyakran komoly és érzelmileg megterhelő témákat dolgoznak fel, miközben az emberi természet és a társadalmi kapcsolatok komplexitását vizsgálják. A dráma célja, hogy az olvasót vagy nézőt érzelmileg megérintse és elgondolkodtassa.' },
        { genre: 'Komédia', description: 'A komédia műfajába tartozó irodalmi művek célja, hogy megnevettessék és szórakoztassák az olvasót. Ezek a történetek gyakran humoros helyzeteket, félreértéseket és színes karaktereket mutatnak be, miközben a társadalmi normák és emberi gyengeségek paródiáját nyújtják. A komédia célja, hogy könnyedebb oldalról közelítse meg az élet kihívásait, miközben pozitív üzeneteket közvetít.' },
        { genre: 'Tudományos-fantasztikus', description: 'A tudományos-fantasztikus irodalom olyan történeteket mutat be, amelyek a tudományos felfedezések és technológiai fejlődés képzeletbeli következményeit vizsgálják. Ezek a művek gyakran a jövőben játszódnak, és olyan kérdéseket vetnek fel, mint az emberiség sorsa, az űrkutatás vagy a mesterséges intelligencia. A sci-fi célja, hogy az olvasót elgondolkodtassa a tudomány és az emberi természet kapcsolatáról.' },
        { genre: 'Thriller', description: 'A thriller műfajába tartozó irodalmi művek izgalmas és feszült történeteket mesélnek el, amelyek gyakran fordulatokkal és váratlan eseményekkel teli cselekményt kínálnak. Ezek a művek célja, hogy az olvasót a székéhez szegezzék, miközben a feszültség és a rejtély fokozatosan bontakozik ki. A thriller gyakran foglalkozik az emberi psziché sötét oldalával és a túlélés kérdéseivel.' },
        { genre: 'Horror', description: 'A horror irodalom célja, hogy félelmet, rettegést vagy undort váltson ki az olvasóból. Ezek a történetek gyakran természetfeletti lényeket, sötét helyszíneket és nyomasztó atmoszférát mutatnak be, miközben az emberi félelmek és szorongások mélyére hatolnak. A horror célja, hogy az olvasót szembesítse saját félelmeivel, miközben szórakoztat és borzongat.' },
        { genre: 'Krimi', description: 'A krimi műfajába tartozó irodalmi művek a bűncselekmények, azok felderítése és az elkövetők motivációinak vizsgálatára összpontosítanak. Ezek a történetek gyakran izgalmasak és fordulatosak, miközben az olvasót arra ösztönzik, hogy együtt gondolkodjon a nyomozóval a rejtély megoldásán. A krimi célja, hogy szórakoztasson, miközben az igazság és az emberi természet kérdéseit is boncolgatja.' },
        { genre: 'Háborús', description: 'A háborús irodalom a háború borzalmait, hősiességét és emberi áldozatait mutatja be. Ezek a történetek gyakran a frontvonalon játszódnak, és a katonák, civilek vagy túlélők szemszögéből ábrázolják a konfliktusokat. A háborús irodalom célja, hogy az olvasót elgondolkodtassa a háború értelmetlenségéről és az emberi élet törékenységéről.' },
        { genre: 'Művészfilm', description: 'A művészfilm műfajába tartozó irodalmi művek elsősorban esztétikai célokat szolgálnak, és gyakran kísérletező formákat és narratívákat alkalmaznak. Ezek a történetek mélyebb filozófiai vagy érzelmi kérdéseket vizsgálnak, miközben a hagyományos szórakoztatás helyett az önkifejezésre és a művészi értékekre helyezik a hangsúlyt. A művészfilm célja, hogy az olvasót vagy nézőt új perspektívákra ösztönözze, miközben a művészet határait feszegeti.' },
        { genre: 'Kaland', description: 'A kaland műfajába tartozó irodalmi művek izgalmas és gyakran veszélyes utazásokat vagy küldetéseket mutatnak be. Ezek a történetek tele vannak akcióval, fordulatokkal és hősies tettekkel, miközben a szereplők különböző kihívásokkal néznek szembe. A kaland célja, hogy az olvasót elvarázsolja és inspirálja, miközben a bátorság, a kitartás és a felfedezés örömét ünnepli.' },
      ],
      skipDuplicates: true,
    });

    // Insert actors
    console.log('Creating actors...');
    await prisma.actor.createMany({
      data: [
        // TV show actors
        { name: 'Bryan Cranston', picture: '/uploads/actor/bryan_cranston.png' },
        { name: 'Aaron Paul', picture: '/uploads/actor/aaron_paul.png' },
        { name: 'Peter Dinklage', picture: '/uploads/actor/peter_dinklage.png' },
        { name: 'Emilia Clarke', picture: '/uploads/actor/emilia_clarke.png' },
        { name: 'Sarah Paulson', picture: '/uploads/actor/sarah_paulson.png' },
        { name: 'Joel McHale', picture: '/uploads/actor/joel_mchale.png' },
        { name: 'Phoebe Waller-Bridge', picture: '/uploads/actor/phoebe_waller-bridge.png' },
        { name: 'Ellen Pompeo', picture: '/uploads/actor/ellen_pompeo.png' },
        { name: 'Michaela Coel', picture: '/uploads/actor/michaela_coel.png' },
        { name: 'Mike Judge', picture: '/uploads/actor/mike_judge.png' },
        { name: 'Donald Glover', picture: '/uploads/actor/donald_glover.png' },
        { name: 'James Gandolfini', picture: '/uploads/actor/james_gandolfini.png' },
        { name: 'Idris Elba', picture: '/uploads/actor/idris_elba.png' },
        // Movie actors
        { name: 'Leonardo DiCaprio', picture: '/uploads/actor/leonardo_dicaprio.png' },
        { name: 'Joseph Gordon-Levitt', picture: '/uploads/actor/joseph_gordon-levitt.png' },
        { name: 'Marion Cotillard', picture: '/uploads/actor/marion_cotillard.png' },
        { name: 'Corinne Marchand', picture: '/uploads/actor/corinne_marchand.png' },
        { name: 'Robert De Niro', picture: '/uploads/actor/robert_de_niro.png' },
        { name: 'Ray Liotta', picture: '/uploads/actor/ray_liotta.png' },
        { name: 'Joe Pesci', picture: '/uploads/actor/joe_pesci.png' },
        { name: 'Sándor Csányi', picture: '/uploads/actor/sandor_csanyi.png' },
        { name: 'Zoltán Mucsi', picture: '/uploads/actor/zoltan_mucsi.png' },
        { name: 'Klaus Maria Brandauer', picture: '/uploads/actor/klaus_maria_brandauer.png' },
        { name: 'Anthony Perkins', picture: '/uploads/actor/anthony_perkins.png' },
        { name: 'Janet Leigh', picture: '/uploads/actor/janet_leigh.png' },
        { name: 'Toshiro Mifune', picture: '/uploads/actor/toshiro_mifune.png' },
        { name: 'Mark Hamill', picture: '/uploads/actor/mark_hamill.png' },
        { name: 'Harrison Ford', picture: '/uploads/actor/harrison_ford.png' },
        { name: 'Carrie Fisher', picture: '/uploads/actor/carrie_fisher.png' },
        { name: 'Marlon Brando', picture: '/uploads/actor/marlon_brando.png' },
        { name: 'Al Pacino', picture: '/uploads/actor/al_pacino.png' },
        { name: 'James Caan', picture: '/uploads/actor/james_caan.png' },
        { name: 'Jeremy Renner', picture: '/uploads/actor/jeremy_renner.png' },
        { name: 'Jack Nicholson', picture: '/uploads/actor/jack_nicholson.png' },
        { name: 'Shelley Duvall', picture: '/uploads/actor/shelley_duvall.png' },
        { name: 'James Stewart', picture: '/uploads/actor/james_stewart.png' },
        { name: 'Kim Novak', picture: '/uploads/actor/kim_novak.png' },
        { name: 'János Derzsi', picture: '/uploads/actor/janos_derzsi.png' },
        { name: 'Erika Bók', picture: '/uploads/actor/erika_bok.png' },
      ],
      skipDuplicates: true,
    });

    console.log('Creating characters...');
    await prisma.character.createMany({
      data: [
        // Book characters
        { name: 'Winston Smith' },
        { name: 'Boxer' },
        { name: 'Rodion Raskolnikov' },
        { name: 'Emma Woodhouse' },
        { name: 'Robert Jordan' },
        { name: 'Woland' },
        { name: 'Clarissa Dalloway' },
        { name: 'Hercule Poirot' },
        { name: 'Aureliano Buendía' },
        { name: 'Elizabeth Bennet' },
        { name: 'Gregor Samsa' },
        { name: 'Baradlay Richárd' },
        { name: 'Nemecsek Ernő' },
        { name: 'Gina' },
        { name: 'Emerence' },
        { name: 'Timár Mihály' },
        { name: 'Édes Anna' },
        { name: 'Esti Kornél' },
        // TV characters
        { name: 'Walter White' },
        { name: 'Saul Goodman' },
        { name: 'Jeff Winger' },
        { name: 'Fleabag' },
        { name: 'Meredith Grey' },
        { name: 'Arabella' },
        { name: 'Hank Hill' },
        { name: 'Rick Sanchez' },
        { name: 'Tony Soprano' },
        { name: 'Omar Little' },
        // Movie characters
        { name: 'Dom Cobb' },
        { name: 'Cléo' },
        { name: 'Henry Hill' },
        { name: 'Tommy DeVito' },
        { name: 'Bulcsú' },
        { name: 'Hendrik Höfgen' },
        { name: 'Norman Bates' },
        { name: 'Marion Crane' },
        { name: 'Kambei Shimada' },
        { name: 'Luke Skywalker' },
        { name: 'Han Solo' },
        { name: 'Princess Leia' },
        { name: 'Travis Bickle' },
        { name: 'Vito Corleone' },
        { name: 'Michael Corleone' },
        { name: 'Sonny Corleone' },
        { name: 'William James' },
        { name: 'Jack Torrance' },
        { name: 'Wendy Torrance' },
        { name: 'Dr. David Bowman' },
        { name: 'Scottie Ferguson' },
        { name: 'Madeleine Elster' },
        { name: 'Ohlsdorfer' },
        { name: 'Ohlsdorfer lánya' },
      ],
      skipDuplicates: true,
    });

    const allCreatives = await prisma.creative.findMany();
    const allGenres = await prisma.genre.findMany();
    const allCharacters = await prisma.character.findMany();
    const allActors = await prisma.actor.findMany();

    const getCreativeId = (name) => allCreatives.find(c => c.name === name)?.id;
    const getGenreId = (name) => allGenres.find(g => g.genre === name)?.id;
    const getCharacterId = (name) => allCharacters.find(c => c.name === name)?.id;
    const getActorId = (name) => allActors.find(a => a.name === name)?.id;

    console.log('Creating books...');
    const books = await Promise.all([
      // Original 5 books
      prisma.book.create({
        data: {
          title: '1984',
          author_Id: getCreativeId('George Orwell'),
          releaseYear: 1949,
          description: 'Egy disztópikus regény, amely egy totalitárius államban játszódik, ahol a Nagy Testvér mindent lát és irányít. A történet Winston Smith életét követi, aki megpróbálja megérteni és szembeszállni a rendszerrel. A regény az egyéni szabadság, a hatalom és az igazság kérdéseit vizsgálja, miközben bemutatja a propaganda és az agymosás hatásait.',
          coverArt: '/uploads/book/1984.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Animal Farm',
          author_Id: getCreativeId('George Orwell'),
          releaseYear: 1945,
          description: 'Egy allegorikus novella, amely egy farm állatainak lázadását meséli el az emberi gazdájuk ellen. A történet a hatalom korrupcióját és a forradalmak eltorzulását mutatja be, miközben szatirikusan ábrázolja a politikai rendszerek működését. Az állatok közötti konfliktusok és árulások a társadalmi egyenlőség illúzióját tárják fel.',
          coverArt: '/uploads/book/Animal_Farm.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Crime and Punishment',
          author_Id: getCreativeId('Fyodor Dostoevsky'),
          releaseYear: 1866,
          description: 'Egy regény, amely egy szegény ex-diák, Rodion Raskolnikov mentális gyötrelmeit és erkölcsi dilemmáit követi nyomon, miután elkövet egy gyilkosságot. A történet mélyen filozófiai és pszichológiai, az emberi természet, a bűn és a megváltás kérdéseit vizsgálja. A regény bemutatja a társadalmi igazságtalanságokat és az emberi szenvedés mélységeit.',
          coverArt: '/uploads/book/Crime_and_Punishment.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Emma',
          author_Id: getCreativeId('Jane Austen'),
          releaseYear: 1815,
          description: 'Egy regény, amely egy fiatal nő, Emma Woodhouse életét követi, aki saját magát tartja a házasságok mesterének, miközben saját érzelmi éretlenségével küzd. A történet tele van humorral, romantikával és társadalmi megfigyelésekkel, miközben bemutatja a viktoriánus Anglia társadalmi normáit és osztályrendszerét.',
          coverArt: '/uploads/book/Emma.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'For Whom the Bell Tolls',
          author_Id: getCreativeId('Ernest Hemingway'),
          releaseYear: 1940,
          description: 'Egy regény, amely a spanyol polgárháború idején játszódik, és egy amerikai robbantási szakértő, Robert Jordan történetét meséli el. A regény a háború borzalmait, az emberi kapcsolatok erejét és a személyes áldozatok jelentőségét vizsgálja. A történet tele van érzelmi mélységgel és filozófiai elmélkedésekkel az élet értelméről és a halál elkerülhetetlenségéről.',
          coverArt: '/uploads/book/For_Whom_the_Bell_Tolls.png',
        }
      }),
      
      // Additional books from SQL file
      prisma.book.create({
        data: {
          title: 'The Master and Margarita',
          author_Id: getCreativeId('Mikhail Bulgakov'),
          releaseYear: 1967,
          description: 'Egy regény, amely a Sátán látogatását meséli el a Szovjetunióban, miközben párhuzamosan egy bibliai történetet is bemutat. A történet tele van szatírával, misztikummal és filozófiai elmélkedésekkel a hatalomról, a művészetről és az emberi természetről. A regény a szovjet társadalom kritikája, miközben a szerelem és az áldozat erejét is bemutatja.',
          coverArt: '/uploads/book/Master_and_Margarita.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Mrs Dalloway',
          author_Id: getCreativeId('Virginia Woolf'),
          releaseYear: 1925,
          description: 'Egy regény, amely egyetlen nap eseményeit követi nyomon Clarissa Dalloway életében, miközben visszaemlékezéseken keresztül feltárja a múltját. A történet az idő múlásának, az emberi kapcsolatok bonyolultságának és a belső világ gazdagságának témáit vizsgálja. A regény modernista stílusban íródott, és mélyen emberi portrét fest a főszereplőről.',
          coverArt: '/uploads/book/Mrs_Dalloway.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Murder on the Orient Express',
          author_Id: getCreativeId('Agatha Christie'),
          releaseYear: 1934,
          description: 'Egy detektívregény, amely Hercule Poirot nyomozását követi egy luxusvonaton történt gyilkosság ügyében. A történet tele van fordulatokkal, rejtélyekkel és izgalmas karakterekkel, miközben bemutatja Poirot zseniális logikáját és megfigyelőképességét. A regény a klasszikus krimi műfaj egyik legkiemelkedőbb alkotása.',
          coverArt: '/uploads/book/Murder_on_the_Orient_Express.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'One Hundred Years of Solitude',
          author_Id: getCreativeId('Gabriel García Márquez'),
          releaseYear: 1967,
          description: 'Egy regény, amely a Buendía család történetét meséli el a képzeletbeli Macondo városában. A történet tele van mágikus realizmussal, családi tragédiákkal és történelmi eseményekkel, miközben az emberi sors és az idő ciklikusságának témáit vizsgálja. A regény a latin-amerikai irodalom egyik legfontosabb műve.',
          coverArt: '/uploads/book/One_Hundred_Years_of_Solitude.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Pride and Prejudice',
          author_Id: getCreativeId('Jane Austen'),
          releaseYear: 1813,
          description: 'Egy romantikus regény, amely Elizabeth Bennet és Mr. Darcy kapcsolatát követi, miközben bemutatja a viktoriánus Anglia társadalmi normáit és osztályrendszerét. A történet tele van humorral, romantikával és éles társadalmi megfigyelésekkel, miközben az előítéletek és a büszkeség leküzdésének témáit vizsgálja.',
          coverArt: '/uploads/book/Pride_and_Prejudice.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'The Metamorphosis',
          author_Id: getCreativeId('Franz Kafka'),
          releaseYear: 1915,
          description: 'Egy novella, amely egy férfi, Gregor Samsa történetét meséli el, aki egy reggel óriási rovarrá változva ébred. A történet az elidegenedés, a családi kapcsolatok és az emberi lét abszurditásának témáit vizsgálja. A mű Kafka szimbolikus és filozófiai írásainak egyik legismertebb darabja.',
          coverArt: '/uploads/book/The_Metamorphosis.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'A kőszívű ember fiai',
          author_Id: getCreativeId('Mór Jókai'),
          releaseYear: 1869,
          description: 'Egy regény, amely a magyar szabadságharc idején játszódik, és egy család történetét meséli el, akik különböző oldalakon állnak a konfliktusban. A történet tele van hazafisággal, romantikával és drámai fordulatokkal, miközben bemutatja a magyar történelem egyik legfontosabb időszakát.',
          coverArt: '/uploads/book/A_kőszívű_ember_fiai.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'A Pál utcai fiúk',
          author_Id: getCreativeId('Ferenc Molnár'),
          releaseYear: 1906,
          description: 'Egy regény, amely egy csapat iskolás fiú történetét meséli el, akik megpróbálják megvédeni játszóterüket egy rivális bandától. A történet a barátság, a bátorság és az áldozat témáit vizsgálja, miközben bemutatja a gyermeki világ egyszerűségét és mélységét.',
          coverArt: '/uploads/book/A_Pál_utcai_fiúk.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Abigél',
          author_Id: getCreativeId('Magda Szabó'),
          releaseYear: 1970,
          description: 'Egy regény, amely egy fiatal lány, Gina történetét meséli el, akit egy szigorú bentlakásos iskolába küldenek a második világháború idején. A történet tele van rejtélyekkel, érzelmi mélységekkel és a felnőtté válás kihívásaival, miközben bemutatja a háború hatásait az egyéni sorsokra.',
          coverArt: '/uploads/book/Abigél.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Az ajtó',
          author_Id: getCreativeId('Magda Szabó'),
          releaseYear: 1987,
          description: 'Egy regény, amely egy író és házvezetőnője, Emerence kapcsolatát meséli el, miközben feltárja a múlt titkait és a bizalom törékenységét. A történet tele van érzelmi mélységekkel, filozófiai elmélkedésekkel és az emberi kapcsolatok bonyolultságának bemutatásával.',
          coverArt: '/uploads/book/Az_ajtó.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Az arany ember',
          author_Id: getCreativeId('Mór Jókai'),
          releaseYear: 1872,
          description: 'Egy regény, amely egy kereskedő, Timár Mihály történetét meséli el, aki egy hajótörés révén gazdagságra tesz szert. A történet tele van romantikával, kalandokkal és erkölcsi dilemmákkal, miközben bemutatja a boldogság keresésének és az emberi természet összetettségének témáit.',
          coverArt: '/uploads/book/Az_arany_ember.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Édes Anna',
          author_Id: getCreativeId('Dezső Kosztolányi'),
          releaseYear: 1926,
          description: 'Egy regény, amely egy cselédlány, Édes Anna történetét meséli el, aki végül meggyilkolja munkaadóit. A történet az emberi lélek mélységeit, a társadalmi igazságtalanságokat és az elnyomás hatásait vizsgálja, miközben bemutatja a magyar társadalom árnyoldalait.',
          coverArt: '/uploads/book/Édes_Anna.png',
        }
      }),
      prisma.book.create({
        data: {
          title: 'Esti Kornél',
          author_Id: getCreativeId('Dezső Kosztolányi'),
          releaseYear: 1933,
          description: 'Egy novellagyűjtemény, amely Kornél Esti életének különböző epizódjait meséli el. A történetek tele vannak humorral, melankóliával és filozófiai elmélkedésekkel, miközben bemutatják az emberi lét abszurditását és szépségét.',
          coverArt: '/uploads/book/Esti_Kornél.png',
        }
      }),
    ]);

    // Create TV shows
    console.log('Creating TV shows...');
    const tvShows = await Promise.all([
      // Original 2 TV shows
      prisma.tvshow.create({
        data: {
          title: 'American Horror Story',
          creator_Id: getCreativeId('Ryan Murphy'),
          description: 'Egy antológia sorozat, amely különböző karakterekre és helyszínekre összpontosít, minden évad egy új történetet mesél el. A sorozat a horror műfaj különböző aspektusait tárja fel, beleértve a kísértetházakat, boszorkányokat, cirkuszi szörnyeket és apokaliptikus eseményeket. A történetek gyakran sötét, pszichológiai mélységeket érintenek, miközben társadalmi kérdéseket is boncolgatnak.',
          seasons: 10,
          coverArt: '/uploads/tv/AHS.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'Breaking Bad',
          creator_Id: getCreativeId('Vince Gilligan'),
          description: 'Egy középiskolai kémiatanár, akit rákos megbetegedéssel diagnosztizálnak, úgy dönt, hogy metamfetamint kezd gyártani és árusítani, hogy biztosítsa családja jövőjét. A sorozat a bűnözés világába való fokozatos elmerülését mutatja be, miközben a karakterek morális dilemmákkal és személyes konfliktusokkal szembesülnek. A történet a hatalom, a kapzsiság és a családi kötelékek témáit vizsgálja.',
          seasons: 5,
          coverArt: '/uploads/tv/BB.png',
        }
      }),
      
      // Additional TV shows from SQL file
      prisma.tvshow.create({
        data: {
          title: 'Better Call Saul',
          creator_Id: getCreativeId('Vince Gilligan'),
          description: 'Egy ügyvéd, Jimmy McGill, küzdelmei és átalakulása Saul Goodmanné, a Breaking Bad ikonikus karakterévé. A sorozat bemutatja Jimmy életének korai szakaszát, beleértve a családi és szakmai kihívásokat, valamint a bűnözői világba való fokozatos belépését. A történet mélyen emberi, tele humorral, drámával és váratlan fordulatokkal.',
          seasons: 6,
          coverArt: '/uploads/tv/BCS.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'Community',
          creator_Id: getCreativeId('Dan Harmon'),
          description: 'Egy felfüggesztett ügyvéd kénytelen beiratkozni egy közösségi főiskolára, ahol egy színes személyiségekből álló tanári kar és diáksereg várja. A sorozat humoros és szatirikus módon mutatja be az oktatási rendszer és a társadalmi kapcsolatok dinamikáját. A karakterek közötti interakciók és a kreatív epizódok teszik a sorozatot egyedivé.',
          seasons: 6,
          coverArt: '/uploads/tv/Community.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'Fleabag',
          creator_Id: getCreativeId('Phoebe Waller-Bridge'),
          description: 'Egy fiatal nő életét követi nyomon Londonban, aki próbál megbirkózni a veszteséggel, a családi konfliktusokkal és a modern élet kihívásaival. A sorozat egyedi humorral és érzelmi mélységgel mutatja be a főszereplő belső világát, miközben a nézőkkel közvetlenül kommunikál. A történet a magány, a szeretet és az önelfogadás témáit járja körül.',
          seasons: 2,
          coverArt: '/uploads/tv/Fleabag.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: "Grey's Anatomy",
          creator_Id: getCreativeId('Shonda Rhimes'),
          description: 'Egy orvosi dráma, amely a sebészeti gyakornokok és mentoraik személyes és szakmai életére összpontosít. A sorozat bemutatja a kórházi élet intenzív pillanatait, a bonyolult emberi kapcsolatokat és a karakterek fejlődését. A történet tele van érzelmi csúcspontokkal, tragédiákkal és felemelő pillanatokkal, miközben az orvosi etika és a személyes döntések kérdéseit is érinti.',
          seasons: 18,
          coverArt: '/uploads/tv/Greys_Anatomy.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'I May Destroy You',
          creator_Id: getCreativeId('Michaela Coel'),
          description: 'Egy nő története, aki megpróbálja újraépíteni az életét egy szexuális támadás után. A sorozat mélyen személyes és provokatív módon tárja fel a trauma, a gyógyulás és az önazonosság kérdéseit. A történet a modern társadalom kihívásait és a kapcsolatok bonyolultságát is bemutatja.',
          seasons: 1,
          coverArt: '/uploads/tv/IMDY.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'King of the Hill',
          creator_Id: getCreativeId('Mike Judge'),
          description: 'Egy texasi propánkereskedő, Hank Hill, és családja mindennapjait követi nyomon. A sorozat humoros és szatirikus módon mutatja be az amerikai középosztály életét, miközben a családi kapcsolatok és a közösségi értékek fontosságát hangsúlyozza. A történetek gyakran hétköznapi problémákból indulnak ki, de mélyebb társadalmi kérdéseket is érintenek.',
          seasons: 13,
          coverArt: '/uploads/tv/KOTH.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'Rick and Morty',
          creator_Id: getCreativeId('Dan Harmon'),
          description: 'Egy animációs sorozat, amely egy excentrikus, alkoholista tudós és unokája kalandjait követi nyomon különböző dimenziókban és univerzumokban. A sorozat tele van sötét humorral, filozófiai kérdésekkel és tudományos-fantasztikus elemekkel. A történetek gyakran a családi kapcsolatok és az emberi természet mélyebb aspektusait is vizsgálják.',
          seasons: 6,
          coverArt: '/uploads/tv/RaM.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'The Sopranos',
          creator_Id: getCreativeId('David Chase'),
          description: 'Egy New Jersey-i maffiafőnök, Tony Soprano, életét mutatja be, aki egyszerre próbálja kezelni a bűnözői világ kihívásait és a családi problémákat. A sorozat mélyen emberi és pszichológiai portrét fest a főszereplőről, miközben a hatalom, a lojalitás és a morális dilemmák kérdéseit vizsgálja. A történet tele van drámával, feszültséggel és váratlan fordulatokkal.',
          seasons: 6,
          coverArt: '/uploads/tv/Sopranos.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'The Deuce',
          creator_Id: getCreativeId('David Simon'),
          description: 'A pornóipar felemelkedését mutatja be New Yorkban az 1970-es évektől kezdve. A sorozat részletesen ábrázolja a társadalmi és gazdasági változásokat, amelyek a szexipar növekedéséhez vezettek. A történet a karakterek személyes küzdelmeit és a korszak kulturális dinamikáját is bemutatja.',
          seasons: 3,
          coverArt: '/uploads/tv/The_Deuce.png',
        }
      }),
      prisma.tvshow.create({
        data: {
          title: 'The Wire',
          creator_Id: getCreativeId('David Simon'),
          description: 'Baltimore drogvilágát mutatja be a dílerek és a rendfenntartók szemszögéből. A sorozat realisztikus és részletes képet fest a város társadalmi és politikai problémáiról, miközben a karakterek személyes történeteire is nagy hangsúlyt fektet. A történet a hatalom, a korrupció és az igazságosság kérdéseit vizsgálja.',
          seasons: 5,
          coverArt: '/uploads/tv/The_Wire.png',
        }
      }),
    ]);

    // Create movies
    console.log('Creating movies...');
    const movies = await Promise.all([
      // Original 2 movies
      prisma.movie.create({
        data: {
          title: '2001: A Space Odyssey',
          director_Id: getCreativeId('Stanley Kubrick'),
          releaseYear: 1968,
          description: 'Amikor rejtélyes monolitot fedeznek fel a Hold felszínén, egy űrhajót küldenek a Jupiterhez, hogy megtalálják az eredetét. A film az emberi evolúció különböző fázisait követi nyomon, a primitív emberszabásúaktól kezdve a modern emberen át a következő fejlődési szintig. A történet középpontjában az ember és a technológia, különösen a mesterséges intelligencia kapcsolata áll, melyet a HAL 9000 számítógép testesít meg.',
          coverArt: '/uploads/movie/2001_Space_Odyssey.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Inception',
          director_Id: getCreativeId('Christopher Nolan'),
          releaseYear: 2010,
          description: 'Egy tolvaj, aki vállalati titkokat lop el az álmok megosztására szolgáló technológia segítségével, egy különleges feladatot kap: egy ötlet elültetését egy célpont elméjében. A történet Dom Cobb, a főszereplő életét követi, aki nemcsak a bűnözés világában próbál boldogulni, hanem saját múltjának démonjaival is küzd.',
          coverArt: '/uploads/movie/Inception.png',
        }
      }),
      
      // Additional movies from SQL file
      prisma.movie.create({
        data: {
          title: 'Cléo from 5 to 7',
          director_Id: getCreativeId('Agnès Varda'),
          releaseYear: 1962,
          description: 'A film egy fiatal énekesnő, Cléo életének két óráját követi nyomon, miközben orvosi vizsgálati eredményeire vár, attól félve, hogy rákos lehet. A valós időben játszódó történet során Cléo Párizs utcáin vándorol, mélyen elmerülve saját halandóságának gondolataiban.',
          coverArt: '/uploads/movie/Cléo.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Goodfellas',
          director_Id: getCreativeId('Martin Scorsese'),
          releaseYear: 1990,
          description: 'A film Henry Hill életét és a maffiában betöltött szerepét mutatja be, amely magában foglalja feleségével, Karen Hill-lel való kapcsolatát, valamint maffia társai, Jimmy Conway és Tommy DeVito közötti dinamikát az olasz-amerikai bűnszervezetben.',
          coverArt: '/uploads/movie/Goodfellas.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Kontroll',
          director_Id: getCreativeId('Nimród Antal'),
          releaseYear: 2003,
          description: 'A film a budapesti metró sötét és misztikus világában játszódik, ahol a jegyellenőrök mindennapjait követhetjük nyomon. A történet középpontjában Bulcsú áll, aki a föld alatti világban él és dolgozik, miközben próbálja feldolgozni múltját és megtalálni önmagát.',
          coverArt: '/uploads/movie/Kontroll.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Mephisto',
          director_Id: getCreativeId('István Szabó'),
          releaseYear: 1981,
          description: 'Egy német színész, Hendrik Höfgen történetét meséli el, aki a náci Németország felemelkedése idején váratlan sikert ér el a Faust című darabban nyújtott alakításával. A film mélyen vizsgálja a művészet és a politika közötti kapcsolatot.',
          coverArt: '/uploads/movie/Mephisto.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Psycho',
          director_Id: getCreativeId('Alfred Hitchcock'),
          releaseYear: 1960,
          description: 'Egy titkárnő, Marion Crane, elkeseredett lépésre szánja el magát, amikor ellop egy nagyobb összeget munkaadójától, hogy új életet kezdjen szerelmével. Menekülése során egy távoli motelben száll meg, amelyet egy fiatal férfi, Norman Bates üzemeltet.',
          coverArt: '/uploads/movie/Psycho.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Seven Samurai',
          director_Id: getCreativeId('Akira Kurosawa'),
          releaseYear: 1954,
          description: 'Egy szegény japán falu lakói kétségbeesetten keresnek segítséget, amikor banditák fenyegetik őket, hogy elrabolják terményeiket és megélhetésüket. A falusiak végül hét szamurájt bérelnek fel, akik vállalják, hogy megvédik őket a támadóktól.',
          coverArt: '/uploads/movie/Seven_Samurai.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Star Wars: Episode IV - A New Hope',
          director_Id: getCreativeId('George Lucas'),
          releaseYear: 1977,
          description: 'Luke Skywalker, egy fiatal farmfiú, aki a Tatuin bolygón él, váratlanul belekeveredik a galaxis sorsát meghatározó eseményekbe, amikor találkozik Obi-Wan Kenobival, egy visszavonult Jedi lovaggal.',
          coverArt: '/uploads/movie/Star_Wars_IV.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Taxi Driver',
          director_Id: getCreativeId('Martin Scorsese'),
          releaseYear: 1976,
          description: 'Egy mentálisan instabil vietnámi veterán, Travis Bickle, éjszakai taxisofőrként dolgozik New York városában, miközben egyre mélyebbre süllyed az elszigeteltség és a paranoia világába.',
          coverArt: '/uploads/movie/Taxi_Driver.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'The Godfather',
          director_Id: getCreativeId('Francis Ford Coppola'),
          releaseYear: 1972,
          description: 'A film egy olasz-amerikai maffiacsalád, a Corleone család történetét meséli el, amelynek középpontjában Vito Corleone, a család idősödő patriarchája áll. A történet bemutatja, hogyan próbálja Vito átadni a hatalmat fiának, Michael Corleonénak.',
          coverArt: '/uploads/movie/The_Godfather.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'The Hurt Locker',
          director_Id: getCreativeId('Kathryn Bigelow'),
          releaseYear: 2008,
          description: 'Az iraki háború idején egy bombahatástalanító egység mindennapjait követhetjük nyomon, akik rendkívül veszélyes helyzetekkel néznek szembe. A történet középpontjában William James őrmester áll.',
          coverArt: '/uploads/movie/The_Hurt_Locker.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'The Shining',
          director_Id: getCreativeId('Stanley Kubrick'),
          releaseYear: 1980,
          description: 'Egy család egy elhagyatott szállodába költözik a téli szezonra, ahol a magány és a természetfeletti erők fokozatosan hatalmukba kerítik az apát, Jack Torrance-t. A szálloda múltja sötét titkokat rejt.',
          coverArt: '/uploads/movie/The_Shining.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'Vertigo',
          director_Id: getCreativeId('Alfred Hitchcock'),
          releaseYear: 1958,
          description: 'Egy volt rendőrnyomozó, aki magasságtól való félelmet fejlesztett ki, miután szemtanúja volt egy halálesetnek, egy különös ügybe keveredik, amelyben egy régi ismerős arra kéri, hogy kövesse a feleségét.',
          coverArt: '/uploads/movie/Vertigo.png',
        }
      }),
      prisma.movie.create({
        data: {
          title: 'The Turin Horse',
          director_Id: getCreativeId('Béla Tarr'),
          releaseYear: 2011,
          description: 'Egy vidéki paraszt és lánya mindennapjait követhetjük nyomon, akik egy elhagyatott tanyán élnek, távol a civilizációtól. A történet középpontjában a paraszt hűséges lova áll, amely egyre gyengébbé válik.',
          coverArt: '/uploads/movie/Turin_Horse.png',
        }
      }),
    ]);

    console.log('Creating relationships between entities...');
    
    // Book-character relationships
    console.log('Creating book-character relationships...');
    await Promise.all([
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === '1984').id,
          character_Id: getCharacterId('Winston Smith')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Animal Farm').id,
          character_Id: getCharacterId('Boxer')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Crime and Punishment').id,
          character_Id: getCharacterId('Rodion Raskolnikov')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Emma').id,
          character_Id: getCharacterId('Emma Woodhouse')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'For Whom the Bell Tolls').id,
          character_Id: getCharacterId('Robert Jordan')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'The Master and Margarita').id,
          character_Id: getCharacterId('Woland')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Mrs Dalloway').id,
          character_Id: getCharacterId('Clarissa Dalloway')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Murder on the Orient Express').id,
          character_Id: getCharacterId('Hercule Poirot')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'One Hundred Years of Solitude').id,
          character_Id: getCharacterId('Aureliano Buendía')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Pride and Prejudice').id,
          character_Id: getCharacterId('Elizabeth Bennet')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'The Metamorphosis').id,
          character_Id: getCharacterId('Gregor Samsa')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'A kőszívű ember fiai').id,
          character_Id: getCharacterId('Baradlay Richárd')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'A Pál utcai fiúk').id,
          character_Id: getCharacterId('Nemecsek Ernő')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Abigél').id,
          character_Id: getCharacterId('Gina')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Az ajtó').id,
          character_Id: getCharacterId('Emerence')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Az arany ember').id,
          character_Id: getCharacterId('Timár Mihály')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Édes Anna').id,
          character_Id: getCharacterId('Édes Anna')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Esti Kornél').id,
          character_Id: getCharacterId('Esti Kornél')
        }
      }),
    ]);

    // Create TV show-character relationships
    console.log('Creating TV show-character relationships...');
    await Promise.all([
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id,
          character_Id: getCharacterId('Walter White')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Better Call Saul').id,
          character_Id: getCharacterId('Saul Goodman')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Community').id,
          character_Id: getCharacterId('Jeff Winger')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Fleabag').id,
          character_Id: getCharacterId('Fleabag')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === "Grey's Anatomy").id,
          character_Id: getCharacterId('Meredith Grey')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'I May Destroy You').id,
          character_Id: getCharacterId('Arabella')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'King of the Hill').id,
          character_Id: getCharacterId('Hank Hill')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Rick and Morty').id,
          character_Id: getCharacterId('Rick Sanchez')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Sopranos').id,
          character_Id: getCharacterId('Tony Soprano')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Wire').id,
          character_Id: getCharacterId('Omar Little')
        }
      }),
    ]);

    // Associate books with genres
    console.log('Creating book-genre relationships...');
    await Promise.all([
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === '1984').id,
          genre_Id: getGenreId('Disztópia')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Animal Farm').id,
          genre_Id: getGenreId('Szatíra')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Crime and Punishment').id,
          genre_Id: getGenreId('Orosz irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Emma').id,
          genre_Id: getGenreId('Romantika')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'For Whom the Bell Tolls').id,
          genre_Id: getGenreId('Fikció')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'The Master and Margarita').id,
          genre_Id: getGenreId('Orosz irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Mrs Dalloway').id,
          genre_Id: getGenreId('Modernizmus')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Murder on the Orient Express').id,
          genre_Id: getGenreId('Rejtély')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'One Hundred Years of Solitude').id,
          genre_Id: getGenreId('Mágikus realizmus')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Pride and Prejudice').id,
          genre_Id: getGenreId('Romantika')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'The Metamorphosis').id,
          genre_Id: getGenreId('Fikció')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'A kőszívű ember fiai').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'A Pál utcai fiúk').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Abigél').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Az ajtó').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Az arany ember').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Édes Anna').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Esti Kornél').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
    ]);

    // Associate TV shows with genres
    console.log('Creating TV show-genre relationships...');
    await Promise.all([
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'American Horror Story').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Better Call Saul').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Community').id,
          genre_Id: getGenreId('Komédia')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Fleabag').id,
          genre_Id: getGenreId('Komédia')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === "Grey's Anatomy").id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'I May Destroy You').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'King of the Hill').id,
          genre_Id: getGenreId('Komédia')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Rick and Morty').id,
          genre_Id: getGenreId('Tudományos-fantasztikus')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Sopranos').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Deuce').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Wire').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
    ]);

    // Associate TV shows with actors
    console.log('Creating TV show-actor relationships...');
    await Promise.all([
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id,
          actor_Id: getActorId('Bryan Cranston')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id,
          actor_Id: getActorId('Aaron Paul')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Community').id,
          actor_Id: getActorId('Joel McHale')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Community').id,
          actor_Id: getActorId('Donald Glover')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Fleabag').id,
          actor_Id: getActorId('Phoebe Waller-Bridge')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === "Grey's Anatomy").id,
          actor_Id: getActorId('Ellen Pompeo')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'I May Destroy You').id,
          actor_Id: getActorId('Michaela Coel')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'King of the Hill').id,
          actor_Id: getActorId('Mike Judge')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Sopranos').id,
          actor_Id: getActorId('James Gandolfini')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Wire').id,
          actor_Id: getActorId('Idris Elba')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'American Horror Story').id,
          actor_Id: getActorId('Sarah Paulson')
        }
      }),
    ]);

    // Add TV seasons for shows
    console.log('Creating TV seasons...');
    const seasons = await Promise.all([
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2008,
          description: 'First season of Breaking Bad',
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 2,
          releaseYear: 2009,
          description: 'Second season of Breaking Bad',
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2015,
          description: 'First season of Better Call Saul',
          tvShow_Id: tvShows.find(t => t.title === 'Better Call Saul').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2009,
          description: 'First season of Community',
          tvShow_Id: tvShows.find(t => t.title === 'Community').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2016,
          description: 'First season of Fleabag',
          tvShow_Id: tvShows.find(t => t.title === 'Fleabag').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2005,
          description: 'First season of Grey\'s Anatomy',
          tvShow_Id: tvShows.find(t => t.title === "Grey's Anatomy").id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2020,
          description: 'First season of I May Destroy You',
          tvShow_Id: tvShows.find(t => t.title === 'I May Destroy You').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 1997,
          description: 'First season of King of the Hill',
          tvShow_Id: tvShows.find(t => t.title === 'King of the Hill').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2013,
          description: 'First season of Rick and Morty',
          tvShow_Id: tvShows.find(t => t.title === 'Rick and Morty').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 1999,
          description: 'First season of The Sopranos',
          tvShow_Id: tvShows.find(t => t.title === 'The Sopranos').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2017,
          description: 'First season of The Deuce',
          tvShow_Id: tvShows.find(t => t.title === 'The Deuce').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2002,
          description: 'First season of The Wire',
          tvShow_Id: tvShows.find(t => t.title === 'The Wire').id
        }
      }),
    ]);

    // Add some episodes for the TV seasons
    console.log('Creating TV episodes...');
    await Promise.all([
      prisma.tvepisode.create({
        data: {
          episodeNumber: 1,
          title: 'Pilot',
          description: 'Walter White, egy középiskolai kémiatanár, megtudja, hogy halálos rákbetegsége van, és úgy dönt, hogy biztosítja családja anyagi jövőjét. Elkeseredettségében és a kémiában szerzett tudását felhasználva metamfetamint kezd gyártani egykori diákjával, Jesse Pinkmannel. Az epizód bemutatja Walter átalakulásának kezdetét, ahogy belép a bűnözés világába, és szembesül a döntései erkölcsi és gyakorlati következményeivel. A történet a család, a túlélés és a hatalom kérdéseit vizsgálja.',
          releaseDate: new Date('2008-01-20'),
          tvSeason_Id: seasons.find(s => s.seasonNumber === 1 && s.tvShow_Id === tvShows.find(t => t.title === 'Breaking Bad').id).id
        }
      }),
      prisma.tvepisode.create({
        data: {
          episodeNumber: 1,
          title: 'Uno',
          description: 'Jimmy McGill, egy kisstílű ügyvéd, aki alig boldogul, megpróbálja megváltoztatni életét, miután egy jótékonysági cselekedet inspirálja. Az epizód bemutatja Jimmy küzdelmét, hogy kitörjön a sikertelenségből, miközben betekintést nyújt a múltjába és a családi kapcsolataiba. A történet tele van humorral, drámával és a karakter fejlődésének első lépéseivel, ahogy lassan Saul Goodmanné válik.',
          releaseDate: new Date('2015-02-08'),
          tvSeason_Id: seasons.find(s => s.seasonNumber === 1 && s.tvShow_Id === tvShows.find(t => t.title === 'Better Call Saul').id).id
        }
      }),
      prisma.tvepisode.create({
        data: {
          episodeNumber: 1,
          title: 'Pilot',
          description: 'Egy volt ügyvéd, Jeff Winger, kénytelen visszatérni a közösségi főiskolára, hogy megszerezze a diplomáját, miután kiderül, hogy korábbi végzettsége hamis. Az epizód bemutatja Jeff próbálkozásait, hogy manipulálja a helyzetet saját előnyére, miközben megismerkedik egy színes és különc diákcsoporttal. A történet humorosan ábrázolja az oktatási rendszer kihívásait, a társadalmi kapcsolatok dinamikáját és Jeff személyes fejlődésének kezdetét.',
          releaseDate: new Date('2009-09-17'),
          tvSeason_Id: seasons.find(s => s.seasonNumber === 1 && s.tvShow_Id === tvShows.find(t => t.title === 'Community').id).id
        }
      }),
    ]);

    // Create movie-character relationships
    console.log('Creating movie-character relationships...');
    await Promise.all([
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Inception').id,
          character_Id: getCharacterId('Dom Cobb')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Cléo from 5 to 7').id,
          character_Id: getCharacterId('Cléo')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Goodfellas').id,
          character_Id: getCharacterId('Henry Hill')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Goodfellas').id,
          character_Id: getCharacterId('Tommy DeVito')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Kontroll').id,
          character_Id: getCharacterId('Bulcsú')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Mephisto').id,
          character_Id: getCharacterId('Hendrik Höfgen')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Psycho').id,
          character_Id: getCharacterId('Norman Bates')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Psycho').id,
          character_Id: getCharacterId('Marion Crane')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Seven Samurai').id,
          character_Id: getCharacterId('Kambei Shimada')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
          character_Id: getCharacterId('Luke Skywalker')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
          character_Id: getCharacterId('Han Solo')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
          character_Id: getCharacterId('Princess Leia')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Taxi Driver').id,
          character_Id: getCharacterId('Travis Bickle')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Godfather').id,
          character_Id: getCharacterId('Vito Corleone')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Godfather').id,
          character_Id: getCharacterId('Michael Corleone')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Godfather').id,
          character_Id: getCharacterId('Sonny Corleone')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Hurt Locker').id,
          character_Id: getCharacterId('William James')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Shining').id,
          character_Id: getCharacterId('Jack Torrance')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Shining').id,
          character_Id: getCharacterId('Wendy Torrance')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === '2001: A Space Odyssey').id,
          character_Id: getCharacterId('Dr. David Bowman')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Vertigo').id,
          character_Id: getCharacterId('Scottie Ferguson')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Vertigo').id,
          character_Id: getCharacterId('Madeleine Elster')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Turin Horse').id,
          character_Id: getCharacterId('Ohlsdorfer')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Turin Horse').id,
          character_Id: getCharacterId('Ohlsdorfer lánya')
        }
      }),
    ]);

    // Create movie-actor relationships
    console.log('Creating movie-actor relationships...');
    await Promise.all([
      prisma.movieactor.createMany({
        data: [
          // Inception
          {
            movie_Id: movies.find(m => m.title === 'Inception').id,
            actor_Id: getActorId('Leonardo DiCaprio')
          },
          {
            movie_Id: movies.find(m => m.title === 'Inception').id,
            actor_Id: getActorId('Joseph Gordon-Levitt')
          },
          {
            movie_Id: movies.find(m => m.title === 'Inception').id,
            actor_Id: getActorId('Marion Cotillard')
          },
          // Cléo from 5 to 7
          {
            movie_Id: movies.find(m => m.title === 'Cléo from 5 to 7').id,
            actor_Id: getActorId('Corinne Marchand')
          },
          // Goodfellas
          {
            movie_Id: movies.find(m => m.title === 'Goodfellas').id,
            actor_Id: getActorId('Robert De Niro')
          },
          {
            movie_Id: movies.find(m => m.title === 'Goodfellas').id,
            actor_Id: getActorId('Ray Liotta')
          },
          {
            movie_Id: movies.find(m => m.title === 'Goodfellas').id,
            actor_Id: getActorId('Joe Pesci')
          },
          // Kontroll
          {
            movie_Id: movies.find(m => m.title === 'Kontroll').id,
            actor_Id: getActorId('Sándor Csányi')
          },
          {
            movie_Id: movies.find(m => m.title === 'Kontroll').id,
            actor_Id: getActorId('Zoltán Mucsi')
          },
          // Mephisto
          {
            movie_Id: movies.find(m => m.title === 'Mephisto').id,
            actor_Id: getActorId('Klaus Maria Brandauer')
          },
          // Psycho
          {
            movie_Id: movies.find(m => m.title === 'Psycho').id,
            actor_Id: getActorId('Anthony Perkins')
          },
          {
            movie_Id: movies.find(m => m.title === 'Psycho').id,
            actor_Id: getActorId('Janet Leigh')
          },
          // Seven Samurai
          {
            movie_Id: movies.find(m => m.title === 'Seven Samurai').id,
            actor_Id: getActorId('Toshiro Mifune')
          },
          // Star Wars
          {
            movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
            actor_Id: getActorId('Mark Hamill')
          },
          {
            movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
            actor_Id: getActorId('Harrison Ford')
          },
          {
            movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
            actor_Id: getActorId('Carrie Fisher')
          },
          // Taxi Driver
          {
            movie_Id: movies.find(m => m.title === 'Taxi Driver').id,
            actor_Id: getActorId('Robert De Niro')
          },
          // The Godfather
          {
            movie_Id: movies.find(m => m.title === 'The Godfather').id,
            actor_Id: getActorId('Marlon Brando')
          },
          {
            movie_Id: movies.find(m => m.title === 'The Godfather').id,
            actor_Id: getActorId('Al Pacino')
          },
          {
            movie_Id: movies.find(m => m.title === 'The Godfather').id,
            actor_Id: getActorId('James Caan')
          },
          // The Hurt Locker
          {
            movie_Id: movies.find(m => m.title === 'The Hurt Locker').id,
            actor_Id: getActorId('Jeremy Renner')
          },
          // The Shining
          {
            movie_Id: movies.find(m => m.title === 'The Shining').id,
            actor_Id: getActorId('Jack Nicholson')
          },
          {
            movie_Id: movies.find(m => m.title === 'The Shining').id,
            actor_Id: getActorId('Shelley Duvall')
          },
          // Vertigo
          {
            movie_Id: movies.find(m => m.title === 'Vertigo').id,
            actor_Id: getActorId('James Stewart')
          },
          {
            movie_Id: movies.find(m => m.title === 'Vertigo').id,
            actor_Id: getActorId('Kim Novak')
          },
          // The Turin Horse
          {
            movie_Id: movies.find(m => m.title === 'The Turin Horse').id,
            actor_Id: getActorId('János Derzsi')
          },
          {
            movie_Id: movies.find(m => m.title === 'The Turin Horse').id,
            actor_Id: getActorId('Erika Bók')
          },
        ],
        skipDuplicates: true
      }),
    ]);

    // Create character-actor relationships
    console.log('Creating character-actor relationships...');
    await Promise.all([
      // Inception
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Dom Cobb'),
          actor_Id: getActorId('Leonardo DiCaprio')
        }
      }),
      // Cléo from 5 to 7
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Cléo'),
          actor_Id: getActorId('Corinne Marchand')
        }
      }),
      // Goodfellas
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Henry Hill'),
          actor_Id: getActorId('Ray Liotta')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Tommy DeVito'),
          actor_Id: getActorId('Joe Pesci')
        }
      }),
      // Kontroll
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Bulcsú'),
          actor_Id: getActorId('Sándor Csányi')
        }
      }),
      // Mephisto
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Hendrik Höfgen'),
          actor_Id: getActorId('Klaus Maria Brandauer')
        }
      }),
      // Psycho
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Norman Bates'),
          actor_Id: getActorId('Anthony Perkins')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Marion Crane'),
          actor_Id: getActorId('Janet Leigh')
        }
      }),
      // Seven Samurai
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Kambei Shimada'),
          actor_Id: getActorId('Toshiro Mifune')
        }
      }),
      // Star Wars
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Luke Skywalker'),
          actor_Id: getActorId('Mark Hamill')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Han Solo'),
          actor_Id: getActorId('Harrison Ford')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Princess Leia'),
          actor_Id: getActorId('Carrie Fisher')
        }
      }),
      // Taxi Driver
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Travis Bickle'),
          actor_Id: getActorId('Robert De Niro')
        }
      }),
      // The Godfather
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Vito Corleone'),
          actor_Id: getActorId('Marlon Brando')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Michael Corleone'),
          actor_Id: getActorId('Al Pacino')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Sonny Corleone'),
          actor_Id: getActorId('James Caan')
        }
      }),
      // The Hurt Locker
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('William James'),
          actor_Id: getActorId('Jeremy Renner')
        }
      }),
      // The Shining
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Jack Torrance'),
          actor_Id: getActorId('Jack Nicholson')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Wendy Torrance'),
          actor_Id: getActorId('Shelley Duvall')
        }
      }),
      // Vertigo
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Scottie Ferguson'),
          actor_Id: getActorId('James Stewart')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Madeleine Elster'),
          actor_Id: getActorId('Kim Novak')
        }
      }),
      // The Turin Horse
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Ohlsdorfer'),
          actor_Id: getActorId('János Derzsi')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Ohlsdorfer lánya'),
          actor_Id: getActorId('Erika Bók')
        }
      }),
      // TV Characters
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Walter White'),
          actor_Id: getActorId('Bryan Cranston')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Saul Goodman'),
          actor_Id: getActorId('Aaron Paul')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Jeff Winger'),
          actor_Id: getActorId('Joel McHale')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Fleabag'),
          actor_Id: getActorId('Phoebe Waller-Bridge')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Meredith Grey'),
          actor_Id: getActorId('Ellen Pompeo')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Arabella'),
          actor_Id: getActorId('Michaela Coel')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Hank Hill'),
          actor_Id: getActorId('Mike Judge')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Tony Soprano'),
          actor_Id: getActorId('James Gandolfini')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Omar Little'),
          actor_Id: getActorId('Idris Elba')
        }
      }),
    ]);

    // Create user groups
    console.log('Creating user groups...');
    const groups = await Promise.all([
      prisma.group.create({
        data: {
          name: 'ADMIN',
          read: true,
          write: true,
          update: true,
          delete: true
        }
      }),
      prisma.group.create({
        data: {
          name: 'USER',
          read: true,
          write: false,
          update: false,
          delete: false
        }
      })
    ]);

    // Create admin user
    console.log('Creating admin user...');
    await prisma.user.create({
      data: {
        username: 'admin',
        password: '$2a$10$Gl4QGQjnZ0o1KsRB/T/XvO5xkLO.LnQ// filepath: d:\Downloads\13A-SZF2-Virtu-lis-K-nyvklub\backend\prisma\seed.js
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Mrs Dalloway').id,
          character_Id: getCharacterId('Clarissa Dalloway')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Murder on the Orient Express').id,
          character_Id: getCharacterId('Hercule Poirot')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'One Hundred Years of Solitude').id,
          character_Id: getCharacterId('Aureliano Buendía')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Pride and Prejudice').id,
          character_Id: getCharacterId('Elizabeth Bennet')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'The Metamorphosis').id,
          character_Id: getCharacterId('Gregor Samsa')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'A kőszívű ember fiai').id,
          character_Id: getCharacterId('Baradlay Richárd')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'A Pál utcai fiúk').id,
          character_Id: getCharacterId('Nemecsek Ernő')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Abigél').id,
          character_Id: getCharacterId('Gina')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Az ajtó').id,
          character_Id: getCharacterId('Emerence')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Az arany ember').id,
          character_Id: getCharacterId('Timár Mihály')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Édes Anna').id,
          character_Id: getCharacterId('Édes Anna')
        }
      }),
      prisma.bookcharacter.create({
        data: {
          book_Id: books.find(b => b.title === 'Esti Kornél').id,
          character_Id: getCharacterId('Esti Kornél')
        }
      }),
    ]);

    // Create TV show-character relationships
    console.log('Creating TV show-character relationships...');
    await Promise.all([
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id,
          character_Id: getCharacterId('Walter White')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Better Call Saul').id,
          character_Id: getCharacterId('Saul Goodman')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Community').id,
          character_Id: getCharacterId('Jeff Winger')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Fleabag').id,
          character_Id: getCharacterId('Fleabag')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === "Grey's Anatomy").id,
          character_Id: getCharacterId('Meredith Grey')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'I May Destroy You').id,
          character_Id: getCharacterId('Arabella')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'King of the Hill').id,
          character_Id: getCharacterId('Hank Hill')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Rick and Morty').id,
          character_Id: getCharacterId('Rick Sanchez')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Sopranos').id,
          character_Id: getCharacterId('Tony Soprano')
        }
      }),
      prisma.tvcharacter.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Wire').id,
          character_Id: getCharacterId('Omar Little')
        }
      }),
    ]);

    // Associate books with genres
    console.log('Creating book-genre relationships...');
    await Promise.all([
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === '1984').id,
          genre_Id: getGenreId('Disztópia')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Animal Farm').id,
          genre_Id: getGenreId('Szatíra')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Crime and Punishment').id,
          genre_Id: getGenreId('Orosz irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Emma').id,
          genre_Id: getGenreId('Romantika')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'For Whom the Bell Tolls').id,
          genre_Id: getGenreId('Fikció')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'The Master and Margarita').id,
          genre_Id: getGenreId('Orosz irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Mrs Dalloway').id,
          genre_Id: getGenreId('Modernizmus')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Murder on the Orient Express').id,
          genre_Id: getGenreId('Rejtély')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'One Hundred Years of Solitude').id,
          genre_Id: getGenreId('Mágikus realizmus')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Pride and Prejudice').id,
          genre_Id: getGenreId('Romantika')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'The Metamorphosis').id,
          genre_Id: getGenreId('Fikció')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'A kőszívű ember fiai').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'A Pál utcai fiúk').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Abigél').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Az ajtó').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Az arany ember').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Édes Anna').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
      prisma.bookgenre.create({
        data: {
          book_Id: books.find(b => b.title === 'Esti Kornél').id,
          genre_Id: getGenreId('Magyar irodalom')
        }
      }),
    ]);

    // Associate TV shows with genres
    console.log('Creating TV show-genre relationships...');
    await Promise.all([
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'American Horror Story').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Better Call Saul').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Community').id,
          genre_Id: getGenreId('Komédia')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Fleabag').id,
          genre_Id: getGenreId('Komédia')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === "Grey's Anatomy").id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'I May Destroy You').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'King of the Hill').id,
          genre_Id: getGenreId('Komédia')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Rick and Morty').id,
          genre_Id: getGenreId('Tudományos-fantasztikus')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Sopranos').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Deuce').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
      prisma.tvgenre.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Wire').id,
          genre_Id: getGenreId('Dráma')
        }
      }),
    ]);

    // Associate TV shows with actors
    console.log('Creating TV show-actor relationships...');
    await Promise.all([
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id,
          actor_Id: getActorId('Bryan Cranston')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id,
          actor_Id: getActorId('Aaron Paul')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Community').id,
          actor_Id: getActorId('Joel McHale')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Community').id,
          actor_Id: getActorId('Donald Glover')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'Fleabag').id,
          actor_Id: getActorId('Phoebe Waller-Bridge')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === "Grey's Anatomy").id,
          actor_Id: getActorId('Ellen Pompeo')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'I May Destroy You').id,
          actor_Id: getActorId('Michaela Coel')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'King of the Hill').id,
          actor_Id: getActorId('Mike Judge')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Sopranos').id,
          actor_Id: getActorId('James Gandolfini')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'The Wire').id,
          actor_Id: getActorId('Idris Elba')
        }
      }),
      prisma.tvshowactor.create({
        data: {
          tvShow_Id: tvShows.find(t => t.title === 'American Horror Story').id,
          actor_Id: getActorId('Sarah Paulson')
        }
      }),
    ]);

    // Add TV seasons for shows
    console.log('Creating TV seasons...');
    const seasons = await Promise.all([
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2008,
          description: 'First season of Breaking Bad',
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 2,
          releaseYear: 2009,
          description: 'Second season of Breaking Bad',
          tvShow_Id: tvShows.find(t => t.title === 'Breaking Bad').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2015,
          description: 'First season of Better Call Saul',
          tvShow_Id: tvShows.find(t => t.title === 'Better Call Saul').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2009,
          description: 'First season of Community',
          tvShow_Id: tvShows.find(t => t.title === 'Community').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2016,
          description: 'First season of Fleabag',
          tvShow_Id: tvShows.find(t => t.title === 'Fleabag').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2005,
          description: 'First season of Grey\'s Anatomy',
          tvShow_Id: tvShows.find(t => t.title === "Grey's Anatomy").id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2020,
          description: 'First season of I May Destroy You',
          tvShow_Id: tvShows.find(t => t.title === 'I May Destroy You').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 1997,
          description: 'First season of King of the Hill',
          tvShow_Id: tvShows.find(t => t.title === 'King of the Hill').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2013,
          description: 'First season of Rick and Morty',
          tvShow_Id: tvShows.find(t => t.title === 'Rick and Morty').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 1999,
          description: 'First season of The Sopranos',
          tvShow_Id: tvShows.find(t => t.title === 'The Sopranos').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2017,
          description: 'First season of The Deuce',
          tvShow_Id: tvShows.find(t => t.title === 'The Deuce').id
        }
      }),
      prisma.tvseason.create({
        data: {
          seasonNumber: 1,
          releaseYear: 2002,
          description: 'First season of The Wire',
          tvShow_Id: tvShows.find(t => t.title === 'The Wire').id
        }
      }),
    ]);

    // Add some episodes for the TV seasons
    console.log('Creating TV episodes...');
    await Promise.all([
      prisma.tvepisode.create({
        data: {
          episodeNumber: 1,
          title: 'Pilot',
          description: 'Walter White, egy középiskolai kémiatanár, megtudja, hogy halálos rákbetegsége van, és úgy dönt, hogy biztosítja családja anyagi jövőjét. Elkeseredettségében és a kémiában szerzett tudását felhasználva metamfetamint kezd gyártani egykori diákjával, Jesse Pinkmannel. Az epizód bemutatja Walter átalakulásának kezdetét, ahogy belép a bűnözés világába, és szembesül a döntései erkölcsi és gyakorlati következményeivel. A történet a család, a túlélés és a hatalom kérdéseit vizsgálja.',
          releaseDate: new Date('2008-01-20'),
          tvSeason_Id: seasons.find(s => s.seasonNumber === 1 && s.tvShow_Id === tvShows.find(t => t.title === 'Breaking Bad').id).id
        }
      }),
      prisma.tvepisode.create({
        data: {
          episodeNumber: 1,
          title: 'Uno',
          description: 'Jimmy McGill, egy kisstílű ügyvéd, aki alig boldogul, megpróbálja megváltoztatni életét, miután egy jótékonysági cselekedet inspirálja. Az epizód bemutatja Jimmy küzdelmét, hogy kitörjön a sikertelenségből, miközben betekintést nyújt a múltjába és a családi kapcsolataiba. A történet tele van humorral, drámával és a karakter fejlődésének első lépéseivel, ahogy lassan Saul Goodmanné válik.',
          releaseDate: new Date('2015-02-08'),
          tvSeason_Id: seasons.find(s => s.seasonNumber === 1 && s.tvShow_Id === tvShows.find(t => t.title === 'Better Call Saul').id).id
        }
      }),
      prisma.tvepisode.create({
        data: {
          episodeNumber: 1,
          title: 'Pilot',
          description: 'Egy volt ügyvéd, Jeff Winger, kénytelen visszatérni a közösségi főiskolára, hogy megszerezze a diplomáját, miután kiderül, hogy korábbi végzettsége hamis. Az epizód bemutatja Jeff próbálkozásait, hogy manipulálja a helyzetet saját előnyére, miközben megismerkedik egy színes és különc diákcsoporttal. A történet humorosan ábrázolja az oktatási rendszer kihívásait, a társadalmi kapcsolatok dinamikáját és Jeff személyes fejlődésének kezdetét.',
          releaseDate: new Date('2009-09-17'),
          tvSeason_Id: seasons.find(s => s.seasonNumber === 1 && s.tvShow_Id === tvShows.find(t => t.title === 'Community').id).id
        }
      }),
    ]);

    // Create movie-character relationships
    console.log('Creating movie-character relationships...');
    await Promise.all([
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Inception').id,
          character_Id: getCharacterId('Dom Cobb')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Cléo from 5 to 7').id,
          character_Id: getCharacterId('Cléo')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Goodfellas').id,
          character_Id: getCharacterId('Henry Hill')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Goodfellas').id,
          character_Id: getCharacterId('Tommy DeVito')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Kontroll').id,
          character_Id: getCharacterId('Bulcsú')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Mephisto').id,
          character_Id: getCharacterId('Hendrik Höfgen')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Psycho').id,
          character_Id: getCharacterId('Norman Bates')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Psycho').id,
          character_Id: getCharacterId('Marion Crane')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Seven Samurai').id,
          character_Id: getCharacterId('Kambei Shimada')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
          character_Id: getCharacterId('Luke Skywalker')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
          character_Id: getCharacterId('Han Solo')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
          character_Id: getCharacterId('Princess Leia')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Taxi Driver').id,
          character_Id: getCharacterId('Travis Bickle')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Godfather').id,
          character_Id: getCharacterId('Vito Corleone')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Godfather').id,
          character_Id: getCharacterId('Michael Corleone')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Godfather').id,
          character_Id: getCharacterId('Sonny Corleone')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Hurt Locker').id,
          character_Id: getCharacterId('William James')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Shining').id,
          character_Id: getCharacterId('Jack Torrance')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Shining').id,
          character_Id: getCharacterId('Wendy Torrance')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === '2001: A Space Odyssey').id,
          character_Id: getCharacterId('Dr. David Bowman')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Vertigo').id,
          character_Id: getCharacterId('Scottie Ferguson')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'Vertigo').id,
          character_Id: getCharacterId('Madeleine Elster')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Turin Horse').id,
          character_Id: getCharacterId('Ohlsdorfer')
        }
      }),
      prisma.moviecharacter.create({
        data: {
          movie_Id: movies.find(m => m.title === 'The Turin Horse').id,
          character_Id: getCharacterId('Ohlsdorfer lánya')
        }
      }),
    ]);

    // Create movie-actor relationships
    console.log('Creating movie-actor relationships...');
    await Promise.all([
      prisma.movieactor.createMany({
        data: [
          // Inception
          {
            movie_Id: movies.find(m => m.title === 'Inception').id,
            actor_Id: getActorId('Leonardo DiCaprio')
          },
          {
            movie_Id: movies.find(m => m.title === 'Inception').id,
            actor_Id: getActorId('Joseph Gordon-Levitt')
          },
          {
            movie_Id: movies.find(m => m.title === 'Inception').id,
            actor_Id: getActorId('Marion Cotillard')
          },
          // Cléo from 5 to 7
          {
            movie_Id: movies.find(m => m.title === 'Cléo from 5 to 7').id,
            actor_Id: getActorId('Corinne Marchand')
          },
          // Goodfellas
          {
            movie_Id: movies.find(m => m.title === 'Goodfellas').id,
            actor_Id: getActorId('Robert De Niro')
          },
          {
            movie_Id: movies.find(m => m.title === 'Goodfellas').id,
            actor_Id: getActorId('Ray Liotta')
          },
          {
            movie_Id: movies.find(m => m.title === 'Goodfellas').id,
            actor_Id: getActorId('Joe Pesci')
          },
          // Kontroll
          {
            movie_Id: movies.find(m => m.title === 'Kontroll').id,
            actor_Id: getActorId('Sándor Csányi')
          },
          {
            movie_Id: movies.find(m => m.title === 'Kontroll').id,
            actor_Id: getActorId('Zoltán Mucsi')
          },
          // Mephisto
          {
            movie_Id: movies.find(m => m.title === 'Mephisto').id,
            actor_Id: getActorId('Klaus Maria Brandauer')
          },
          // Psycho
          {
            movie_Id: movies.find(m => m.title === 'Psycho').id,
            actor_Id: getActorId('Anthony Perkins')
          },
          {
            movie_Id: movies.find(m => m.title === 'Psycho').id,
            actor_Id: getActorId('Janet Leigh')
          },
          // Seven Samurai
          {
            movie_Id: movies.find(m => m.title === 'Seven Samurai').id,
            actor_Id: getActorId('Toshiro Mifune')
          },
          // Star Wars
          {
            movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
            actor_Id: getActorId('Mark Hamill')
          },
          {
            movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
            actor_Id: getActorId('Harrison Ford')
          },
          {
            movie_Id: movies.find(m => m.title === 'Star Wars: Episode IV - A New Hope').id,
            actor_Id: getActorId('Carrie Fisher')
          },
          // Taxi Driver
          {
            movie_Id: movies.find(m => m.title === 'Taxi Driver').id,
            actor_Id: getActorId('Robert De Niro')
          },
          // The Godfather
          {
            movie_Id: movies.find(m => m.title === 'The Godfather').id,
            actor_Id: getActorId('Marlon Brando')
          },
          {
            movie_Id: movies.find(m => m.title === 'The Godfather').id,
            actor_Id: getActorId('Al Pacino')
          },
          {
            movie_Id: movies.find(m => m.title === 'The Godfather').id,
            actor_Id: getActorId('James Caan')
          },
          // The Hurt Locker
          {
            movie_Id: movies.find(m => m.title === 'The Hurt Locker').id,
            actor_Id: getActorId('Jeremy Renner')
          },
          // The Shining
          {
            movie_Id: movies.find(m => m.title === 'The Shining').id,
            actor_Id: getActorId('Jack Nicholson')
          },
          {
            movie_Id: movies.find(m => m.title === 'The Shining').id,
            actor_Id: getActorId('Shelley Duvall')
          },
          // Vertigo
          {
            movie_Id: movies.find(m => m.title === 'Vertigo').id,
            actor_Id: getActorId('James Stewart')
          },
          {
            movie_Id: movies.find(m => m.title === 'Vertigo').id,
            actor_Id: getActorId('Kim Novak')
          },
          // The Turin Horse
          {
            movie_Id: movies.find(m => m.title === 'The Turin Horse').id,
            actor_Id: getActorId('János Derzsi')
          },
          {
            movie_Id: movies.find(m => m.title === 'The Turin Horse').id,
            actor_Id: getActorId('Erika Bók')
          },
        ],
        skipDuplicates: true
      }),
    ]);

    // Create character-actor relationships
    console.log('Creating character-actor relationships...');
    await Promise.all([
      // Inception
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Dom Cobb'),
          actor_Id: getActorId('Leonardo DiCaprio')
        }
      }),
      // Cléo from 5 to 7
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Cléo'),
          actor_Id: getActorId('Corinne Marchand')
        }
      }),
      // Goodfellas
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Henry Hill'),
          actor_Id: getActorId('Ray Liotta')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Tommy DeVito'),
          actor_Id: getActorId('Joe Pesci')
        }
      }),
      // Kontroll
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Bulcsú'),
          actor_Id: getActorId('Sándor Csányi')
        }
      }),
      // Mephisto
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Hendrik Höfgen'),
          actor_Id: getActorId('Klaus Maria Brandauer')
        }
      }),
      // Psycho
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Norman Bates'),
          actor_Id: getActorId('Anthony Perkins')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Marion Crane'),
          actor_Id: getActorId('Janet Leigh')
        }
      }),
      // Seven Samurai
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Kambei Shimada'),
          actor_Id: getActorId('Toshiro Mifune')
        }
      }),
      // Star Wars
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Luke Skywalker'),
          actor_Id: getActorId('Mark Hamill')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Han Solo'),
          actor_Id: getActorId('Harrison Ford')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Princess Leia'),
          actor_Id: getActorId('Carrie Fisher')
        }
      }),
      // Taxi Driver
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Travis Bickle'),
          actor_Id: getActorId('Robert De Niro')
        }
      }),
      // The Godfather
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Vito Corleone'),
          actor_Id: getActorId('Marlon Brando')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Michael Corleone'),
          actor_Id: getActorId('Al Pacino')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Sonny Corleone'),
          actor_Id: getActorId('James Caan')
        }
      }),
      // The Hurt Locker
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('William James'),
          actor_Id: getActorId('Jeremy Renner')
        }
      }),
      // The Shining
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Jack Torrance'),
          actor_Id: getActorId('Jack Nicholson')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Wendy Torrance'),
          actor_Id: getActorId('Shelley Duvall')
        }
      }),
      // Vertigo
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Scottie Ferguson'),
          actor_Id: getActorId('James Stewart')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Madeleine Elster'),
          actor_Id: getActorId('Kim Novak')
        }
      }),
      // The Turin Horse
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Ohlsdorfer'),
          actor_Id: getActorId('János Derzsi')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Ohlsdorfer lánya'),
          actor_Id: getActorId('Erika Bók')
        }
      }),
      // TV Characters
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Walter White'),
          actor_Id: getActorId('Bryan Cranston')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Saul Goodman'),
          actor_Id: getActorId('Aaron Paul')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Jeff Winger'),
          actor_Id: getActorId('Joel McHale')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Fleabag'),
          actor_Id: getActorId('Phoebe Waller-Bridge')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Meredith Grey'),
          actor_Id: getActorId('Ellen Pompeo')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Arabella'),
          actor_Id: getActorId('Michaela Coel')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Hank Hill'),
          actor_Id: getActorId('Mike Judge')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Tony Soprano'),
          actor_Id: getActorId('James Gandolfini')
        }
      }),
      prisma.characteractor.create({
        data: {
          character_Id: getCharacterId('Omar Little'),
          actor_Id: getActorId('Idris Elba')
        }
      }),
    ]);

    // Create user groups
    console.log('Creating user groups...');
    const groups = await Promise.all([
      prisma.group.create({
        data: {
          name: 'ADMIN',
          read: true,
          write: true,
          update: true,
          delete: true
        }
      }),
      prisma.group.create({
        data: {
          name: 'USER',
          read: true,
          write: false,
          update: false,
          delete: false
        }
      })
    ]);
        console.log('Creating admin user...');
        await prisma.user.create({
          data: {
            username: 'admin',
            password: '$2a$10$Gl4QGQjnZ0o1KsRB/T/XvO5xkLO.LnQwHUfY4GsdXwEm/LnhpzNdm',
            email: 'admin@pollakkonyvklub.info',
            groupId: groups.find(g => g.name === 'ADMIN').id,
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
    
        console.log('Creating JWT configuration...');
        await prisma.maindata.create({
          data: {
            JWTAlgorithm: 'HS256',
            JWTExpiration: '86400',
            JWTSecret: 'AlXCJ7sQXmlnzAV59y9YL1jsM',
            RefreshTokenAlgorithm: 'HS256',
            RefreshTokenSecret: 'CcY9L4VhE2knXmh88oszQkgmdyh9TXs6',
            RefreshTokenExpiration: '604800'
          }
        });
    
        console.log('Database seeding completed successfully');
      } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
      } finally {
        await prisma.$disconnect();
      }
    }
    
    main();
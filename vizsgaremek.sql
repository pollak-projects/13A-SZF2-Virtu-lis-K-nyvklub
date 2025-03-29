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
('Fikció', 'A fikció olyan irodalmi művek gyűjtőneve, amelyek a képzelet szüleményei, nem pedig a valóság tényein alapulnak. Ezek a művek gyakran olyan történeteket mesélnek el, amelyek teljesen kitaláltak, vagy a valóság elemeit ötvözik a képzelet szülte eseményekkel. A fikció célja lehet a szórakoztatás, az érzelmek kiváltása, vagy akár a társadalmi kérdések vizsgálata is.'),
('Disztópia', 'A disztópikus irodalom olyan történeteket mutat be, amelyek egy sötét, elnyomó és gyakran kegyetlen társadalomban játszódnak. Ezek a művek gyakran a jövőben játszódnak, és a társadalmi, politikai vagy technológiai fejlődés negatív következményeit vizsgálják. A disztópikus történetek célja, hogy figyelmeztessenek a jelenlegi tendenciák veszélyeire, miközben mélyen emberi kérdéseket is boncolgatnak, mint például a szabadság, az egyenlőség és az emberi méltóság.'),
('Rejtély', 'A rejtély műfajába tartozó irodalmi művek középpontjában egy bűncselekmény, talány vagy megoldásra váró probléma áll. Ezek a történetek gyakran izgalmasak és fordulatosak, miközben az olvasót arra ösztönzik, hogy együtt gondolkodjon a szereplőkkel a megoldás érdekében. A rejtélyek célja nemcsak a szórakoztatás, hanem az emberi természet és a társadalmi igazságosság kérdéseinek vizsgálata is.'),
('Orosz irodalom', 'Az orosz irodalom a világirodalom egyik leggazdagabb és legmélyebb hagyományokkal rendelkező ága. Ezek az irodalmi művek gyakran foglalkoznak az emberi lélek mélységeivel, a társadalmi igazságtalanságokkal és az erkölcsi dilemmákkal. Az orosz irodalom nagy klasszikusai, mint Dosztojevszkij, Tolsztoj vagy Bulgakov, olyan univerzális kérdéseket vetnek fel, amelyek ma is relevánsak.'),
('Modernizmus', 'A modernista irodalom a hagyományos formák és narratívák elutasításával jött létre, és új, kísérletező megközelítéseket alkalmazott. Ezek a művek gyakran foglalkoznak az idő, az identitás és az emberi tapasztalat komplexitásával. A modernizmus célja, hogy új perspektívákat nyújtson az olvasónak, miközben a nyelv és a forma határait feszegeti.'),
('Romantika', 'A romantikus irodalom a szerelem, az érzelmek és az emberi kapcsolatok témáit helyezi előtérbe. Ezek a történetek gyakran idealizált világokat mutatnak be, ahol a szereplők érzelmi utazásai állnak a középpontban. A romantikus művek célja, hogy az olvasót elvarázsolják, miközben az emberi szív mélységeit és bonyolultságát tárják fel.'),
('Szatíra', 'A szatirikus irodalom humor, irónia és túlzás segítségével mutatja be a társadalmi, politikai vagy kulturális problémákat. Ezek a művek gyakran kritikusak és provokatívak, miközben szórakoztató módon hívják fel a figyelmet a világ abszurditásaira. A szatíra célja, hogy megnevettessen, miközben elgondolkodtat és változásra ösztönöz.'),
('Mágikus realizmus', 'A mágikus realizmus olyan irodalmi műfaj, amely a valóságos világot ötvözi a mágikus vagy természetfeletti elemekkel. Ezek a történetek gyakran a mindennapi életet mutatják be, miközben a csodák és a varázslat természetes részei a szereplők világának. A mágikus realizmus célja, hogy új perspektívát nyújtson az olvasónak, miközben a valóság és a képzelet határait feszegeti.'),
('Magyar irodalom', 'A magyar irodalom gazdag és sokszínű hagyományokkal rendelkezik, amely a magyar történelem, kultúra és társadalom mélyreható vizsgálatát tükrözi. Ezek a művek gyakran foglalkoznak a nemzeti identitás, a szabadság és az emberi sors kérdéseivel. A magyar irodalom klasszikusai, mint Jókai, Kosztolányi vagy Szabó Magda, időtálló értékeket és univerzális üzeneteket hordoznak.'),
('Dráma', 'A drámai irodalom az emberi érzelmek és konfliktusok mélyreható ábrázolására összpontosít. Ezek a művek gyakran komoly és érzelmileg megterhelő témákat dolgoznak fel, miközben az emberi természet és a társadalmi kapcsolatok komplexitását vizsgálják. A dráma célja, hogy az olvasót vagy nézőt érzelmileg megérintse és elgondolkodtassa.'),
('Komédia', 'A komédia műfajába tartozó irodalmi művek célja, hogy megnevettessék és szórakoztassák az olvasót. Ezek a történetek gyakran humoros helyzeteket, félreértéseket és színes karaktereket mutatnak be, miközben a társadalmi normák és emberi gyengeségek paródiáját nyújtják. A komédia célja, hogy könnyedebb oldalról közelítse meg az élet kihívásait, miközben pozitív üzeneteket közvetít.'),
('Tudományos-fantasztikus', 'A tudományos-fantasztikus irodalom olyan történeteket mutat be, amelyek a tudományos felfedezések és technológiai fejlődés képzeletbeli következményeit vizsgálják. Ezek a művek gyakran a jövőben játszódnak, és olyan kérdéseket vetnek fel, mint az emberiség sorsa, az űrkutatás vagy a mesterséges intelligencia. A sci-fi célja, hogy az olvasót elgondolkodtassa a tudomány és az emberi természet kapcsolatáról.'),
('Thriller', 'A thriller műfajába tartozó irodalmi művek izgalmas és feszült történeteket mesélnek el, amelyek gyakran fordulatokkal és váratlan eseményekkel teli cselekményt kínálnak. Ezek a művek célja, hogy az olvasót a székéhez szegezzék, miközben a feszültség és a rejtély fokozatosan bontakozik ki. A thriller gyakran foglalkozik az emberi psziché sötét oldalával és a túlélés kérdéseivel.'),
('Horror', 'A horror irodalom célja, hogy félelmet, rettegést vagy undort váltson ki az olvasóból. Ezek a történetek gyakran természetfeletti lényeket, sötét helyszíneket és nyomasztó atmoszférát mutatnak be, miközben az emberi félelmek és szorongások mélyére hatolnak. A horror célja, hogy az olvasót szembesítse saját félelmeivel, miközben szórakoztat és borzongat.'),
('Krimi', 'A krimi műfajába tartozó irodalmi művek a bűncselekmények, azok felderítése és az elkövetők motivációinak vizsgálatára összpontosítanak. Ezek a történetek gyakran izgalmasak és fordulatosak, miközben az olvasót arra ösztönzik, hogy együtt gondolkodjon a nyomozóval a rejtély megoldásán. A krimi célja, hogy szórakoztasson, miközben az igazság és az emberi természet kérdéseit is boncolgatja.'),
('Háborús', 'A háborús irodalom a háború borzalmait, hősiességét és emberi áldozatait mutatja be. Ezek a történetek gyakran a frontvonalon játszódnak, és a katonák, civilek vagy túlélők szemszögéből ábrázolják a konfliktusokat. A háborús irodalom célja, hogy az olvasót elgondolkodtassa a háború értelmetlenségéről és az emberi élet törékenységéről.'),
('Művészfilm', 'A művészfilm műfajába tartozó irodalmi művek elsősorban esztétikai célokat szolgálnak, és gyakran kísérletező formákat és narratívákat alkalmaznak. Ezek a történetek mélyebb filozófiai vagy érzelmi kérdéseket vizsgálnak, miközben a hagyományos szórakoztatás helyett az önkifejezésre és a művészi értékekre helyezik a hangsúlyt. A művészfilm célja, hogy az olvasót vagy nézőt új perspektívákra ösztönözze, miközben a művészet határait feszegeti.'),
('Kaland', 'A kaland műfajába tartozó irodalmi művek izgalmas és gyakran veszélyes utazásokat vagy küldetéseket mutatnak be. Ezek a történetek tele vannak akcióval, fordulatokkal és hősies tettekkel, miközben a szereplők különböző kihívásokkal néznek szembe. A kaland célja, hogy az olvasót elvarázsolja és inspirálja, miközben a bátorság, a kitartás és a felfedezés örömét ünnepli.');

-- Insert actor placeholders for potential TV show connections
INSERT INTO actor (name, picture) VALUES
('Bryan Cranston', '/uploads/actor/bryan_cranston.png'),
('Aaron Paul', '/uploads/actor/aaron_paul.png'),
('Peter Dinklage', '/uploads/actor/peter_dinklage.png'),
('Emilia Clarke', '/uploads/actor/emilia_clarke.png'),
('Sarah Paulson', '/uploads/actor/sarah_paulson.png'),
('Joel McHale', '/uploads/actor/joel_mchale.png'),
('Phoebe Waller-Bridge', '/uploads/actor/phoebe_waller-bridge.png'),
('Ellen Pompeo', '/uploads/actor/ellen_pompeo.png'),
('Michaela Coel', '/uploads/actor/michaela_coel.png'),
('Mike Judge', '/uploads/actor/mike_judge.png'),
('Donald Glover', '/uploads/actor/donald_glover.png'),
('James Gandolfini', '/uploads/actor/james_gandolfini.png'),
('Idris Elba', '/uploads/actor/idris_elba.png');

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
((SELECT '1984'), (SELECT id FROM creative WHERE name = 'George Orwell'), 1949, 'Egy disztópikus regény, amely egy totalitárius államban játszódik, ahol a Nagy Testvér mindent lát és irányít. A történet Winston Smith életét követi, aki megpróbálja megérteni és szembeszállni a rendszerrel. A regény az egyéni szabadság, a hatalom és az igazság kérdéseit vizsgálja, miközben bemutatja a propaganda és az agymosás hatásait.', '/uploads/book/1984.png'),
((SELECT 'Animal Farm'), (SELECT id FROM creative WHERE name = 'George Orwell'), 1945, 'Egy allegorikus novella, amely egy farm állatainak lázadását meséli el az emberi gazdájuk ellen. A történet a hatalom korrupcióját és a forradalmak eltorzulását mutatja be, miközben szatirikusan ábrázolja a politikai rendszerek működését. Az állatok közötti konfliktusok és árulások a társadalmi egyenlőség illúzióját tárják fel.', '/uploads/book/Animal_Farm.png'),
((SELECT 'Crime and Punishment'), (SELECT id FROM creative WHERE name = 'Fyodor Dostoevsky'), 1866, 'Egy regény, amely egy szegény ex-diák, Rodion Raskolnikov mentális gyötrelmeit és erkölcsi dilemmáit követi nyomon, miután elkövet egy gyilkosságot. A történet mélyen filozófiai és pszichológiai, az emberi természet, a bűn és a megváltás kérdéseit vizsgálja. A regény bemutatja a társadalmi igazságtalanságokat és az emberi szenvedés mélységeit.', '/uploads/book/Crime_and_Punishment.png'),
((SELECT 'Emma'), (SELECT id FROM creative WHERE name = 'Jane Austen'), 1815, 'Egy regény, amely egy fiatal nő, Emma Woodhouse életét követi, aki saját magát tartja a házasságok mesterének, miközben saját érzelmi éretlenségével küzd. A történet tele van humorral, romantikával és társadalmi megfigyelésekkel, miközben bemutatja a viktoriánus Anglia társadalmi normáit és osztályrendszerét.', '/uploads/book/Emma.png'),
((SELECT 'For Whom the Bell Tolls'), (SELECT id FROM creative WHERE name = 'Ernest Hemingway'), 1940, 'Egy regény, amely a spanyol polgárháború idején játszódik, és egy amerikai robbantási szakértő, Robert Jordan történetét meséli el. A regény a háború borzalmait, az emberi kapcsolatok erejét és a személyes áldozatok jelentőségét vizsgálja. A történet tele van érzelmi mélységgel és filozófiai elmélkedésekkel az élet értelméről és a halál elkerülhetetlenségéről.', '/uploads/book/For_Whom_the_Bell_Tolls.png'),
((SELECT 'The Master and Margarita'), (SELECT id FROM creative WHERE name = 'Mikhail Bulgakov'), 1967, 'Egy regény, amely a Sátán látogatását meséli el a Szovjetunióban, miközben párhuzamosan egy bibliai történetet is bemutat. A történet tele van szatírával, misztikummal és filozófiai elmélkedésekkel a hatalomról, a művészetről és az emberi természetről. A regény a szovjet társadalom kritikája, miközben a szerelem és az áldozat erejét is bemutatja.', '/uploads/book/Master_and_Margarita.png'),
((SELECT 'Mrs Dalloway'), (SELECT id FROM creative WHERE name = 'Virginia Woolf'), 1925, 'Egy regény, amely egyetlen nap eseményeit követi nyomon Clarissa Dalloway életében, miközben visszaemlékezéseken keresztül feltárja a múltját. A történet az idő múlásának, az emberi kapcsolatok bonyolultságának és a belső világ gazdagságának témáit vizsgálja. A regény modernista stílusban íródott, és mélyen emberi portrét fest a főszereplőről.', '/uploads/book/Mrs_Dalloway.png'),
((SELECT 'Murder on the Orient Express'), (SELECT id FROM creative WHERE name = 'Agatha Christie'), 1934, 'Egy detektívregény, amely Hercule Poirot nyomozását követi egy luxusvonaton történt gyilkosság ügyében. A történet tele van fordulatokkal, rejtélyekkel és izgalmas karakterekkel, miközben bemutatja Poirot zseniális logikáját és megfigyelőképességét. A regény a klasszikus krimi műfaj egyik legkiemelkedőbb alkotása.', '/uploads/book/Murder_on_the_Orient_Express.png'),
((SELECT 'One Hundred Years of Solitude'), (SELECT id FROM creative WHERE name = 'Gabriel García Márquez'), 1967, 'Egy regény, amely a Buendía család történetét meséli el a képzeletbeli Macondo városában. A történet tele van mágikus realizmussal, családi tragédiákkal és történelmi eseményekkel, miközben az emberi sors és az idő ciklikusságának témáit vizsgálja. A regény a latin-amerikai irodalom egyik legfontosabb műve.', '/uploads/book/One_Hundred_Years_of_Solitude.png'),
((SELECT 'Pride and Prejudice'), (SELECT id FROM creative WHERE name = 'Jane Austen'), 1813, 'Egy romantikus regény, amely Elizabeth Bennet és Mr. Darcy kapcsolatát követi, miközben bemutatja a viktoriánus Anglia társadalmi normáit és osztályrendszerét. A történet tele van humorral, romantikával és éles társadalmi megfigyelésekkel, miközben az előítéletek és a büszkeség leküzdésének témáit vizsgálja.', '/uploads/book/Pride_and_Prejudice.png'),
((SELECT 'The Metamorphosis'), (SELECT id FROM creative WHERE name = 'Franz Kafka'), 1915, 'Egy novella, amely egy férfi, Gregor Samsa történetét meséli el, aki egy reggel óriási rovarrá változva ébred. A történet az elidegenedés, a családi kapcsolatok és az emberi lét abszurditásának témáit vizsgálja. A mű Kafka szimbolikus és filozófiai írásainak egyik legismertebb darabja.', '/uploads/book/The_Metamorphosis.png'),
((SELECT 'A kőszívű ember fiai'), (SELECT id FROM creative WHERE name = 'Mór Jókai'), 1869, 'Egy regény, amely a magyar szabadságharc idején játszódik, és egy család történetét meséli el, akik különböző oldalakon állnak a konfliktusban. A történet tele van hazafisággal, romantikával és drámai fordulatokkal, miközben bemutatja a magyar történelem egyik legfontosabb időszakát.', '/uploads/book/A_kőszívű_ember_fiai.png'),
((SELECT 'A Pál utcai fiúk'), (SELECT id FROM creative WHERE name = 'Ferenc Molnár'), 1906, 'Egy regény, amely egy csapat iskolás fiú történetét meséli el, akik megpróbálják megvédeni játszóterüket egy rivális bandától. A történet a barátság, a bátorság és az áldozat témáit vizsgálja, miközben bemutatja a gyermeki világ egyszerűségét és mélységét.', '/uploads/book/A_Pál_utcai_fiúk.png'),
((SELECT 'Abigél'), (SELECT id FROM creative WHERE name = 'Magda Szabó'), 1970, 'Egy regény, amely egy fiatal lány, Gina történetét meséli el, akit egy szigorú bentlakásos iskolába küldenek a második világháború idején. A történet tele van rejtélyekkel, érzelmi mélységekkel és a felnőtté válás kihívásaival, miközben bemutatja a háború hatásait az egyéni sorsokra.', '/uploads/book/Abigél.png'),
((SELECT 'Az ajtó'), (SELECT id FROM creative WHERE name = 'Magda Szabó'), 1987, 'Egy regény, amely egy író és házvezetőnője, Emerence kapcsolatát meséli el, miközben feltárja a múlt titkait és a bizalom törékenységét. A történet tele van érzelmi mélységekkel, filozófiai elmélkedésekkel és az emberi kapcsolatok bonyolultságának bemutatásával.', '/uploads/book/Az_ajtó.png'),
((SELECT 'Az arany ember'), (SELECT id FROM creative WHERE name = 'Mór Jókai'), 1872, 'Egy regény, amely egy kereskedő, Timár Mihály történetét meséli el, aki egy hajótörés révén gazdagságra tesz szert. A történet tele van romantikával, kalandokkal és erkölcsi dilemmákkal, miközben bemutatja a boldogság keresésének és az emberi természet összetettségének témáit.', '/uploads/book/Az_arany_ember.png'),
((SELECT 'Édes Anna'), (SELECT id FROM creative WHERE name = 'Dezső Kosztolányi'), 1926, 'Egy regény, amely egy cselédlány, Édes Anna történetét meséli el, aki végül meggyilkolja munkaadóit. A történet az emberi lélek mélységeit, a társadalmi igazságtalanságokat és az elnyomás hatásait vizsgálja, miközben bemutatja a magyar társadalom árnyoldalait.', '/uploads/book/Édes_Anna.png'),
((SELECT 'Esti Kornél'), (SELECT id FROM creative WHERE name = 'Dezső Kosztolányi'), 1933, 'Egy novellagyűjtemény, amely Kornél Esti életének különböző epizódjait meséli el. A történetek tele vannak humorral, melankóliával és filozófiai elmélkedésekkel, miközben bemutatják az emberi lét abszurditását és szépségét.', '/uploads/book/Esti_Kornél.png');

-- Insert TV shows with references to creators
INSERT INTO tvshow (title, creator_Id, description, seasons, coverArt) VALUES
((SELECT 'American Horror Story'), (SELECT id FROM creative WHERE name = 'Ryan Murphy'), 'Egy antológia sorozat, amely különböző karakterekre és helyszínekre összpontosít, minden évad egy új történetet mesél el. A sorozat a horror műfaj különböző aspektusait tárja fel, beleértve a kísértetházakat, boszorkányokat, cirkuszi szörnyeket és apokaliptikus eseményeket. A történetek gyakran sötét, pszichológiai mélységeket érintenek, miközben társadalmi kérdéseket is boncolgatnak.', 10, '/uploads/tv/AHS.png'),
((SELECT 'Breaking Bad'), (SELECT id FROM creative WHERE name = 'Vince Gilligan'), 'Egy középiskolai kémiatanár, akit rákos megbetegedéssel diagnosztizálnak, úgy dönt, hogy metamfetamint kezd gyártani és árusítani, hogy biztosítsa családja jövőjét. A sorozat a bűnözés világába való fokozatos elmerülését mutatja be, miközben a karakterek morális dilemmákkal és személyes konfliktusokkal szembesülnek. A történet a hatalom, a kapzsiság és a családi kötelékek témáit vizsgálja.', 5, '/uploads/tv/BB.png'),
((SELECT 'Better Call Saul'), (SELECT id FROM creative WHERE name = 'Vince Gilligan'), 'Egy ügyvéd, Jimmy McGill, küzdelmei és átalakulása Saul Goodmanné, a Breaking Bad ikonikus karakterévé. A sorozat bemutatja Jimmy életének korai szakaszát, beleértve a családi és szakmai kihívásokat, valamint a bűnözői világba való fokozatos belépését. A történet mélyen emberi, tele humorral, drámával és váratlan fordulatokkal.', 6, '/uploads/tv/BCS.png'),
((SELECT 'Community'), (SELECT id FROM creative WHERE name = 'Dan Harmon'), 'Egy felfüggesztett ügyvéd kénytelen beiratkozni egy közösségi főiskolára, ahol egy színes személyiségekből álló tanári kar és diáksereg várja. A sorozat humoros és szatirikus módon mutatja be az oktatási rendszer és a társadalmi kapcsolatok dinamikáját. A karakterek közötti interakciók és a kreatív epizódok teszik a sorozatot egyedivé.', 6, '/uploads/tv/Community.png'),
((SELECT 'Fleabag'), (SELECT id FROM creative WHERE name = 'Phoebe Waller-Bridge'), 'Egy fiatal nő életét követi nyomon Londonban, aki próbál megbirkózni a veszteséggel, a családi konfliktusokkal és a modern élet kihívásaival. A sorozat egyedi humorral és érzelmi mélységgel mutatja be a főszereplő belső világát, miközben a nézőkkel közvetlenül kommunikál. A történet a magány, a szeretet és az önelfogadás témáit járja körül.', 2, '/uploads/tv/Fleabag.png'),
((SELECT 'Grey''s Anatomy'), (SELECT id FROM creative WHERE name = 'Shonda Rhimes'), 'Egy orvosi dráma, amely a sebészeti gyakornokok és mentoraik személyes és szakmai életére összpontosít. A sorozat bemutatja a kórházi élet intenzív pillanatait, a bonyolult emberi kapcsolatokat és a karakterek fejlődését. A történet tele van érzelmi csúcspontokkal, tragédiákkal és felemelő pillanatokkal, miközben az orvosi etika és a személyes döntések kérdéseit is érinti.', 18, '/uploads/tv/Greys_Anatomy.png'),
((SELECT 'I May Destroy You'), (SELECT id FROM creative WHERE name = 'Michaela Coel'), 'Egy nő története, aki megpróbálja újraépíteni az életét egy szexuális támadás után. A sorozat mélyen személyes és provokatív módon tárja fel a trauma, a gyógyulás és az önazonosság kérdéseit. A történet a modern társadalom kihívásait és a kapcsolatok bonyolultságát is bemutatja.', 1, '/uploads/tv/IMDY.png'),
((SELECT 'King of the Hill'), (SELECT id FROM creative WHERE name = 'Mike Judge'), 'Egy texasi propánkereskedő, Hank Hill, és családja mindennapjait követi nyomon. A sorozat humoros és szatirikus módon mutatja be az amerikai középosztály életét, miközben a családi kapcsolatok és a közösségi értékek fontosságát hangsúlyozza. A történetek gyakran hétköznapi problémákból indulnak ki, de mélyebb társadalmi kérdéseket is érintenek.', 13, '/uploads/tv/KOTH.png'),
((SELECT 'Rick and Morty'), (SELECT id FROM creative WHERE name = 'Dan Harmon'), 'Egy animációs sorozat, amely egy excentrikus, alkoholista tudós és unokája kalandjait követi nyomon különböző dimenziókban és univerzumokban. A sorozat tele van sötét humorral, filozófiai kérdésekkel és tudományos-fantasztikus elemekkel. A történetek gyakran a családi kapcsolatok és az emberi természet mélyebb aspektusait is vizsgálják.', 6, '/uploads/tv/RaM.png'),
((SELECT 'The Sopranos'), (SELECT id FROM creative WHERE name = 'David Chase'), 'Egy New Jersey-i maffiafőnök, Tony Soprano, életét mutatja be, aki egyszerre próbálja kezelni a bűnözői világ kihívásait és a családi problémákat. A sorozat mélyen emberi és pszichológiai portrét fest a főszereplőről, miközben a hatalom, a lojalitás és a morális dilemmák kérdéseit vizsgálja. A történet tele van drámával, feszültséggel és váratlan fordulatokkal.', 6, '/uploads/tv/Sopranos.png'),
((SELECT 'The Deuce'), (SELECT id FROM creative WHERE name = 'David Simon'), 'A pornóipar felemelkedését mutatja be New Yorkban az 1970-es évektől kezdve. A sorozat részletesen ábrázolja a társadalmi és gazdasági változásokat, amelyek a szexipar növekedéséhez vezettek. A történet a karakterek személyes küzdelmeit és a korszak kulturális dinamikáját is bemutatja.', 3, '/uploads/tv/The_Deuce.png'),
((SELECT 'The Wire'), (SELECT id FROM creative WHERE name = 'David Simon'), 'Baltimore drogvilágát mutatja be a dílerek és a rendfenntartók szemszögéből. A sorozat realisztikus és részletes képet fest a város társadalmi és politikai problémáiról, miközben a karakterek személyes történeteire is nagy hangsúlyt fektet. A történet a hatalom, a korrupció és az igazságosság kérdéseit vizsgálja.', 5, '/uploads/tv/The_Wire.png');

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
((SELECT id FROM book WHERE title = '1984'), (SELECT id FROM genre WHERE genre = 'Disztópia')),
((SELECT id FROM book WHERE title = 'Animal Farm'), (SELECT id FROM genre WHERE genre = 'Szatíra')),
((SELECT id FROM book WHERE title = 'Crime and Punishment'), (SELECT id FROM genre WHERE genre = 'Orosz irodalom')),
((SELECT id FROM book WHERE title = 'Emma'), (SELECT id FROM genre WHERE genre = 'Romantika')),
((SELECT id FROM book WHERE title = 'For Whom the Bell Tolls'), (SELECT id FROM genre WHERE genre = 'Fikció')),
((SELECT id FROM book WHERE title = 'The Master and Margarita'), (SELECT id FROM genre WHERE genre = 'Orosz irodalom')),
((SELECT id FROM book WHERE title = 'Mrs Dalloway'), (SELECT id FROM genre WHERE genre = 'Modernizmus')),
((SELECT id FROM book WHERE title = 'Murder on the Orient Express'), (SELECT id FROM genre WHERE genre = 'Rejtély')),
((SELECT id FROM book WHERE title = 'One Hundred Years of Solitude'), (SELECT id FROM genre WHERE genre = 'Mágikus realizmus')),
((SELECT id FROM book WHERE title = 'Pride and Prejudice'), (SELECT id FROM genre WHERE genre = 'Romantika')),
((SELECT id FROM book WHERE title = 'The Metamorphosis'), (SELECT id FROM genre WHERE genre = 'Fikció')),
((SELECT id FROM book WHERE title = 'A kőszívű ember fiai'), (SELECT id FROM genre WHERE genre = 'Magyar irodalom')),
((SELECT id FROM book WHERE title = 'A Pál utcai fiúk'), (SELECT id FROM genre WHERE genre = 'Magyar irodalom')),
((SELECT id FROM book WHERE title = 'Abigél'), (SELECT id FROM genre WHERE genre = 'Magyar irodalom')),
((SELECT id FROM book WHERE title = 'Az ajtó'), (SELECT id FROM genre WHERE genre = 'Magyar irodalom')),
((SELECT id FROM book WHERE title = 'Az arany ember'), (SELECT id FROM genre WHERE genre = 'Magyar irodalom')),
((SELECT id FROM book WHERE title = 'Édes Anna'), (SELECT id FROM genre WHERE genre = 'Magyar irodalom')),
((SELECT id FROM book WHERE title = 'Esti Kornél'), (SELECT id FROM genre WHERE genre = 'Magyar irodalom'));

-- Associate TV shows with genres
INSERT INTO tvgenre (tvShow_Id, genre_Id) VALUES
((SELECT id FROM tvshow WHERE title = 'American Horror Story'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM tvshow WHERE title = 'Breaking Bad'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM tvshow WHERE title = 'Better Call Saul'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM tvshow WHERE title = 'Community'), (SELECT id FROM genre WHERE genre = 'Komédia')),
((SELECT id FROM tvshow WHERE title = 'Fleabag'), (SELECT id FROM genre WHERE genre = 'Komédia')),
((SELECT id FROM tvshow WHERE title = 'Grey''s Anatomy'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM tvshow WHERE title = 'I May Destroy You'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM tvshow WHERE title = 'King of the Hill'), (SELECT id FROM genre WHERE genre = 'Komédia')),
((SELECT id FROM tvshow WHERE title = 'Rick and Morty'), (SELECT id FROM genre WHERE genre = 'Tudományos-fantasztikus')),
((SELECT id FROM tvshow WHERE title = 'The Sopranos'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM tvshow WHERE title = 'The Deuce'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM tvshow WHERE title = 'The Wire'), (SELECT id FROM genre WHERE genre = 'Dráma'));

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
(1, 'Pilot', 'Walter White, egy középiskolai kémiatanár, megtudja, hogy halálos rákbetegsége van, és úgy dönt, hogy biztosítja családja anyagi jövőjét. Elkeseredettségében és a kémiában szerzett tudását felhasználva metamfetamint kezd gyártani egykori diákjával, Jesse Pinkmannel. Az epizód bemutatja Walter átalakulásának kezdetét, ahogy belép a bűnözés világába, és szembesül a döntései erkölcsi és gyakorlati következményeivel. A történet a család, a túlélés és a hatalom kérdéseit vizsgálja.', '2008-01-20 00:00:00', (SELECT id FROM tvseason WHERE seasonNumber = 1 AND tvShow_Id = (SELECT id FROM tvshow WHERE title = 'Breaking Bad'))),
(1, 'Uno', 'Jimmy McGill, egy kisstílű ügyvéd, aki alig boldogul, megpróbálja megváltoztatni életét, miután egy jótékonysági cselekedet inspirálja. Az epizód bemutatja Jimmy küzdelmét, hogy kitörjön a sikertelenségből, miközben betekintést nyújt a múltjába és a családi kapcsolataiba. A történet tele van humorral, drámával és a karakter fejlődésének első lépéseivel, ahogy lassan Saul Goodmanné válik.', '2015-02-08 00:00:00', (SELECT id FROM tvseason WHERE seasonNumber = 1 AND tvShow_Id = (SELECT id FROM tvshow WHERE title = 'Better Call Saul'))),
(1, 'Pilot', 'Egy volt ügyvéd, Jeff Winger, kénytelen visszatérni a közösségi főiskolára, hogy megszerezze a diplomáját, miután kiderül, hogy korábbi végzettsége hamis. Az epizód bemutatja Jeff próbálkozásait, hogy manipulálja a helyzetet saját előnyére, miközben megismerkedik egy színes és különc diákcsoporttal. A történet humorosan ábrázolja az oktatási rendszer kihívásait, a társadalmi kapcsolatok dinamikáját és Jeff személyes fejlődésének kezdetét.', '2009-09-17 00:00:00', (SELECT id FROM tvseason WHERE seasonNumber = 1 AND tvShow_Id = (SELECT id FROM tvshow WHERE title = 'Community')));

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
('Ohlsdorfer lánya'); -- A torinói ló

-- Insert movies with references to directors
INSERT INTO movie (title, director_Id, releaseYear, description, coverArt) VALUES
((SELECT '2001: A Space Odyssey'), (SELECT id FROM creative WHERE name = 'Stanley Kubrick'), 1968, 'Amikor rejtélyes monolitot fedeznek fel a Hold felszínén, egy űrhajót küldenek a Jupiterhez, hogy megtalálják az eredetét. A film az emberi evolúció különböző fázisait követi nyomon, a primitív emberszabásúaktól kezdve a modern emberen át a következő fejlődési szintig. A történet középpontjában az ember és a technológia, különösen a mesterséges intelligencia kapcsolata áll, melyet a HAL 9000 számítógép testesít meg. A film vizuálisan lenyűgöző képi világával és filozófiai mélységével a sci-fi műfaj egyik meghatározó alkotása. Stanley Kubrick rendezése a művészfilm és a mainstream sci-fi határán egyensúlyoz, miközben az emberiség múltjáról, jelenéről és jövőjéről gondolkodtat el. A lassan kibontakozó, meditatív történetvezetés és a forradalmi vizuális effektek új mércét állítottak fel a filmművészetben.', '/uploads/movie/2001_Space_Odyssey.png'),
((SELECT 'Cléo from 5 to 7'), (SELECT id FROM creative WHERE name = 'Agnès Varda'), 1962, 'A film egy fiatal énekesnő, Cléo életének két óráját követi nyomon, miközben orvosi vizsgálati eredményeire vár, attól félve, hogy rákos lehet. A valós időben játszódó történet során Cléo Párizs utcáin vándorol, mélyen elmerülve saját halandóságának gondolataiban. A francia új hullám kiemelkedő alkotásaként a film érzékenyen ábrázolja a női identitás kérdéseit, a szépség mulandóságát és az élet törékenységét. Cléo útja során találkozik különböző emberekkel, akik akaratlanul is hatással vannak életfelfogására, miközben a néző tanúja lehet belső átalakulásának a felszínes popsztárból egy mélyebb önismerettel rendelkező nővé. Agnès Varda rendezése mesteri módon használja a városi környezetet mint a főszereplő lelkiállapotának tükröződését, miközben a fekete-fehér képi világ és az időnkénti színes jelenetek kontrasztja vizuálisan is kifejezi Cléo belső vívódásait.', '/uploads/movie/Cléo.png'),
((SELECT 'Inception'), (SELECT id FROM creative WHERE name = 'Christopher Nolan'), 2010, 'Egy tolvaj, aki vállalati titkokat lop el az álmok megosztására szolgáló technológia segítségével, egy különleges feladatot kap: egy ötlet elültetését egy célpont elméjében. A történet Dom Cobb, a főszereplő életét követi, aki nemcsak a bűnözés világában próbál boldogulni, hanem saját múltjának démonjaival is küzd. Az álomvilág rétegei között játszódó cselekmény tele van izgalmas fordulatokkal, miközben a valóság és az illúzió határai elmosódnak. A film mélyen filozófiai kérdéseket vet fel az emberi tudat, az emlékek és az identitás természetéről. Christopher Nolan rendezése lenyűgöző vizuális effektekkel és komplex narratívával mutatja be az álmok világának végtelen lehetőségeit, miközben a karakterek érzelmi mélységeit is feltárja. Az Inception nemcsak egy akciódús sci-fi, hanem egy érzelmileg gazdag történet is, amely az emberi kapcsolatok és a megbocsátás erejét vizsgálja.', '/uploads/movie/Inception.png'),
((SELECT 'Goodfellas'), (SELECT id FROM creative WHERE name = 'Martin Scorsese'), 1990, 'A film Henry Hill életét és a maffiában betöltött szerepét mutatja be, amely magában foglalja feleségével, Karen Hill-lel való kapcsolatát, valamint maffia társai, Jimmy Conway és Tommy DeVito közötti dinamikát az olasz-amerikai bűnszervezetben. A történet Henry Hill és barátai felemelkedését és bukását követi nyomon 1955-től 1980-ig, bemutatva a maffia világának kegyetlenségét és csillogását. A film részletesen ábrázolja a kapzsiság, az árulás, a pénz, a hatalom és a gyilkosság témáit, miközben betekintést nyújt a maffia belső működésébe. A történet középpontjában két legjobb barát áll: egy maffia végrehajtó és egy kaszinóvezető, akik egymással versengenek egy szerencsejáték-birodalom irányításáért és egy gyors életet élő, vonzó nő kegyeiért. A film mélyen emberi pillanatokat és drámai fordulatokat tár fel, miközben bemutatja a maffia világának sötét oldalát és a benne élők személyes küzdelmeit. Martin Scorsese rendezése mesterien ötvözi a feszültséget, a drámát és a karakterek érzelmi mélységeit, miközben a nézőt elgondolkodtatja a hatalom és a lojalitás kérdéseiről. A Goodfellas nemcsak a bűnözés világának hiteles ábrázolása, hanem egy időtálló történet a barátságról, az árulásról és az emberi természet összetettségéről.', '/uploads/movie/Goodfellas.png'),
((SELECT 'Kontroll'), (SELECT id FROM creative WHERE name = 'Nimród Antal'), 2003, 'A film a budapesti metró sötét és misztikus világában játszódik, ahol a jegyellenőrök mindennapjait követhetjük nyomon. A történet középpontjában Bulcsú áll, aki a föld alatti világban él és dolgozik, miközben próbálja feldolgozni múltját és megtalálni önmagát. A film tele van humorral, drámával és izgalmas fordulatokkal, miközben bemutatja a jegyellenőrök és az utasok közötti konfliktusokat, valamint a metró alagútjainak rejtélyes és nyomasztó atmoszféráját. A Kontroll nemcsak egy izgalmas thriller, hanem egy mélyen emberi történet is, amely az identitás, a magány és a megváltás kérdéseit vizsgálja. Nimród Antal rendezése mesterien ötvözi a sötét humor és a feszültség elemeit, miközben a budapesti metró világa szinte önálló karakterként jelenik meg a filmben. A történet során Bulcsú és társai különböző kihívásokkal néznek szembe, amelyek próbára teszik kitartásukat és emberi kapcsolataikat. A Kontroll egyedi látványvilágával és atmoszférájával a magyar filmművészet egyik kiemelkedő alkotása.', '/uploads/movie/Kontroll.png'),
((SELECT 'Mephisto'), (SELECT id FROM creative WHERE name = 'István Szabó'), 1981, 'Egy német színész, Hendrik Höfgen történetét meséli el, aki a náci Németország felemelkedése idején váratlan sikert ér el a Faust című darabban nyújtott alakításával. A film mélyen vizsgálja a művészet és a politika közötti kapcsolatot, valamint azt, hogy az egyén milyen kompromisszumokat köt a hatalom és a siker érdekében. Höfgen karaktere a Faust történetének modern átirataként jelenik meg, aki eladja a lelkét a hírnévért és a hatalomért, miközben egyre inkább elveszíti erkölcsi iránytűjét. A történet bemutatja, hogyan válik a művészet a propaganda eszközévé, és hogyan használják ki a művészeket a politikai rendszerek. A film a személyes és társadalmi felelősség kérdéseit is boncolgatja, miközben Höfgen belső vívódásait és önazonosságának elvesztését tárja fel. István Szabó rendezése érzékenyen ábrázolja a karakterek érzelmi mélységeit, miközben a korszak történelmi és politikai kontextusát is hitelesen jeleníti meg. A Mephisto nemcsak egy történelmi dráma, hanem egy időtálló tanulságokkal teli mű, amely az emberi gyengeségeket és a hatalom korrumpáló erejét vizsgálja.', '/uploads/movie/Mephisto.png'),
((SELECT 'Psycho'), (SELECT id FROM creative WHERE name = 'Alfred Hitchcock'), 1960, 'Egy titkárnő, Marion Crane, elkeseredett lépésre szánja el magát, amikor ellop egy nagyobb összeget munkaadójától, hogy új életet kezdjen szerelmével. Menekülése során egy távoli motelben száll meg, amelyet egy fiatal férfi, Norman Bates üzemeltet, aki látszólag az anyja uralma alatt áll. A történet fokozatosan bontakozik ki, ahogy Marion eltűnése után a nővére és egy magánnyomozó próbálják felderíteni a rejtélyt. A film mesterien építi a feszültséget, miközben a nézők betekintést nyernek Norman Bates zavaros pszichéjébe és a motel sötét titkaiba. Alfred Hitchcock rendezése forradalmi volt a horror és a thriller műfajában, különösen a híres zuhanyzós jelenet révén, amely a filmtörténet egyik legismertebb és legikonikusabb pillanata lett. A Psycho nemcsak a bűn és a bűnhődés témáit vizsgálja, hanem az emberi elme mélységeit és a családi kapcsolatok torzulásait is feltárja. A film a suspense mesterműve, amely a nézőket folyamatosan bizonytalanságban tartja, miközben a végkifejlet sokkoló és felejthetetlen fordulatot hoz.', '/uploads/movie/Psycho.png'),
((SELECT 'Seven Samurai'), (SELECT id FROM creative WHERE name = 'Akira Kurosawa'), 1954, 'Egy szegény japán falu lakói kétségbeesetten keresnek segítséget, amikor banditák fenyegetik őket, hogy elrabolják terményeiket és megélhetésüket. A falusiak végül hét szamurájt bérelnek fel, akik vállalják, hogy megvédik őket a támadóktól. A történet a szamurájok és a falusiak közötti kapcsolat fejlődését mutatja be, miközben a közös cél érdekében összefognak. A film mélyen emberi pillanatokat tár fel, ahogy a szamurájok nemcsak harci képességeiket, hanem bölcsességüket és emberségüket is megosztják a falusiakkal. Akira Kurosawa rendezése mesterien ötvözi az akciót, a drámát és a filozófiai elmélkedéseket, miközben a becsület, az áldozat és a közösség erejének témáit vizsgálja. A film lenyűgöző képi világa és ikonikus karakterei révén a japán filmművészet egyik legkiemelkedőbb alkotásává vált, amely generációk óta inspirálja a filmkészítőket világszerte.', '/uploads/movie/Seven_Samurai.png'),
((SELECT 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM creative WHERE name = 'George Lucas'), 1977, 'Luke Skywalker, egy fiatal farmfiú, aki a Tatuin bolygón él, váratlanul belekeveredik a galaxis sorsát meghatározó eseményekbe, amikor találkozik Obi-Wan Kenobival, egy visszavonult Jedi lovaggal. A történet során Luke csatlakozik egy lázadó csoporthoz, amely a gonosz Galaktikus Birodalom ellen harcol, és megpróbálja megsemmisíteni a Halálcsillagot, a Birodalom pusztító fegyverét. Útja során barátokra lel Han Solo, egy vakmerő csempész, és Leia hercegnő, a lázadók vezetője személyében. A film tele van izgalmas űrcsatákkal, lenyűgöző idegen világokkal és mély érzelmi pillanatokkal, miközben Luke felfedezi saját erejét és a Jedi örökségét. A történet a bátorság, a barátság és a remény erejét hangsúlyozza, miközben bemutatja a jó és a gonosz közötti örök küzdelmet. George Lucas rendezése forradalmi vizuális effektekkel és ikonikus zenei aláfestéssel új mércét állított fel a sci-fi műfajban, és a Star Wars univerzumot a popkultúra egyik legmeghatározóbb részévé tette.', '/uploads/movie/Star_Wars_IV.png'),
((SELECT 'Taxi Driver'), (SELECT id FROM creative WHERE name = 'Martin Scorsese'), 1976, 'Egy mentálisan instabil vietnámi veterán, Travis Bickle, éjszakai taxisofőrként dolgozik New York városában, miközben egyre mélyebbre süllyed az elszigeteltség és a paranoia világába. A film bemutatja Travis magányos életét, ahogy próbálja megtalálni helyét egy olyan társadalomban, amelyet erkölcsi hanyatlás és erőszak jellemez. Travis belső vívódásai és a város sötét oldalával való találkozásai fokozatosan egyre szélsőségesebb gondolatokhoz és tettekhez vezetik. A történet során megismerkedik Betsyvel, egy politikai kampány munkatársával, akit idealizál, valamint Iris-szel, egy fiatal prostituálttal, akit megpróbál megmenteni a kizsákmányolás világából. A film mélyen filozófiai és pszichológiai kérdéseket vet fel az emberi természet, az erkölcs és a társadalmi igazságtalanság témáiról. Martin Scorsese rendezése mesterien ábrázolja Travis fokozatos mentális összeomlását, miközben a nézőt is arra készteti, hogy elgondolkodjon a modern városi élet árnyoldalain. A Taxi Driver ikonikus képi világa, erőteljes színészi alakításai és mélyen emberi története a filmtörténet egyik legmeghatározóbb alkotásává tette.', '/uploads/movie/Taxi_Driver.png'),
((SELECT 'The Godfather'), (SELECT id FROM creative WHERE name = 'Francis Ford Coppola'), 1972, 'A film egy olasz-amerikai maffiacsalád, a Corleone család történetét meséli el, amelynek középpontjában Vito Corleone, a család idősödő patriarchája áll. A történet bemutatja, hogyan próbálja Vito átadni a hatalmat fiának, Michael Corleonénak, aki kezdetben vonakodik részt venni a család bűnözői ügyleteiben. A film mélyen ábrázolja a családi kötelékek, a lojalitás és a hatalom kérdéseit, miközben a néző betekintést nyer a maffia világának sötét és kegyetlen oldalába. A történet során Michael fokozatosan átalakul, és végül átveszi a család irányítását, miközben szembesül a döntései erkölcsi és személyes következményeivel. A film tele van drámai fordulatokkal, erőteljes érzelmi pillanatokkal és ikonikus jelenetekkel, amelyek a filmtörténet meghatározó részévé váltak. Francis Ford Coppola rendezése mesterien ötvözi a családi drámát és a bűnügyi történetet, miközben a karakterek mély érzelmi és pszichológiai rétegeit tárja fel. A Keresztapa nemcsak a maffia világának hiteles ábrázolása, hanem egy időtálló történet a hatalom, az árulás és a család erejéről, amely generációk óta lenyűgözi a nézőket.', '/uploads/movie/The_Godfather.png'),
((SELECT 'The Hurt Locker'), (SELECT id FROM creative WHERE name = 'Kathryn Bigelow'), 2008, 'Az iraki háború idején egy bombahatástalanító egység mindennapjait követhetjük nyomon, akik rendkívül veszélyes helyzetekkel néznek szembe. A történet középpontjában William James őrmester áll, aki a csapat új vezetőjeként érkezik, és merész, gyakran vakmerő megközelítése megosztja társait. A film bemutatja a háború brutalitását és a katonák pszichológiai terheit, miközben a bombák hatástalanítása során a feszültség folyamatosan fokozódik. A történet nemcsak a háborús helyzetek fizikai veszélyeit tárja fel, hanem a katonák közötti dinamikát, a bizalom és a konfliktusok kérdéseit is. A film mélyen emberi pillanatokkal és érzelmi mélységekkel ábrázolja a háború hatását az egyénekre, miközben a túlélésért folytatott küzdelem és a kötelességtudat közötti ellentmondásokat is vizsgálja. Kathryn Bigelow rendezése mesterien ötvözi az akciót és a drámát, miközben a nézőt a háború valóságának közvetlen közelébe hozza. A film a bátorság, a félelem és az emberi kitartás témáit járja körül, miközben a háború értelmetlenségére és az emberi élet törékenységére is rámutat.', '/uploads/movie/The_Hurt_Locker.png'),
((SELECT 'The Shining'), (SELECT id FROM creative WHERE name = 'Stanley Kubrick'), 1980, 'Egy család egy elhagyatott szállodába költözik a téli szezonra, ahol a magány és a természetfeletti erők fokozatosan hatalmukba kerítik az apát, Jack Torrance-t. A szálloda múltja sötét titkokat rejt, amelyek lassan felszínre törnek, miközben Jack mentális állapota egyre romlik. A történet bemutatja, hogyan válik a család a szálloda gonosz energiáinak áldozatává, miközben a feszültség és a rettegés fokozatosan eluralkodik. A kisfiú, Danny, különleges képessége, az úgynevezett "ragyogás" révén látomásokat kap a szálloda múltjáról és jövőjéről, amelyek segítenek neki és édesanyjának, Wendynek, megérteni a veszélyt, amelyben vannak. A film a családi kapcsolatok széthullását, az elszigeteltség hatásait és az emberi psziché törékenységét vizsgálja. Stanley Kubrick rendezése mesterien ötvözi a pszichológiai drámát és a természetfeletti horrort, miközben a szálloda nyomasztó atmoszférája szinte önálló karakterként jelenik meg. A történet tele van ikonikus jelenetekkel, amelyek a filmtörténet meghatározó pillanataivá váltak, és a nézőt folyamatosan bizonytalanságban tartják, miközben a végkifejlet sokkoló és felejthetetlen fordulatot hoz.', '/uploads/movie/The_Shining.png'),
((SELECT 'Vertigo'), (SELECT id FROM creative WHERE name = 'Alfred Hitchcock'), 1958, 'Egy volt rendőrnyomozó, aki magasságtól való félelmet fejlesztett ki, miután szemtanúja volt egy halálesetnek, egy különös ügybe keveredik, amelyben egy régi ismerős arra kéri, hogy kövesse a feleségét, aki furcsa és megmagyarázhatatlan viselkedést mutat. A történet során a nyomozó egyre mélyebben belemerül a nő életébe, és fokozatosan megszállottjává válik, miközben saját félelmeivel és múltjának traumáival is szembe kell néznie. A film a szerelem, az identitás és az illúzió témáit vizsgálja, miközben Hitchcock mesterien építi a feszültséget és a rejtélyt. A történet tele van váratlan fordulatokkal, érzelmi mélységekkel és pszichológiai összetettséggel, miközben a nézőt folyamatosan bizonytalanságban tartja. A Vertigo nemcsak egy izgalmas thriller, hanem egy mélyen filozófiai és érzelmi utazás is, amely az emberi természet legmélyebb rétegeit tárja fel. Hitchcock rendezése ikonikus képi világgal és lenyűgöző zenei aláfestéssel teszi a filmet a filmtörténet egyik legkiemelkedőbb alkotásává.', '/uploads/movie/Vertigo.png'),
((SELECT 'The Turin Horse'), (SELECT id FROM creative WHERE name = 'Béla Tarr'), 2011, 'Egy vidéki paraszt és lánya mindennapjait követhetjük nyomon, akik egy elhagyatott tanyán élnek, távol a civilizációtól. A történet középpontjában a paraszt hűséges lova áll, amely egyre gyengébbé válik, és már nem képes ellátni feladatait. A film lassú, meditatív tempóban mutatja be a mindennapi élet monotonitását, miközben a szereplők fokozatosan szembesülnek az életük kilátástalanságával és a természet könyörtelen erejével. A szélviharok, a sötétség és a magány atmoszférája egyre nyomasztóbbá válik, ahogy a történet előrehalad. A film filozófiai mélységeket érint, az emberi lét törékenységét, az elmúlás elkerülhetetlenségét és a természet erejével való küzdelmet vizsgálva. Béla Tarr rendezése mesterien ötvözi a minimalista képi világot és a szimbolikus jelentéseket, miközben a nézőt arra készteti, hogy elgondolkodjon az emberi élet értelmén és a világban elfoglalt helyünkön. A történet végül a teljes reménytelenség és az elkerülhetetlen végzet érzésével zárul, amely mélyen megrázó és felejthetetlen élményt nyújt.', '/uploads/movie/Turin_Horse.png');

-- Insert movie actors
INSERT INTO actor (name, picture) VALUES
('Leonardo DiCaprio', '/uploads/actor/leonardo_dicaprio.png'),
('Joseph Gordon-Levitt', '/uploads/actor/joseph_gordon-levitt.png'),
('Marion Cotillard', '/uploads/actor/marion_cotillard.png'),
('Corinne Marchand', '/uploads/actor/corinne_marchand.png'),
('Robert De Niro', '/uploads/actor/robert_de_niro.png'),
('Ray Liotta', '/uploads/actor/ray_liotta.png'),
('Joe Pesci', '/uploads/actor/joe_pesci.png'),
('Sándor Csányi', '/uploads/actor/sandor_csanyi.png'),
('Zoltán Mucsi', '/uploads/actor/zoltan_mucsi.png'),
('Klaus Maria Brandauer', '/uploads/actor/klaus_maria_brandauer.png'),
('Anthony Perkins', '/uploads/actor/anthony_perkins.png'),
('Janet Leigh', '/uploads/actor/janet_leigh.png'),
('Toshiro Mifune', '/uploads/actor/toshiro_mifune.png'),
('Mark Hamill', '/uploads/actor/mark_hamill.png'),
('Harrison Ford', '/uploads/actor/harrison_ford.png'),
('Carrie Fisher', '/uploads/actor/carrie_fisher.png'),
('Marlon Brando', '/uploads/actor/marlon_brando.png'),
('Al Pacino', '/uploads/actor/al_pacino.png'),
('James Caan', '/uploads/actor/james_caan.png'),
('Jeremy Renner', '/uploads/actor/jeremy_renner.png'),
('Jack Nicholson', '/uploads/actor/jack_nicholson.png'),
('Shelley Duvall', '/uploads/actor/shelley_duvall.png'),
('James Stewart', '/uploads/actor/james_stewart.png'),
('Kim Novak', '/uploads/actor/kim_novak.png'),
('János Derzsi', '/uploads/actor/janos_derzsi.png'),
('Erika Bók', '/uploads/actor/erika_bok.png');

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
((SELECT id FROM movie WHERE title = 'The Turin Horse'), (SELECT id FROM `character` WHERE name = 'Ohlsdorfer lánya'));

-- Create movie-genre relationships
INSERT INTO moviegenre (movie_Id, genre_Id) VALUES
((SELECT id FROM movie WHERE title = 'Inception'), (SELECT id FROM genre WHERE genre = 'Tudományos-fantasztikus')),
((SELECT id FROM movie WHERE title = 'Inception'), (SELECT id FROM genre WHERE genre = 'Thriller')),
((SELECT id FROM movie WHERE title = 'Cléo from 5 to 7'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM movie WHERE title = 'Cléo from 5 to 7'), (SELECT id FROM genre WHERE genre = 'Művészfilm')),
((SELECT id FROM movie WHERE title = 'Goodfellas'), (SELECT id FROM genre WHERE genre = 'Krimi')),
((SELECT id FROM movie WHERE title = 'Goodfellas'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM movie WHERE title = 'Kontroll'), (SELECT id FROM genre WHERE genre = 'Komédia')),
((SELECT id FROM movie WHERE title = 'Kontroll'), (SELECT id FROM genre WHERE genre = 'Thriller')),
((SELECT id FROM movie WHERE title = 'Mephisto'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM movie WHERE title = 'Psycho'), (SELECT id FROM genre WHERE genre = 'Horror')),
((SELECT id FROM movie WHERE title = 'Psycho'), (SELECT id FROM genre WHERE genre = 'Thriller')),
((SELECT id FROM movie WHERE title = 'Seven Samurai'), (SELECT id FROM genre WHERE genre = 'Kaland')),
((SELECT id FROM movie WHERE title = 'Seven Samurai'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM movie WHERE title = 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM genre WHERE genre = 'Tudományos-fantasztikus')),
((SELECT id FROM movie WHERE title = 'Star Wars: Episode IV - A New Hope'), (SELECT id FROM genre WHERE genre = 'Kaland')),
((SELECT id FROM movie WHERE title = 'Taxi Driver'), (SELECT id FROM genre WHERE genre = 'Krimi')),
((SELECT id FROM movie WHERE title = 'Taxi Driver'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM movie WHERE title = 'The Godfather'), (SELECT id FROM genre WHERE genre = 'Krimi')),
((SELECT id FROM movie WHERE title = 'The Godfather'), (SELECT id FROM genre WHERE genre = 'Dráma')),
((SELECT id FROM movie WHERE title = 'The Hurt Locker'), (SELECT id FROM genre WHERE genre = 'Háborús')),
((SELECT id FROM movie WHERE title = 'The Hurt Locker'), (SELECT id FROM genre WHERE genre = 'Thriller')),
((SELECT id FROM movie WHERE title = 'The Shining'), (SELECT id FROM genre WHERE genre = 'Horror')),
((SELECT id FROM movie WHERE title = '2001: A Space Odyssey'), (SELECT id FROM genre WHERE genre = 'Tudományos-fantasztikus')),
((SELECT id FROM movie WHERE title = 'Vertigo'), (SELECT id FROM genre WHERE genre = 'Rejtély')),
((SELECT id FROM movie WHERE title = 'Vertigo'), (SELECT id FROM genre WHERE genre = 'Thriller')),
((SELECT id FROM movie WHERE title = 'The Turin Horse'), (SELECT id FROM genre WHERE genre = 'Művészfilm')),
((SELECT id FROM movie WHERE title = 'The Turin Horse'), (SELECT id FROM genre WHERE genre = 'Dráma'));

INSERT INTO `group` (name, `read`, `write`, `update`, `delete`) VALUES
('ADMIN', 1, 1, 1, 1),
('USER', 1, 0, 0, 0);

INSERT INTO user (username, password, email, groupId, verified, createdAt, updatedAt) VALUES
('admin', '$2a$10$Gl4QGQjnZ0o1KsRB/T/XvO5xkLO.LnQwHUfY4GsdXwEm/LnhpzNdm', 'admin@pollakkonyvklub.info', 
 (SELECT id FROM `group` WHERE name = 'ADMIN'), 
 1, 
 NOW(), 
 NOW());

 INSERT INTO maindata (
    JWTAlgorithm, 
    JWTExpiration, 
    JWTSecret, 
    RefreshTokenAlgorithm, 
    RefreshTokenSecret, 
    RefreshTokenExpiration
) VALUES (
    'HS256', 
    '86400', 
    'your-jwt-secret-key-here', 
    'HS256', 
    'your-refresh-token-secret-key-here', 
    '604800'
);

COMMIT;
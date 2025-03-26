<template>
    <div>
      <Header />
      <div class="home-card">
        <div class="content">
          <h1>Rólunk</h1>
          
          <div class="about-section">
            <h2>Üdvözlünk a Virtuális Könyvklubban!</h2>
            <p>
              Üdvözlünk a Pollák Virtuális Könyvklubban! A könyvklub László Csongor, Görbe Rinaldó és Zsigó Dávid közös vizsgaremek projektje. 
              A célkitűzésünk az, hogy egy érdekes, interaktív módot ajánljunk felhasználóinknak a könyvek, filmek és sorozatok értékelésére, 
              kibeszélésére, illetve új mesterművek felfedezésére!
              
              Sok szeretettel várunk a Pollák Virtuális Könyvklubban, és reméljük, hogy jól érzed magad az itt eltöltött idő alatt!
            </p>
            
            <h2>Mit kínálunk?</h2>
            <div class="features">
              <div class="feature">
                <h3>📚 Könyvek</h3>
                <p>Böngéssz hatalmas könyvadatbázisunkban, fedezz fel új szerzőket és műfajokat.</p>
              </div>
              
              <div class="feature">
                <h3>🎬 Filmek</h3>
                <p>Tekintsd át a legnépszerűbb filmeket, ismerd meg a rendezőket és a színészeket.</p>
              </div>
              
              <div class="feature">
                <h3>📺 Sorozatok</h3>
                <p>Fedezd fel a legjobb TV-sorozatokat és kövesd nyomon az epizódokat.</p>
              </div>
              
              <div class="feature">
                <h3>👥 Közösség</h3>
                <p>Csatlakozz csoportokhoz, beszélgess más rajongókkal és ossz meg véleményeket.</p>
              </div>
            </div>
            
            <h2>Csapatunk</h2>
            <p>
            A csapat a Pollák három A osztályos diákjából áll: 
            <a href="https://github.com/ChongoFett" target="_blank">László Csongor</a>, 
            <a href="https://github.com/d0Zi3E" target="_blank">Görbe Rinaldó</a>, 
            <a href="https://github.com/davidpls" target="_blank">Zsigó Dávid</a>. 
            Mindannyian lelkes irodalomkedvelők, akik úgy gondolták, hogy iskolánk erősen művelt és olvasott diákjai megérdemelnek egy weboldalt, ahol beszélhetnek az irodalomról és egyéb más művészi alkotásokról!
            </p>
            
            <h2>Kapcsolat</h2>
            <p>
              Kérdéseid vannak? Javaslat? Visszajelzés? Írj nekünk az 
              <a href="mailto:pollak.bookclub@gmail.com">pollak.bookclub@gmail.com</a> címre!
            </p>
            
            <p class="disclaimer">
              © 2025 Virtuális Könyvklub | Minden jog fenntartva
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '../components/Header.vue';
  </script>
  
  <style scoped>
  .home-card {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    background: white;
  }
  
  .content {
    padding: 20px;
  }
  
  .about-section {
    text-align: left;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }
  
  h2 {
    color: #ff7300;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 15px;
    color: #555;
  }
  
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }
  
  .feature {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .feature h3 {
    color: #333;
    margin-bottom: 10px;
  }
  
  a {
    color: #254a81;
    text-decoration: underline;
  }
  
  .disclaimer {
    text-align: center;
    margin-top: 40px;
    font-size: 0.9em;
    color: #777;
  }
  </style>
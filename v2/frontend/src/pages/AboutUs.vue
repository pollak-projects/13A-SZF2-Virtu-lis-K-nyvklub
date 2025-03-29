<template>
  <GradientBackground>
    <div class="about-page-container">
      <Header />
      <div class="home-card">
        <div class="content">
          <h1>Rólunk</h1>

          <div class="about-section">
            <h2>Üdvözlünk a Virtuális Könyvklubban!</h2>
            <p>
              Üdvözlünk a Pollák Virtuális Könyvklubban! A könyvklub László
              Csongor, Görbe Rinaldó és Zsigó Dávid közös vizsgaremek projektje.
              A célkitűzésünk az, hogy egy érdekes, interaktív módot ajánljunk
              felhasználóinknak a könyvek, filmek és sorozatok értékelésére,
              kibeszélésére, illetve új mesterművek felfedezésére! Sok
              szeretettel várunk a Pollák Virtuális Könyvklubban, és reméljük,
              hogy jól érzed magad az itt eltöltött idő alatt!
            </p>

            <h2>Mit kínálunk?</h2>
            <div class="features">
              <div class="feature">
                <h3>📚 Könyvek</h3>
                <p>
                  Böngéssz hatalmas könyvadatbázisunkban, fedezz fel új
                  szerzőket és műfajokat.
                </p>
              </div>

              <div class="feature">
                <h3>🎬 Filmek</h3>
                <p>
                  Tekintsd át a legnépszerűbb filmeket, ismerd meg a rendezőket
                  és a színészeket.
                </p>
              </div>

              <div class="feature">
                <h3>📺 Sorozatok</h3>
                <p>
                  Fedezd fel a legjobb TV-sorozatokat és oszd meg véleményed
                  másokkal.
                </p>
              </div>

              <div class="feature">
                <h3>👥 Közösség</h3>
                <p>
                  Tudd meg, hogy a Pollák többi diákja mit gondol kedvenc alkotásaidról. Ismerkedj meg hasonló ízlésű diáktársaiddal, és építs barátságokat a művészet iránti közös szereteteken!
                </p>
              </div>
            </div>

            <h2>Csapatunk</h2>
            <p>
              A csapat a Pollák három A osztályos diákjából áll:
              <a href="https://github.com/ChongoFett" target="_blank"
                >László Csongor</a
              >,
              <a href="https://github.com/d0Zi3E" target="_blank"
                >Görbe Rinaldó</a
              >
              és
              <a href="https://github.com/davidpls" target="_blank"
                >Zsigó Dávid</a
              >. Mindannyian lelkes irodalomkedvelők, akik úgy gondolták, hogy
              iskolánk erősen művelt és olvasott diákjai megérdemelnek egy
              weboldalt, ahol kibeszélhetik kedvenc irodalmi műveiket, illetve
              egyéb más művészi alkotásokat! A reményünk az, hogy az oldalunk
              sok mosolyt fog csalni szeretett iskolánk diákjainak arcára, és
              erősíti a műelemzés szeretetét bennük.
            </p>

            <h2>Kapcsolat</h2>
            <p>
              Kérdéseid vannak? Javaslat? Visszajelzés? Írj nekünk a
              <a href="mailto:pollak.bookclub@gmail.com"
                >pollak.bookclub@gmail.com</a
              >
              címre!
            </p>

            <p class="disclaimer">
              Sok szeretettel a 2025-ös 13. osztálytól! | Pollák Virtuális
              Könyvklub
            </p>
            <p class="extra-thanks">
              Extra köszönet Bagi László tanárúrnak!
            </p>
          </div>
        </div>
      </div>
    </div>
  </GradientBackground>
</template>

<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import GradientBackground from "../components/GradientBackground.vue";
</script>

<style scoped>
.about-page-container {
  width: 100%;
  position: relative;
  padding-top: 200px; 
}

:deep(.header-container) {
  width: 100%;
  display: flex;
  justify-content: center;
}

:deep(.header) {
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 1920px;
  height: auto;
  min-height: 200px;
  overflow: visible;
}

:deep(.header-image) {
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 240px;
  object-fit: cover;
}

.home-card {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
  position: relative;
  z-index: 5;
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

.extra-thanks {
  text-align: center;
  margin-top: 10px;
  font-size: 0.6em;
  color: #777;
}
</style>

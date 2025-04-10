<template>
  <GradientBackground>
    <div class="page-container">
      <Header />
      <div class="home-card">
        <div class="content">
          <h1>Új sorozat feltöltése</h1>
          <form @submit.prevent="submitTVShow" enctype="multipart/form-data">
            <div class="form-group">
              <label for="title">Cím:</label>
              <input type="text" id="title" v-model="tvShow.title" required />
            </div>
            <div class="form-group">
              <label for="creator">Készítő:</label>
              <select id="creator" v-model="tvShow.creatorId" required>
                <option value="" disabled>Válassz készítőt</option>
                <option
                  v-for="creator in creators"
                  :key="creator.id"
                  :value="creator.id"
                >
                  {{ creator.name }}
                </option>
              </select>
              <div v-if="creators.length === 0" class="no-creators-warning">
                Nincs elérhető készítő. Kérlek, adj hozzá készítőket először az Upload Creative szekcióban.
              </div>
            </div>
            <div class="form-group">
              <label for="releaseYear">Kiadás éve:</label>
              <input
                type="number"
                id="releaseYear"
                v-model="tvShow.releaseYear"
                required
              />
            </div>
            <div class="form-group">
              <label for="seasons">Évadok száma:</label>
              <input type="number" id="seasons" v-model="tvShow.seasons" required />
            </div>
            <div class="form-group">
              <label for="description">Leírás:</label>
              <textarea
                id="description"
                v-model="tvShow.description"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <label for="coverArt">Borítókép:</label>
              <input
                type="file"
                id="coverArt"
                @change="handleFileUpload"
                accept="image/*"
                required
              />
            </div>
            <button type="submit" :disabled="creators.length === 0">
              Sorozat feltöltése
            </button>
          </form>
        </div>
      </div>
    </div>
  </GradientBackground>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";
import GradientBackground from "../components/GradientBackground.vue";

const creators = ref([]);
const tvShow = ref({
  title: "",
  creatorId: "",
  releaseYear: "",
  seasons: "",
  description: "",
  coverArt: null,
});

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost:3300/creatives/creators"
    );
    creators.value = response.data;
  } catch (error) {
    console.error("Error fetching creators:", error);
    alert("Failed to load creators list.");
  }
});

const handleFileUpload = (event) => {
  tvShow.value.coverArt = event.target.files[0];
};

const submitTVShow = async () => {
  const formData = new FormData();
  formData.append("title", tvShow.value.title);
  formData.append("creatorId", tvShow.value.creatorId);
  formData.append("releaseYear", tvShow.value.releaseYear);
  formData.append("seasons", tvShow.value.seasons);
  formData.append("description", tvShow.value.description);
  formData.append("coverArt", tvShow.value.coverArt);

  try {
    const response = await axios.post(
      "http://localhost:3300/tvshows/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert("A sorozat sikeresen feltöltve!");
    console.log("Response:", response.data);
    tvShow.value = {
      title: "",
      creatorId: "",
      releaseYear: "",
      seasons: "",
      description: "",
      coverArt: null,
    };
  } catch (error) {
    console.error("Error uploading TV Show:", error);
    alert("Nem sikerült feltölteni a sorozatot.");
  }
};
</script>

<style scoped>
.page-container {
  width: 100%;
  position: relative;
  padding-top: 200px;
  min-height: 100vh;
  z-index: 1;
}

.home-card {
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
  z-index: 2;
}

.content {
  padding: 20px;
  width: 100%;
}

h1 {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #444;
}

input,
textarea,
select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 16px;
  color: #444;
  background-color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
  outline: none;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #00767F;
  box-shadow: 0 0 0 2px rgba(0, 118, 127, 0.2);
}

input[type="file"] {
  padding: 8px;
  border: 2px dashed #ddd;
  background-color: #f8f8f8;
  cursor: pointer;
}

input[type="file"]:hover {
  border-color: #FFA915;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FA5E00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.no-creators-warning {
  color: #FA5E00;
  margin-top: 5px;
  font-size: 0.9rem;
}

button {
  font-family: "Simple Print", sans-serif;
  font-weight: bold;
  width: 100%;
  padding: 12px;
  background-color: #FFA915;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

button:hover:not(:disabled) {
  background-color: #FA5E00;
  transform: translateY(-3px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
}

button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
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
</style>

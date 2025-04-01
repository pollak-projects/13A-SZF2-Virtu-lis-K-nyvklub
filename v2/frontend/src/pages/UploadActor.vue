<template>
  <GradientBackground>
    <div class="page-container">
      <Header />
      <div class="home-card">
        <div class="content">
          <h1>Új színész feltöltése</h1>
          <form @submit.prevent="submitActor" enctype="multipart/form-data">
            <div class="form-group">
              <label for="name">Név:</label>
              <input type="text" id="name" v-model="actor.name" required />
            </div>
            <div class="form-group">
              <label for="picture">Kép:</label>
              <input
                type="file"
                id="picture"
                @change="handleFileUpload"
                accept="image/*"
              />
            </div>

            <!-- Movie Linking Section -->
            <h2>Film hozzárendelés</h2>
            <p class="subtitle">Rendeld hozzá a színészt filmekhez</p>
            
            <div v-for="(link, index) in movieLinks" :key="`movie-${index}`" class="link-container">
              <div class="form-group">
                <label :for="`movie-${index}`">Film:</label>
                <input 
                  :id="`movie-${index}`" 
                  :list="`movie-list-${index}`"
                  v-model="link.movieTitle"
                  @change="handleMovieChange(index)"
                  placeholder="Válassz vagy írj be filmet"
                />
                <datalist :id="`movie-list-${index}`">
                  <option 
                    v-for="movie in movies" 
                    :key="movie.id" 
                    :value="movie.title"
                    :data-id="movie.id"
                  ></option>
                </datalist>
              </div>
              
              <button 
                type="button" 
                class="remove-btn" 
                @click="removeMovieLink(index)"
                v-if="movieLinks.length > 1"
              >
                Eltávolítás
              </button>
            </div>
            
            <button 
              type="button" 
              class="add-btn" 
              @click="addMovieLink"
            >
              + Film hozzáadása
            </button>

            <!-- TV Show Linking Section -->
            <h2>Sorozat hozzárendelés</h2>
            <p class="subtitle">Rendeld hozzá a színészt sorozatokhoz</p>
            
            <div v-for="(link, index) in tvShowLinks" :key="`tvshow-${index}`" class="link-container">
              <div class="form-group">
                <label :for="`tvshow-${index}`">Sorozat:</label>
                <input 
                  :id="`tvshow-${index}`" 
                  :list="`tvshow-list-${index}`"
                  v-model="link.tvShowTitle"
                  @change="handleTVShowChange(index)"
                  placeholder="Válassz vagy írj be sorozatot"
                />
                <datalist :id="`tvshow-list-${index}`">
                  <option 
                    v-for="tvShow in tvShows" 
                    :key="tvShow.id" 
                    :value="tvShow.title"
                    :data-id="tvShow.id"
                  ></option>
                </datalist>
              </div>
              
              <button 
                type="button" 
                class="remove-btn" 
                @click="removeTVShowLink(index)"
                v-if="tvShowLinks.length > 1"
              >
                Eltávolítás
              </button>
            </div>
            
            <button 
              type="button" 
              class="add-btn" 
              @click="addTVShowLink"
            >
              + Sorozat hozzáadása
            </button>

            <button type="submit" class="submit-btn">Színész feltöltése</button>
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

const actor = ref({
  name: "",
  picture: null
});

const movies = ref([]);
const tvShows = ref([]);
const movieLinks = ref([{ movieTitle: "", movieId: null }]);
const tvShowLinks = ref([{ tvShowTitle: "", tvShowId: null }]);

onMounted(async () => {
  try {
    try {
      const movieResponse = await axios.get("http://localhost:3300/movies/getAllMovies");
      movies.value = movieResponse.data;
      console.log("Movies loaded:", movies.value.length);
    } catch (movieError) {
      console.error("Error fetching movies:", movieError);
    }
    
    try {
      const tvShowResponse = await axios.get("http://localhost:3300/tvshows/getAllTVShows");
      tvShows.value = tvShowResponse.data;
      console.log("TV Shows loaded:", tvShows.value.length);
    } catch (tvShowError) {
      console.error("Error fetching TV shows:", tvShowError);
    }
  } catch (error) {
    console.error("Error in data loading:", error);
    alert("Nem sikerült betölteni az adatokat. Kérjük, ellenőrizd a szerverkapcsolatot.");
  }
});

const handleMovieChange = (index) => {
  const title = movieLinks.value[index].movieTitle;
  const movie = movies.value.find(m => m.title === title);
  
  if (movie) {
    movieLinks.value[index].movieId = movie.id;
  } else {
    movieLinks.value[index].movieId = null;
  }
};

const handleTVShowChange = (index) => {
  const title = tvShowLinks.value[index].tvShowTitle;
  const tvShow = tvShows.value.find(t => t.title === title);
  
  if (tvShow) {
    tvShowLinks.value[index].tvShowId = tvShow.id;
  } else {
    tvShowLinks.value[index].tvShowId = null;
  }
};

const handleFileUpload = (event) => {
  actor.value.picture = event.target.files[0];
};

const addMovieLink = () => {
  movieLinks.value.push({ movieTitle: "", movieId: null });
};

const removeMovieLink = (index) => {
  movieLinks.value.splice(index, 1);
};

const addTVShowLink = () => {
  tvShowLinks.value.push({ tvShowTitle: "", tvShowId: null });
};

const removeTVShowLink = (index) => {
  tvShowLinks.value.splice(index, 1);
};

const submitActor = async () => {
  try {
    const response = await axios.post("http://localhost:3300/actors", {
      name: actor.value.name,
    });
  } catch (error) {
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

h2 {
  margin-top: 30px;
  margin-bottom: 5px;
  color: #00767F;
  font-size: 18px;
}

.subtitle {
  margin-top: 0;
  margin-bottom: 15px;
  color: #666;
  font-size: 14px;
}

.form-group {
  margin-bottom: 20px;
  flex: 1;
}

.link-container {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 10px;
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

button {
  font-family: "Simple Print", sans-serif;
  font-weight: bold;
  padding: 12px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.submit-btn {
  width: 100%;
  background-color: #FFA915;
  margin-top: 20px;
}

.add-btn {
  background-color: #00767F;
  width: 100%;
  margin-top: 10px;
}

.remove-btn {
  background-color: #FA5E00;
  min-width: 120px;
  padding: 10px;
}

button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
}

.add-btn:hover {
  background-color: #005a60;
}

.submit-btn:hover {
  background-color: #FA5E00;
}

.remove-btn:hover {
  background-color: #d14800;
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
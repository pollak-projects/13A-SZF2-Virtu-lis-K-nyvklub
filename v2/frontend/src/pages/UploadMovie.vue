<template>
  <div>
    <Header />
    <div class="upload-movie">
      <h1>Upload New Movie</h1>
      <form @submit.prevent="submitMovie" enctype="multipart/form-data">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="movie.title" required />
        </div>
        <div class="form-group">
          <label for="director">Director:</label>
          <select id="director" v-model="movie.directorId" required>
            <option value="" disabled>Select a director</option>
            <option v-for="director in directors" :key="director.id" :value="director.id">
              {{ director.name }}
            </option>
          </select>
          <div v-if="directors.length === 0" class="no-directors-warning">
            No directors available. Please add directors in the Upload Creative section first.
          </div>
        </div>
        <div class="form-group">
          <label for="releaseYear">Release Year:</label>
          <input
            type="number"
            id="releaseYear"
            v-model="movie.releaseYear"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea
            id="description"
            v-model="movie.description"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="coverArt">Cover Art:</label>
          <input
            type="file"
            id="coverArt"
            @change="handleFileUpload"
            accept="image/*"
            required
          />
        </div>
        <button type="submit" :disabled="directors.length === 0">Upload Movie</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";

const directors = ref([]);
const movie = ref({
  title: "",
  directorId: "",
  releaseYear: "",
  description: "",
  coverArt: null,
});

// Fetch directors on component mount
onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3300/creatives/directors");
    directors.value = response.data;
  } catch (error) {
    console.error("Error fetching directors:", error);
    alert("Failed to load directors list.");
  }
});

const handleFileUpload = (event) => {
  movie.value.coverArt = event.target.files[0];
};

const submitMovie = async () => {
  const formData = new FormData();
  formData.append("title", movie.value.title);
  formData.append("directorId", movie.value.directorId); // Now sending directorId instead of director name
  formData.append("releaseYear", movie.value.releaseYear);
  formData.append("description", movie.value.description);
  formData.append("coverArt", movie.value.coverArt);

  try {
    const response = await axios.post(
      "http://localhost:3300/movies/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert("Movie uploaded successfully!");
    console.log("Response:", response.data);
    movie.value = {
      title: "",
      directorId: "",
      releaseYear: "",
      description: "",
      coverArt: null,
    };
  } catch (error) {
    console.error("Error uploading movie:", error);
    alert("Failed to upload movie.");
  }
};
</script>

<style scoped>
.upload-movie {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.no-directors-warning {
  color: #dc3545;
  margin-top: 5px;
  font-size: 0.9rem;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

button:hover:not([disabled]) {
  background-color: #0056b3;
}
</style>
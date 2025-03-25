<template>
  <div>
    <Header />
    <div class="upload-tvshow">
      <h1>Upload New TV Show</h1>
      <form @submit.prevent="submitTVShow" enctype="multipart/form-data">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="tvShow.title" required />
        </div>
        <div class="form-group">
          <label for="creator">Creator:</label>
          <input type="text" id="creator" v-model="tvShow.creator" required />
        </div>
        <div class="form-group">
          <label for="releaseYear">Release Year:</label>
          <input
            type="number"
            id="releaseYear"
            v-model="tvShow.releaseYear"
            required
          />
        </div>
        <div class="form-group">
          <label for="seasons">Number of Seasons:</label>
          <input type="number" id="seasons" v-model="tvShow.seasons" required />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea
            id="description"
            v-model="tvShow.description"
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
        <button type="submit">Upload TV Show</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";

const tvShow = ref({
  title: "",
  creator: "",
  releaseYear: "",
  seasons: "",
  description: "",
  coverArt: null,
});

const handleFileUpload = (event) => {
  tvShow.value.coverArt = event.target.files[0];
};

const submitTVShow = async () => {
  const formData = new FormData();
  formData.append("title", tvShow.value.title);
  formData.append("creator", tvShow.value.creator);
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
    alert("TV Show uploaded successfully!");
    console.log("Response:", response.data);
    // Reset form
    tvShow.value = {
      title: "",
      creator: "",
      releaseYear: "",
      seasons: "",
      description: "",
      coverArt: null,
    };
  } catch (error) {
    console.error("Error uploading TV Show:", error);
    alert("Failed to upload TV Show.");
  }
};
</script>

<style scoped>
.upload-tvshow {
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
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
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

button:hover {
  background-color: #0056b3;
}
</style>

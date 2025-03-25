<template>
  <div>
    <Header />
    <div class="upload-creative">
      <h1>Upload New Creative</h1>
      <form @submit.prevent="submitCreative" enctype="multipart/form-data">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="creative.name" required />
        </div>
        <div class="form-group">
          <label for="picture">Picture:</label>
          <input
            type="file"
            id="picture"
            @change="handleFileUpload"
            accept="image/*"
            required
          />
        </div>
        <div class="form-group">
          <label for="author_book">Author of a Book:</label>
          <input
            type="checkbox"
            id="author_book"
            v-model="creative.author_book"
          />
        </div>
        <div class="form-group">
          <label for="director_movie">Director of a Movie:</label>
          <input
            type="checkbox"
            id="director_movie"
            v-model="creative.director_movie"
          />
        </div>
        <div class="form-group">
          <label for="creator_show">Creator of a Show:</label>
          <input
            type="checkbox"
            id="creator_show"
            v-model="creative.creator_show"
          />
        </div>
        <button type="submit">Upload Creative</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";

const creative = ref({
  name: "",
  picture: null,
  author_book: false,
  director_movie: false,
  creator_show: false,
});

const handleFileUpload = (event) => {
  creative.value.picture = event.target.files[0];
};

const submitCreative = async () => {
  const formData = new FormData();
  formData.append("name", creative.value.name);
  formData.append("picture", creative.value.picture);
  formData.append("author_book", creative.value.author_book);
  formData.append("director_movie", creative.value.director_movie);
  formData.append("creator_show", creative.value.creator_show);

  try {
    const response = await axios.post(
      "http://localhost:3300/creatives/upload", // Ensure this matches the backend route
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert("Creative uploaded successfully!");
    console.log("Response:", response.data);
    creative.value = {
      name: "",
      picture: null,
      author_book: false,
      director_movie: false,
      creator_show: false,
    };
  } catch (error) {
    console.error("Error uploading creative:", error);
    alert("Failed to upload creative.");
  }
};
</script>

<style scoped>
.upload-creative {
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

<template>
  <div>
    <Header />
    <div class="upload-book">
      <h1>Upload New Book</h1>
      <form @submit.prevent="submitBook" enctype="multipart/form-data">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="book.title" required />
        </div>
        <div class="form-group">
          <label for="author">Author:</label>
          <select id="author" v-model="book.authorId" required>
            <option value="" disabled>Select an author</option>
            <option v-for="author in authors" :key="author.id" :value="author.id">
              {{ author.name }}
            </option>
          </select>
          <div v-if="authors.length === 0" class="no-authors-warning">
            No authors available. Please add authors in the Upload Creative section first.
          </div>
        </div>
        <div class="form-group">
          <label for="publishYear">Publish Year:</label>
          <input
            type="number"
            id="publishYear"
            v-model="book.publishYear"
            required
          />
        </div>
        <div class="form-group">
          <label for="isbn">ISBN:</label>
          <input type="text" id="isbn" v-model="book.isbn" />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea
            id="description"
            v-model="book.description"
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
        <button type="submit" :disabled="authors.length === 0">Upload Book</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";

const authors = ref([]);
const book = ref({
  title: "",
  authorId: "",
  publishYear: "",
  isbn: "",
  description: "",
  coverArt: null,
});

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3300/creatives/authors");
    authors.value = response.data;
  } catch (error) {
    console.error("Error fetching authors:", error);
    alert("Failed to load authors list.");
  }
});

const handleFileUpload = (event) => {
  book.value.coverArt = event.target.files[0];
};

const submitBook = async () => {
  const formData = new FormData();
  formData.append("title", book.value.title);
  formData.append("authorId", book.value.authorId);
  formData.append("publishYear", book.value.publishYear);
  formData.append("isbn", book.value.isbn);
  formData.append("description", book.value.description);
  formData.append("coverArt", book.value.coverArt);

  try {
    const response = await axios.post(
      "http://localhost:3300/books/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert("Book uploaded successfully!");
    console.log("Response:", response.data);
    book.value = {
      title: "",
      authorId: "",
      publishYear: "",
      isbn: "",
      description: "",
      coverArt: null,
    };
  } catch (error) {
    console.error("Error uploading book:", error);
    alert("Failed to upload book.");
  }
};
</script>

<style scoped>
.upload-book {
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

.no-authors-warning {
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
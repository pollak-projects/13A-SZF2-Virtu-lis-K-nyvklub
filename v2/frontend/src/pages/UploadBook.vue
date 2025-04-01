<template>
  <GradientBackground>
    <div class="page-container">
      <Header />
      <div class="home-card">
        <div class="content">
          <h1>Új könyv feltöltése</h1>
          <form @submit.prevent="submitBook" enctype="multipart/form-data">
            <div class="form-group">
              <label for="title">Cím:</label>
              <input type="text" id="title" v-model="book.title" required />
            </div>
            <div class="form-group">
              <label for="author">Szerző:</label>
              <select id="author" v-model="book.authorId" required>
                <option value="" disabled>Válassz szerzőt</option>
                <option
                  v-for="author in authors"
                  :key="author.id"
                  :value="author.id"
                >
                  {{ author.name }}
                </option>
              </select>
              <div v-if="authors.length === 0" class="no-authors-warning">
                Nincs elérhető szerző. Kérlek, adj hozzá szerzőket először az Upload Creative szekcióban.
              </div>
            </div>
            <div class="form-group">
              <label for="publishYear">Kiadás éve:</label>
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
              <label for="description">Leírás:</label>
              <textarea
                id="description"
                v-model="book.description"
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
            <button type="submit" :disabled="authors.length === 0">
              Könyv feltöltése
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
    alert("A könyv sikeresen feltöltve!");
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
    alert("Nem sikerült feltölteni a könyvet.");
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

.no-authors-warning {
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

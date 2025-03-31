<template>
  <GradientBackground>
    <div class="page-container">
      <Header />
      <div class="home-card">
        <div class="content">
            <h1>Könyvek</h1>
          <ContentHolder :items="formattedBooks" />
        </div>
      </div>
    </div>
  </GradientBackground>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";
import ContentHolder from "../components/ContentHolder.vue";
import GradientBackground from "../components/GradientBackground.vue";

const books = ref([]);

const fetchBooks = async () => {
  try {
    const response = await axios.get("http://localhost:3300/books/getAllBooks");
    books.value = response.data;
  } catch (error) {
    console.error("Failed to fetch books:", error);
  }
};

const formattedBooks = computed(() =>
  books.value.map((book) => ({
    id: book.id,
    title: book.title,
    creator: book.author?.name || "Unknown",
    coverArt: book.coverArt ? `http://localhost:3300${book.coverArt}` : null,
    type: 'books'
  }))
);

onMounted(() => {
  fetchBooks();
});
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
  max-width: 1200px;
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
}

:deep(.content-holder) {
  width: 100%;
  margin: 0 auto;
}

:deep(.item) {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s;
}

:deep(.cover-art) {
  width: 100%;
  height: 250px;
  object-fit: cover;
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

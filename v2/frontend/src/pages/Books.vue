<template>
  <GradientBackground>
    <div class="page-container">
      <Header />
      <div class="home-card">
        <div class="content">
          <h1>Books</h1>
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
  }))
);

onMounted(() => {
  fetchBooks();
});
</script>

<style scoped>
.page-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-card {
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
}

.content {
  padding: 20px;
}
</style>

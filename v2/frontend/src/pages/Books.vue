<template>
  <div>
    <Header />
    <div class="home-card">
      <div class="content">
        <h1>Books</h1>
        <ContentHolder :items="formattedBooks" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import Header from '../components/Header.vue';
import ContentHolder from '../components/ContentHolder.vue';
import placeholderImage from '../assets/images/placeholder.png';

const books = ref([]);

const fetchBooks = async () => {
  try {
    const response = await axios.get('http://localhost:3300/books/getAllBooks');
    console.log('Books fetched:', response.data);
    books.value = response.data;
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }
};

const formattedBooks = computed(() =>
  books.value.map(book => ({
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
.home-card {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
}

.content {
  padding: 20px;
}
</style>
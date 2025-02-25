<script setup>
import { ref, onMounted } from 'vue';
import BookCard from '../components/BookCard.vue';

const books = ref([]);
const selectedBook = ref(null);

const fetchBooks = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/books'); // Backend API hívás
    books.value = await response.json();
  } catch (error) {
    console.error('Hiba a könyvek betöltésekor:', error);
  }
};

onMounted(fetchBooks);
</script>

<template>
  <div class="container">
    <h1>Legújabb könyvek</h1>
    <div class="book-list">
      <BookCard v-for="book in books" :key="book.id" :book="book" @select="selectedBook = $event" />
    </div>

    <div v-if="selectedBook" class="book-detail">
      <h2>{{ selectedBook.title }}</h2>
      <img :src="selectedBook.cover" :alt="selectedBook.title" />
      <p><strong>Szerző:</strong> {{ selectedBook.author }}</p>
      <p><strong>Műfaj:</strong> {{ selectedBook.genre }}</p>
      <p><strong>Kiadási év:</strong> {{ selectedBook.year }}</p>
      <p><strong>Értékelés:</strong> {{ selectedBook.rating }} ☆</p>
      <p><strong>Leírás:</strong> {{ selectedBook.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.book-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.book-detail {
  margin-top: 20px;
  padding: 20px;
  max-width: 600px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.book-detail img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>

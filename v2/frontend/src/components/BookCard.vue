<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

defineProps(['book']);
defineEmits(['select']);

const books = ref([]);

const fetchBooks = async () => {
  try {
    const response = await axios.get('/getAllBooks');
    books.value = response.data;
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }
};

onMounted(() => {
  fetchBooks();
});
</script>

<template>
  <div>
    <h1>Books</h1>
    <ul>
      <li v-for="book in books" :key="book.id">{{ book.title }}</li>
    </ul>
  </div>
  <div class="book-card" @click="$emit('select', book)">
    <img :src="book.cover" :alt="book.title" />
    <div class="book-info">
      <h3>{{ book.title }}</h3>
      <p>{{ book.author }}</p>
      <span>{{ book.rating }} ☆</span>
    </div>
  </div>
</template>

<style scoped>
.book-card {
  width: 180px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background: white;
}
.book-card:hover {
  transform: scale(1.05);
}
.book-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.book-info {
  padding: 10px;
  text-align: center;
}
</style>

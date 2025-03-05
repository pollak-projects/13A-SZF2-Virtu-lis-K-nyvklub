<template>
  <div>
    <Header />
    <div class="home-card">
      <div class="content">
        <ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from '../components/Header.vue';

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

onMounted(() => {
  fetchBooks();
});
</script>

<style scoped>
@font-face {
  font-family: 'Simple Print';
  src: url('..\assets\fonts\simple-print_bold.ttf') format('woff2');
}

.home-card {
  width: 100%;
  max-width: 600px;
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
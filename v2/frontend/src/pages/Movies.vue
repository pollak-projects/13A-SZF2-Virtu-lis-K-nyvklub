<template>
  <div>
    <Header />
    <div class="home-card">
      <div class="content">
        <h1>Movies</h1>
        <ContentHolder :items="formattedMovies" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import Header from '../components/Header.vue';
import ContentHolder from '../components/ContentHolder.vue';

const movies = ref([]);

const fetchMovies = async () => {
  try {
    const response = await axios.get('http://localhost:3300/movies/getAllMovies');
    console.log('Movies fetched:', response.data);
    movies.value = response.data;
  } catch (error) {
    console.error('Failed to fetch movies:', error);
  }
};

const formattedMovies = computed(() =>
  movies.value.map(movie => ({
    id: movie.id,
    title: movie.title,
    creator: movie.director?.name || 'Unknown',
    coverArt: movie.coverArt || null,
  }))
);

onMounted(() => {
  fetchMovies();
});
</script>

<style scoped>
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
<template>
  <div>
    <Header />
    <div class="home-card">
      <div class="content">
        <h1>TV Shows</h1>
        <ContentHolder :items="formattedSeries" />
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

const tvShows = ref([]);

const fetchTVShows = async () => {
  try {
    const response = await axios.get('http://localhost:3300/tvshows/getAllTVShows');
    console.log('TV Shows fetched:', response.data);
    tvShows.value = response.data;
  } catch (error) {
    console.error('Failed to fetch TV Shows:', error);
  }
};

const formattedSeries = computed(() =>
  tvShows.value.map(show => ({
    id: show.id,
    title: show.title,
    creator: show.creator?.name || "Unknown",
    coverArt: show.coverArt ? `http://localhost:3300${show.coverArt}` : null,
  }))
);

onMounted(() => {
  fetchTVShows();
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
<template>
  <div>
    <Header />
    <div class="home-card">
      <div class="content">
        <h1>Series</h1>
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

const seriesList = ref([]);

const fetchSeries = async () => {
  try {
    const response = await axios.get('http://localhost:3300/tvshows/getAllTVShows');
    console.log('Series fetched:', response.data);
    seriesList.value = response.data;
  } catch (error) {
    console.error('Failed to fetch series:', error);
  }
};

const formattedSeries = computed(() =>
  seriesList.value.map(series => ({
    id: series.id,
    title: series.title,
    creator: series.creator?.name || 'Unknown', 
    coverArt: series.coverArt || null, 
  }))
);

onMounted(() => {
  fetchSeries();
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
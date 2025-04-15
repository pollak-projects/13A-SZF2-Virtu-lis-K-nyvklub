<template>
  <GradientBackground>
    <div class="detail-page-container">
      <Header />
      <div v-if="loading" class="loading">
        <p>Betöltés...</p>
      </div>
      <div v-else-if="error" class="error">
        <p>{{ error }}</p>
      </div>
      <div v-else class="detail-card">
        <MediaDetailCard 
          :item="selectedItem" 
          :type="mediaType" 
        />
        <MediaRating 
          v-if="isAuthenticated" 
          :type="mediaType" 
          :itemId="mediaId" 
        />
        <div v-else class="login-prompt">
          <p>A értékeléshez <router-link to="/login">jelentkezz be</router-link></p>
        </div>
      </div>
    </div>
  </GradientBackground>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Header from '../components/Header.vue';
import MediaDetailCard from '../components/MediaDetailCard.vue';
import GradientBackground from '../components/GradientBackground.vue';
import MediaRating from '../components/MediaRating.vue';

const route = useRoute();
const selectedItem = ref({});
const loading = ref(true);
const error = ref('');

// Get media type and ID from route params
const mediaType = computed(() => route.params.type);
const mediaId = computed(() => route.params.id);

// Add this computed property
const isAuthenticated = computed(() => {
  return !!localStorage.getItem('token');
});

// Fetch the media item data based on type and ID
const fetchMediaItem = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    let endpoint = '';
    
    if (mediaType.value === 'books') {
      endpoint = `http://localhost:3300/books/getBookById/${mediaId.value}`;
    } else if (mediaType.value === 'movies') {
      endpoint = `http://localhost:3300/movies/getMovieById/${mediaId.value}`;
    } else if (mediaType.value === 'series') {
      endpoint = `http://localhost:3300/tvshows/getTVShowById/${mediaId.value}`;
    } else {
      throw new Error('Ismeretlen médiatípus');
    }
    
    const response = await axios.get(endpoint);
    
    // Format the coverArt path if it exists
    if (response.data.coverArt && !response.data.coverArt.startsWith('http')) {
      response.data.coverArt = `http://localhost:3300${response.data.coverArt}`;
    }
    
    // Format actor pictures if they exist
    if (response.data.movieActors) {
      response.data.movieActors.forEach(actorItem => {
        if (actorItem.actor.picture && !actorItem.actor.picture.startsWith('http')) {
          actorItem.actor.picture = `http://localhost:3300${actorItem.actor.picture}`;
        }
      });
    }
    
    if (response.data.tvShowActors) {
      response.data.tvShowActors.forEach(actorItem => {
        if (actorItem.actor.picture && !actorItem.actor.picture.startsWith('http')) {
          actorItem.actor.picture = `http://localhost:3300${actorItem.actor.picture}`;
        }
      });
    }
    
    selectedItem.value = response.data;
  } catch (error) {
    console.error('Error fetching media item:', error);
    error.value = 'Hiba történt az adatok betöltése közben. Kérjük, próbáld újra később!';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchMediaItem();
});
</script>

<style scoped>
.detail-page-container {
  width: 100%;
  position: relative;
  padding-top: 200px; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

:deep(.header-container) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

:deep(.header) {
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: auto;
  min-height: 200px;
  overflow: visible;
  margin: 0 auto;
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

.loading, .error, .detail-card {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 40px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
  position: relative;
  z-index: 5;
}

.loading, .error {
  padding: 40px;
  text-align: center;
}

.error {
  color: #f44336;
}

/* Add this to your existing styles */
.login-prompt {
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.login-prompt a {
  color: #00767F;
  text-decoration: none;
  font-weight: bold;
}

.login-prompt a:hover {
  text-decoration: underline;
}
</style>
<template>
  <GradientBackground>
    <div class="page-container">
      <Header />
      <div class="home-card">
        <div class="content">
          <h1>{{ isOwnProfile ? 'Kedvenceim' : `${userData.name} kedvencei` }}</h1>
          
          <div v-if="loading" class="loading-container">
            <div class="loading-spinner"></div>
            <p>Kedvencek betöltése...</p>
          </div>
          
          <div v-else-if="error" class="error-message">
            {{ error }}
          </div>
          
          <div v-else-if="favorites.length === 0" class="no-favorites">
            <p>Még nincsenek kedvencek.</p>
          </div>
          
          <div v-else class="content-holder">
            <router-link 
              v-for="item in favorites" 
              :key="`${item.type}-${item.id}`"
              :to="`/${item.type}/${item.id}`" 
              class="item"
            >
              <img 
                :src="getFormattedCoverArt(item.coverArt)" 
                alt="Cover Art" 
                class="cover-art"
                @error="handleImageError"
              />
              <h3 class="title">{{ item.title }}</h3>
              <p class="creator">{{ item.creator }}</p>
              <div :class="['media-type-badge', item.type]">
                {{ formatMediaType(item.type) }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </GradientBackground>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import Header from "../components/Header.vue";
import GradientBackground from "../components/GradientBackground.vue";
import placeholderImage from '../assets/images/placeholder.png';

const router = useRouter();
const route = useRoute();
const favorites = ref([]);
const userData = ref({});
const loading = ref(true);
const error = ref("");

// Check if viewing own profile or another user's profile
const isOwnProfile = computed(() => {
  return route.params.id === localStorage.getItem("user_id");
});

// Get the user ID from route params
const getUserId = () => {
  return route.params.id || localStorage.getItem("user_id");
};

// Format media type names
const formatMediaType = (type) => {
  const types = {
    'books': 'Könyv',
    'movies': 'Film',
    'series': 'Sorozat'
  };
  return types[type] || type;
};

// Handle image loading error
const handleImageError = (e) => {
  e.target.src = placeholderImage;
};

// Add this helper function to format cover art URLs
const getFormattedCoverArt = (coverArt) => {
  if (!coverArt) return placeholderImage;
  
  // If it's already a full URL, return it
  if (coverArt.startsWith('http')) return coverArt;
  
  // Otherwise prepend the server URL
  return `http://localhost:3300${coverArt}`;
};

// Fetch all favorites for the user
const fetchFavorites = async () => {
  loading.value = true;
  error.value = "";
  
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
      router.push("/login");
      return;
    }
    
    const userId = getUserId();
    
    const response = await axios.get(`http://localhost:3300/favorites/user/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    favorites.value = response.data;
    
    // Also fetch user data for the header
    const userResponse = await axios.get(
      userId === localStorage.getItem("user_id") 
        ? "http://localhost:3300/auth/user"
        : `http://localhost:3300/profile/getById/${userId}`, 
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    
    userData.value = userResponse.data;
    
  } catch (err) {
    console.error("Error fetching favorites:", err);
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      router.push("/login");
    } else if (err.response?.status === 403) {
      error.value = "Nincs jogosultsága megtekinteni ezeket a kedvenceket.";
    } else if (err.response?.status === 404) {
      error.value = "A keresett felhasználó nem található.";
    } else {
      error.value = "Nem sikerült betölteni a kedvenceket. Kérjük, próbálja újra később.";
    }
  } finally {
    loading.value = false;
  }
};

// Load favorites when component is mounted
onMounted(() => {
  fetchFavorites();
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
  margin-bottom: 30px;
  text-align: center;
  color: #333;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #FFA915;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  color: #FA5E00;
  text-align: center;
  padding: 20px;
  font-weight: bold;
}

.no-favorites {
  text-align: center;
  padding: 40px;
  color: #666;
}

/* ContentHolder styling */
.content-holder {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

@media (min-width: 768px) {
  .content-holder {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .content-holder {
    grid-template-columns: repeat(5, 1fr);
  }
}

.item {
  text-align: center;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 10px;
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}

.item:hover {
  transform: scale(1.02);
}

.cover-art {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.title {
  font-size: 1.2em;
  margin: 10px 0 5px 0;
  color: #333;
}

.creator {
  font-size: 0.9em;
  color: gray;
  margin-bottom: 25px;
}

.media-type-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  color: white;
}

.media-type-badge.books {
  background-color: #00767F;
}

.media-type-badge.movies {
  background-color: #FA5E00;
}

.media-type-badge.series {
  background-color: #FFA915;
}

/* Header styling from other components */
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
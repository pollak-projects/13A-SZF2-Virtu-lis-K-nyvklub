<template>
  <GradientBackground>
    <div class="page-container">
      <Header />
      <div class="home-card">
        <div class="content">
          <h1>{{ isOwnProfile ? 'Saját értékelések' : `${userData.name} értékelései` }}</h1>
          
          <div v-if="loading" class="loading-container">
            <div class="loading-spinner"></div>
            <p>Értékelések betöltése...</p>
          </div>
          
          <div v-else-if="error" class="error-message">
            {{ error }}
          </div>
          
          <div v-else-if="reviews.length === 0" class="no-reviews">
            <p>Még nincsenek értékelések.</p>
          </div>
          
          <div v-else class="reviews-list">
            <div v-for="review in reviews" :key="review.id" class="review-card">
              <div class="review-media">
                <img :src="getMediaCoverUrl(review)" :alt="review.mediaTitle" class="media-cover" @error="handleImageError" />
              </div>
              <div class="review-content">
                <div class="review-header">
                  <h2 class="media-title">{{ review.mediaTitle }}</h2>
                  <div class="review-title">{{ review.title }}</div>
                </div>
                <div class="review-rating">
                  <span v-for="i in 5" :key="i" class="star" :class="{ 'filled': i <= review.rating }">★</span>
                  <span v-if="review.favorite" class="heart-display filled">♥</span>
                </div>
                <div class="review-text">{{ review.content }}</div>
                <div class="review-date">{{ formatDate(review.createdAt) }}</div>
              </div>
            </div>
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

const router = useRouter();
const route = useRoute();
const reviews = ref([]);
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

// Format date using Hungarian locale
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('hu-HU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date);
};

// Get cover image URL based on media type
const getMediaCoverUrl = (review) => {
  if (!review.mediaType || !review.coverArt) return null;
  
  // If coverArt is already a full URL
  if (review.coverArt.startsWith('http')) return review.coverArt;
  
  // Fix extension mismatch (.jpg -> .png)
  const fixedPath = review.coverArt.replace(/\.jpg$/, '.png');
  
  // Prepare the path
  const path = fixedPath.startsWith('/') ? fixedPath : `/${fixedPath}`;
  
  // Return the full URL
  return `http://localhost:3300${path}`;
};

// Handle image loading error
const handleImageError = (e) => {
  e.target.src = "/src/assets/images/placeholder.png"; // Replace with a placeholder image
};

// Fetch all reviews for the user
const fetchReviews = async () => {
  loading.value = true;
  error.value = "";
  
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
      router.push("/login");
      return;
    }
    
    const userId = getUserId();
    
    const response = await axios.get(`http://localhost:3300/reviews/user/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    reviews.value = response.data;
    
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
    console.error("Error fetching reviews:", err);
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      router.push("/login");
    } else if (err.response?.status === 403) {
      error.value = "Nincs jogosultsága megtekinteni ezeket az értékeléseket.";
    } else if (err.response?.status === 404) {
      error.value = "A keresett felhasználó nem található.";
    } else {
      error.value = "Nem sikerült betölteni az értékeléseket. Kérjük, próbálja újra később.";
    }
  } finally {
    loading.value = false;
  }
};

// Load reviews when component is mounted
onMounted(() => {
  fetchReviews();
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
  max-width: 800px;
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

.no-reviews {
  text-align: center;
  padding: 40px;
  color: #666;
}

.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.review-card {
  display: flex;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.review-media {
  flex: 0 0 130px;
}

.media-cover {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.review-content {
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.review-header {
  margin-bottom: 10px;
}

.media-title {
  font-size: 18px;
  margin: 0 0 5px 0;
  color: #00767F;
}

.review-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.review-rating {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.star {
  font-size: 20px;
  color: #ddd;
  margin-right: 2px;
}

.star.filled {
  color: #FFA915;
}

.heart-display {
  font-size: 20px;
  color: #ddd;
  margin-left: 5px;
}

.heart-display.filled {
  color: #FA5E00;
}

.review-text {
  margin-bottom: 10px;
  line-height: 1.5;
  color: #444;
}

.review-date {
  color: #666;
  font-size: 14px;
  margin-top: auto;
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

/* Responsive design */
@media (max-width: 600px) {
  .review-card {
    flex-direction: column;
  }
  
  .review-media {
    flex: 0 0 auto;
  }
  
  .media-cover {
    height: 180px;
  }
}
</style>
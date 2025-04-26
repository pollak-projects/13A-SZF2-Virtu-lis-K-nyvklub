<template>
  <div class="rating-container">
    <h3 class="rating-title">Értékelés és vélemény</h3>
    
    <!-- Combined Star Rating and Favorite Toggle -->
    <div class="rating-row">
      <div class="star-rating">
        <span class="star-label">Értékelés:</span>
        <div class="stars">
          <span 
            v-for="i in 5" 
            :key="i" 
            class="star" 
            :class="{ 'filled': i <= rating }"
            @click="setRating(i)"
          >★</span>
        </div>
      </div>
      
      <!-- Heart moved next to stars -->
      <div class="favorite-toggle">
        <span 
          class="heart" 
          :class="{ 'filled': isFavorite }"
          @click="toggleFavorite"
          title="Kedvenc"
        >♥</span>
      </div>
    </div>
    
    <!-- Review Form -->
    <div class="review-form">
      <div class="form-group">
        <label for="review-title">Cím:</label>
        <input 
          id="review-title" 
          type="text" 
          v-model="reviewTitle" 
          placeholder="Értékelésed címe"
          class="light-input"
        />
      </div>
      
      <div class="form-group">
        <label for="review-content">Vélemény:</label>
        <textarea 
          id="review-content" 
          v-model="reviewContent" 
          placeholder="Írd le a véleményed..."
          rows="5"
          class="light-input"
        ></textarea>
      </div>
      
      <button 
        class="submit-button" 
        @click="submitRating" 
        :disabled="!isValid || isSubmitting"
      >
        {{ isSubmitting ? 'Küldés...' : existingRating ? 'Értékelés frissítése' : 'Értékelés küldése' }}
      </button>
      
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </div>

    <!-- Reviews section - add after the review form -->
    <div class="reviews-section">
      <h3 class="reviews-title">Értékelések</h3>
      
      <div v-if="loading" class="loading-reviews">
        Értékelések betöltése...
      </div>
      
      <div v-else-if="!reviews.length" class="no-reviews">
        Még nincsenek értékelések. Legyél Te az első!
      </div>
      
      <div v-else class="reviews-list">
        <div v-for="review in reviews" :key="review.id" class="review-card">
          <div class="review-header">
            <h4 class="review-title">{{ review.title }}</h4>
            <div class="review-rating">
              <span v-for="i in 5" :key="i" class="star-display" 
                    :class="{ 'filled': i <= review.rating }">★</span>
              <span v-if="review.favorite" class="heart-display filled">♥</span>
            </div>
          </div>
          <div class="review-user">
            {{ review.user?.name || "Felhasználó" }} · {{ formatDate(review.createdAt) }}
          </div>
          <div class="review-content">
            {{ review.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: value => ['books', 'movies', 'series'].includes(value)
  },
  itemId: {
    type: [Number, String],
    required: true
  }
});

// State
const rating = ref(0);
const isFavorite = ref(false);
const reviewTitle = ref('');
const reviewContent = ref('');
const isSubmitting = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const existingRating = ref(null);

const isValid = computed(() => {
  return rating.value > 0 && reviewTitle.value.trim().length > 0;
});


const getEndpoint = () => {
  const typeMap = {
    'books': 'book',
    'movies': 'movie',
    'series': 'tvshow'
  };
  return typeMap[props.type];
};

const fetchExistingRating = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return;
    
    const endpoint = getEndpoint();
    const response = await axios.get(`http://localhost:3300/ratings/${endpoint}/${props.itemId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    if (response.data) {
      existingRating.value = response.data;
      rating.value = response.data.rating;
      isFavorite.value = response.data.favorite;
      reviewTitle.value = response.data.title;
      reviewContent.value = response.data.content;
    }
  } catch (error) {
    console.error('Error fetching existing rating:', error);
  }
};

const setRating = (value) => {
  rating.value = value;
};

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const submitRating = async () => {
  if (!isValid.value) return;
  
  try {
    isSubmitting.value = true;
    errorMessage.value = '';
    successMessage.value = '';
    
    const token = localStorage.getItem('token');
    if (!token) {
      errorMessage.value = 'A értékeléshez bejelentkezés szükséges.';
      return;
    }
    
    const endpoint = getEndpoint();
    const payload = {
      mediaId: parseInt(props.itemId),
      rating: rating.value,
      favorite: isFavorite.value,
      title: reviewTitle.value,
      content: reviewContent.value
    };
    
    let response;
    if (existingRating.value) {
      response = await axios.put(
        `http://localhost:3300/ratings/${endpoint}/${props.itemId}`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } else {
      response = await axios.post(
        `http://localhost:3300/ratings/${endpoint}`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    }
    
    successMessage.value = existingRating.value 
      ? 'Értékelésed sikeresen frissítve!'
      : 'Értékelésed sikeresen elküldve!';
    
    existingRating.value = response.data;
    
    fetchReviews();
    
  } catch (error) {
    console.error('Error submitting rating:', error);
    errorMessage.value = 'Hiba történt az értékelés elküldése során. Kérjük, próbáld újra.';
  } finally {
    isSubmitting.value = false;
  }
};

const reviews = ref([]);
const loading = ref(true);

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('hu-HU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date);
};

const fetchReviews = async () => {
  try {
    loading.value = true;
    const endpoint = getEndpoint();
    const response = await axios.get(`http://localhost:3300/ratings/${endpoint}/${props.itemId}/all`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    
    reviews.value = response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchExistingRating();
  fetchReviews();
});

console.log('Received media type:', props.type);
console.log('Endpoint used:', getEndpoint());
</script>

<style scoped>
.rating-container {
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.rating-title {
  font-size: 18px;
  margin-bottom: 20px;
  color: #00767F;
  text-align: center;
}

.rating-row {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.star-rating {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.star-label {
  font-weight: bold;
  margin-right: 10px;
  min-width: 80px;
}

.stars {
  display: flex;
}

.star {
  font-size: 28px;
  color: #ddd;
  cursor: pointer;
  transition: color 0.2s;
  user-select: none;
  margin-right: 5px;
}

.star:hover, .star.filled {
  color: #FFA915;
}

.favorite-toggle {
  margin-left: 5px;
}

.heart {
  font-size: 28px;
  color: #ddd;
  cursor: pointer;
  transition: color 0.2s;
  user-select: none;
}

.heart.filled {
  color: #FA5E00;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #444;
}

.light-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  background-color: white;
  color: #333;
  transition: border-color 0.3s;
  line-height: 1.5;
  box-sizing: border-box;
  min-height: 44px;
}

.light-input:focus {
  border-color: #00767F;
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 118, 127, 0.2);
}

textarea.light-input {
  resize: vertical;
  min-height: 100px;
}

.submit-button {
  font-family: "Simple Print", sans-serif;
  font-weight: bold;
  padding: 12px 24px;
  background-color: #00767F;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: background-color 0.3s, transform 0.2s;
}

.submit-button:hover:not(:disabled) {
  background-color: #005a60;
  transform: translateY(-2px);
}

.submit-button:active {
  transform: translateY(1px);
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: #FA5E00;
  margin-top: 10px;
}

.success-message {
  color: #00767F;
  margin-top: 10px;
}

.reviews-section {
  margin-top: 40px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
}

.reviews-title {
  font-size: 18px;
  margin-bottom: 20px;
  color: #00767F;
  text-align: center;
}

.no-reviews {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 20px 0;
}

.loading-reviews {
  text-align: center;
  color: #666;
  padding: 20px 0;
}

.review-card {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border-left: 4px solid #FFA915;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.review-title {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.review-rating {
  display: flex;
  align-items: center;
}

.star-display {
  font-size: 20px;
  color: #ddd;
  margin-right: 2px;
}

.star-display.filled {
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

.review-user {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.review-content {
  font-size: 15px;
  line-height: 1.5;
  color: #444;
  white-space: pre-line;
}
</style>
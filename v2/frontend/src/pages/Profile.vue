<template>
  <GradientBackground>
    <div class="profile-page-container">
      <Header />
      <div class="profile-card">
        <div v-if="loading" class="loading">
          <p>Betöltés...</p>
        </div>
        <div v-else-if="error" class="error">
          <p>{{ error }}</p>
        </div>
        <div v-else class="profile-content">
          <div class="profile-header">
            <div class="profile-image-container">
              <img 
                :src="profileImage || '/src/assets/images/placeholder.png'" 
                alt="Profile" 
                class="profile-image" 
              />
            </div>
            <div class="profile-info">
              <h1 class="username">{{ user.username }}</h1>
              <p v-if="user.name" class="real-name">{{ user.name }}</p>
              <p class="email">{{ user.email }}</p>
            </div>
          </div>
          
          <div class="profile-stats">
            <div class="stat-box">
              <h3 class="stat-value">{{ user.bookReviews?.length || 0 }}</h3>
              <p class="stat-label">Könyv értékelés</p>
            </div>
            <div class="stat-box">
              <h3 class="stat-value">{{ user.movieReviews?.length || 0 }}</h3>
              <p class="stat-label">Film értékelés</p>
            </div>
            <div class="stat-box">
              <h3 class="stat-value">{{ user.tvReviews?.length || 0 }}</h3>
              <p class="stat-label">Sorozat értékelés</p>
            </div>
          </div>
          
          <div class="profile-actions">
            <button class="edit-button">Profil szerkesztése</button>
            <button class="logout-button" @click="handleLogout">Kijelentkezés</button>
          </div>
        </div>
      </div>
    </div>
  </GradientBackground>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Header from '../components/Header.vue';
import GradientBackground from '../components/GradientBackground.vue';

const router = useRouter();
const user = ref({});
const loading = ref(true);
const error = ref('');
const profileImage = ref(null);

const fetchUserProfile = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      throw new Error('User not authenticated');
    }
    
    const response = await axios.get(`/users/getById/${userId}`);
    user.value = response.data;
    
    // If user has a profile image, format the URL
    if (user.value.profileImage && !user.value.profileImage.startsWith('http')) {
      profileImage.value = `http://localhost:3300${user.value.profileImage}`;
    }
  } catch (err) {
    console.error('Error fetching profile:', err);
    error.value = 'Hiba történt a profil betöltése közben. Kérjük, próbáld újra.';
  } finally {
    loading.value = false;
  }
};

const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user_id');
  router.push('/login');
};

onMounted(() => {
  fetchUserProfile();
});
</script>

<style scoped>
.profile-page-container {
  width: 100%;
  position: relative;
  padding-top: 200px;
  min-height: 100vh;
  z-index: 1;
}

.profile-card {
  width: 100%;
  max-width: 800px;
  margin: 20px auto 40px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
  position: relative;
  z-index: 5;
}

.profile-content {
  padding: 30px;
}

.profile-header {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  align-items: center;
}

.profile-image-container {
  flex-shrink: 0;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #FA5E00; /* Orange from MainColors.txt */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-info {
  flex-grow: 1;
}

.username {
  font-size: 28px;
  color: #333;
  margin-bottom: 8px;
  border-bottom: 2px solid #FA5E00; /* Orange from MainColors.txt */
  padding-bottom: 8px;
  display: inline-block;
}

.real-name {
  font-size: 18px;
  color: #555;
  margin-bottom: 8px;
}

.email {
  font-size: 16px;
  color: #777;
}

.profile-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 15px;
}

.stat-box {
  flex: 1;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.stat-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #00767F; /* Blue from MainColors.txt */
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.profile-actions {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.edit-button, .logout-button {
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  flex: 1;
}

.edit-button {
  background-color: #FFA915; /* Yellow from MainColors.txt */
  color: white;
}

.logout-button {
  background-color: #FA5E00; /* Orange from MainColors.txt */
  color: white;
}

.edit-button:hover, .logout-button:hover {
  transform: translateY(-2px);
}

.loading, .error {
  padding: 40px;
  text-align: center;
}

.error {
  color: #f44336;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .profile-stats {
    flex-direction: column;
  }
  
  .profile-actions {
    flex-direction: column;
  }
}
</style>
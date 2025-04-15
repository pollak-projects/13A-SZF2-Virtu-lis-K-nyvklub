<template>
  <GradientBackground>
    <div class="page-container">
    <Header />
    <div class="home-card">
      <div class="content">
      <h1>Felhasználói Profil</h1>
      
      <!-- Betöltési állapot megjelenítése -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Adatok betöltése...</p>
      </div>
      
      <!-- Hiba üzenet megjelenítése -->
      <div v-else-if="error" class="error-message">
        {{ error }}
      </div>
      
      <!-- Felhasználói profil adatok megjelenítése -->
      <div v-else class="profile-container">
        <!-- ========================== Profil fejléc ========================== -->
        <div class="profile-header">
        <div class="avatar-container">
          <div class="avatar" v-if="!userData.avatar">
          {{ userInitials }}
          </div>
          <div class="avatar" v-else>
          <img 
            :src="getProfileImageUrl(userData.avatar)" 
            alt="Profile picture" 
            class="profile-image"
            @error="handleImageError"
          />
          </div>
        </div>
        <div class="user-name">
          <h2>{{ userData.name }}</h2>
          <p class="username">@{{ userData.username }}</p>
        </div>
        </div>
        
        <!-- ========================== Részletes felhasználói adatok ========================== -->
        <div class="profile-details">
        <div class="detail-row">
          <span class="detail-label">Email:</span>
          <span class="detail-value">{{ userData.email }}</span>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Regisztráció dátuma:</span>
          <span class="detail-value">{{ formatDate(userData.createdAt) }}</span>
        </div>
        </div>
        
        <!-- ========================== Felhasználói statisztikák ========================== -->
        <div class="stats-container">
        <div class="stat-card" @click="navigateToReviews" style="cursor: pointer;">
          <span class="stat-value">{{ stats.reviews || 0 }}</span>
          <span class="stat-label">Értékelés</span>
        </div>
        <div class="stat-card" @click="navigateToFavorites" style="cursor: pointer;">
          <span class="stat-value">{{ stats.favorites || 0 }}</span>
          <span class="stat-label">Kedvenc</span>
        </div>
        </div>
        
        <!-- ========================== Műveleti gombok ========================== -->
        <div class="action-buttons" v-if="isOwnProfile">>
          <button class="edit-button" @click="showEditForm = true" v-if="!showEditForm">
            Profil szerkesztése
          </button>
          <button class="logout-button" @click="handleLogout">
            Kijelentkezés
          </button>
        </div>
        
        <!-- ========================== Profil szerkesztő űrlap ========================== -->
        <div v-if="showEditForm && isOwnProfile" class="edit-form-container">
          <h3>Profil szerkesztése</h3>
          <form @submit.prevent="updateProfile">
            <!-- Add this new profile picture upload section -->
            <div class="form-group">
              <label for="avatar">Profilkép:</label>
              <div class="avatar-upload-container">
                <div class="avatar-preview">
                  <img v-if="avatarPreview" :src="avatarPreview" alt="Avatar preview" class="preview-image" />
                  <div v-else class="current-avatar">
                    <img v-if="userData.avatar" :src="getProfileImageUrl(userData.avatar)" alt="Current profile" />
                    <div v-else class="avatar-initials">{{ userInitials }}</div>
                  </div>
                </div>
                <input 
                  type="file" 
                  id="avatar" 
                  @change="handleAvatarChange" 
                  accept="image/*"
                  class="light-input"
                />
              </div>
            </div>
            
            <!-- Existing form fields -->
            <div class="form-group">
              <label for="name">Teljes név:</label>
              <input type="text" id="name" v-model="editForm.name" required />
            </div>
            
            <div class="form-group">
              <label for="email">Email cím:</label>
              <input type="email" id="email" v-model="editForm.email" required />
            </div>
            
            <div class="form-group">
              <label for="password">Új jelszó (csak ha változtatni szeretné):</label>
              <input type="password" id="password" v-model="editForm.password" />
            </div>
            
            <div class="form-actions">
              <button type="submit" class="save-button" :disabled="isSubmitting">
                {{ isSubmitting ? 'Mentés...' : 'Mentés' }}
              </button>
              <button type="button" class="cancel-button" @click="cancelEdit">
                Mégse
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
    </div>
  </GradientBackground>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import axios from "axios";
  import Header from "../components/Header.vue";
  import GradientBackground from "../components/GradientBackground.vue";
  
  // ========================== Setup ==========================
  const router = useRouter();
  const route = useRoute();
  const userData = ref({});
  const loading = ref(true);
  const error = ref("");
  const stats = ref({});
  const showEditForm = ref(false);
  const isSubmitting = ref(false);
  const isOwnProfile = ref(false);
  const avatarFile = ref(null);
  const avatarPreview = ref(null);
  
  // Szerkesztő űrlap állapot
  const editForm = ref({
  name: "",
  email: "",
  password: ""
  });
  
  // ========================== Computed Properties ==========================
  // Felhasználói monogram generálása a profilképhez
  const userInitials = computed(() => {
  if (!userData.value.name) return "?";
  return userData.value.name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
  });
  
  // ========================== Helper Functions ==========================
  // Felhasználói szerepkör formázása olvasható formára
  const formatRole = (role) => {
  const roles = {
    'USER': 'Felhasználó',
    'ADMIN': 'Adminisztrátor',
    'MODERATOR': 'Moderátor'
  };
  return roles[role] || role;
  };
  
  // Dátum formázása magyar nyelvi beállítások szerint
  const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('hu-HU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date);
  };
  
  // Get user ID from route or use current user's profile
  const getUserIdFromRoute = () => {
    // If URL has a user ID parameter, use it
    if (route.params.id) {
      return route.params.id;
    }
    
    // Otherwise use current user's ID from localStorage
    return localStorage.getItem("user_id");
  };
  
  // ========================== Data Fetching ==========================
  // Felhasználói adatok lekérése a szervertől
  const fetchUserData = async () => {
  loading.value = true;
  error.value = "";
  
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
    router.push("/login");
    return;
    }
    
    const userId = getUserIdFromRoute();
    const currentUserId = localStorage.getItem("user_id");
    

    isOwnProfile.value = userId === currentUserId;
    
    const endpoint = isOwnProfile.value 
      ? "http://localhost:3300/auth/user"
      : `http://localhost:3300/profile/getById/${userId}`;
    
    const response = await axios.get(endpoint, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
    });
    
    userData.value = response.data;

    
    if (!isOwnProfile.value) {
      // Hide private information when viewing other profiles
      userData.value.email = ""; // Or "Nem elérhető" or any other placeholder
    }
    
    console.log("User avatar from API:", userData.value.avatar);
    
    // Only set form values if it's the user's own profile
    if (isOwnProfile.value) {
      editForm.value.name = response.data.name || response.data.username || '';
      editForm.value.email = response.data.email || '';
    }
    
    // Statisztikák kiszámítása
    stats.value = {
      reviews: (response.data.bookRatings?.length || 0) + 
               (response.data.movieRatings?.length || 0) + 
               (response.data.tvShowRatings?.length || 0),
      favorites: (response.data.bookRatings?.filter(r => r.favorite)?.length || 0) + 
                 (response.data.movieRatings?.filter(r => r.favorite)?.length || 0) + 
                 (response.data.tvShowRatings?.filter(r => r.favorite)?.length || 0),
      comments: 0
    };
  } catch (err) {
    console.error("Error fetching user data:", err);
    if (err.response?.status === 401) {
    // Érvénytelen token esetén kijelentkeztetés
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_id");
    router.push("/login");
    } else if (err.response?.status === 403) {
      error.value = "Nincs jogosultsága megtekinteni ezt a profilt.";
    } else if (err.response?.status === 404) {
      error.value = "A keresett felhasználó nem található.";
    } else {
    error.value = "Nem sikerült betölteni a felhasználói adatokat. Kérjük, próbálja újra később.";
    }
  } finally {
    loading.value = false;
  }
  };
  
  // Watch for route changes to reload data when URL changes
  watch(() => route.params.id, () => {
    fetchUserData();
  });
  
  // ========================== User Actions ==========================
  // Profil adatok frissítése
  const updateProfile = async () => {
  isSubmitting.value = true;
  
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
    router.push("/login");
    return;
    }
    
    // Use FormData to handle file uploads
    const formData = new FormData();
    formData.append("name", editForm.value.name);
    formData.append("email", editForm.value.email);
    
    if (editForm.value.password?.trim()) {
      formData.append("password", editForm.value.password);
    }
    
    if (avatarFile.value) {
      formData.append("avatar", avatarFile.value);
    }
    
    const response = await axios.put(
      "http://localhost:3300/auth/profile",
      formData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    
    // Update local user data
    userData.value.name = editForm.value.name;
    userData.value.email = editForm.value.email;
    
    // Update avatar if a new one was uploaded
    if (response.data.avatar) {
      userData.value.avatar = response.data.avatar;
    }
    
    showEditForm.value = false;
    avatarPreview.value = null;
    avatarFile.value = null;
    alert("A profil sikeresen frissítve!");
  } catch (err) {
    console.error("Error updating profile:", err);
    if (err.response?.status === 401) {
    localStorage.removeItem("token");
    router.push("/login");
    } else {
    alert("Hiba történt a profil frissítése során. Kérjük, próbálja újra később.");
    }
  } finally {
    isSubmitting.value = false;
  }
  };
  
  // Szerkesztés megszakítása
  const cancelEdit = () => {
  editForm.value.name = userData.value.name;
  editForm.value.email = userData.value.email;
  editForm.value.password = "";
  showEditForm.value = false;
  avatarPreview.value = null;
  avatarFile.value = null;
  };
  
  // Kijelentkezés
  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user_id");
  router.push("/login");
  };

  // ========================== Image Handling ==========================
  // Profilkép URL generálása
  const getProfileImageUrl = (avatar) => {
  if (!avatar) return null;
  
  console.log("Avatar path:", avatar);
  
  // Teljes URL ellenőrzése
  if (avatar.startsWith('http')) return avatar;
  
  const fixedPath = avatar.replace(/\.jpg$/, '.png');
  
  // Útvonal előkészítése
  const path = fixedPath.startsWith('/') ? fixedPath : `/${fixedPath}`;
  
  // Teljes URL létrehozása
  return `http://localhost:3300${path}`;
  };
  
  // Képbetöltési hiba kezelése
  const handleImageError = (e) => {
  console.error("Failed to load profile image:", e.target.src);
  e.target.style.display = 'none';
  e.target.parentElement.innerText = userInitials.value;
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    avatarFile.value = file;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      avatarPreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const navigateToReviews = () => {
    const userId = getUserIdFromRoute();
    router.push(`/reviews/${userId}`);
  };

  const navigateToFavorites = () => {
    const userId = getUserIdFromRoute();
    router.push(`/favorites/${userId}`);
  };
  
  // ========================== Lifecycle Hooks ==========================
  onMounted(() => {
  fetchUserData();
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
  margin-bottom: 20px;
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
  
  .profile-container {
  padding: 10px;
  }
  
  .profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  }
  
  .avatar-container {
  margin-right: 20px;
  }
  
  .avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #FFA915;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .user-name {
  flex: 1;
  }
  
  .user-name h2 {
  font-size: 24px;
  margin-bottom: 5px;
  color: #333;
  }
  
  .username {
  color: #666;
  font-size: 16px;
  }
  
  .profile-details {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  }
  
  .detail-row {
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  }
  
  .detail-row:last-child {
  margin-bottom: 0;
  }
  
  .detail-label {
  flex: 0 0 200px;
  font-weight: bold;
  color: #555;
  }
  
  .detail-value {
  flex: 1;
  color: #333;
  }
  
  .role-badge {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  }
  
  .role-badge.USER {
  background-color: #00767F;
  }
  
  .role-badge.ADMIN {
  background-color: #FA5E00;
  }
  
  .role-badge.MODERATOR {
  background-color: #FFA915;
  }
  
  .stats-container {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  }
  
  .stat-card {
  flex: 1;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  }
  
  .stat-card:hover {
  transform: translateY(-3px);
  }
  
  .stat-value {
  display: block;
  font-size: 28px;
  font-weight: bold;
  color: #00767F;
  margin-bottom: 5px;
  }
  
  .stat-label {
  color: #666;
  font-size: 14px;
  }
  
  .action-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
  }
  
  .edit-button, .save-button {
  font-family: "Simple Print", sans-serif;
  font-weight: bold;
  padding: 12px 24px;
  background-color: #FFA915;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  .logout-button, .cancel-button {
  font-family: "Simple Print", sans-serif;
  font-weight: bold;
  padding: 12px 24px;
  background-color: #FA5E00;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  .edit-button:hover, .save-button:hover, .logout-button:hover, .cancel-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
  }
  
  .edit-button:hover, .save-button:hover {
  background-color: #e59500;
  }
  
  .logout-button:hover, .cancel-button:hover {
  background-color: #e54d00;
  }
  
  .edit-button:active, .save-button:active, .logout-button:active, .cancel-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .edit-form-container {
  margin-top: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  }
  
  .edit-form-container h3 {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  }
  
  .form-group {
  margin-bottom: 20px;
  }
  
  .form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #444;
  }
  
  .form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 16px;
  color: #444;
  background-color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
  outline: none;
  }
  
  .form-group input:focus {
  border-color: #00767F;
  box-shadow: 0 0 0 2px rgba(0, 118, 127, 0.2);
  }
  
  .form-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  }
  
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
  
  @media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
  
  .avatar-container {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .detail-row {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .detail-label {
    margin-bottom: 5px;
  }
  
  .stats-container {
    flex-direction: column;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  }

  .profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  }

  /* Add this to your <style scoped> section */
  .avatar-upload-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .avatar-preview {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 15px;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ddd;
  }
  
  .preview-image,
  .avatar-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .avatar-initials {
    font-size: 36px;
    font-weight: bold;
    color: white;
    background-color: #FFA915;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  
  input[type="file"] {
    width: 100%;
    padding: 10px;
    border: 1px dashed #ddd;
    border-radius: 4px;
    background-color: #f8f8f8;
    cursor: pointer;
    margin-top: 10px;
  }
  
  input[type="file"]:hover {
    border-color: #FFA915;
  }
  </style>
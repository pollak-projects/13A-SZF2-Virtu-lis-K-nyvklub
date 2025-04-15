<template>
    <GradientBackground>
        <div class="page-container">
            <Header />
            <div class="home-card">
                <div class="content">
                    <h1>Felhasználók keresése</h1>
                    
                    <div class="search-container">
                        <input 
                            type="text" 
                            v-model="searchQuery" 
                            placeholder="Keresés név vagy felhasználónév alapján..." 
                            class="search-input"
                            @input="filterUsers"
                        />
                        <button class="search-button">
                            Keresés
                        </button>
                    </div>
                    
                    <div v-if="loading" class="loading-container">
                        <div class="loading-spinner"></div>
                        <p>Felhasználók betöltése...</p>
                    </div>
                    
                    <div v-else-if="error" class="error-message">
                        {{ error }}
                    </div>
                    
                    <div v-else class="users-container">
                        <div v-if="filteredUsers.length === 0" class="no-results">
                            Nincs találat a keresési feltételre.
                        </div>
                        
                        <div v-else class="users-grid">
                            <div 
                                v-for="user in filteredUsers" 
                                :key="user.id" 
                                class="user-card"
                                @click="viewUserProfile(user.id)"
                                style="cursor: pointer;"
                            >
                                <div class="avatar">
                                    <img 
                                        v-if="user.avatar" 
                                        :src="getAvatarUrl(user.avatar)" 
                                        :alt="user.name" 
                                        class="user-image"
                                        @error="handleImageError"
                                    />
                                    <div v-else class="user-initials">
                                        {{ getUserInitials(user.name || user.username) }}
                                    </div>
                                </div>
                                <div class="user-info">
                                    <h3 class="user-name">{{ user.name }}</h3>
                                    <p class="username">@{{ user.username }}</p>
                                    <div class="role-badge" :class="user.role">
                                        {{ formatRole(user.role) }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </GradientBackground>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; // Added router import
import axios from "axios";
import Header from "../components/Header.vue";
import GradientBackground from "../components/GradientBackground.vue";

// Router for navigation
const router = useRouter();

// State variables
const allUsers = ref([]);
const filteredUsers = ref([]);
const searchQuery = ref("");
const loading = ref(true);
const error = ref("");

// Fetch all users from the API
const fetchUsers = async () => {
    loading.value = true;
    error.value = "";
    
    try {
        const token = localStorage.getItem("token");
        
        if (!token) {
            error.value = "Bejelentkezés szükséges a felhasználók kereséséhez.";
            loading.value = false;
            return;
        }
        
        // Use the public endpoint instead of the admin-only endpoint
        const response = await axios.get("http://localhost:3300/public/search", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        allUsers.value = response.data;
        filteredUsers.value = response.data;
        
    } catch (err) {
        console.error("Error fetching users:", err);
        if (err.response?.status === 401) {
            error.value = "A munkamenetének érvényessége lejárt. Kérjük, jelentkezzen be újra.";
        } else {
            error.value = "Nem sikerült betölteni a felhasználókat. Kérjük, próbálja újra később.";
        }
    } finally {
        loading.value = false;
    }
};

// Filter users based on search query
const filterUsers = () => {
    if (!searchQuery.value) {
        filteredUsers.value = allUsers.value;
        return;
    }
    
    const query = searchQuery.value.toLowerCase();
    
    filteredUsers.value = allUsers.value.filter(user => 
        user.name?.toLowerCase().includes(query) || 
        user.username.toLowerCase().includes(query)
    );
};

// Format user role to display name
const formatRole = (role) => {
    const roles = {
        'USER': 'Felhasználó',
        'ADMIN': 'Adminisztrátor',
        'MODERATOR': 'Moderátor'
    };
    return roles[role] || role;
};

// Get user initials for avatar
const getUserInitials = (name) => {
    if (!name) return "?";
    return name
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase()
        .substring(0, 2);
};

// Get avatar URL - Updated to match Profile.vue's implementation
const getAvatarUrl = (avatar) => {
    if (!avatar) return null;
    
    if (avatar.startsWith('http')) return avatar;
    
    // Fix extension mismatch (.jpg -> .png)
    const fixedPath = avatar.replace(/\.jpg$/, '.png');
    
    // Útvonal előkészítése
    const path = fixedPath.startsWith('/') ? fixedPath : `/${fixedPath}`;
    
    // Teljes URL létrehozása
    return `http://localhost:3300${path}`;
};

// Handle image loading error
const handleImageError = (e) => {
    e.target.style.display = 'none';
    const parent = e.target.parentElement;
    parent.classList.add('fallback-avatar');
    parent.innerText = getUserInitials(e.target.alt);
};

// Navigate to user profile
const viewUserProfile = (userId) => {
    router.push(`/profile/${userId}`);
};

// Fetch users when component mounts
onMounted(() => {
    fetchUsers();
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

.search-container {
    display: flex;
    margin-bottom: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.search-input {
    flex: 1;
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    font-family: inherit;
    font-size: 16px;
    color: #444;
    background-color: #fff;
    transition: border-color 0.3s, box-shadow 0.3s;
    outline: none;
}

.search-input:focus {
    border-color: #00767F;
    box-shadow: 0 0 0 2px rgba(0, 118, 127, 0.2);
}

.search-button {
    font-family: "Simple Print", sans-serif;
    font-weight: bold;
    padding: 14px 24px;
    background-color: #FFA915;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.search-button:hover {
    background-color: #FA5E00;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.search-button:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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

.users-container {
    padding: 10px;
}

.no-results {
    text-align: center;
    padding: 30px;
    color: #666;
    font-size: 18px;
}

.users-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.user-card {
    display: flex;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
}

.user-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    background-color: #f0f0f0;
}

.avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #FFA915;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 20px;
    overflow: hidden;
}

.user-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.fallback-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #FFA915;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
}

.user-info {
    flex: 1;
}

.user-name {
    font-size: 18px;
    margin: 0 0 5px 0;
    color: #333;
}

.username {
    color: #666;
    font-size: 14px;
    margin: 0 0 8px 0;
}

.role-badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 12px;
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

/* Responsive adjustments */
@media (max-width: 768px) {
    .users-grid {
        grid-template-columns: 1fr;
    }
    
    .search-container {
        flex-direction: column;
    }
    
    .search-input {
        border-radius: 4px;
        margin-bottom: 10px;
    }
    
    .search-button {
        border-radius: 4px;
        width: 100%;
    }
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
</style>
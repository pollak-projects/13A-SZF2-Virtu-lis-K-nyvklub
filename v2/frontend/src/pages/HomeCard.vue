<template>
  <div class="login-container">
    <div class="background-slideshow">
      <div 
        v-for="(image, index) in backgroundImages" 
        :key="index"
        class="background-image"
        :class="{ 
          'active': currentImageIndex === index,
          'pan-top-left': panDirections[index % panDirections.length] === 'top-left',
          'pan-top-right': panDirections[index % panDirections.length] === 'top-right',
          'pan-bottom-left': panDirections[index % panDirections.length] === 'bottom-left',
          'pan-bottom-right': panDirections[index % panDirections.length] === 'bottom-right'
        }"
        :style="{ 
          backgroundImage: `url(${image})`,
          animationDelay: `-${(index * 6) % 60}s` 
        }"
      ></div>
    </div>
    
    <div class="login-form-container">
      <div class="logo-container">
        <img src="/src/assets/images/text_logo.png" alt="Virtual Book Club" class="text-logo">
      </div>
      
      <div class="login-form">
        <h1>Bejelentkezés</h1>
        <div class="form-group">
          <label for="username">Felhasználónév</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        
        <div class="form-group">
          <label for="password">Jelszó</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        
        <div v-if="errorMsg" class="error-message">
          {{ errorMsg }}
        </div>
        
        <button @click="handleLogin" type="button">Bejelentkezés</button>
        
        <div class="register-link">
          Nincs még fiókja? <router-link to="/register">Regisztráljon itt</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMsg = ref('');

const backgroundImages = [
  '/src/assets/images/home/BB.png',
  '/src/assets/images/home/BCS.png',
  '/src/assets/images/home/CSM.png',
  '/src/assets/images/home/GOT.png',
  '/src/assets/images/home/HP.png',
  '/src/assets/images/home/INDY.png',
  '/src/assets/images/home/JJBA.png',
  '/src/assets/images/home/M&M.png',
  '/src/assets/images/home/SW.png',
];

const panDirections = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const currentImageIndex = ref(0);
let slideInterval;

const changeBackgroundImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % backgroundImages.length;
};

onMounted(() => {
  slideInterval = setInterval(changeBackgroundImage, 15000);
});

onUnmounted(() => {
  clearInterval(slideInterval);
});

const handleLogin = async () => {
  try {
    const response = await axios.post('/auth/login', {
      username: username.value,
      password: password.value
    });
    
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    router.push("/books");
  } catch (error) {
    errorMsg.value = error.response?.data?.message || "Sikertelen bejelentkezés";
    console.error(error);
  }
};
</script>

<style scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.background-slideshow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  opacity: 0;
  transition: opacity 2s ease-in-out;
  animation-duration: 60s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.background-image.active {
  opacity: 1;
}

.background-image.pan-top-left {
  animation-name: pan-top-left;
}

.background-image.pan-top-right {
  animation-name: pan-top-right;
}

.background-image.pan-bottom-left {
  animation-name: pan-bottom-left;
}

.background-image.pan-bottom-right {
  animation-name: pan-bottom-right;
}

@keyframes pan-top-left {
  0% { transform: scale(1.5) translate(8%, 5%); }
  100% { transform: scale(1.5) translate(-8%, -5%); }
}

@keyframes pan-top-right {
  0% { transform: scale(1.5) translate(-8%, 5%); }
  100% { transform: scale(1.5) translate(8%, -5%); }
}

@keyframes pan-bottom-left {
  0% { transform: scale(1.5) translate(8%, -5%); }
  100% { transform: scale(1.5) translate(-8%, 5%); }
}

@keyframes pan-bottom-right {
  0% { transform: scale(1.5) translate(-8%, -5%); }
  100% { transform: scale(1.5) translate(8%, 5%); }
}

.login-form-container {
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px; 
  padding: 20px;
}

.logo-container {
  text-align: center;
  margin-bottom: 50px;
  width: 100%;
}

.text-logo {
  max-width: 700px;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  margin-bottom: 20px;
}

.login-form {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px; 
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #4CAF50;
  outline: none;
}

.error-message {
  color: #f44336;
  margin-bottom: 15px;
  text-align: center;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

.register-link {
  text-align: center;
  margin-top: 20px;
  color: #333;
}

.register-link a {
  color: #4CAF50;
  text-decoration: underline;
}
</style>
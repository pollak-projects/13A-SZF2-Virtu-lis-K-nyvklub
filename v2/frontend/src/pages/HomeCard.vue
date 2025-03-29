<template>
  <div class="login-container">
    <div class="background-slideshow">
      <div
        v-for="(image, index) in backgroundImages"
        :key="index"
        class="background-image"
        :class="{
          active: currentImageIndex === index,
          'pan-top-left':
            panDirections[index % panDirections.length] === 'top-left',
          'pan-top-right':
            panDirections[index % panDirections.length] === 'top-right',
          'pan-bottom-left':
            panDirections[index % panDirections.length] === 'bottom-left',
          'pan-bottom-right':
            panDirections[index % panDirections.length] === 'bottom-right',
        }"
        :style="{
          backgroundImage: `url(${image})`,
          animationDelay: `-${(index * 6) % 60}s`,
        }"
      ></div>
    </div>

    <div class="landing-container">
      <div class="logo-container">
        <img
          src="/src/assets/images/text_logo.png"
          alt="Pollák Könyvklub"
          class="text-logo"
        />
      </div>
      
      <div class="buttons-row">
        <router-link to="/login">
          <button class="login-button">Bejelentkezés</button>
        </router-link>
        
        <router-link to="/register">
          <button class="register-button">Regisztráció</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const backgroundImages = [
  "/src/assets/images/home/BB.png",
  "/src/assets/images/home/BCS.png",
  "/src/assets/images/home/CSM.png",
  "/src/assets/images/home/GOT.png",
  "/src/assets/images/home/HP.png",
  "/src/assets/images/home/INDY.png",
  "/src/assets/images/home/JJBA.png",
  "/src/assets/images/home/M&M.png",
  "/src/assets/images/home/SW.png",
];

const panDirections = ["top-left", "top-right", "bottom-left", "bottom-right"];
const currentImageIndex = ref(0);
let slideInterval;

const changeBackgroundImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % backgroundImages.length;
};

onMounted(() => {
  slideInterval = setInterval(changeBackgroundImage, 15000);
});

onUnmounted(() => {
  clearInterval(slideInterval);
});
</script>

<style scoped>
@font-face {
  font-family: "Simple Print";
  src: url("/src/assets/fonts/simple-print_regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Simple Print";
  src: url("/src/assets/fonts/simple-print_bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

.login-container {
  font-family: "Simple Print", sans-serif;
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

.landing-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
  z-index: 10;
}

.logo-container {
  margin-bottom: 60px; /* Increased from 40px */
  text-align: center;
}

.text-logo {
  width: 100%;
  max-width: 700px; /* Increased from 500px */
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4));
}

.buttons-row {
  display: flex;
  flex-direction: row;
  gap: 40px; /* Increased from 20px */
  justify-content: center;
}

.login-button, .register-button {
  font-family: "Simple Print", sans-serif;
  font-weight: bold;
  width: 250px; /* Increased from 180px */
  padding: 24px; /* Increased from 16px */
  border: none;
  border-radius: 12px; /* Increased from 8px */
  cursor: pointer;
  font-size: 24px; /* Increased from 18px */
  color: white;
  transition: transform 0.2s, box-shadow 0.2s;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
}

.login-button {
  background-color: #FFA915; /* Yellow from MainColors.txt */
}

.register-button {
  background-color: #FA5E00; /* Orange from MainColors.txt */
}

.login-button:hover, .register-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
}

button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
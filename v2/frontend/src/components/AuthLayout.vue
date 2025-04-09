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

    <div class="login-form-container">
      <div class="logo-container">
        <img
          src="/src/assets/images/text_logo.png"
          alt="Pollák Könyvklub"
          class="text-logo"
        />
      </div>

      <div class="login-form">

        <slot></slot>
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
  font-family: "The-Best";
  src: url("/src/assets/fonts/The-Best.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "The-Best";
  src: url("/src/assets/fonts/The-Best.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

.login-container {
  font-family: sans-serif;
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
  0% {
    transform: scale(1.5) translate(8%, 5%);
  }
  100% {
    transform: scale(1.5) translate(-8%, -5%);
  }
}

@keyframes pan-top-right {
  0% {
    transform: scale(1.5) translate(-8%, 5%);
  }
  100% {
    transform: scale(1.5) translate(8%, -5%);
  }
}

@keyframes pan-bottom-left {
  0% {
    transform: scale(1.5) translate(8%, -5%);
  }
  100% {
    transform: scale(1.5) translate(-8%, 5%);
  }
}

@keyframes pan-bottom-right {
  0% {
    transform: scale(1.5) translate(-8%, -5%);
  }
  100% {
    transform: scale(1.5) translate(8%, 5%);
  }
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
  margin-bottom: 30px;
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
  background-image: url('/src/assets/images/pattern.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
}

:deep(h1) {
  font-family: "Simple Print", sans-serif;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: white;
  font-size: 1.8rem;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
}

:deep(.form-group) {
  margin-bottom: 20px;
}

:deep(label) {
  font-family: "Simple Print", sans-serif;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
  color: white;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
}

:deep(input) {
  font-family: sans-serif;
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  color: #333; 
  background-color: rgba(255, 255, 255, 0.8);
}

:deep(input:focus) {
  border-color: #4caf50;
  outline: none;
  background-color: rgba(255, 255, 255, 0.95);
}

:deep(.error-text) {
  font-family: "Simple Print", sans-serif;
  color: #ff9e9e;
  font-size: 0.85rem;
  margin-top: 5px;
  display: block;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
}

:deep(.error-message) {
  font-family: "Simple Print", sans-serif;
  color: #ff0000;
  margin-bottom: 15px;
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
}

:deep(.success-message) {
  font-family: "Simple Print", sans-serif;
  background-color: rgba(46, 125, 50, 0.7);
  color: white;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.6;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
}

:deep(button) {
  font-family: "Simple Print", sans-serif;
  font-weight: bold;
  width: 100%;
  padding: 12px;
  background-color: #FFA915;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 1.0);
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3));
}

:deep(button:hover:not(:disabled)) {
  background-color: #FA5E00;
}

:deep(button:disabled) {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

:deep(.login-link-container),
:deep(.register-link) {
  font-family: "Simple Print", sans-serif;
  text-align: center;
  margin-top: 20px;
  color: white;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
}

:deep(.login-link),
:deep(.login-link-container a),
:deep(.register-link a) {
  color: #FA5E00;
  text-decoration: underline;
  margin-left: 5px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
}
</style>
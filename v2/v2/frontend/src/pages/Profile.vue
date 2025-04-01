

<template>
    <GradientBackground>
      <div class="about-page-container">
        <Header />
        <div class="home-card">
          <div class="content">
            <h1>Profil</h1>
  
            <div class="about-section">
              <h2>Adataid:</h2>
                
  
               
  
                
  
                
  
              
              
            </div>
          </div>
        </div>
      </div>
    </GradientBackground>
  </template>

  
<script setup>
import { ref , onMounted} from "vue";
import Header from "../components/Header.vue";
import GradientBackground from "../components/GradientBackground.vue";
import axios from "axios";

const users = ref("");


</script>

<style scoped>
.about-page-container {
  width: 100%;
  position: relative;
  padding-top: 200px; 
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

.home-card {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
  position: relative;
  z-index: 5;
}

.content {
  padding: 20px;
}

.about-section {
  text-align: left;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

h2 {
  color: #ff7300;
  margin-top: 30px;
  margin-bottom: 15px;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
  color: #555;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.feature {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature h3 {
  color: #333;
  margin-bottom: 10px;
}

a {
  color: #254a81;
  text-decoration: underline;
}

.disclaimer {
  text-align: center;
  margin-top: 40px;
  font-size: 0.9em;
  color: #777;
}

.extra-thanks {
  text-align: center;
  margin-top: 10px;
  font-size: 0.6em;
  color: #777;
}
</style>

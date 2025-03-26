<template>
  <header class="header">
    <div class="mobile-menu-toggle" @click="toggleSidebar">
      <img src="../assets/images/menu.png" alt="Menu" class="mobile-logo" />
    </div>
    
    <div class="header-buttons left desktop-only">
      <router-link to="/books"><button>KÖNYVEK</button></router-link>
      <router-link to="/movies"><button>FILMEK</button></router-link>
      <router-link to="/series"><button>SOROZATOK</button></router-link>
    </div>
    
    <img src="../assets/images/header.svg" alt="Header" class="header-image" />
    <img src="../assets/images/logo.png" alt="Logo" class="logo" />
    
    <div class="header-buttons right desktop-only">
      <button>CSOPORTOK</button>
      <button>PROFIL</button>
      <router-link to="/about-us"><button>RÓLUNK</button></router-link>
    </div>

    <div class="sidebar" :class="{ 'open': isSidebarOpen }">
      <div class="sidebar-header">
        <img src="../assets/images/menu.png" alt="Logo" class="sidebar-logo" />
        <button class="close-button" @click="toggleSidebar">×</button>
      </div>
      <div class="sidebar-content">
        <router-link to="/books" @click="toggleSidebar"><button>KÖNYVEK</button></router-link>
        <router-link to="/movies" @click="toggleSidebar"><button>FILMEK</button></router-link>
        <router-link to="/series" @click="toggleSidebar"><button>SOROZATOK</button></router-link>
        <button>CSOPORTOK</button>
        <button>PROFIL</button>
        <router-link to="/about-us" @click="toggleSidebar"><button>RÓLUNK</button></router-link>
      </div>
    </div>
    
    <div 
      class="sidebar-overlay" 
      :class="{ 'active': isSidebarOpen }" 
      @click="toggleSidebar"
    ></div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  
  if (isSidebarOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 200px;
}

.header-image {
  position: absolute;
  top: -30px; 
  left: -20px; 
  width: calc(100% + 40px);
  height: calc(100% + 40px); 
  object-fit: cover;
  z-index: 1;
}

.logo {
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: auto;
  z-index: 2;
}

.header-buttons {
  position: absolute;
  top: 21%;
  transform: translateY(-50%);
  display: flex;
  gap: 40px; 
  z-index: 2;
}

.header-buttons.left {
  right: calc(50% + 60px);
  justify-content: flex-end;
}

.header-buttons.right {
  left: calc(50% + 60px);
}

.header-buttons button {
  font-family: 'Simple Print', sans-serif;
  font-weight: bold;
  font-size: 24px; 
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu-toggle {
  display: none;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  cursor: pointer;
}

.mobile-logo {
  width: 40px;
  height: 40px;
}

.sidebar {
  position: fixed;
  top: 0;
  left: -280px;
  width: 280px;
  height: 100%;
  background-color: #fff;
  z-index: 1000;
  transition: left 0.3s ease;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
}

.sidebar.open {
  left: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.sidebar-logo {
  width: 60px;
  height: auto;
}

.close-button {
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.sidebar-content button {
  font-family: 'Simple Print', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #333;
  background: none;
  border: none;
  padding: 15px 0;
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}

.sidebar-content a {
  text-decoration: none;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
}

.sidebar-overlay.active {
  display: block;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: block;
  }
  
  .header {
    height: 150px;
  }
}
</style>
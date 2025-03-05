<template>
  <header class="header">
    <div class="header-buttons left">
      <router-link to="/books"><button>KÖNYVEK</button></router-link>
      <router-link to="/movies"><button>FILMEK</button></router-link>
      <router-link to="/series"><button>SOROZATOK</button></router-link>
    </div>
    <img src="../assets/images/header.svg" alt="Header" class="header-image" />
    <img src="../assets/images/logo.png" alt="Logo" class="logo" />
    <div class="header-buttons right">
      <button>CSOPORTOK</button>
      <button>PROFIL</button>
      <button>RÓLUNK</button>
    </div>
  </header>
</template>

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
  left: 20%; 
}

.header-buttons.right {
  right: 20%; 
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
</style>
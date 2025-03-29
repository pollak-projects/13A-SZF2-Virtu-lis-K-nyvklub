<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <RouterView> </RouterView>
  </div>
</template>

<style scoped></style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  max-width: 100vw; /* Ensure no overflow */
}
</style>

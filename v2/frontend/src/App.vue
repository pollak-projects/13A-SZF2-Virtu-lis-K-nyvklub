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
body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
}

* {
  box-sizing: border-box;
}

#app {
  width: 100%;
  position: relative;
  overflow-x: hidden;
}
</style>

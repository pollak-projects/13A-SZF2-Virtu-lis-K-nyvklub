<template>
  <div class="gradient-background">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GradientBackground",
};
</script>

<style scoped>
.gradient-background {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom left, #ffe8da, #fffcf3);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden; 
}
</style>

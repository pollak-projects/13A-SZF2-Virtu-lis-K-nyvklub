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
  align-items: center;
  position: fixed; /* Keep fixed */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow-x: hidden;
}
</style>

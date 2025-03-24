<template>
  <div class="content-holder">
    <div class="item" v-for="item in items" :key="item.id">
      <img 
        :src="item.coverArt || placeholderImage" 
        alt="Cover Art" 
        class="cover-art" 
      />
      <h3 class="title">{{ item.title }}</h3>
      <p class="creator">{{ item.creator }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import placeholderImage from '../assets/images/placeholder.png'; 

defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
.content-holder {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

@media (min-width: 450px) {
  .content-holder {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .content-holder {
    grid-template-columns: repeat(5, 1fr);
  }
}

.item {
  text-align: center;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 10px;
}

.cover-art {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.title {
  font-size: 1.2em;
  margin: 10px 0;
  color: #333;
}

.creator {
  font-size: 0.9em;
  color: gray;
}
</style>
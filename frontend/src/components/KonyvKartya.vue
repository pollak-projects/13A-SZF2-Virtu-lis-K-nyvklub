<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

defineProps(['book']);
defineEmits(['select']);
</script>

<template>
  <div class="book-card" @click="$emit('select', book)">
    <img :src="book.cover" :alt="book.title" />
    <div class="book-info">
      <h3>{{ book.title }}</h3>
      <p>{{ book.author }}</p>
      <span>{{ book.rating }} ☆</span>
    </div>
  </div>
</template>

<style scoped>
.book-card {
  width: 180px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background: white;
}
.book-card:hover {
  transform: scale(1.05);
}
.book-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.book-info {
  padding: 10px;
  text-align: center;
}
</style>

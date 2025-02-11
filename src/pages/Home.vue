<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";

const books = ref([
  {
    id: "1",
    title: "Konyv cim",
    author: "iro",
    releaseYear: "2025.02.11.",
    genre: "mufajok",
    description: "leiras",
    cover: "borito",
  }
]);
</script>

<template>
  <div>
    <h1 class="home-title">Pollák Könyvklub</h1>
  </div>

  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold text-center my-6">Pollák Könyvklub</h1>
    <div class="flex flex-wrap justify-center gap-6">
      <Card 
        v-for="book in books"
        :key="book.id"
        :id="book.id"
        :title="book.title"
        :author="book.author"
        :releaseYear="book.releaseYear"
        :genre="book.genre"
        :description="book.description"
        :cover="book.cover"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

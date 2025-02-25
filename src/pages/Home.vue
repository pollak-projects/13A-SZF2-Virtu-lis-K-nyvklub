<script setup>
import { onMounted, ref } from "vue";
import Card from "../components/Card.vue";
import axios from "axios";

const books = ref([]);

const fetchBooks = async () => {
  try {
    const response = await axios.get("https://localhost:3306/books");
    books.value = response.data;
  } catch (error) {
    console.error("Hiba történt a, könyvek betöltése sikertelen:", error);
  }
};

onMounted(fetchBooks);
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

<script>
import Card from './Card.vue';
import Card from './components/Card.vue'


const props = defineProps({
    id: Number,
    title: String,
    director: String,
    release_year: Number,
    genre_1: String,
    genre_2: String,
    genre_3: String,
    description: String,
    movie_cover: String,
});

</script>


<template>
     <div>
      <h2>Legújabb könyvek</h2>
      <div class="book-list">
        <div v-for="book in books" :key="book.id" class="book">
          <img :src="book.cover" alt="Book cover" />
          <p>{{ book.title }} - {{ book.author }}</p>
          <p>Értékelés: {{ book.rating }}</p>
        </div>
      </div>
    </div>

</template>
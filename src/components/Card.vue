<script>
import { ref, onMounted } from 'vue';
import { RouterLink } from "vue-router";

export default {
  name: "BookCard",
  props: {
    id: Number,
    title: String,
    director: String,
    release_year: Number,
    genre_1: String,
    genre_2: String,
    genre_3: String,
    description: String,
    movie_cover: String,
  }
}

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

const imageUrl = ref("")

onMounted(() => {
    imageUrl.value = new URL(`../assets/images/${props.kep}`,
    import.meta.url).href;
});
</script>

<template>
<div class="card">
      <img src="@/assets/soul-cover.jpg" alt="book cover" class="book-cover" />
      <div class="card-content">
        <h3>{{ title }}</h3>
        <p>{{ author }}</p>
        <p>{{ rating }} ★</p>
      </div>
    </div>   
</template>

<style scoped>
  .card {
    width: 150px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .book-cover {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 1rem;
    text-align: center;
  }
  
  .card-content h3 {
    font-size: 1.2rem;
    margin: 0;
  }
  
  .card-content p {
    margin: 0.2rem 0;
    color: #666;
  }
</style>
  
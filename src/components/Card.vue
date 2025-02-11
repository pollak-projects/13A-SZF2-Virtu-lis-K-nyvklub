
<template>
  <div class="card">
    <img :src="cover" class="card-image" />
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-author">{{ author }}</p>
      <p class="card-realeaseYear">{{ realaseYear }}</p>
      <p class="card-genre">{{ genre }}</p>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>


<script setup>

defineProps({
  id: Number,
  title: String,
  author: String,
  realaseYear: String,
  genre: String,
  description: String,
  cover: String,
});

/*const imageUrl = ref("");

onMounted(() => {
  imageUrl.value = new URL(`../assets/images/${props.cover}`, import.meta.url).href;
});
*/
</script>

<style scoped>

.card {
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.2s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
}
.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.card-content {
  padding: 10px;
}
.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}
.card-author, .card-releaseYear, .card-genre {
  font-size: 0.9rem;
  color: #555;
}
.card-description {
  font-size: 0.9rem;
  margin-top: 5px;
  color: #333;
}

</style>

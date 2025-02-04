<script setup>
import VLazyImage from "v-lazy-image";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  id: Number,
  cim: String,
  iro: String,
  kiadasiDatum: String,
  mufajok: Array,
  leiras: String,
  borito: String,
});

const imageUrl = ref("");

onMounted(() => {
  imageUrl.value = new URL(`../assets/images/${props.cover}`, import.meta.url).href;
});
</script>

<template>
  <div class="bg-white rounded-md border-[#9EA8FF] border-2 drop-shadow-lg p-3 w-60 h-[400px]" id="app">
    <RouterLink :to="`/konyv/${id}`">
      <VLazyImage :src="imageUrl" alt="Book Cover" class="w-full h-3/5 mb-2 mainImg" />
      <p class="font-sans font-bold h-[12%] leading-4">{{ cim }}</p>
      <p class="font-sans h-[8%]">Író: {{ author }}</p>
      <p class="font-sans h-[8%]">Kiadási dátum: {{ releaseYear }}</p>
      <p class="font-sans h-[8%]">Műfajok: {{ genre.join(", ") }}</p>
      <p class="font-sans h-[12%] overflow-hidden text-ellipsis">{{ description }}</p>
    </RouterLink>
  </div>
</template>

<style scoped>
.mainImg {
  width: 100%;
  aspect-ratio: 4/4;
  object-fit: contain;
}

.bg-white {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24rem;
  width: 15rem;
  padding: 1rem;
  box-sizing: border-box;
}
</style>

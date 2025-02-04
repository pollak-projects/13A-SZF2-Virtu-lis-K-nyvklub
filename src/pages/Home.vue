<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";

const books = ref([
  {
    id: book.id,
    cim: book.cim,
    iro: book.iro,
    kiadasiDatum: book.kiadasiDatum,
    mufajok: book.mufajok,
    leiras: book.leiras,
    borito: book.borito,
  }
]);
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold text-center my-6">Pollák Könyvklub</h1>
    <div class="flex flex-wrap justify-center gap-6">
      <Card 
        v-for="book in books"
        :key="book.id"
        :id="book.id"
        :cim="book.cim"
        :iro="book.iro"
        :kiadasiDatum="book.kiadasiDatum"
        :mufajok="book.mufajok"
        :leiras="book.leiras"
        :borito="book.borito"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

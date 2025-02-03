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
    <h1> {{ title }} </h1>
    <div>
        <Card
            :id="Movies.id"
        />
    </div>

</template>
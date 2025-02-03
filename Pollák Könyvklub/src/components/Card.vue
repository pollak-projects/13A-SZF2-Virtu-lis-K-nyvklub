<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from "vue-router";



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
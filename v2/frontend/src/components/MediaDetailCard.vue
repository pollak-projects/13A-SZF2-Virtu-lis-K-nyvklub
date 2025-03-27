<template>
  <div class="media-detail-card">
    <div class="card-container">
      <div class="cover-section">
        <img 
          :src="item.coverArt || defaultCover" 
          :alt="item.title" 
          class="cover-image" 
        />
      </div>
      <div class="content-section">
        <h1 class="title">{{ item.title }}</h1>
        
        <div class="creator-info">
          <span class="creator-label">{{ creatorLabel }}:</span>
          <span class="creator-name">{{ getCreatorName() }}</span>
        </div>
        
        <div v-if="item.releaseYear" class="release-info">
          <span class="release-label">{{ releaseLabel }}:</span>
          <span class="release-year">{{ item.releaseYear }}</span>
        </div>
        
        <!-- Type-specific information -->
        <div v-if="isBook && item.isbn" class="extra-info">
          <span class="info-label">ISBN:</span>
          <span>{{ item.isbn }}</span>
        </div>
        
        <div v-if="isTVShow && item.seasons" class="extra-info">
          <span class="info-label">Évadok száma:</span>
          <span>{{ item.seasons }}</span>
        </div>
        
        <!-- Genres -->
        <div v-if="getGenres().length > 0" class="genres">
          <span class="genre-label">Műfajok:</span>
          <div class="genre-tags">
            <span 
              v-for="genre in getGenres()" 
              :key="genre.id" 
              class="genre-tag"
            >
              {{ genre.name }}
            </span>
          </div>
        </div>
        
        <!-- Description -->
        <div class="description">
          <h3>Leírás</h3>
          <p>{{ item.description }}</p>
        </div>
        
        <!-- Cast for movies and TV shows -->
        <div v-if="(isMovie || isTVShow) && getActors().length > 0" class="cast">
          <h3>Szereplők</h3>
          <div class="cast-list">
            <div 
              v-for="actor in getActors()" 
              :key="actor.id" 
              class="actor"
            >
              <img 
                :src="actor.picture || defaultActorImage" 
                :alt="actor.name" 
                class="actor-image" 
              />
              <span class="actor-name">{{ actor.name }}</span>
            </div>
          </div>
        </div>
        
        <!-- Episodes for TV shows -->
        <div v-if="isTVShow && item.tvSeasons && item.tvSeasons.length > 0" class="seasons">
          <h3>Évadok és epizódok</h3>
          <div 
            v-for="season in item.tvSeasons" 
            :key="season.id" 
            class="season"
          >
            <h4>{{ season.title || `${season.seasonNumber}. évad` }}</h4>
            <ul class="episode-list">
              <li 
                v-for="episode in season.episodes" 
                :key="episode.id" 
                class="episode"
              >
                {{ episode.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import defaultCoverImage from '../assets/images/placeholder.png';
import defaultActorImage from '../assets/images/placeholder.png';

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['books', 'movies', 'series'].includes(value)
  }
});

const defaultCover = computed(() => defaultCoverImage);

const isBook = computed(() => props.type === 'books');
const isMovie = computed(() => props.type === 'movies');
const isTVShow = computed(() => props.type === 'series');

const creatorLabel = computed(() => {
  if (isBook.value) return 'Szerző';
  if (isMovie.value) return 'Rendező';
  if (isTVShow.value) return 'Alkotó';
  return 'Készítő';
});

const releaseLabel = computed(() => {
  if (isBook.value) return 'Kiadási év';
  return 'Megjelenési év';
});

const getCreatorName = () => {
  if (isBook.value && props.item.author) return props.item.author.name;
  if (isMovie.value && props.item.director) return props.item.director.name;
  if (isTVShow.value && props.item.creator) return props.item.creator.name;
  return 'Ismeretlen';
};

const getGenres = () => {
  if (isBook.value && props.item.BookGenres) {
    return props.item.BookGenres.map(bg => bg.genre);
  }
  if (isMovie.value && props.item.MovieGenres) {
    return props.item.MovieGenres.map(mg => mg.genre);
  }
  if (isTVShow.value && props.item.TvGenres) {
    return props.item.TvGenres.map(tg => tg.genre);
  }
  return [];
};

const getActors = () => {
  if (isMovie.value && props.item.movieActors) {
    return props.item.movieActors.map(ma => ma.actor);
  }
  if (isTVShow.value && props.item.tvShowActors) {
    return props.item.tvShowActors.map(ta => ta.actor);
  }
  return [];
};
</script>

<style scoped>
.media-detail-card {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-container {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .card-container {
    flex-direction: row;
  }
}

.cover-section {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .cover-section {
    flex: 0 0 300px;
  }
}

.cover-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

.content-section {
  flex: 1;
  padding: 20px;
}

.title {
  font-size: 28px;
  color: #333;
  margin-bottom: 15px;
  border-bottom: 2px solid #ff7300;
  padding-bottom: 10px;
}

.creator-info, .release-info, .extra-info {
  margin-bottom: 10px;
}

.creator-label, .release-label, .info-label, .genre-label {
  font-weight: bold;
  color: #555;
  margin-right: 5px;
}

.creator-name {
  font-size: 18px;
  color: #333;
}

.description {
  margin: 20px 0;
}

.description h3 {
  font-size: 20px;
  color: #ff7300;
  margin-bottom: 10px;
}

.description p {
  line-height: 1.6;
  color: #444;
  text-align: justify;
}

.genres {
  margin: 15px 0;
}

.genre-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 5px;
}

.genre-tag {
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  color: #333;
}

.cast h3, .seasons h3 {
  font-size: 20px;
  color: #ff7300;
  margin: 20px 0 10px 0;
}

.cast-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.actor {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}

.actor-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 5px;
}

.actor-name {
  font-size: 14px;
  text-align: center;
}

.season {
  margin-bottom: 15px;
}

.season h4 {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.episode-list {
  list-style-type: none;
  padding-left: 15px;
}

.episode {
  padding: 5px 0;
  font-size: 14px;
  color: #555;
}
</style>
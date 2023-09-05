<script setup>
import { ref } from "vue";
import { useSearchStore } from "../stores/SearchStore";
import Loader from "./Loader.vue";
import Movie from "./Movie.vue";

const searchStore = useSearchStore();
const searchMovie = ref("");
</script>

<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input
      type="text"
      class="search-input"
      placeholder="input movie"
      v-model="searchMovie"
    />
  </form>
  <loader v-if="searchStore.loader"></loader>
  <div v-else>
    <movie
      v-for="movie in searchStore.movies"
      :key="movie.id"
      :movie="movie"
      :isSearch="true"
    ></movie>
  </div>
</template>

<style lang="css" scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>

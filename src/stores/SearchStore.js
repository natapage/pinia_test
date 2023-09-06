import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from "vue";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=d4f84b6b39624524ec35f557809d2ccd&query=";

export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const movies = ref([]);
  const isMoviesFound = ref(true);

  const getMovies = async (search) => {
    isMoviesFound.value = true;
    loader.value = true;
    const res = await fetch(`${url}${search}`);
    const data = await res.json();
    movies.value = data.results;
    console.log(movies.value);
    if (movies.value.length === 0) {
      isMoviesFound.value = false;
    }
    loader.value = false;
  };

  const addToUserMovies = (object) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...object, isWatched: false });
    movieStore.activeTab = 1;
  };

  return {
    loader,
    movies,
    getMovies,
    addToUserMovies,
    isMoviesFound,
  };
});

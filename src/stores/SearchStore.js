import { defineStore } from "pinia";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=d4f84b6b39624524ec35f557809d2ccd&query=";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(search) {
      this.loader = true;
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      this.movies = data.results;
      this.loader = false;
    },
  },
});

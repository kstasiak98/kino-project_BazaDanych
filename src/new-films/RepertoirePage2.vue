<template>
  <v-row>
    <v-row>
      <v-col class="film-column" v-for="film in films" :key="film.id">
        <v-card sm12 class="card" >
          <h2>{{film.name}}</h2>
          <span>{{film.text}}</span>
          <span>{{film.id}}</span>
          <v-footer absolute width="100%" class="vufooter">
            <v-btn v-model="selectedItem"
                   @click="getElementByID(film.id)">
              READ ME</v-btn>
          </v-footer>
        </v-card>
      </v-col>
    </v-row>
    <template v-if="filmID!=0">
      <v-col>
        <FilmText2 :filmP="selectedFilm"></FilmText2>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import FilmText2 from './FilmText2.vue';
import { FilmSpis } from '../DATA/film';

export default {
  name: 'RepertoirePage2',
  components: { FilmText2 },
  data() {
    return {
      films: FilmSpis,
      selectedItem: null,
      filmID: 0,
      selectedFilm: null,
    };
  },
  methods: {
    getElementByID(ses) {
      this.filmID = ses;
      this.selectedFilm = this.films[(ses - 1)];
    },
  },
};
</script>

<style scoped>
  .film-column{
    justify-content: center;
    text-align: center;
    flex-wrap: wrap !important;
  }
  .card{
    padding-top: 5px;
    padding-bottom: 40px;
    height: 100%;
    min-width: 300px;
    display: grid;
  }
  .vufooter{
    justify-content: center;
  }
</style>

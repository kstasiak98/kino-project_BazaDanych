<template>
  <v-row align-content="center">
    <v-col cols="12">
      <v-select
        label="Wybierz film..."
        :items="mappingArray()"
        v-model="selectedItem">
      </v-select>
    </v-col>
    <v-row>
      <v-col cols="12">
        <v-card>
          <h1>Nazwa: {{selectedFilm.name}}</h1>
          <h2>Koszt biletu: {{selectedFilm.cost}}</h2>
        </v-card>
      </v-col>
      <RoomPage></RoomPage>
    </v-row>
  </v-row>
</template>

<script>
import { FilmSpis } from '../DATA/film';
import RoomPage from './RoomPage.vue';
import currencyFilter from '../shared/currency-filter';

export default {
  name: 'ShopPage',
  components: { RoomPage },
  filters: {
    currency: currencyFilter,
  },
  data() {
    return {
      films: FilmSpis,
      selectedItem: null,
    };
  },
  computed: {
    selectedFilm() {
      return this.getFilmByName(this.selectedItem) ? this.getFilmByName(this.selectedItem) : '';
    },
  },
  mounted() {
    this.mappingArray();
  },
  methods: {
    mappingArray() {
      const array = this.films.map(film => (film.name));
      return array;
    },
    getFilmByName(name) {
      const film = this.films.find(x => (x.name === name));
      return film;
    },
  },
};
</script>

<style scoped>

</style>

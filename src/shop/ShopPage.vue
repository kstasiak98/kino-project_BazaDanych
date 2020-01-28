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
          <h1>Nazwa Filmu: {{selectedFilm.name}}</h1>
<!--          <h2>Koszt biletu: {{selectedFilm.cost}}</h2>-->
          <template v-for="(sens, index) in selectedFilm.seanse">
            <v-btn @click="makeReservedTable(sens.id)" :key="index">
              {{sens.data}}, {{sens.time}}</v-btn>
          </template>
        </v-card>
      </v-col>
      <template v-if="selectedFilm && selectSeans">
        <SallPage
          :placed="selectedFilm.places"
          :reserved="testTable1"
          :film="selectedFilm"
          :seans_id="selectSeans"
          :key="selectSeans"
        ></SallPage>
      </template>
    </v-row>
  </v-row>
</template>

<script>
import axios from 'axios';
import { FilmSpis } from '../DATA/film';
import currencyFilter from '../shared/currency-filter';
import SallPage from './SallPage.vue';
import { SALA_MIEJSCA } from '../DATA/places';

export default {
  name: 'ShopPage',
  components: { SallPage },
  filters: {
    currency: currencyFilter,
  },
  asyncComputed: {
    filmss: {
      get() {
        this.takeFilmByID();
      },
      watch: 'this.takeFilmByID',

    },
  },
  data() {
    return {
      films: FilmSpis,
      selectedItem: null,
      selectSeans: 0,
      testTable1: [],
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
    async makeTable() {
      this.getReservePlaceBySeansId();
      let base = await this.getReservePlaceBySeansId();
      base = JSON.parse(JSON.stringify(base));
      const z = [];
      for (let i = 0; i < base.length; i += 1) {
        const a = SALA_MIEJSCA.find(x => x.id === base[i].miejsce_id);
        z.push(a.code);
      }
      this.testTable1 = z;
    },
    makeReservedTable(id) {
      this.selectSeans = id;
      axios.post('http://localhost:3000/receiveSID', {
        id: this.selectSeans,
      });
      console.log(id);
      this.makeTable();
    },
    async getReservePlaceBySeansId() {
      const response = await axios.get('http://localhost:3000/seansID');
      console.log('response.data', response.data);
      return response.data;
    },
    async getSEANS() {
      const response = await axios.get('http://localhost:3000/filmID');
      console.log('response.data', response.data);
      return response.data;
    },
    async takeFilmByID() {
      axios.post('http://localhost:3000/films', {
        id: this.selectedFilm.id,
      })
        .then(() => console.log('POSZLO'));
      console.log(this.filmss);
      this.getSEANS();
      this.getSEANS();
    },
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

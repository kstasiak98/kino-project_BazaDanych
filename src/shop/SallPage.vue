<template>
  <v-container>
    <v-card align="center" class="pa-2" >
      <div class="rectangle">EKRAN</div>
      <v-layout v-for="(Lay, index) in Layouts_tablle" :key="index">
        <FpToggle
          :key="reserved"
          :lay="Lay"
          :placed="film.places"
          :reserved="reserved"
          :film="film"
          @bind_methods="SetTable"
        ></FpToggle>
      </v-layout>
      <v-btn
        @click="wybrane_function()"
      >KUP BILETY</v-btn>
    </v-card>
  </v-container>
</template>
<script>
import axios from 'axios';
import FpToggle from '../components/FpToggle.vue';

export default {
  name: 'SallPage',
  components: { FpToggle },
  props: ['placed', 'reserved', 'film', 'seans_id'],
  asyncData: {
    SEANSseats() {
      return axios.get('http://localhost:3000/SeansID');
    },
  },
  data: () => ({
    Layouts_tablle: ['A', 'B', 'C', 'D', 'E', 'F'],
    TestTable: [],
    wybrane_miejsca: [],
    Layouts_tablle_A: [],
    Layouts_tablle_B: [],
    Layouts_tablle_C: [],
    Layouts_tablle_D: [],
    Layouts_tablle_E: [],
    Layouts_tablle_F: [],
  }),
  mounted() {
    this.getSeanse();
  },
  methods: {
    async getSeanse() {
      const response = await axios.get('http://localhost:3000/all');
      this.testTable = response.data.map(x => x);
      this.testTable = JSON.parse(JSON.stringify(this.testTable));
      console.log('test table', this.testTable);
      return response.data;
    },
    SetTable(e, y) {
      // console.log('parent', e, y);
      if (y === this.Layouts_tablle[0]) {
        this.Layouts_tablle_A = e;
      } if (y === this.Layouts_tablle[1]) {
        this.Layouts_tablle_B = e;
      } if (y === this.Layouts_tablle[2]) {
        this.Layouts_tablle_C = e;
      } if (y === this.Layouts_tablle[3]) {
        this.Layouts_tablle_D = e;
      } if (y === this.Layouts_tablle[4]) {
        this.Layouts_tablle_E = e;
      } if (y === this.Layouts_tablle[5]) {
        this.Layouts_tablle_F = e;
      }
    },
    wybrane_function() {
      if (this.Layouts_tablle_A.length > 0) {
        this.Layouts_tablle_A.forEach(x => this.wybrane_miejsca.push(x));
      } if (this.Layouts_tablle_B.length > 0) {
        this.Layouts_tablle_B.forEach(x => this.wybrane_miejsca.push(x));
      } if (this.Layouts_tablle_C.length > 0) {
        this.Layouts_tablle_C.forEach(x => this.wybrane_miejsca.push(x));
      } if (this.Layouts_tablle_D.length > 0) {
        this.Layouts_tablle_D.forEach(x => this.wybrane_miejsca.push(x));
      } if (this.Layouts_tablle_E.length > 0) {
        this.Layouts_tablle_E.forEach(x => this.wybrane_miejsca.push(x));
      } if (this.Layouts_tablle_F.length > 0) {
        this.Layouts_tablle_F.forEach(x => this.wybrane_miejsca.push(x));
      }
      // console.log(this.wybrane_miejsca);
      const Ticket = {
        name: this.film.name,
        cost: this.film.cost,
        places: this.wybrane_miejsca,
        seans_id: this.seans_id,
      };
      console.log(Ticket);
      this.$store.commit('addTicketPlaceToCart', Ticket);
      this.$router.push({
        path: '/store/ticket',
      });
    },
  },
};

</script>
<style scoped lang="scss">
  .rectangle {
    width: 60%;
    background-color: lightgrey;
    text-align: center;
    margin: auto;
  }
</style>

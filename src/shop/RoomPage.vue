<template>
  <v-container>
    <span>Tu będzie dana sala i miejsca do wyboru</span>
    {{SEANSseats}}
    <v-card align="center">
      <v-col cols="12">
        <v-btn-toggle
          v-model="toggle_follow2"
          multiple
        >
        <template v-for="(place,index) in film.places">
          <FpButton v-bind:key="place"
                    :buttonN="(index+1)"
                    :if-disable="disable_buton(index+1)"></FpButton>
        </template>
        </v-btn-toggle>
      </v-col>
      <v-col cols="12">
        Model2: {{ toggle_follow2 }}
      </v-col>
      <v-col cols="12">
        <v-btn @click="buyTickets()">KUP BILETY</v-btn>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
import FpButton from '../components/FpButton.vue';

export default {
  name: 'RoomPage',
  components: { FpButton },
  asyncData: {
    SEANSseats() {
      return axios.get('http://localhost:3000/filmID');
    },
  },
  data() {
    return {
      toggle_follow2: [],
      disable_table: [3, 4],
      selectedSeat: null,
    };
  },
  props: ['placed', 'reserved', 'film'],
  methods: {
    disable_buton(values) {
      return this.film.reservation.find(dis => dis === values) === undefined;
    },
    buyTickets() {
      this.$store.commit('addTicketToCart', this.makeAnArray());
      this.$router.push({
        path: '/store/ticket',
      });
    },
    makeAnArray() {
      const array = [];
      if (this.toggle_follow2) {
        for (let i = 0; i < this.toggle_follow2.length; i += 1) {
          const Ticket = {
            id: this.toggle_follow2[i] + 1,
            cost: this.film.cost,
            name: this.film.name,
          };
          array.push(Ticket);
        }
      }
      return array;
    },
  },
};
</script>

<style scoped>
 .miejsce{
   max-width: 10px !important;
   background-color: yellow;
 }
</style>

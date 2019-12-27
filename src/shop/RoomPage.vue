<template>
  <v-container>
    <span>Tu będzie dana sala i miejsca do wyboru</span>
    <v-card align="center">
      <v-btn-toggle
        v-model="toggle_follow"
        multiple
      >
        <v-btn>1</v-btn>
        <v-btn>2</v-btn>
        <v-btn :disabled="disable_buton(3)">3</v-btn>
        <v-btn>4</v-btn>
        <v-btn class="miejsce">5</v-btn>
      </v-btn-toggle>
      <v-col cols="12">
        Model: {{ toggle_follow }}
      </v-col>
      <v-col cols="12">
        <v-btn-toggle
          v-model="toggle_follow2"
          multiple
        >
        <template v-for="(seat,index) in seats">
          <FpButton v-bind:key="seat" :buttonN="(index+1)"></FpButton>
        </template>
        </v-btn-toggle>
      </v-col>
      <v-col cols="12">
        Model2: {{ toggle_follow2 }}
      </v-col>
      <v-col cols="12">
        <v-btn @click="disable_buton">DISABLE BTN 3</v-btn>
        <v-btn>KUP BILET</v-btn>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
import FpButton from '../components/FpButton.vue';

export default {
  name: 'RoomPage',
  components: { FpButton },
  data() {
    return {
      toggle_follow: [],
      toggle_follow2: [],
      disable_table: [3],
      seats: 10,
      selectedSeat: null,
    };
  },
  methods: {
    disable_buton(values) {
      console.log('Wywoluje');
      console.log('Wartość: ', values);
      return this.disable_table.forEach(value => (value === values));
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

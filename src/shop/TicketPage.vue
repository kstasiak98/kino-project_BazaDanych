<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <h1>Zakupiłeś Bilety:</h1>
          <v-col v-for="(ticket, index) in cart" :key="index">
            <h3>Na film: <b>{{ticket.name}}</b></h3>
            {{getSeansDate(ticket.seans_id)}} o {{getSeansTime(ticket.seans_id)}}<br/>
            Koszt: {{ticket.cost}} zł<br/>
            Miejsca: <br/>
            <v-layout v-for="(place) in ticket.places" :key="place.code">
              <b>{{place.lay}}: {{place.number}} </b>
            </v-layout>
          </v-col>
          <v-col align-content="center">
            <v-btn @click="removeFromCart">USUŃ</v-btn>
            <v-btn @click="SendTickets">ZATWIERDŹ</v-btn>
          </v-col>
          <v-snackbar
          v-model="snackbar"
          color="red"
          >{{text}}
            <v-btn
            dark
            text
            @click="snackbar = false"
            >
            X
            </v-btn>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import { SeansSpis } from '../DATA/seansedata';
import { SALA_MIEJSCA } from '../DATA/places';

export default {
  name: 'TicketPage',
  props: {
    ticketArray: null,
  },
  data() {
    return {
      text: 'Najpierw się zaloguj',
      snackbar: false,
      idArray: [],
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    USSER() {
      return this.$store.state.userOnline;
    },
  },
  methods: {
    makeArray() {
      for (let i = 0; i < this.cart[0].places.length; i += 1) {
        const x = {
          seans_id: this.cart[0].seans_id,
          place: this.cart[0].places[i].id,
        };
        this.idArray.push(x);
      }
    },
    async SendTicket() {
      await axios.post('http://localhost:3000/insert1', {
        klient_id: this.USSER.id,
        seans: this.cart[0].seans_id,
      });
      console.log('wukonany insert 1');
    },
    async GETLASTPLACE(callback) {
      await axios.get('http://localhost:3000/insert2');
      console.log('wykonane get');
      if (callback) {
        callback();
      }
    },
    async SendTicket2(i, callback) {
      const x = this.cart[0].places;
      const base = JSON.parse(JSON.stringify(x));
      if (x) {
        const z = SALA_MIEJSCA.find(places => places.code === base[0].code);
        await axios.post('http://localhost:3000/insert3', {
          klient_id: this.USSER.id,
          miejsce_id: z.id,
        });
      }
      console.log('wykonane insert 3');
      if (callback) {
        callback();
      }
    },
    removeFromCart() {
      this.$store.commit('removeTicketFromCart');
    },
    getSeansDate(x) {
      return SeansSpis.find(seans => seans.id === x).date;
    },
    getSeansTime(x) {
      return SeansSpis.find(seans => seans.id === x).time;
    },
    async SendTickets() {
      console.log(this.USSER);
      if (!this.USSER.id) {
        console.log('Najpierw się zaloguj');
        this.snackbar = true;
      } else {
        console.log('mamy uzytkownika');
        this.SendTicket().then();
        this.GETLASTPLACE().then();
        this.SendTicket2().then();
        await this.$router.push('/information2');
      }
    },
  },
};
</script>

<style scoped>

</style>

<template>
  <v-layout
    text-center
    wrap
  >
    <v-flex xs12>
      <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      ></v-img>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <h1>Witamy na stronie kina MAX_KINO.SA</h1>
        <div>Co chciałbyś zrobić?</div>
        <v-spacer></v-spacer>
        <v-flex mt-4 xs12>
          <v-btn to="/login">ZALOGUJ SIE</v-btn>
          <v-btn to="/repertoire">REPERTUAR</v-btn>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  computed: {
    availableFilm() {
      return this.$store.state.filmss;
    },
    UserOnline() {
      return this.$store.state.userOnline;
    },
  },
  mounted() {
    if (this.UserOnline !== null) {
      console.log(this.UserOnline);
    } else {
      console.log('USer is null');
    }
    axios.get('http://localhost:3000/all')
      .then((response) => {
        this.post = response.data;
      });
  },
  data: () => ({
    post: null,
  }),
};
</script>

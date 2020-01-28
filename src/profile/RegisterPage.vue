<template>
 <v-card xs12 wrap style="text-align: center" class="pa-6">
   <h1>Wprowadź dane:</h1>
   <v-text-field
     v-model="login"
     label="Podaj login"></v-text-field>
   <v-text-field
     v-model="email"
     label="Podaj email"></v-text-field>
   <v-text-field
     v-model="password"
     :type="'password'"
     @click:append="showPassword = !showPassword"
     label="Podaj hasło"></v-text-field>
   <v-btn @click="postPost">ZAREJESTRUJ SIE</v-btn>
 </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterPage',
  data() {
    return {
      login: '',
      email: '',
      password: '',
    };
  },
  methods: {
    postPost() {
      axios.post('http://localhost:3000/cart', {
        login: this.login,
        password: this.password,
        email: this.email,
      })
        .then(() => console.log('POSZLO'));
      this.$router.push('/information1');
    },
  },
};
</script>

<style scoped>

</style>

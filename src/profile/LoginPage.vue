<template>
  <v-container>
    <v-row  style="text-align: center">
      <v-col>
        <v-card style="text-align: center" class="pa-6">
          <h1>Podaj dane:</h1>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="login"
            label="Podaj login"></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            label="Podaj hasło"></v-text-field>
          <v-btn @click="checkUser">ZALOGUJ</v-btn>
        </v-card>
      </v-col>
      <v-col xs12 wrap>
        <v-card  style="text-align: center" class="pa-6">
          <h2>Nie masz konta?</h2>
          <v-spacer></v-spacer>
          <br/>
          <v-btn @click="onClick = !onClick">Zarejestruj sie</v-btn>
        </v-card>
        <template v-if="onClick===true">
          <br />
          <register-page></register-page>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import RegisterPage from './RegisterPage.vue';
// import { UserBase } from '../DATA/userdata';


function jasonParsait() {
  // const nowyJasonTABLE = [
  //   { CarID: 123 },
  //   { CarID: 456 },
  //   { CarID: 789 },
  // ];
  // const nowyJasonTABLEstring = `[
  //   { "CarID" : 123 },
  //   { "CarID" : 456 },
  //   { "CarID" : 789 }
  // ]`;
  // Zmiana na ciąg który przesyłamy przez przeglądarkę
  // const carIDstringify = JSON.stringify(nowyJasonTABLE);
  // console.log(carIDstringify);
  // console.log(typeof (carIDstringify));
  // Zmiana na normalny java script
  // const carIDjson = JSON.parse(nowyJasonTABLEstring);
  // console.log(carIDjson);
  // console.log(typeof (carIDjson));
}

export default {
  name: 'LoginPage',
  components: { RegisterPage },


  created() {
    jasonParsait();
    this.getUsersBase();
  },
  data() {
    return {
      userOnline: {},
      login: '',
      password: '',
      showPassword: false,
      onClick: false,
      USERB: null,
      UserArray: [],

    };
  },
  asyncData: {
    loginss() {
      return axios.get('http://localhost:3000/all');
    },
  },
  methods: {
    async getUsersBase() {
      const response = await axios.get('http://localhost:3000/logins');
      return response.data;
    },
    logging() {
      this.$router.push('/login/profile');
    },
    checkUser() {
      let base = this.loginss;
      this.getUsersBase()
        .then((num) => {
          console.log('num:', num);
          base = num;
        });
      base = JSON.parse(JSON.stringify(base));
      console.log('BAZA', base);
      console.log('this.login', this.login);
      console.log('this.password', this.password);
      this.userOnline = base.find(x => (x.login === this.login
        && x.haslo === this.password
      ));
      console.log('USER ONLINE:', this.userOnline);

      if (this.userOnline) {
        const user = {
          login: this.login,
          password: this.password,
          id: this.userOnline.id,
          email: this.userOnline.email,
          punkty: this.userOnline.punkty,
        };
        console.log('ZALOGOWANO');
        this.$store.commit('setUser', user);
        this.logging();
      } else {
        console.log('Złe dane');
      }
    },
  },
};
</script>

<style scoped>

</style>

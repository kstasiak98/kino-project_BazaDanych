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
          <v-btn @click="logging">ZALOGUJ</v-btn>
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
import RegisterPage from './RegisterPage.vue';

function jasonParsait() {
  const nowyJasonTABLE = [
    { CarID: 123 },
    { CarID: 456 },
    { CarID: 789 },
  ];
  const nowyJasonTABLEstring = `[
    { "CarID" : 123 },
    { "CarID" : 456 },
    { "CarID" : 789 }
  ]`;
  // Zmiana na ciąg który przesyłamy przez przeglądarkę
  const carIDstringify = JSON.stringify(nowyJasonTABLE);
  console.log(carIDstringify);
  console.log(typeof (carIDstringify));
  // Zmiana na normalny java script
  const carIDjson = JSON.parse(nowyJasonTABLEstring);
  console.log(carIDjson);
  console.log(typeof (carIDjson));
}

export default {
  name: 'LoginPage',
  components: { RegisterPage },
  created() {
    jasonParsait();
  },
  data() {
    return {
      login: '',
      password: '',
      showPassword: false,
      onClick: false,
    };
  },
  methods: {
    logging() {
      if (this.login === 'max') {
        if (this.password === '1234') {
          this.$router.push('/login/profile');
        }
      }
    },

  },
};
</script>

<style scoped>

</style>

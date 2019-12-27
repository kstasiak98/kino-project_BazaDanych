<template>
 <v-card xs12 wrap style="text-align: center" class="pa-6">
   <h1>Wprowadź dane:</h1>
   <v-text-field
     v-model="login"
     label="Podaj login"></v-text-field>
   {{login}}<br />
   <v-text-field
     v-model="email"
     label="Podaj email"></v-text-field>
   {{email}}<br />
   <v-text-field
     v-model="password"
     :type="'password'"
     @click:append="showPassword = !showPassword"
     label="Podaj hasło"></v-text-field>
   {{password}}<br />
   <v-btn>ZAREJESTRUJ SIE</v-btn>
 </v-card>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      login: '',
      email: '',
      password: '',
    };
  },
};
</script>

<style scoped>

</style>

<template>
  <v-card class="cards">
    <h1>{{filmP.name}}</h1>
    <span>{{filmP.plot}}</span>
    <br />
    <v-btn to="/store">KUP BILET</v-btn>
  </v-card>
</template>

<script>


export default {
  name: 'FilmText2',
  props: ['filmP'],
};
</script>

<style scoped>
  .cards{
    padding-top: 5px;
    padding-bottom: 40px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    height: 100%;
    min-width: 300px;
    display: grid;
  }
</style>

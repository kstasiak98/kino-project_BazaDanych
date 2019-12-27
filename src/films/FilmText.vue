<template>
  <v-card sm12 class="card">
    <h2>{{filmP.title}}</h2>
    <span>{{filmP.content}}</span>
    <v-footer absolute width="100%" class="vufooter">
      READ ME
    </v-footer>
  </v-card>
</template>

<script>
export default {
  props: ['filmP',],
};
</script>

<style scoped>
  .card{
    padding-top: 5px;
    padding-bottom: 40px;
    height: 100%;
    display: grid;
  }
  .vufooter{
    justify-content: center;
  }
</style>

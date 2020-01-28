<template>
  <v-row>
    <v-col>
      <p>Pomyślnie zakupiłeś bilet</p><br/>
    </v-col>
    <v-col>
      <v-btn @click="back()">BACK</v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'information2',
  methods: {
    back() {
      this.$forceUpdate();
      this.$router.push('/');
    },
  },
};
</script>
<style scoped lang="scss">
</style>

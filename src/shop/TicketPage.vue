<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          Zakupiłeś Bilety:<br/>
          <v-col v-for="(ticket, index) in cart" :key="index">
            <h3>Na film: <b>{{ticket.name}}</b></h3>
            Miejsce nr: {{ticket.id}} <br />
            Koszt: {{ticket.cost}} zł
          </v-col>
          <v-col align-content="center">
            <v-btn>Zatwierdź</v-btn>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TicketPage',
  props: {
    ticketArray: null,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  mounted() {
    console.log('Tu jesteś');
  },
};
</script>

<style scoped>

</style>

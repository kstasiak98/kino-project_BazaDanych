import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    user: {
      login: 'xd',
      email: 'p@p.pl',
      password: '***',
    },
  },
  mutations: {
    addTicketToCart(state, ticketArray) {
      ticketArray.forEach(ticket => state.cart.push(ticket));
    },
  },
});

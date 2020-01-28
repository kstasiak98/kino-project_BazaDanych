import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
// import userdata, { UserBase } from '../DATA/userdata';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reservsePlace: [],
    cart: [],
    ifLogin: false,
    userOnline: {},
    userOnlineId: 0,
    filmss: null,
  },
  actions: {
    // getKlient({ commit }) {
    //   axios.get('http://localhost:3000')
    //     .then(response => )
    // },
    // getFILM({ commit }) {
    //   axios.get('http://localhost:3200')
    //     .then(result => commit('updateFILMS', result.data))
    //     .catch(console.error);
    // },
  },
  mutations: {
    // updateFILMS(state, films) {
    //   state.filmss = films;
    // },
    addTicketToCart(state, ticketArray) {
      ticketArray.forEach(ticket => state.cart.push(ticket));
    },
    addTicketPlaceToCart(state, ticket) {
      state.cart.push(ticket);
    },
    removeTicketFromCart(state) {
      state.cart.pop();
    },
    setUser(state, user) {
      state.userOnline = {
        login: user.login,
        password: user.password,
        id: user.id,
        email: user.email,
        punkty: user.punkty,
      };
      this.ifLogin = true;
      console.log('this.useronline', state.userOnline);
      console.log(this.ifLogin);
    },
    setUserID(state, id) {
      state.userOnlineId = id;
    },
    // checkAndUseUser(state, user) {
    //   const use = UserBase.find(x => {
    //     if(x.login === user.login) {
    //       if(x.password === user.password) {
    //         return x;
    //       }
    //     }
    //   });
    //   this.useronline.login = use.login;
    //
    // }
  },
});

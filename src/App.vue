<template>
  <v-app>
    <v-app-bar max-height="65px">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-layout text-right>
        <v-col xs12>
          <router-link class="nav-link" :to="{name: 'Home'}"
            >HOME</router-link>
          <v-divider vertical class="mx-2"></v-divider>
          <router-link class="nav-link" :to="{name: 'Repertoire'}"
          >REPERTUAR</router-link>
          <v-divider vertical class="mx-2"></v-divider>
          <router-link class="nav-link" :to="{name: 'Login'}"
          >ZALOGUJ SIĘ</router-link>
          <v-divider vertical class="mx-2"></v-divider>
          <router-link class="nav-link" :to="{name: 'Store'}"
          >WYBÓR BILETU</router-link>
          <v-divider vertical class="mx-2"></v-divider>
          <router-link class="nav-link" :to="{name: 'TICKET'}"
          >KOSZYK</router-link>
          <div class="cart-items">
            {{cart.length}}
          </div>
        </v-col>
      </v-layout>
    </v-app-bar>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.nav-link {
  text-decoration: none;
  color: inherit;
}
.cart-items{
  position: absolute;
  top: -1px;
  right: -1px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>

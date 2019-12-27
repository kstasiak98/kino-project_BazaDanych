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
</style>

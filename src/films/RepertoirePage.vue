<template>
    <v-row>
      <v-col xs12 class="film-column" v-for="film in films" :key="film.id" >
        <FilmText :filmP="film"></FilmText>
      </v-col>
    </v-row>
</template>

<script>
import FilmText from './FilmText.vue';

export default {
  name: 'RepertoirePage',
  components: { FilmText },
  data() {
    return {
      films: [
        {
          id: 1,
          title: 'Mamba',
          content: 'Horror opowiadajacy o złowrogiej mambie atakujacej ludzi',
        },
        {
          id: 2,
          title: 'Samba',
          content: 'Film o tańcu',
        },
        {
          id: 3,
          title: 'Tico',
          content: 'Film o samochodzie',
        },
        {
          id: 4,
          title: 'Maxi King',
          content: 'Film o batonie',
        },
        {
          id: 5,
          title: 'Girls',
          content: 'Film o dziewczynach',
        },
        {
          id: 6,
          title: 'Mens',
          content: 'Film o facetach',
        },
      ],
    };
  },
};
</script>

<style scoped>

  .film-column{
    justify-content: center;
    text-align: center;
    flex-wrap: wrap !important;
  }
</style>

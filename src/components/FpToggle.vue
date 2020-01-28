<template>
  <v-layout>
    <v-col cols="12">
      <b>{{this.lay}}: </b>
      <v-btn-toggle
        v-model="toggle_follow"
        multiple
      >
        <template v-for="(place,index) in film.places">
          <FpButton v-bind:key="place"
                    :buttonN="(index+1)"
                    :if-disable="disable_buton(index+1)"></FpButton>
          <template v-if="index===2">__</template>
          <template v-if="index===12">__</template>
        </template>
      </v-btn-toggle>
<!--      <v-divider></v-divider>-->
<!--        Model: {{ toggle_follow }}-->
    </v-col>
  </v-layout>
</template>
<script>
import FpButton from './FpButton.vue';

export default {
  name: 'FpToggle',
  components: { FpButton },
  props: ['placed', 'reserved', 'film', 'lay'],
  mounted() {
    this.make_reservation();
  },
  data() {
    return {
      toggle_follow: [],
      disable_table: [],
      choses_palace: [],
      last_place: [],
    };
  },
  watch: {
    toggle_follow: {
      deep: true,
      handler() {
        this.make_reservation();
        if (this.bind_methods()) {
          this.bind_methods();
        }
      },
    },
    myprop: (newVal, oldVal) => {
      console.log(`${newVal} z ${oldVal}`);
    },
  },
  computed: {
    make_array() {
      const array = [];
      // const array2 = [];
      if (this.toggle_follow) {
        for (let i = 0; i < this.toggle_follow.length; i += 1) {
          const place1 = `${this.lay}-${this.toggle_follow[i] + 1}`;
          const place = {
            number: this.toggle_follow[i] + 1,
            lay: this.lay,
            code: place1,
          };
          array.push(place);
          // array2.push(place1);
        }
      }
      // console.log('array', array);
      return array;
    },
  },
  methods: {
    make_reservation() {
      this.disable_table = this.reserved;
    },
    change_last_place(x) {
      if (this.last_place.length === 0) {
        this.last_place.push(x);
      }
      if (this.last_place !== x) {
        this.last_place.pop();
        this.last_place.push(x);
      }
    },
    bind_methods() {
      // console.log(this.make_array);
      this.$emit('bind_methods', this.make_array, this.lay);
    },
    disable_buton(values) {
      for (let i = 0; i < this.disable_table.length; i += 1) {
        const x = this.disable_table[i].split('-');
        const z = Number(x[1]);
        if (this.lay === x[0] && values === z) {
          return false;
        }
      }
      return values !== 0;
    },
  },
};

</script>
<style scoped lang="scss">
</style>

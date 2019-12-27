<template>
 <v-row justify="center">
   <v-col>
     <v-card>
       <v-card-actions>
         <v-img
           :src="require('./image/incognito.jpg')"
         ></v-img>
       </v-card-actions>
       <v-card-text>
         <h1>WITAMY W PROFILU:</h1>
         <tr>
           <td><h3>Nazwa użytkownika: </h3></td>
           <td>Max</td>
         </tr>
         <tr>
           <td><h3>Poczta: </h3></td>
           <td>Max@op.pl</td>
         </tr>
         <tr>
           <td><h3>Ilość punktów: </h3></td>
           <td>COUNT</td>
         </tr>
         <tr>
           <td><h3>Aktualne bilety: </h3></td>
           <td><v-btn>SPRAWDŹ</v-btn></td>
         </tr>
       </v-card-text>
     </v-card>
   </v-col>
 </v-row>
</template>

<script>
export default {
  name: 'ProfilePage',
};
</script>

<style scoped>

</style>

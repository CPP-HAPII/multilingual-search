<template>
  <div id="app">
    <v-app>
      <!-- <page-home/> -->
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
      <result v-if="$store.state.queryReady"/>
    </v-app>
    <head>
      <!-- Material icons used for Vuetify -->
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    </head>
  </div>
</template>

<script>
import Result from '@/components/Result.vue'
export default {
  name: 'app',
  components: {
    Result
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

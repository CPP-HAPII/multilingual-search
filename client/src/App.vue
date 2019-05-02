<template>
  <div id="app">
    <v-app>
      <!-- <page-home/> -->
      <main>
        <v-container fluid pa-0>
          <router-view></router-view>
        </v-container>
      </main>
      <!-- <query v-if="$store.state.loggedIn"/>
      <result v-if="$store.state.loggedIn"/> -->
    </v-app>
    <head>
      <!-- Material icons used for Vuetify -->
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    </head>
  </div>
</template>

<script>
import Result from '@/components/Result.vue'
import Query from '@/components/Query.vue'
export default {
  name: 'app',
  components: {
    Result,
    Query
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
  margin-top: 0px;
  overflow: hidden;
}
</style>

<template>
<v-layout row wrap>
  <v-flex xs4 offset-xs4>
    <h1>Thank you for participating</h1>
    <p>Session ID is: {{userID}}</p>
  </v-flex>
  <v-flex xs4 offset-xs4>
    <h2>Please close the browser</h2>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  data () {
    return {
      userID: null
    }
  },
  mounted () {
    this.userID = this.$store.getters.getUID
  }
}
</script>

<style scoped>
</style>

<template>
  <v-container fluid pa-0 >
    <v-btn v-on:click="goNext" icon x-large>
      <v-icon class="material-icons-outlined">cancel</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  methods: {
    goNext () {
      this.$router.push('/query/1')
    }
  }
}
</script>

<style scoped>
  .v-btn {
    margin-top: 600px;
  }
  .v-icon {
    /* margin-top: 600px; */
    margin: 0;
    padding: 0;
    font-size: 64px;
  }
</style>

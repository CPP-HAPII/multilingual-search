<template>
  <v-flex sm4>
    <v-btn-toggle v-model="toggle_none" @change="btnClick">
      <v-btn color="success" small block></v-btn>
      <!-- <v-btn small>Possibly Relevant</v-btn> -->
      <v-btn color="error" small></v-btn>
      </v-btn-toggle>
  </v-flex>
</template>

<script>
export default {
  props: ['num'],
  data () {
    return {
      toggle_none: null
    }
  },
  methods: {
    btnClick () {
      this.$emit('update', this.toggle_none, this.num)
    }
  }
}
</script>

<style scoped>
  .v-btn {
    min-width: 60px;
  }
</style>

<template>
  <v-flex sm4>
    <v-btn-toggle v-model="toggle_none" @change="btnClick">
      <v-btn color="success" small block></v-btn>
      <!-- <v-btn color="warning" small></v-btn> -->
      <v-btn color="error" small></v-btn>
      </v-btn-toggle>
  </v-flex>
</template>

<script>
import QueryService from '@/services/QueryService'
export default {
  props: ['num', 'id', 'language'],
  data () {
    return {
      toggle_none: null
    }
  },
  methods: {
    btnClick () {
      var toPost = {
        userID: this.$store.getters.getUID,
        resultID: this.id,
        rank: this.num,
        relevance: this.toggle_none,
        queryLanguage: this.language
      }

      QueryService.relevance(toPost)

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

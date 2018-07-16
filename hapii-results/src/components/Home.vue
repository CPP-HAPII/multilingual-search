<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap align-center>
      <v-flex xs12 d-flex>
        <v-subheader>Description: {{desc.description}}</v-subheader>
      </v-flex>
      <v-flex xs12 sm6 d-flex offset-sm3>
        <v-select
          :items="items"
          v-model="desc"
          label="Select Query"
          solo
          item-text="query"
          item-value="description"
          return-object
        ></v-select>
      </v-flex>
      <v-flex>
        <v-btn color="info" v-on:click="processQ(desc.id)">Search</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QueryService from '@/services/QueryService'
export default {
  data () {
    return {
      items: [],
      desc: {'id': null, 'description': null}
    }
  },
  async mounted () {
    this.items = (await QueryService.queries()).data
  },
  methods: {
    processQ: function (qID) {
      this.$store.dispatch('setqID', qID)
    }
  }
}
</script>

<style scoped>

</style>

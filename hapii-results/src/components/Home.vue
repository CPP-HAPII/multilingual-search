<template>
  <v-container fluid grid-list-xl>
    <query/>
    <result/>
    <!-- <v-layout row wrap align-center v-if="$store.state.loggedIn">
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
    </v-layout> -->
  </v-container>
</template>

<script>
// import QueryService from '@/services/QueryService'
import Result from '@/components/Result.vue'
import Query from '@/components/Query.vue'
export default {
  name: 'app',
  components: {
    Result,
    Query
  },
  //   data () {
  //     return {
  //       items: [],
  //       desc: {'id': null, 'description': null}
  //     }
  //   },
  async mounted () {
    if (this.$store.state.redirect) {
      this.$router.push('/Register')
    } else {
      this.$router.push(`/query/${this.getters.getID}`)
    }
    // this.items = (await QueryService.queries()).data
  }
  //   methods: {
  //     processQ: function (qID) {
  //       this.$store.dispatch('setqID', qID)
  //     }
  //   }
}
</script>

<style scoped>

</style>

<template>
  <v-container fluid grid-list-xl pa-0>
    <v-layout row wrap align-center v-if="$store.state.loggedIn">
      <v-flex xs12 d-flex pa-0>
        <v-subheader>Description: {{desc}}</v-subheader>
      </v-flex>
      <v-flex xs12 d-flex pa-0>
        <v-subheader>Query: {{query}}</v-subheader>
      </v-flex>
      <!-- <v-flex xs4 d-flex offset-sm3 pa-0>
        <v-text-field
          :value="query"
          label="Query"
          readonly
        ></v-text-field>
      </v-flex> -->
    </v-layout>
    <result v-if="$store.state.loggedIn"/>
  </v-container>
</template>

<script>
import QueryService from '@/services/QueryService'
import Result from '@/components/Result.vue'
export default {
  data () {
    return {
      query: null,
      desc: null,
      qID: this.$store.state.route.params.queryID
    }
  },
  components: {
    Result
  },
  beforeRouteUpdate (to, from, next) {
    this.qID = to.params.queryID
    next()
  },
  watch: {
    qID: async function () {
      var queryID = this.$store.state.route.params.queryID
      var query = (await QueryService.show(queryID)).data
      this.query = query['query']
      this.desc = query['description']
    }
  },
  async mounted () {
    if (this.$store.state.redirect) {
      this.$router.push('/Register')
    }
    var queryID = this.$store.state.route.params.queryID
    var query = (await QueryService.show(queryID)).data
    this.query = query['query']
    this.desc = query['description']
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

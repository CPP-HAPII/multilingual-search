<template>
  <v-container pt-0 mt-0 fluid grid-list-xl >
    <v-layout class="query" pb-5 mb-0 row wrap align-center v-if="$store.state.loggedIn">
      <v-flex class="desc" pa-0 xs12 d-flex offset-xs4>
        <v-list-tile class="desc" color="black">Description: {{desc}}</v-list-tile>
      </v-flex>
      <v-flex class="desc" pa-0 xs12 d-flex offset-xs4>
        <v-list-tile class="desc" color="black">Query: {{query}}</v-list-tile>
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
  .query {
    max-height: 100px;
    /* height: 60px; */
  }
  .desc {
    max-height: 30px;
  }
  .v-list-tile {
    max-height: 40px;
  }
</style>

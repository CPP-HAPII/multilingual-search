<template>
  <v-container pa-0 ma-0 fluid grid-list-xl>
    <v-layout class="query" mt-4 pb-5 mb-4 row wrap align-center v-if="$store.state.loggedIn">
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
    <result :someID='qID' :language='language' :key="$store.state.actualQuery" v-if="$store.state.loggedIn"/>
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
      qID: this.$store.state.route.params.queryID,
      language: null
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
      this.updateStuff()
      this.query = query['query']
      this.desc = query['description']
    }
  },
  async mounted () {
    if (this.$store.state.redirect) {
      this.$router.push('/Register')
    }
    var queryID = this.$store.state.route.params.queryID
    var toQuery = this.getQuery(queryID)

    var language = this.$store.getters.getLanguage
    var query = null
    if (language === 'Spanish') {
      this.$store.dispatch('setActualQuery', toQuery)
      if ((queryID % 2) === 1) {
        query = (await QueryService.show(toQuery)).data
        this.language = 'Spanish'
      } else {
        query = (await QueryService.show(toQuery + 40)).data
        this.language = 'English'
      }
    } else {
      toQuery += 80
      this.$store.dispatch('setActualQuery', toQuery)
      if ((queryID % 2) === 1) {
        query = (await QueryService.show(toQuery)).data
        this.language = 'Chinese'
      } else {
        query = (await QueryService.show(toQuery + 40)).data
        this.language = 'English'
      }
    }
    this.query = query['query']
    this.desc = query['description']
  },
  methods: {
    processQ: function (qID) {
      this.$store.dispatch('setqID', qID)
    },
    async updateStuff () {
      var queryID = this.$store.state.route.params.queryID
      var toQuery = this.getQuery(queryID)

      var language = this.$store.getters.getLanguage
      var query = null
      if (language === 'Spanish') {
        this.$store.dispatch('setActualQuery', toQuery)
        if ((queryID % 2) === 1) {
          query = (await QueryService.show(toQuery)).data
          this.language = 'Spanish'
        } else {
          query = (await QueryService.show(toQuery + 40)).data
          this.language = 'English'
        }
      } else {
        toQuery += 80
        this.$store.dispatch('setActualQuery', toQuery)
        if ((queryID % 2) === 1) {
          query = (await QueryService.show(toQuery)).data
          this.language = 'Chinese'
        } else {
          query = (await QueryService.show(toQuery + 40)).data
          this.language = 'English'
        }
      }
      this.query = query['query']
      this.desc = query['description']
    },
    getQuery: function (id) {
      // Latin square 14 combinations
      var sequence = [
        [3, 13, 10, 7, 12, 9, 6, 2, 1, 5, 0, 11, 8, 4],
        [7, 0, 2, 4, 9, 5, 12, 13, 6, 10, 1, 8, 3, 11],
        [2, 9, 5, 12, 13, 4, 7, 1, 8, 6, 11, 0, 10, 3],
        [6, 11, 13, 3, 8, 10, 1, 5, 7, 0, 9, 4, 2, 12],
        [13, 8, 9, 11, 5, 3, 0, 7, 4, 1, 2, 6, 12, 10],
        [5, 2, 8, 13, 7, 1, 9, 11, 0, 3, 10, 12, 6, 5],
        [0, 7, 6, 8, 3, 2, 4, 12, 5, 11, 13, 10, 1, 9],
        [12, 1, 0, 6, 10, 7, 8, 3, 13, 9, 4, 5, 11, 2],
        [9, 4, 7, 0, 2, 11, 3, 10, 12, 13, 6, 2, 5, 8],
        [10, 3, 12, 2, 6, 0, 11, 4, 9, 8, 5, 13, 7, 1],
        [1, 5, 11, 10, 0, 11, 2, 6, 3, 7, 8, 9, 4, 13],
        [5, 6, 1, 9, 4, 13, 10, 8, 11, 12, 3, 2, 0, 7],
        [8, 10, 3, 1, 11, 6, 5, 9, 2, 4, 12, 7, 13, 0],
        [11, 12, 4, 5, 1, 8, 13, 0, 10, 2, 7, 3, 9, 6]
      ]
      var userIndex = this.$store.getters.getUID % 14
      var query = id
      return sequence[userIndex][query - 1] + 1
    }
  }
}
</script>

<style scoped>
  .query {
    max-height: 80px;
    /* height: 60px; */
  }
  .desc {
    max-height: 30px;
  }
  .v-list-tile {
    max-height: 40px;
  }
</style>

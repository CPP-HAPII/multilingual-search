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
        query = (await QueryService.show(toQuery + 36)).data
        this.language = 'English'
      }
    } else {
      toQuery += 72
      this.$store.dispatch('setActualQuery', toQuery)
      if ((queryID % 2) === 1) {
        query = (await QueryService.show(toQuery)).data
        this.language = 'Chinese'
      } else {
        query = (await QueryService.show(toQuery + 36)).data
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
          query = (await QueryService.show(toQuery + 36)).data
          this.language = 'English'
        }
      } else {
        toQuery += 72
        this.$store.dispatch('setActualQuery', toQuery)
        if ((queryID % 2) === 1) {
          query = (await QueryService.show(toQuery)).data
          this.language = 'Chinese'
        } else {
          query = (await QueryService.show(toQuery + 36)).data
          this.language = 'English'
        }
      }
      this.query = query['query']
      this.desc = query['description']
    },
    getQuery: function (id) {
      // Latin square 14 combinations
      var sequence = [
        [1, 2, 30, 3, 29, 4, 28, 5, 27, 6, 26, 7, 25, 8, 24, 9, 23, 10, 22, 11, 21, 12, 20, 13, 19, 14, 18, 15, 17, 16],
        [2, 3, 1, 4, 30, 5, 29, 6, 28, 7, 27, 8, 26, 9, 25, 10, 24, 11, 23, 12, 22, 13, 21, 14, 20, 15, 19, 16, 18, 17],
        [3, 4, 2, 5, 1, 6, 30, 7, 29, 8, 28, 9, 27, 10, 26, 11, 25, 12, 24, 13, 23, 14, 22, 15, 21, 16, 20, 17, 19, 18],
        [4, 5, 3, 6, 2, 7, 1, 8, 30, 9, 29, 10, 28, 11, 27, 12, 26, 13, 25, 14, 24, 15, 23, 16, 22, 17, 21, 18, 20, 19],
        [5, 6, 4, 7, 3, 8, 2, 9, 1, 10, 30, 11, 29, 12, 28, 13, 27, 14, 26, 15, 25, 16, 24, 17, 23, 18, 22, 19, 21, 20],
        [6, 7, 5, 8, 4, 9, 3, 10, 2, 11, 1, 12, 30, 13, 29, 14, 28, 15, 27, 16, 26, 17, 25, 18, 24, 19, 23, 20, 22, 21],
        [7, 8, 6, 9, 5, 10, 4, 11, 3, 12, 2, 13, 1, 14, 30, 15, 29, 16, 28, 17, 27, 18, 26, 19, 25, 20, 24, 21, 23, 22],
        [8, 9, 7, 10, 6, 11, 5, 12, 4, 13, 3, 14, 2, 15, 1, 16, 30, 17, 29, 18, 28, 19, 27, 20, 26, 21, 25, 22, 24, 23],
        [9, 10, 8, 11, 7, 12, 6, 13, 5, 14, 4, 15, 3, 16, 2, 17, 1, 18, 30, 19, 29, 20, 28, 21, 27, 22, 26, 23, 25, 24],
        [10, 11, 9, 12, 8, 13, 7, 14, 6, 15, 5, 16, 4, 17, 3, 18, 2, 19, 1, 20, 30, 21, 29, 22, 28, 23, 27, 24, 26, 25],
        [11, 12, 10, 13, 9, 14, 8, 15, 7, 16, 6, 17, 5, 18, 4, 19, 3, 20, 2, 21, 1, 22, 30, 23, 29, 24, 28, 25, 27, 26],
        [12, 13, 11, 14, 10, 15, 9, 16, 8, 17, 7, 18, 6, 19, 5, 20, 4, 21, 3, 22, 2, 23, 1, 24, 30, 25, 29, 26, 28, 27],
        [13, 14, 12, 15, 11, 16, 10, 17, 9, 18, 8, 19, 7, 20, 6, 21, 5, 22, 4, 23, 3, 24, 2, 25, 1, 26, 30, 27, 29, 28],
        [14, 15, 13, 16, 12, 17, 11, 18, 10, 19, 9, 20, 8, 21, 7, 22, 6, 23, 5, 24, 4, 25, 3, 26, 2, 27, 1, 28, 30, 29],
        [15, 16, 14, 17, 13, 18, 12, 19, 11, 20, 10, 21, 9, 22, 8, 23, 7, 24, 6, 25, 5, 26, 4, 27, 3, 28, 2, 29, 1, 30],
        [16, 17, 15, 18, 14, 19, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 7, 26, 6, 27, 5, 28, 4, 29, 3, 30, 2, 1],
        [17, 18, 16, 19, 15, 20, 14, 21, 13, 22, 12, 23, 11, 24, 10, 25, 9, 26, 8, 27, 7, 28, 6, 29, 5, 30, 4, 1, 3, 2],
        [18, 19, 17, 20, 16, 21, 15, 22, 14, 23, 13, 24, 12, 25, 11, 26, 10, 27, 9, 28, 8, 29, 7, 30, 6, 1, 5, 2, 4, 3],
        [19, 20, 18, 21, 17, 22, 16, 23, 15, 24, 14, 25, 13, 26, 12, 27, 11, 28, 10, 29, 9, 30, 8, 1, 7, 2, 6, 3, 5, 4],
        [20, 21, 19, 22, 18, 23, 17, 24, 16, 25, 15, 26, 14, 27, 13, 28, 12, 29, 11, 30, 10, 1, 9, 2, 8, 3, 7, 4, 6, 5],
        [21, 22, 20, 23, 19, 24, 18, 25, 17, 26, 16, 27, 15, 28, 14, 29, 13, 30, 12, 1, 11, 2, 10, 3, 9, 4, 8, 5, 7, 6],
        [22, 23, 21, 24, 20, 25, 19, 26, 18, 27, 17, 28, 16, 29, 15, 30, 14, 1, 13, 2, 12, 3, 11, 4, 10, 5, 9, 6, 8, 7],
        [23, 24, 22, 25, 21, 26, 20, 27, 19, 28, 18, 29, 17, 30, 16, 1, 15, 2, 14, 3, 13, 4, 12, 5, 11, 6, 10, 7, 9, 8],
        [24, 25, 23, 26, 22, 27, 21, 28, 20, 29, 19, 30, 18, 1, 17, 2, 16, 3, 15, 4, 14, 5, 13, 6, 12, 7, 11, 8, 10, 9],
        [25, 26, 24, 27, 23, 28, 22, 29, 21, 30, 20, 1, 19, 2, 18, 3, 17, 4, 16, 5, 15, 6, 14, 7, 13, 8, 12, 9, 11, 10],
        [26, 27, 25, 28, 24, 29, 23, 30, 22, 1, 21, 2, 20, 3, 19, 4, 18, 5, 17, 6, 16, 7, 15, 8, 14, 9, 13, 10, 12, 11],
        [27, 28, 26, 29, 25, 30, 24, 1, 23, 2, 22, 3, 21, 4, 20, 5, 19, 6, 18, 7, 17, 8, 16, 9, 15, 10, 14, 11, 13, 12],
        [28, 29, 27, 30, 26, 1, 25, 2, 24, 3, 23, 4, 22, 5, 21, 6, 20, 7, 19, 8, 18, 9, 17, 10, 16, 11, 15, 12, 14, 13],
        [29, 30, 28, 1, 27, 2, 26, 3, 25, 4, 24, 5, 23, 6, 22, 7, 21, 8, 20, 9, 19, 10, 18, 11, 17, 12, 16, 13, 15, 14],
        [30, 1, 29, 2, 28, 3, 27, 4, 26, 5, 25, 6, 24, 7, 23, 8, 22, 9, 21, 10, 20, 11, 19, 12, 18, 13, 17, 14, 16, 15]
      ]
      var userIndex = this.$store.getters.getUID % 30
      var query = id
      return sequence[userIndex][query - 1]
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

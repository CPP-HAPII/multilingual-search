<template>
  <v-container fluid grid-list-xl pa-0>
    <v-layout row align-left v-if="getID">
      <v-flex xs4 d-flex>
        <ol>
          <li v-for="(result, index) in results" :key="result.id">
            <div class="title"><font size="4">
              {{result.title}}
            </font>
            </div>
            <div class="url">
              {{result.url}}
            </div>
            <div class="snip">
              {{result.snippet}}
            </div>
            <div>
              <relevance :num='index' @update="updateRelevance"/>
            </div>
          </li>
          <v-btn v-on:click="subResponse">Next</v-btn>
        </ol>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QueryService from '@/services/QueryService'
import Relevance from '@/components/Relevance.vue'
export default {
  components: {
    Relevance
  },
  data () {
    return {
      results: [],
      clicked: [null, null, null, null, null, null],
      qID: null
    }
  },
  // async mounted (){
  //   getResults
  // },
  computed: {
    getID () {
      // console.log(this.$store.getters.getID)
      var id = this.$store.getters.getID
      this.getResults(id)
      return id
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.qID = to.params.queryID
    next()
  },
  watch: {
    qID: function () {
      this.getResults()
    }
  },
  methods: {
    getResults: async function (myVal) {
      var r1 = (await QueryService.results({ 'id': myVal })).data
      // var q2 = myVal + 1
      var r2 = (await QueryService.results({ 'id': 10 })).data
      var uid = this.$store.getters.getUID
      var sequence = [
        [1, 2, 0, 3, 4],
        [4, 0, 3, 1, 2],
        [2, 3, 2, 0, 1],
        [2, 3, 1, 4, 0],
        [0, 1, 4, 2, 3]
      ]
      var row = uid % 5
      var column = this.$store.getters.getID % 5
      var decider = sequence[row][column]
      this.results = []
      // console.log(row)
      // console.log(column)
      if (decider === 0) {
        this.results = r1
      } else if (decider === 1) {
        this.results = r2
      } else if (decider === 2) {
        this.results.push(r1[0], r1[1], r1[2], r2[0], r2[1], r2[2])
      } else if (decider === 3) {
        this.results.push(r2[0], r2[1], r2[2], r1[0], r1[1], r1[2])
      } else if (decider === 4) {
        this.results.push(r1[0], r2[0], r1[1], r2[1], r1[2], r2[2])
      }
      // console.log(this.results)
    },
    updateRelevance (newValue, index) {
      this.clicked[index] = newValue
    },
    subResponse: function () {
      var toSave = []
      var rel = ['Definitely Relevant', 'Possibly Relevant', 'Not Relevant']
      for (var index = 0; index < 6; index++) {
        var result = {
          userID: this.$store.getters.getUID,
          // Make sure to fix resultID
          resultID: index * 10,
          rank: index,
          relevance: rel[this.clicked[index]]
        }
        toSave.push(result)
      }
      // console.log(toSave)
      // QueryService.relevance(toSave)
      var qID = parseInt(this.$store.state.route.params.queryID) + 1
      // console.log(qID)
      if (qID < 10) {
        this.$store.dispatch('setqID', qID)
        this.$router.push(`/query/${qID}`)
      } else {
        this.$router.push('/questionnaire/3')
      }
    }
  }
}
</script>

<style scoped>
  li {
    margin-bottom: 20px
  }
  div {
    text-align: left
  }
  div.snip {
    word-wrap: break-word;
    overflow: hidden;
    height: 40px;
  }
  div.url {
    color: green;
    white-space: nowrap;
    width: 570px;
    overflow: hidden;
    text-overflow: ellipsis
  }
  div.title {
    color: blue
  }
</style>

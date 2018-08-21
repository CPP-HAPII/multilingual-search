<template>
  <v-container fluid grid-list-xl>
    <v-layout row align-left v-if="getID">
      <v-flex xs12 d-flex>
        <ol>
          <li v-for="(result, index) in results" :key="result.id">
            <div class="title">
              <a href="result.url">{{result.title}}</a>
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
          <v-btn v-on:click="subResponse">Submit Responses</v-btn>
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
      clicked: [null, null, null, null, null, null, null, null, null, null]
    }
  },
  computed: {
    getID () {
      // console.log(this.$store.getters.getID)
      var id = this.$store.getters.getID
      this.getResults(id)
      return id
    }
  },
  // watch: {
  //   getID () {
  //     this.getResults(this.$store.getters.getID)
  //   }
  // },
  methods: {
    getResults: async function (myVal) {
      this.results = (await QueryService.results({ 'id': myVal })).data
    },
    updateRelevance (newValue, index) {
      this.clicked[index] = newValue
    },
    subResponse: function () {
      var toSave = []
      var rel = ['Definitely Relevant', 'Possibly Relevant', 'Not Relevant']
      for (var index = 0; index < 10; index++) {
        var result = {
          userID: this.$store.getters.getUID,
          // Make sure to fix resultID
          resultID: index * 10,
          rank: index,
          relevance: rel[this.clicked[index]]
        }
        toSave.push(result)
      }
      console.log(toSave)
      QueryService.relevance(toSave)
    }
  }
}
</script>

<style scoped>
  li {
    margin-bottom: 20px;
  }
  div {
    text-align: left
  }
  div.snip {
    word-wrap: break-word
  }
  div.url {
    color: green
  }
</style>

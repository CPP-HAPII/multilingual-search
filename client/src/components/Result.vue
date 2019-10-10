<template>
  <v-container fluid grid-list-xl pt-1 px-0>
    <v-layout row align-left v-if="getID" :key="qID">
      <v-flex xs4 d-flex offset-xs4>
        <ul>
          <li v-for="(result, index) in results" :key="result.title">
            <!-- <div>{{result.id}}</div> -->
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
            <div class="myButton">
              <relevance :num='index' :id='result.id' :language='language'/>
            </div>
          </li>
          <v-btn align="center" v-on:click="subResponse">Next</v-btn>
        </ul>
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
  props: ['someID', 'language'],
  data () {
    return {
      results: [],
      clicked: [null, null, null, null, null, null],
      qID: this.$store.state.route.params.queryID,
      order: null,
      someId: null
    }
  },
  computed: {
    getID () {
      var id = this.$store.getters.getActualQuery
      console.log(id)
      this.getResults(id)
      return id
    }
  },
  // async mounted () {
  //   var id = this.$store.getters.getActualQuery
  //   // this.getResults(id)
  // },
  methods: {
    async makePageStuff () {
      var toPost = {
        userID: this.$store.getters.getUID,
        task: parseInt(this.qID),
        qLanguage: this.language,
        order: this.order
      }

      var result = (await QueryService.page({toPost})).data
      this.someId = result.id
    },
    getResults: async function (myVal) {
      var r1 = (await QueryService.results({ 'id': myVal })).data
      // var q2 = myVal + 1
      var sTemp = null
      if (this.$store.getters.getLanguage === 'Spanish') {
        sTemp = myVal + 36
      } else {
        sTemp = myVal + 36
      }
      var r2 = (await QueryService.results({ 'id': sTemp })).data
      var uid = this.$store.getters.getUID
      var sequence = [
        [1, 2, 0, 3, 4],
        [4, 0, 3, 1, 2],
        [3, 4, 2, 0, 1],
        [2, 3, 1, 4, 0],
        [0, 1, 4, 2, 3]
      ]
      var row = uid % 5
      var column = this.$store.state.route.params.queryID % 5
      var decider = sequence[row][column]
      this.order = decider
      this.results = []
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
      this.makePageStuff()
    },
    // updateRelevance (newValue, index) {
    //   this.clicked[index] = newValue
    //   var toPost = {
    //     userID: this.$store.getters.getUID,
    //     resultID: this.results[index].id,
    //     rank: index,
    //     relevance: newValue
    //   }
    // QueryService.relevance(toPost)
    // },
    subResponse: async function () {
      // var toSave = []
      // var rel = ['Definitely Relevant', 'Possibly Relevant', 'Not Relevant']
      // for (var index = 0; index < 6; index++) {
      //   var result = {
      //     userID: this.$store.getters.getUID,
      //     // Make sure to fix resultID
      //     resultID: index * 10,
      //     rank: index,
      //     relevance: rel[this.clicked[index]]
      //   }
      //   toSave.push(result)
      // }
      // console.log(toSave)
      // QueryService.relevance(toSave)

      await QueryService.pageUpdate({id: this.someId})

      var qID = parseInt(this.$store.state.route.params.queryID) + 1
      // this.clicked = [null, null, null, null, null, null]
      // console.log(this.clicked)
      if (qID < 31) {
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
  ul {
    list-style-type: none;
  }
  li {
    margin-bottom: 18px
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
    width: 600px;
    overflow: hidden;
    text-overflow: ellipsis
  }
  div.title {
    color: blue;
    width: 600px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }
  div.myButton {
    max-height: 48px;
  }
</style>

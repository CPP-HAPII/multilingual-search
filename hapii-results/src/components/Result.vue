<template>
  <v-container fluid grid-list-xl>
    <v-layout row align-left v-if="getID">
      <v-flex xs12 d-flex>
        <ol>
          <li v-for="result in results" :key="result.id">
            <div class="title">
              <a href="result.url">{{result.title}}</a>
            </div>
            <div class="url">
              {{result.url}}
            </div>
            <div class="snip">
              {{result.snippet}}
            </div>
          </li>
        </ol>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QueryService from '@/services/QueryService'
export default {
  data () {
    return {
      results: []

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

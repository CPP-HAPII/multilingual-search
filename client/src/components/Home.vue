<template>
  <v-container fluid grid-list-xl pa-0>
    <query/>
    <result/>
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
  #home {
    margin-top: 0px
  }
</style>

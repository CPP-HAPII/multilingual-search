<template>
  <v-container fluid pa-0 >
    <v-btn v-on:click="goNext" icon x-large>
      <v-icon class="material-icons-outlined">cancel</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import QueryService from '@/services/QueryService'
export default {
  data () {
    return {
      someId: null
    }
  },
  mounted () {
    this.makePageStuff()
  },

  methods: {
    async makePageStuff () {
      var toPost = {
        userID: this.$store.getters.getUID,
        task: 0,
        qLanguage: 'Eye Tracker Base',
        order: -1
      }

      var result = (await QueryService.page({toPost})).data
      this.someId = result.id
    },

    async goNext () {
      await QueryService.pageUpdate({id: this.someId})

      this.$router.push('/query/1')
    }
  }
}
</script>

<style scoped>
  .v-btn {
    margin-top: 500px;
  }
  .v-icon {
    /* margin-top: 600px; */
    margin: 0;
    padding: 0;
    font-size: 64px;
  }
</style>

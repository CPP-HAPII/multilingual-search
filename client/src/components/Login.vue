<template>
  <v-layout row wrap>
    <v-flex xs4 offset-xs4>
      <h2> Register</h2>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <v-flex xs4 offset-xs4>
        <v-text-field
          label="Name"
          placeholder=""
          v-model="credentials.firstname"
        ></v-text-field>
      </v-flex>
      <v-flex xs4 offset-xs4>
        <v-text-field
          label="Score"
          placeholder=""
          v-model="credentials.score"
        ></v-text-field>
      </v-flex>
      <v-flex xs4 offset-xs4>
        <v-select
          :items="languages"
          v-model="language"
          label="Select language">
        </v-select>
      </v-flex>
      <v-btn color="info" v-on:click="submit()">Login</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationServices from '@/services/AuthenticationServices'
export default {
  data () {
    return {
      credentials: {
        firstname: '',
        score: null
        // broncoID: ''
      },
      error: '',
      languages: ['Spanish', 'Chinese'],
      language: null
    }
  },
  methods: {
    async submit () {
      var score = parseInt(this.credentials.score)
      var name = this.credentials.firstname
      var id = this.hash(name) % score
      var credentials = {
        // ID: this.credentials.broncoID,
        id: id,
        englishScore: score,
        language: this.language
      }
      var response = (await AuthenticationServices.register(credentials)).data
      console.log(response.id)
      this.$store.dispatch('setUserID', response.id)
      this.$store.dispatch('setLanguage', this.language)
      this.$router.push('/questionnaire/1')
    },
    hash (val) {
      var hash = 0
      if (val.length === 0) {
        return hash
      }
      for (var i = 0; i < val.length; i++) {
        var char = val.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash
      }
      return hash
    }
  }
}
</script>

<style scoped>
</style>

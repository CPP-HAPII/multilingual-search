<template>
  <v-layout row wrap>
    <v-flex xs4 offset-xs4>
      <h2> Register</h2>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
    <v-flex xs4 offset-xs4>
      <v-text-field
        label="First Name"
        placeholder=""
        v-model="credentials.firstname"
      ></v-text-field>
    </v-flex>
    <v-flex xs4 offset-xs4>
      <v-text-field
        label="Last Name"
        placeholder=""
        v-model="credentials.lastname"
      ></v-text-field>
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
        lastname: ''
        // broncoID: ''
      },
      error: ''
    }
  },
  methods: {
    async submit () {
      var credentials = {
        // ID: this.credentials.broncoID,
        fname: this.credentials.firstname,
        lname: this.credentials.lastname
      }
      var response = (await AuthenticationServices.register(credentials)).data
      console.log(response.id)
      this.$store.dispatch('setUserID', response.id)
      this.$router.push('/query/1')
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap align-center>
      <v-flex xs12 d-flex>
        <v-subheader>Questionnaire 3</v-subheader>
      </v-flex>
    </v-layout>
    <v-layout row align-left>
      <v-flex xs4 d-flex>
        <ol>
          <li v-for="question in questions" :key="question.id">
            <div>
              <Question :question='question'/>
            </div>
          </li>
        </ol>
      </v-flex>
    </v-layout>
    <v-layout row align-left>
      <v-flex xs4 d-flex>
        <v-btn v-on:click="Continue">Next</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QueryService from '@/services/QueryService'
import Question from '@/components/Question.vue'
export default {
  data () {
    return {
      questions: [],
      range: {
        start: 1,
        end: 5
      }
    }
  },
  async mounted () {
    this.questions = (await QueryService.questions(this.range)).data
    console.log(this.questions)
  },
  components: {
    Question
  },
  methods: {
    Continue: function () {
      this.$router.push('/thanks')
    }
  }
}
</script>

<style scoped>
</style>

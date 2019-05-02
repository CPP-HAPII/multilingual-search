<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap align-center>
      <v-flex xs12 d-flex>
        <v-subheader>Demographic Questionnaire</v-subheader>
      </v-flex>
    </v-layout>
    <v-layout row align-left>
      <v-flex xs6 d-flex>
        <ol>
          <li>
            <p>I found it easy to rate results when the list was only in one language [1-strongly disagree, 2, 3, 4, 5-strongly agree]</p>
            <v-radio-group v-model="radio1" :mandatory="true">
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
            <v-radio label="4" value="4"></v-radio>
            <v-radio label="5" value="5"></v-radio>
            </v-radio-group>
          </li>
          <li>
            <p>I found it easy to rate results when the list contained both languages (i.e. a mixed list)  [1-strongly disagree, 2, 3, 4, 5-strongly agree]</p>
            <v-radio-group v-model="radio2" :mandatory="true">
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
            <v-radio label="4" value="4"></v-radio>
            <v-radio label="5" value="5"></v-radio>
            </v-radio-group>
          </li>
          <li>
            <p>I found it easy to rate results when the mixed list had interleaved results, i.e. a result in language 1, then a results in language 2, then again language 1, etc. [1-strongly disagree, 2, 3, 4, 5-strongly agree]</p>
            <v-radio-group v-model="radio3" :mandatory="true">
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
            <v-radio label="4" value="4"></v-radio>
            <v-radio label="5" value="5"></v-radio>
            </v-radio-group>
          </li>
          <li>
            <p>I found it easy to rate results when the mixed list was grouped by language, e.g. all language 2 results were grouped together [1-strongly disagree, 2, 3, 4, 5-strongly agree]</p>
            <v-radio-group v-model="radio4" :mandatory="true">
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
            <v-radio label="4" value="4"></v-radio>
            <v-radio label="5" value="5"></v-radio>
            </v-radio-group>
          </li>
          <li>
            <p>Any other comments?</p>
            <v-text-field
              label="Enter comments"
              placeholder=""
              v-model="experience"
            ></v-text-field>
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
      radio1: null,
      radio2: null,
      radio3: null,
      radio4: null,
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
  .p{
      align-content:"left"
  }
</style>

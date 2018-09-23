<template>
  <v-container fluid>
    <p>{{ question.question }}</p>
    <p>{{ radios || 'null' }}</p>
    <v-radio-group v-model="radios" :mandatory="true">
      <v-radio :label="question.answer1" value="radio-1"></v-radio>
      <v-radio :label="question.answer2" value="radio-2"></v-radio>
      <v-radio :label="question.answer3" value="radio-3"></v-radio>
      <v-radio :label="question.answer4" value="radio-4"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
export default {
  props: ['question'],
  data () {
    return {
      radios: ''
    }
  }
}
</script>

<style scoped>
</style>

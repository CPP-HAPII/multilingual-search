<template>
  <v-btn-toggle v-model="toggle_none" @change="btnClick">
    <v-btn>Definitely Relevant</v-btn>
    <v-btn>Possibly Relevant</v-btn>
    <v-btn>Not Relevant</v-btn>
    </v-btn-toggle>
</template>

<script>
export default {
  props: ['num'],
  data () {
    return {
      toggle_none: null
    }
  },
  methods: {
    btnClick () {
      this.$emit('update', this.toggle_none, this.num)
    }
  }
}
</script>

<style scoped>
</style>

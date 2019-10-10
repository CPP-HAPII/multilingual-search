<template>
  <v-flex sm4>
    <v-btn-toggle v-model="toggle_none" @change="btnClick">
      <v-btn :disabled="grnDisable" color="success" small block>
        <v-icon>check_circle_outline</v-icon>
      </v-btn>
      <!-- <v-btn color="warning" small></v-btn> -->
      <v-btn :disabled="redDisable" color="error" small>
        <v-icon class="material-icons-outlined">cancel</v-icon>
      </v-btn>
    </v-btn-toggle>
  </v-flex>
</template>

<script>
import QueryService from '@/services/QueryService'
export default {
  props: ['num', 'id', 'language'],
  data () {
    return {
      toggle_none: null,
      redDisable: false,
      grnDisable: false
    }
  },
  methods: {
    btnClick () {
      if (this.toggle_none === 0) {
        this.redDisable = true
      } else if (this.toggle_none === 1) {
        this.grnDisable = true
      }
      var toPost = {
        userID: this.$store.getters.getUID,
        resultID: this.id,
        rank: this.num,
        relevance: this.toggle_none,
        queryLanguage: this.language
      }

      QueryService.relevance(toPost)

      this.$emit('update', this.toggle_none, this.num)
    }
  }
}
</script>

<style scoped>
  .v-btn {
    min-width: 60px;
  }
</style>

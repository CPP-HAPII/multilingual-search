import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    userID: 1,
    qID: null,
    queryReady: false
  },
  mutations: {
    setqID (state, qID) {
      state.qID = qID
      if (qID) {
        state.queryReady = true
      } else {
        state.queryReady = false
      }
    }
  },
  actions: {
    setqID ({commit}, qID) {
      commit('setqID', qID)
    }
  },
  getters: {
    getID: state => {
      return state.qID
    },
    getUID: state => {
      return state.userID
    }
  }
})

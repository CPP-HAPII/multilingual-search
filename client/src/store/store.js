import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import Cookies from 'js-cookie'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    userID: null,
    qID: 1,
    queryReady: true,
    loggedIn: false,
    redirect: true
  },
  plugins: [createPersistedState()],
  mutations: {
    setqID (state, qID) {
      state.qID = qID
      if (qID) {
        state.queryReady = true
      } else {
        state.queryReady = false
      }
    },
    setUserID (state, userID) {
      state.userID = userID
      if (userID) {
        state.loggedIn = true
        state.redirect = false
      } else {
        state.loggedIn = false
        state.redirect = true
      }
    }
  },
  actions: {
    setqID ({commit}, qID) {
      commit('setqID', qID)
    },
    setUserID ({commit}, userID) {
      commit('setUserID', userID)
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
  // plugins: [
  //   createPersistedState({
  //     storage: {
  //       getItem: key => Cookies.get(key),
  //       // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
  //       setItem: (key, value) =>
  //         Cookies.set(key, value, { expires: 3, secure: true }),
  //       removeItem: key => Cookies.remove(key)
  //     }
  //   })
  // ]
})

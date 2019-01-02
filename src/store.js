import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);
import WordService from './WordService'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  strict: true,
  state: {
    isLoged: false,
    isLooging: false,
    userName: "",
    email: "",
    accessToken: ""
  },
  mutations: {
    setLoged(state, bolean) {
      this.state.isLoged = bolean
    },
    isLoading(state, bolean) {
      this.state.isLooging = bolean;
    },
    setUserName(state, username) {
      this.state.userName = username
    },
    setEmail(state, email) {
      this.state.email = email
    },
    setAccessToken(state, accessToken) {
      this.state.accessToken = accessToken
    }
  },
  actions: {
    login({
      commit,
      state
    }, params) {

      let {
        email,
        password
      } = params
      commit('isLoading', true)
      WordService.getWord({
        email: email,
        password: password
      }).then(r => {
        commit('setLoged', true)
        commit('setEmail', email)
        commit('setAccessToken', "access_token")
        commit('setUserName', "bay007")
        commit('isLoading', false)
      }).catch(r => {
        commit('setLoged', false)
        commit('setEmail', '')
        commit('setAccessToken', "")
        commit('setUserName', "")
        commit('isLoading', false)
      })
    }
  }
});
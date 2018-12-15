import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    isLoading(state, bolean) {
      this.state.isLoading = bolean
    }
  },
  actions: {}
});
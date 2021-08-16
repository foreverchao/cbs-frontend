import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    id:"",
  },
  mutations: {
    changeToken(state, value) {
      state.token = value;
    },
    changeId(state, value) {
      state.id = value;
    },
  },
  actions: {
  },
  modules: {
  }
})

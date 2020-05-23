import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: null,
    respondents: [],
    project: null,
  },

  mutations: {
    setTransactions (state, transactions) {
      state.transactions = transactions
    },

    setRespondents (state, respondents) {
      state.respondents = [...state.respondents, ...respondents]
    },

    setProject (state, project) {
      state.project = project
    }
  },

  actions: {
    fetchTransactions ({ commit }) {
      fetch(`${process.env.VUE_APP_API_URL}/transactions`)
        .then(r => r.json())
        .then(r => commit('setTransactions', r))
        .catch(e => { console.log(e); commit('setTransactions', null) })
    },

    fetchRespondents ({ commit, state }) {
      // deal with params from state
      const start = state.respondents && state.respondents.length ? state.respondents.length : 0
      fetch(`${process.env.VUE_APP_API_URL}/respondents?start=${start}`)
        .then(r => r.json())
        .then(r => commit('setRespondents', r))
        .catch(e => { console.log(e); commit('setRespondents', []) })
    },

    fetchProject ({ commit }) {
      fetch(`${process.env.VUE_APP_API_URL}/project`)
        .then(r => r.json())
        .then(r => commit('setProject', r))
        .catch(e => { console.log(e); commit('setProject', null) })
    }
  },

  modules: {
  }
})

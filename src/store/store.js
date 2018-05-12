'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {}
}

// other mutations to state go here
export const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  SHOW_MESSENGER (state, val) {
    state.shouldShowMessenger = val
  }
}

export const actions = {
  showMessenger ({ commit }) {
    commit('SHOW_MESSENGER', true)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

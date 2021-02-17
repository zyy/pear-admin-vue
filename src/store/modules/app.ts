export default {
  namespaced: true,
  state: {
    routerLoading: false
  },
  mutations: {
    'TOGGLE_ROUTER_LOADING' (state, payload) {
      state.routerLoading = payload
    }
  },
  actions: {
    toggleRouterLoading ({ commit }, payload) {
      commit('TOGGLE_ROUTER_LOADING', payload)
    }
  }
}

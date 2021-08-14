export const state = () => ({
  mobileMenu: false,
  list: []
})

export const mutations = {
  SET_MOBILE_MENU(state, boolean) {
    state.mobileMenu = boolean
  },
  SET_LIST(state, array) {
    state.list = array
  }
}

export const actions = {
  setMobileMenu({commit}, boolean) {
    commit('SET_MOBILE_MENU', boolean)
  },
  setList({commit},array) {
    commit('SET_LIST', array)
  }

}

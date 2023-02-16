export const state = () => ({
  spomeniks: [],
  shownSpomenik: {},
})
  
export const mutations = {
  initSpomeniks(state, spomeniks) {
    state.spomeniks = spomeniks
  },
  setShownSpomenik(state, spomenik) {
    state.shownSpomenik = spomenik
  },
  updateSpomenik(state, spomenik) {
    const outdatedSpomenik = state.spomeniks.find(s => s.id === spomenik.id)
    Object.assign(outdatedSpomenik, spomenik)
  },
  removeSpomenik(state, spomenikId) {
    state.spomeniks = state.spomeniks.filter((spomenik) => spomenik.id !== spomenikId)
  },
}

export const actions = {
  initSpomeniks({ commit }, spomeniks) {
    commit('initSpomeniks', spomeniks)
  },
  setShownSpomenik({ commit }, spomenik) {
    commit('setShownSpomenik', spomenik)
  },
  updateSpomenik({ commit }, spomenik) {
    commit('updateSpomenik', spomenik)
  },
  removeSpomenik({ commit }, spomenikId) {
    commit('removeSpomenik', spomenikId)
  },
}

export const getters = {
  spomeniks: (state) => {
    return state.spomeniks
  },
  shownSpomenik: (state) => {
    return state.shownSpomenik
  },
}
import { ModalsEnum } from '../constants/enums';

export const state = () => ({
  currentModal: null,
})
  
export const mutations = {
  showModal(state, modal) {
    state.currentModal = modal
  },
}

export const actions = {
  showModal({ commit }, modal) {
    commit('showModal', modal);
  },
}

export const getters = {
  currentModal: (state) => {
    return state.currentModal
  },
  modalsEnum() {
    return ModalsEnum
  },
}
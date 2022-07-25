export const state = () => ({
  gallery: [],
  shownItem: {},
  newItem: {},
  newItemSrc: null,
})
  
export const mutations = {
  initItems(state, gallery) {
    state.gallery = gallery
  },
  setShownItem(state, item) {
    state.shownItem = item
  },
  setNewItemSrc(state, src) {
    state.newItemSrc = src
  },
  updateNewItem(state, item) {
    state.newItem = item
  },
  updateItem(state, item) {
    const outdatedItem = state.gallery.find(l => l.id === item.id)
    Object.assign(outdatedItem, item)
  },
  removeItem(state, itemId) {
    state.gallery = state.gallery.filter((item) => item.id !== itemId)
  },
}

export const actions = {
  initItems({ commit }, gallery) {
    gallery.forEach(item => {
      item.thumb = item.src
    })
    commit('initItems', gallery);
  },
  setShownItem({ commit }, item) {
    commit('setShownItem', item);
  },
  setNewItemSrc({ commit }, item) {
    commit('setNewItemSrc', item);
  },
  updateNewItem({ commit }, item) {
    commit('updateNewItem', item);
  },
  updateItem({ commit }, item) {
    commit('updateItem', item);
  },
  removeItem({ commit }, itemId) {
    commit('removeItem', itemId)
  },
}

export const getters = {
  gallery: (state) => {
    return state.gallery
  },
  shownItem: (state) => {
    return state.shownItem
  },
  newItem: (state) => {
    return state.newItem
  },
  newItemSrc: (state) => {
    return state.newItemSrc
  },
}
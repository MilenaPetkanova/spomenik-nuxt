import { Routes } from '~/constants/constants'

export default function ({ $axios, store }, inject) {
  
  const imagessUrl = `${$axios.defaults.baseURL}${Routes.Spomenik}/${store.state.spomeniks.shownSpomenik?.id}${Routes.Images}`;

  const galleryService = {
    getUrl() {
      const imagesApiUrl = `${$axios.defaults.baseURL}${Routes.Spomenik}/${store.state.spomeniks.shownSpomenik?.id}${Routes.Images}`;
      return imagesApiUrl
    },
    async getAll() {
      return await $axios.$get(this.getUrl())
    },
    async create(newItem) {
      await $axios.$post(this.getUrl(), newItem)
    },
    async update(itemId, itemValue) {
      await $axios.$put(`${this.getUrl()}/${itemId}`, itemValue)
    },
    async delete(itemId) {
      await $axios.$delete(`${this.getUrl()}/${itemId}`)
    },
  }

  inject('galleryService', galleryService)
}
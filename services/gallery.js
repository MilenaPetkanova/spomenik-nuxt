import { Routes } from '~/constants/constants'

export default function ({ $axios, store }, inject) {
  
  const imagessUrl = `${$axios.defaults.baseURL}${Routes.Spomenik}/${store.state.spomeniks.shownSpomenik?.id}${Routes.Images}`;

  const galleryService = {
    async getAll() {
      return await $axios.$get(imagessUrl)
    },
    async create(newItem) {
      await $axios.$post(imagessUrl, newItem)
    },
    async update(itemId, itemValue) {
      await $axios.$put(`${imagessUrl}/${itemId}`, itemValue)
    },
    async delete(itemId) {
      await $axios.$delete(`${imagessUrl}/${itemId}`)
    },
  }

  inject('galleryService', galleryService)
}
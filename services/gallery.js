export default function ({ $axios }, inject) {
  
  const imagessUrl = `${$axios.defaults.baseURL}/images`;

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
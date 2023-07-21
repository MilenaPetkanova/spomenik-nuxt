import { Routes } from '~/constants/constants'

export default function ({ $axios, store }, inject) {
  
  const lettersService = {
    getUrl() {
      const letterApiUrl = `${$axios.defaults.baseURL}${Routes.Spomenik}/${store.state.spomeniks.shownSpomenik?.id}${Routes.Letters}`
      return letterApiUrl
    },
    async getAll() {
      return await $axios.$get(this.getUrl())
    },
    async create(newRecord) {
      await $axios.$post(this.getUrl(), newRecord)
    },
    async update(letterId, letterValue) {
      await $axios.$put(`${this.getUrl()}/${letterId}`, letterValue)
    },
    async delete(letterId) {
      await $axios.$delete(`${this.getUrl()}/${letterId}`)
    },
  }

  inject('lettersService', lettersService)
}
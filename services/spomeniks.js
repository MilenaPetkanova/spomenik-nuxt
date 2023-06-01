import { Routes } from '~/constants/constants'

export default function ({ $axios, store }, inject) {

  const spomeniksUrl = `${$axios.defaults.baseURL}${Routes.Spomeniks}`;
  
  const spomeniksService = {
    async getAll() {
      const response = await $axios.$get(spomeniksUrl)
      return response
    },
    async create(newRecord) {
      const response = await $axios.$post(spomeniksUrl, newRecord)
      return response.data
    },
    async update(spomenikId, spomenikValue) {
      await $axios.$put(`${spomeniksUrl}/${spomenikId}`, spomenikValue)
    },
    async delete(spomenikId) {
      await $axios.$delete(`${spomeniksUrl}/${spomenikId}`)
    },
  }

  inject('spomeniksService', spomeniksService)
}
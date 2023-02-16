export default function ({ $axios }, inject) {

  const spomeniksUrl = `${$axios.defaults.baseURL}/spomeniks`;
  
  const spomeniksService = {
    async getAll() {
      return await $axios.$get(spomeniksUrl)
    },
    async create(newRecord) {
      await $axios.$post(spomeniksUrl, newRecord)
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
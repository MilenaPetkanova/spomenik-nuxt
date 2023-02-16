import axios from 'axios'

export default () => {
  return axios.create({
    baseURL:  process.env.NODE_ENV !== 'production' ? process.env.SPOMENIK_API_URL_LOCAL : process.env.SPOMENIK_API_URL_PROD
  })
}
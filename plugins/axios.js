export default function({ store, app: { $axios }, redirect }) {
  $axios.onError(error => {
    console.log('axios.js error :>> ', error);
    if (error.response.status === 500) {
      redirect('/errors/500')
    }
  })
}
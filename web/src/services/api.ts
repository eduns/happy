import axios from 'axios'

const api = axios.create({
  baseURL: 'https://3333-e173676f-942e-4a56-8fbd-e41d524ad232.ws-us02.gitpod.io'
})

export default api
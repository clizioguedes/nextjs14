import axios from 'axios'

export const api = axios.create()

api.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL + 'api/v1'

api.defaults.headers.common = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

api.defaults.timeout = 60000

api.defaults.withCredentials = true

api.interceptors.response.use(undefined, function (error) {
  // if (error.response.status === 401 && store.getState().auth.authenticated) {
  //   store.dispatch(logout())
  // }
  return Promise.reject(error)
})

import Axios from 'axios'

const TOKEN_KEY = 'LIVE_GIFT_TOKEN'
// eslint-disable-next-line no-undef
const storage = localStorage

export function setToken (token) {
  storage.setItem(TOKEN_KEY, token)
}

export function getToken () {
  return storage.getItem(TOKEN_KEY)
}

export function deleteToken () {
  storage.removeItem(TOKEN_KEY)
}

export function initAxiosInterceptors () {
  Axios.interceptors.request.use(function (config) {
    const token = getToken()

    if (token) {
      config.headers.Authorization = token
    }

    return config
  })

  Axios.interceptors.response.use(
    function (response) {
      return response
    },

    function (error) {
      console.log(error)
      if (error.response.status === 401) {
        deleteToken()
        window.location = '/login'
      } else {
        return Promise.reject(error)
      }
    }
  )
}

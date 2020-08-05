import xapi from '@/plugins/index/axios.js'
import router from '@/plugins/router'

export default {
  state: {
    isAuthenticated: false,
    loggedUser: ''
  },

  mutations: {
    LOGIN_USER (state, data) {
      state.isAuthenticated = true
      state.loggedUser = data.user
      sessionStorage.setItem('loggedIn', true)
      sessionStorage.setItem('loggedUser', data.user)
      sessionStorage.setItem('token', data.token)
      sessionStorage.setItem('tokenExpires', data.tokenExpires)
      sessionStorage.setItem('caller', data.user)
    },
    LOGOUT_USER (state) {
      state.isAuthenticated = false
      state.loggedUser = ''
      sessionStorage.clear()
    }
  },

  actions: {
    async loginUser ({ commit }, credentials) {
      return xapi.post('user/login', credentials)
        .then(response => {
          commit('LOGIN_USER', response.data)
          router.push('/overview')
        })
    },
    async registerUser ({ commit }, payload) {
      return xapi.post('user/register', payload)
    },
    async logoutUser ({ commit }) {
      commit('LOGOUT_USER')
      if (router.currentRoute.path !== '/login') {
        router.push('/overview').catch(e => {
          if (e) {
            router.push('/login')
          }
        })
      }
    },
    loadUserGlobalState ({ state }) {
      state.isAuthenticated = sessionStorage.getItem('loggedIn')
      state.loggedUser = sessionStorage.getItem('loggedUser')
    }
  }
}

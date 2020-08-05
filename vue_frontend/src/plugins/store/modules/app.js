import countries from '@/plugins/countries.js'

export default {
  state: {
    drawer: false,
    locale: null,
    countries: [],
    systemBarInfo: '',
    cartStatus: 0,
    currentCase: {}
  },

  getters: {
    getCountries (state) {
      state.countries.map(c => {
        c.name = c.local_name[state.locale] || c.local_name['en']
      })
      state.countries.sort((a, b) => a.name.localeCompare(b.name))
      state.countries.sort((a, b) => a.iso3166_1 === state.locale.toUpperCase() ? -1 : 1)
      try {
        return state.countries
      } catch {
        return []
      }
    },
    getLocaleFlagName (state) {
      if (state.locale === 'en') {
        return 'united-states'
      }
      return 'slovakia'
    },
    getLocale (state) {
      return state.locale === null ? 'sk' : state.locale
    },
    getCurrentCase (state) {
      return state.currentCase
    }
  },

  mutations: {
    TOGGLE_DRAWER (state) {
      state.drawer = !state.drawer
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    INIT_LOCALE (state, payload) {
      if (state.locale === null) {
        if (payload.locale.includes('-')) {
          payload.locale = payload.locale.split('-')[0]
        }
        this.commit('SET_LOCALE', payload)
      } else {
        payload.locale = state.locale
        this.commit('SET_LOCALE', payload)
      }
    },
    SET_LOCALE (state, payload) {
      const supportedLocales = ['sk', 'en']
      if (supportedLocales.includes(payload.locale)) {
        state.locale = payload.locale
        payload.ri18n.locale = payload.locale
      } else {
        state.locale = 'sk'
        payload.ri18n.locale = 'sk'
      }
    },
    SET_COUNTRIES (state) {
      state.countries = countries
    },
    SET_SYSTEM_BAR_INFO (state, payload) {
      state.systemBarInfo = payload
    },
    CHANGE_CART_STATUS (state) {
      state.cartStatus = state.cartStatus === 0 ? 1 : 0
    },
    SET_CURRENT_CASE (state, payload) {
      state.currentCase = payload
    }
  },

  actions: {
    async loadCountries ({ commit, state }) {
      commit('SET_COUNTRIES')
    }
  }

}

import Vue from 'vue'
import i18n from '@/plugins/i18n'
import store from '@/plugins/store'

const participantDefault = {
  id: '',
  businessId: '',
  name: '',
  type: '',
  formData: {},
  result: {},
  investigations: [],
  legalRepresentative: false,
  authorizedRepresentative: false
}

function getCurrentYear () {
  return new Date().getFullYear()
}

function formatDate (stringDate) {
  const date = new Date(stringDate)
  return date.toLocaleString([i18n.locale], { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function formatDateWithoutTime (stringDate) {
  const date = new Date(stringDate)
  return date.toLocaleString([i18n.locale], { month: 'short', day: '2-digit', year: 'numeric' })
}

function formatCountry (countryA2Code) {
  let countries = store.getters.getCountries
  if (countryA2Code) {
    for (var i = 0; i < countries.length; i++) {
      if (countries[i].iso3166_1.toLowerCase() === countryA2Code.toLowerCase()) {
        return countries[i].name
      }
    }
  }
  return countryA2Code
}

function formatCurrency (price) {
  return new Intl.NumberFormat(i18n.locale, { style: 'currency', currency: 'EUR' }).format(price)
}

function formatCurrencyNoZero (price) {
  if (price === 0) {
    return '- €'
  }
  return new Intl.NumberFormat(i18n.locale, { style: 'currency', currency: 'EUR' }).format(price)
}
function getRequiredRolesByCaseType (caseType) {
  if (caseType === 'TransactionCase') {
    return ['SKMINI']
  } else {
    return []
  }
}

const utils = {
  participantDefault: participantDefault,
  getCurrentYear: () => getCurrentYear(),
  formatDate: (stringDate) => formatDate(stringDate),
  formatDateWithoutTime: (stringDate) => formatDateWithoutTime(stringDate),
  formatCountry: (countryA2Code) => formatCountry(countryA2Code),
  formatCurrency: (price) => formatCurrency(price),
  formatCurrencyNoZero: (price) => formatCurrencyNoZero(price),
  getRequiredRolesByCaseType: (caseType) => getRequiredRolesByCaseType(caseType)
}

export default {
  participantDefault: participantDefault,
  getCurrentYear: () => getCurrentYear(),
  formatDate: (stringDate) => formatDate(stringDate),
  formatDateWithoutTime: (stringDate) => formatDateWithoutTime(stringDate),
  formatCountry: (countryA2Code) => formatCountry(countryA2Code),
  formatCurrency: (price) => formatCurrency(price),
  formatCurrencyNoZero: (price) => formatCurrencyNoZero(price),
  getRequiredRolesByCaseType: (caseType) => getRequiredRolesByCaseType(caseType)
}

Vue.prototype.$utils = utils

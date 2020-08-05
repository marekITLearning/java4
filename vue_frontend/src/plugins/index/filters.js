import Vue from 'vue'
import i18n from '@/plugins/i18n'

Vue.filter('translate', function (value) {
  if (!value) return ''
  return i18n.t(value)
})

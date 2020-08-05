
<template>
  <!-- This Component is returning selected date in ISO-8601 standard. Example YYYY-MM-DDT00:00:00.000Z -->
  <v-menu
    ref="menuSearchDate"
    v-model="menuSearchDate"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <!-- v-mask="'####/##/##'" -->
      <v-text-field
        v-model="dateFormatted"
        :label="label"
        :hint="hint"
        persistent-hint
        :error-messages="errorMessages"
        :clearable="clearable"
        readonly
        v-on="on"
        @input="$v.dateFormatted.$touch()"
        @blur="date = parseDate(dateFormatted)"
      />
      <!-- :error-messages="errorBirthDate() || errorMsg" -->
    </template>

    <v-date-picker
      ref="picker"
      v-model="date"
      :max="maxDate"
      :min="minDate"
      no-title
      :locale="$i18n.locale"
      @input="menuSearchDate = false"
    />
  </v-menu>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

export default {
  name: 'DateInputField2',
  mixins: [validationMixin],
  props: {
    label: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    errorMessages: {
      type: Array,
      default: () => [],
      required: false
    },
    tooltip: {
      type: String,
      default: '',
      required: false
    },
    val: { // Default value
      type: String,
      default: '',
      required: false
    },
    maxDate: { // SET IN FORMAT YYYY-MM-DD
      type: String,
      default: new Date().toISOString().substring(0, 10),
      required: false
    },
    minDate: { // SET IN FORMAT YYYY-MM-DD
      type: String,
      default: new Date('1899-12-31').toISOString().substr(0, 10),
      required: false
    },
    pickYearFirst: {
      type: Boolean,
      default: false,
      required: false
    },
    clearable: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      menuSearchDate: false,
      dateFormatted: null, // YYYY/MM/DD
      date: null // YYYY-MM-DD
    }
  },
  validations: {
    dateFormatted: { required }
  },
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    }
  },
  watch: {
    menuSearchDate (val) {
      if (this.pickYearFirst) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
    date (val) {
      this.$v.dateFormatted.$touch()
      this.dateFormatted = this.formatDate(this.date)
      this.$emit('input', this.date)
    }
  },
  created () {
  },
  methods: {
    parseDate (dateFormatted) {
      this.$v.dateFormatted.$touch()
      if (!dateFormatted) return null

      const [year, month, day] = dateFormatted.split('/')
      var dateParsed = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      return dateParsed
    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${year}/${month}/${day}`
    }
  }

}
</script>

<template>
  <v-menu
    v-model="menuSearchDate"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="inputDate"
        v-bind="$attrs"
        :label="label"
        :hint="hint"
        persistent-hint
        readonly
        v-on="on"
      />
    </template>

    <v-date-picker
      ref="picker"
      v-model="inputDate"
      :max="maxDate"
      :min="minDate"
      no-title
      :locale="$i18n.locale"
      @input="menuSearchDate = false"
    />
  </v-menu>
</template>
<script>
export default {
  name: 'DateInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    transactionDate: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      menuSearchDate: false,
      inputDate: this.value,
      maxDate: new Date().toLocaleTimeString,
      minDate: '1989-01-01'
    }
  },
  watch: {
    menuSearchDate (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
    inputDate (val) {
      this.inputDate = val
      this.$emit('input', this.inputDate)
    }
  },
  created () {
    if (this.transactionDate) {
      this.maxDate = new Date('2049-12-31').toISOString().substr(0, 10)
    } else {
      this.maxDate = new Date().toISOString().substr(0, 10)
      this.minDate = new Date('1929-12-31').toISOString().substr(0, 10)
    }
  }
}
</script>

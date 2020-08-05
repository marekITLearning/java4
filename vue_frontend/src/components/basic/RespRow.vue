<template>
  <v-row
    class="justify-end"
    :class="rowcss"
  >
    <div
      :style="{ width: width}"
      :class="lcss"
    >
      <span v-if="left">{{ $i18n.t(left) }}</span>
      <span v-if="leftTranslated">{{ leftTranslated }}</span>
      <div
        class="ml-2 justify-end float-right"
        :class="rcss"
      >
        {{ right }}
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'RespRow',
  props: {
    left: {
      type: String,
      default: ''
    },
    leftTranslated: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    rowcss: {
      type: String,
      default: 'body-1 mb-3'
    },
    lcss: {
      type: String,
      default: ''
    },
    rcss: {
      type: String,
      default: 'font-weight-medium'
    }
  }
}
</script>

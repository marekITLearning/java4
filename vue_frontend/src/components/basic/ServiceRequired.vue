<template>
  <v-card-actions
    class="ma-0 pa-0"
    :class="dclass"
    :style="dstyle"
  >
    <v-card-text class="ma-0 pa-2 body-1">
      {{ $i18n.t(title) }}

      <slot
        name="customButton"
      />

      <v-btn
        v-if="!$slots.customButton"
        text
        class="success float-right mt-2"
        @click="$router.push(pushTo)"
      >
        {{ $i18n.t(label) }}
      </v-btn>
    </v-card-text>
  </v-card-actions>
</template>

<script>
export default {
  name: 'ServiceRequired',
  props: {
    title: {
      type: String,
      required: true
    },
    pushTo: {
      type: String,
      default: '/services/package'
    },
    dclass: {
      type: String,
      default: 'info1--text'
    },
    dstyle: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '$l.app.moreInfo'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

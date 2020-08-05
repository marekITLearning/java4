<template>
  <v-system-bar
    v-if="$store.state.app.systemBarInfo && $store.state.app.systemBarInfo.length > 0"
    class="info white--text"
    height="30"
    :lights-out="false"
    :window="false"
    app
    dark
    style="line-height: 1em; font-size: 13px;"
  >
    <v-icon
      class="white--text"
    >
      mdi-information
    </v-icon>
    <span>{{ $store.state.app.systemBarInfo }}</span>
    <v-spacer />
    <v-btn
      x-small
      dark
      text
      class="white info1--text ml-2"
      @click="$store.commit('SET_SYSTEM_BAR_INFO', '')"
    >
      {{ '$l.app.close' | translate }}
    </v-btn>
  </v-system-bar>
</template>

<script>
export default {
  name: 'SystemBar'
}
</script>

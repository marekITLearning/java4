<template>
  <v-app-bar
    class="success custom_v-app-bar"
    app
    dark
  >
    <v-row
      class="ma-0 pa-0 align-center"
      style="display: contents !important"
    >
      <v-btn
        icon
        class="ma-0 pa-0"
        @click.stop="$store.commit('TOGGLE_DRAWER')"
      >
        <v-icon>{{ ($store.state.app.drawer && !$vuetify.breakpoint.xs) ? 'mdi-view-quilt' : 'mdi-menu' }}</v-icon>
      </v-btn>

      <div
        class="logoWrapper cursor_pointer"
        @click.stop="$router.push('/overview')"
      >
        <v-img
          :src="require('@/assets/logo.svg')"
          class="logoContent"
          contain
          :height="$vuetify.breakpoint.xs ? 24 : 30"
          :width="$vuetify.breakpoint.xs ? 90 : 120"
        />
      </div>

      <div
        class="mx-2"
        :class="{title : !$vuetify.breakpoint.xs}"
        style="line-height: 1.2em;"
      >
        {{ $route.meta.label | translate }}
      </div>
      <v-spacer />
      <app-order-cart
        v-if="$store.state.user.isAuthenticated && cartItems.length > 0"
        class="mr-4"
        :cart-items="cartItems"
      />

      <app-right-menu
        class="mr-4"
      />
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  computed: {
    cartItems () {
      if (this.$store.state.app.cartStatus) {} // makes this reactive
      if (sessionStorage.getItem('app-cart')) {
        return JSON.parse(sessionStorage.getItem('app-cart'))
      } else {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .logoWrapper {
    background-color:white;
    border-radius: 22px;
    padding: 8px;
  }
</style>

<style lang="scss">
  .custom_v-app-bar .v-toolbar__content {
    padding: 0px;
  }
</style>

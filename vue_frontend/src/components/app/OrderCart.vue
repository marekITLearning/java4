<template>
  <div>
    <v-menu
      offset-y=""
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          width="40"
          height="40"
          class="success ma-0 pa-0"
          tile
          v-on="on"
        >
          <v-badge
            :content="cartItems.length"
            :value="cartItems.length"
            color="secondary"
            overlap
          >
            <v-icon large>
              mdi-cart-outline
            </v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list>
        <v-row class="justify-end white ma-1">
          <v-btn
            class="info ma-2"
            text
            @click="removeAllFromCart()"
          >
            {{ $i18n.t('$l.services.clear') }}
          </v-btn>
          <v-btn
            class="success ma-2"
            text
            @click="$router.push('/processOrder').catch(() => {})"
          >
            {{ $i18n.t('$l.services.finish') }}
          </v-btn>
        </v-row>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'OrderCart',
  props: {
    cartItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeAllFromCart () {
      sessionStorage.removeItem('app-cart')
      this.$store.commit('CHANGE_CART_STATUS')
    }
  }
}
</script>

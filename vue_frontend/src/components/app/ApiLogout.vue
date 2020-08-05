<template>
  <div>
    <transition
      mode="out-in"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <v-card
        v-if="exp > 0 && exp < 360000 && $store.state.user.isAuthenticated"
        class="ma-3 pa-2 body-2 align-center mt-5 mb-0"
        color="info1--text"
        outlined
        tile
        style="border-radius: 0.3em;"
      >
        {{ $i18n.t('$l.hint.logout') + left }}
        <div
          class="cursor_pointer success--text"
          @click.stop="$store.dispatch('logoutUser')"
        >
          {{ $i18n.t('$l.hint.loginAgain') }}
        </div>
      </v-card>
    </transition>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

function sec2time (timeInSeconds) {
  var pad = function (num, size) { return ('000' + num).slice(size * -1) }
  var time = parseFloat(timeInSeconds).toFixed(3)
  var hours = Math.floor(time / 60 / 60)
  var minutes = Math.floor(time / 60) % 60
  var seconds = Math.floor(time - minutes * 60)
  return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2)
}

export default {
  name: 'ApiLogout',
  data () {
    return {
      left: '00:00:00',
      exp: 360000
    }
  },
  created () {
    setInterval(this.doGetLogout, 1000)
  },
  methods: {
    doGetLogout () {
      this.exp = sessionStorage.getItem('tokenExpires') - Date.now()
      this.left = sec2time(this.exp / 1000)
      if (this.exp < 0) {
        if (this.$store.state.user.isAuthenticated) {
          this.$store.dispatch('logoutUser')
        }
      }
    },
    beforeEnter (el) {
      el.style.opacity = 0
    },
    enter (el, done) {
      Velocity(el,
        { opacity: 1 },
        { duration: 400, easing: 'easeIn  ', complete: done })
    }
  }
}
</script>

<template>
  <div
    v-bind="$attrs"
    class="shake"
  >
    <v-list
      style="font-size: 16px; line-height: 20px;"
      class="font-weight-light"
      color="info1"
      dark
    >
      <v-list-item>
        <v-icon
          left
        >
          mdi-information
        </v-icon>
        <transition
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <div
            v-if="visible"
            style="overflow: hidden; width: 100%;"
          >
            <span
              ref="hintContent"
              style="position: relative;"
            >
              <slot />
            </span>
          </div>
        </transition>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  name: 'NoteHint',
  data () {
    return {
      visible: false,
      bouncing: null
    }
  },
  mounted () {
    this.visible = true
    this.$nextTick(() => {
      // setTimeout(() => {
      //   this.bounce()
      //   setTimeout(() => {
      //     this.bounce()
      //     this.bouncing = setInterval(() => {
      //       this.bounce()
      //     }, 30000)
      //   }, 10000)
      // }, 5000)
    })
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
    },
    enter (el, done) {
      Velocity(el,
        { opacity: 1 },
        { duration: 1000, easing: 'easeOutElastic', complete: done })
    }
    // ,
    // bounce () {
    //   if (this.$refs.hintContent) {
    //     Velocity(this.$refs.hintContent, { left: '0.6em', top: '-0.1em', fontWeight: '500' }, { duration: 100, loop: 2 })
    //   } else {
    //     clearInterval(this.bouncing)
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>

.shake {
  // animation: shake-animation 4.72s ease infinite;
  // animation: shake-animation 9.44s ease infinite;
  animation: shake-animation 14.99s ease infinite;
  transform-origin: 50% 50%;
  animation-delay: 2s;
}
@keyframes shake-animation {
   0% { transform:translate(0,0) }
  // 1.78571% { transform:translate(5px,0) }
  // 0.892855% { transform:translate(5px,0) }
  0.562251% { transform:translate(5px,0) }
  // 3.57143% { transform:translate(0,0) }
  // 1.785715% { transform:translate(0,0) }
  1.1245056% { transform:translate(0,0) }
  // 5.35714% { transform:translate(5px,0) }
  // 2.67857% { transform:translate(5px,0) }
  1.68675692% { transform:translate(5px,0) }
  // 7.14286% { transform:translate(0,0) }
  // 3.57143% { transform:translate(0,0) }
  2.24901133% { transform:translate(0,0) }
  // 8.92857% { transform:translate(5px,0) }
  // 4.464285% { transform:translate(5px,0) }
  2.81126259% { transform:translate(5px,0) }
  // 10.71429% { transform:translate(0,0) }
  // 5.357145% { transform:translate(0,0) }
  3.37351700% { transform:translate(0,0) }
  100% { transform:translate(0,0) }
}
</style>

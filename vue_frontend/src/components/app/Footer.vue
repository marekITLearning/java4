<template>
  <div>
    <v-footer
      class="greyee justify-center pa-0"
      inset
      app
    >
      <div
        v-if="showCookieAgreement"
        class="pa-3"
        style="width: 100%; border: 5px solid olive;"
      >
        <div class="">
          {{ $i18n.t('$l.app.cookiesInfo') }}
          <span
            class="cursor_pointer success--text text--darken-2"
            @click.stop="$router.push('/use-of-cookies').catch(() => {})"
          >
            {{ $i18n.t('$l.app.moreInfo') }}
          </span>
          <v-btn
            class="mt-2 d-flex float-right success"
            text
            @click="setCookieAgreement()"
          >
            {{ '$l.app.cookieAgree' | translate }}
          </v-btn>
        </div>
      </div>

      <span class="font-weight-light copyright my-1">
        &copy;
        marek.ladicky@gmail.com
      </span>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      showCookieAgreement: false
    }
  },
  mounted () {
    this.checkCookieAgreement()
  },
  methods: {
    setCookieAgreement () {
      this.$cookies.set('cookieAgreement', true, -1)
      this.checkCookieAgreement()
    },
    checkCookieAgreement () {
      let agree = this.$cookies.get('cookieAgreement')
      if (agree && agree === 'true') {
        this.showCookieAgreement = false
      } else {
        this.showCookieAgreement = true
      }
    }
  }
}
</script>

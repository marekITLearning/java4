<template>
  <div class="pa-5">
    <basic-card
      width="400"
      color="success"
      :title="$i18n.t('$l.app.signingIn')"
      title-color="white"
      title-weight="bold"
      title-justify="center"
      class="bgLoginCard pa-0 pb-3 pt-0 mx-auto"
      text-color="error--text subtitle-2 text-center"
    >
      <app-api-call
        class="ma-0 pa-0 mb-4"
        :call-result="callResult"
      />

      <v-form
        ref="loginForm"
        lazy-validation
        class="ma-0 pa-0"
        @submit.prevent="doSignInBtn"
      >
        <v-text-field
          ref="userName"
          v-model="login.userName"
          :label="$i18n.t('$l.app.userName')"
          class="white ma-0 mx-3 mt-3"
          prepend-icon="mdi-account-circle"
          :error-messages="($v.login.userName.$dirty && !$v.login.userName.required) ? $i18n.t('$l.app.required') : ''"
          @input="$v.login.userName.$touch()"
          @blur="$v.login.userName.$touch()"
        />
        <v-text-field
          v-model="login.password"
          class="white ma-0 mx-3 mt-4"
          :type="hidenPassword1 ? 'password' : 'text'"
          :append-icon="hidenPassword1 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
          :label="$i18n.t('$l.app.password')"
          prepend-icon="mdi-lock"
          :error-messages="($v.login.password.$dirty && !$v.login.password.required) ? $i18n.t('$l.app.required') : ''"
          @input="$v.login.password.$touch()"
          @blur="$v.login.password.$touch()"
          @click:append="() => (hidenPassword1 = !hidenPassword1)"
        />

        <v-row class="pa-0 px-6 pt-3 pb-4">
          <v-btn
            class="info"
            text
            :loading="isSigningIn"
            type="submit"
            block
          >
            {{ $i18n.t('$l.app.signIn') }}
          </v-btn>
        </v-row>
      </v-form>
    </basic-card>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'FormLogin',
  props: {
    actid: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      callResult: { finished: true, authorized: false, error: null, info: null },
      login: {
        userName: '',
        password: ''
      },
      isSigningIn: false,
      hidenPassword1: true
    }
  },
  validations: {
    login: {
      userName: {
        required
      },
      password: {
        required
      }
    }
  },
  mounted () {
    this.$refs.userName.focus()
    if (this.actid && this.actid.length > 0) {
      this.doSignIn()
    }
  },
  methods: {
    doSignInBtn () {
      this.actid = ''
      this.doSignIn()
    },
    doSignIn () {
      this.callResult.error = null
      this.$v.$touch()
      if (this.actid && this.actid.length > 0) {
      } else {
        if (this.$v.$invalid) return
      }
      if (!this.$refs.loginForm.validate()) return
      this.isSigningIn = true
      this.login.actid = this.actid
      this.$store.dispatch('loginUser', this.login)
        .then(() => {
          this.$refs.loginForm.reset()
        })
        .catch(e => {
          if (e.response) {
            if (e.response.status === 401) {
              this.callResult.error = this.$i18n.t('$l.error.wrongUserNameOrPassword')
            } else {
              this.callResult.error = this.$i18n.t('$l.error.loginFailed')
            }
          } else {
            this.callResult.error = this.$i18n.t('$l.error.notResponse')
          }
        })
        .finally(() => {
          this.isSigningIn = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles';
  .bgLoginCard {
    background: linear-gradient(110deg, $white, $white);
    border-radius: 0.5em;
  }
</style>

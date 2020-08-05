<template>
  <v-app
    id="startapp"
  >
    <v-img
      v-if="!$store.state.user.isAuthenticated"
      v-resize="onResize"
      :src="require('@/assets/drawer.jpg')"
      class="app_background_image"
      :height="imgh"
      :width="imgw"
    />
    <app-system-bar v-if="$store.state.user.isAuthenticated" />
    <app-app-bar v-if="$store.state.user.isAuthenticated" />
    <app-drawer v-if="$store.state.user.isAuthenticated" />
    <app-content />
    <app-footer />
  </v-app>
</template>

<script>
import locale from 'locale2'

export default {
  name: 'App',
  data () {
    return {
      imgh: 1000,
      imgw: 1500,
      exp: 0
    }
  },
  metaInfo () {
    return {
      title: 'STARTAPP',
      titleTemplate: (titleChunk) => {
        return titleChunk ? `STARTAPP | ${titleChunk}` : 'STARTAPP'
      }
    }
  },
  created () {
    this.onResize()
    this.$store.dispatch('loadUserGlobalState')
    this.$store.commit('INIT_LOCALE', { locale: locale, ri18n: this.$root.$i18n })
    this.$store.dispatch('loadCountries')
  },
  methods: {
    onResize () {
      this.imgh = window.innerHeight
      this.imgw = window.innerWidth
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles';
  .app_background_image .v-image__image--cover {
    opacity: 0.6;
    background-color: #445 !important;
  }
  .app_background_image {
    position: absolute;
    background-color: #555 !important;
    height: 100%;
    z-index: 0;
  }
  .cursor_pointer {
    cursor: pointer
  }
  .theme--light.v-card {
    color: $label
  }
  .v-label {
    top: 0em !important;
  }
  .v-card__title {
    word-break: break-word
  }
  .v-text-field__slot label, .v-select__slot label {
    top: 3px !important;
    font-size: 14px;
  }
  // styles for list transition
  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: 1000ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
    transition-property: opacity, transform;
  }
  .list-enter {
    opacity: 0;
    transform: translateX(50px) scaleY(0.5);
  }
  .list-enter-to {
    opacity: 1;
    transform: translateX(0) scaleY(1);
  }
  .list-leave-active {
    position: absolute;
  }
  .list-leave-to {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: center top;
  }
  .v-text-field.v-text-field--enclosed .v-text-field__details {
    margin-bottom: 4px;
  }
</style>

<template>
  <v-content class="greyf6">
    <app-api-logout />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view :key="$route.fullPath" />
    </transition>
  </v-content>
</template>

<script>
export default {
  name: 'Content',
  metaInfo () {
    return {
      title: this.$route.name
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

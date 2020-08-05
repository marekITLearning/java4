<template>
  <v-navigation-drawer
    v-model="drawer"
    class="drawer_background"
    :src="require('@/assets/drawer.jpg')"
    width="256"
    mini-variant-width="76"
    :expand-on-hover="!drawer && !$vuetify.breakpoint.xs"
    :stateless="!$vuetify.breakpoint.xs"
    :permanent="!$vuetify.breakpoint.xs"
    :temporary="$vuetify.breakpoint.xs"
    dark
    app
  >
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="(link, idx) in links"
        :key="idx"
        :to="link.path"
        link
      >
        <v-list-item-icon>
          <v-icon>
            {{ link.meta.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $i18n.t(link.meta.label) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list
      dense
      nav
    >
      <v-list-group
        prepend-icon="mdi-account"
        no-action
        class="adjustIcon"
        color="white"
      >
        <template v-slot:activator>
          <v-list-item-title>{{ $store.state.user.loggedUser }}</v-list-item-title>
        </template>

        <v-list-item
          link
          to="/profile"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-details-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ '$l.paths.profile' | translate }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/settings"
        >
          <v-list-item-icon>
            <v-icon>mdi-tune</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ '$l.paths.settings' | translate }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click.stop="$store.dispatch('logoutUser')"
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ '$l.app.signOut' | translate }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    <v-list
      dense
      nav
    >
      <v-list-item
        link
        to="/terms-of-service"
      >
        <v-list-item-content>
          <v-list-item-title>{{ $i18n.t('$l.paths.termsOfService') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        link
        to="/use-of-cookies"
      >
        <v-list-item-content>
          <v-list-item-title>{{ $i18n.t('$l.paths.useOfCookies') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import paths from '@/plugins/router/paths'

export default {
  name: 'Drawer',
  data () {
    return {
      links: []
    }
  },
  computed: {
    drawer: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        if (this.$vuetify.breakpoint.xs) {
          this.$store.commit('SET_DRAWER', val)
        }
      }
    }
  },
  created () {
    this.links = paths.filter(p => p.meta && p.meta.isMainMenuItem)
    this.$xapi.post('user/hasRequiredRoles', ['ADMIN'])
      .then(r => {
        if (r.data.hasRequiredRoles === true) {
          Array.from(paths, p => {
            if (p.name && p.name === 'Administration') {
              this.links.push(p)
            }
          })
        }
      })
      .catch(e => {})
  }
}
</script>

<style lang="scss" scoped>
  .adjustIcon .v-list-item__icon {
    min-width: 0em !important;
    margin-left: 0em !important;
  }
  .v-list-item .v-list-item__title {
    font-weight: 300!important;
    font-size: .9rem!important;
  }
  .drawer_background {
    background-color: #333 !important;
  }
</style>

<style lang="scss">
  .v-navigation-drawer__image .v-image .v-image__image {
      opacity: .23;
  }
</style>

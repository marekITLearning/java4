<template>
  <div
    class="text-center"
  >
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <a
          v-bind="attrs"
          title="lang"
          class="white--text"
          dark
          v-on="on"
        >
          <v-icon
            color="white"
            small
            class="mr-1"
            style="top: 3px;  float: left;"
          >
            mdi-earth
          </v-icon>
          <span :class="hideTextSx?'d-none d-sm-flex mr-4':''">{{ language }} </span>
        </a>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="selectLanguage(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>

export default {
  name: 'RightMenu',
  props: {
    hideTextSx: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showMenu: false,
      items: [
        { title: 'Slovensky',
          locale: 'sk' },
        { title: 'English',
          locale: 'en' }
      ],
      language: null
    }
  },
  created () {
    this.language = this.getLanguage()
  },
  methods: {
    selectLanguage (item) {
      this.language = item.title
      this.$store.commit('SET_LOCALE', { locale: item.locale, ri18n: this.$root.$i18n })
    },
    getLanguage () {
      return this.items.filter(i => i.locale === this.$store.getters.getLocale)[0].title
    }
  }
}
</script>

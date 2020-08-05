<template>
  <v-container
    fluid
  >
    <app-api-call
      class="ma-0 pa-0 mt-4"
      :call-result="callResult"
    />

    <v-expansion-panels
      v-if="callResult.finished && callResult.authorized"
      class="ma-0 pa-0 mt-4"
    >
      <v-expansion-panel
        v-for="(item, idx) in items"
        :key="idx"
      >
        <v-expansion-panel-header>{{ item.label | translate }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <component
            :is="item.component"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import Users from './Users'

export default {
  name: 'AdministrationWrapper',
  components: {
    Users
  },
  data () {
    return {
      callResult: { finished: true, authorized: false, error: null, info: null },
      activationData: {},
      items: [
        { label: '$l.administration.manageUsers', component: 'Users' }
      ]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
    }
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep {.v-expansion-panel-content__wrap {
    padding: 0px !important;

  }}
</style>

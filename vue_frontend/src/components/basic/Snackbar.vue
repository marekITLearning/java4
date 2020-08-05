<template>
  <v-snackbar
    v-model="snackbarConfig.visible"
    dark
    top
    :color="snackbarConfig.color ? snackbarConfig.color : 'primary'"
    :timeout="snackbarConfig.timeout ? snackbarConfig.timeout : 0"
  >
    <v-container
      fluid
      class="ma-0 pa-0"
    >
      <v-row>
        <v-col class="d-flex ma-0 pa-1 font-weight-medium">
          <v-icon
            color="white"
            class="mr-3"
          >
            mdi-bell-outline
          </v-icon>
          <div style="width: 100%">
            {{ snackbarConfig.title | translate }}
          </div>
          <v-icon
            class="ma-0 pa-0 ml-3"
            size="20"
            dark
            @click="snackbarConfig.visible = false"
          >
            mdi-close-circle
          </v-icon>
        </v-col>
      </v-row>
      <v-row v-if="snackbarConfig.subTitle">
        <v-col class="d-flex ma-0 pa-1 justify-center font-weight-medium">
          <div v-if="snackbarConfig.subTitle">
            {{ snackbarConfig.subTitle | translate }}
          </div>
          <v-icon
            v-if="snackbarConfig.link"
            class="ma-0 pa-0 ml-3"
            size="20"
            dark
            @click="$router.push(snackbarConfig.link)"
          >
            fa-external-link
          </v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snackbar',
  props: {
    snackbarConfig: {
      type: Object,
      default: null
    }
  }
}
</script>

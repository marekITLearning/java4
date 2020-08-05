<template>
  <v-dialog
    v-bind="$attrs"
    persistent
    :max-width="maxWidth"
  >
    <v-card
      :min-width="minWidth"
    >
      <v-card>
        <v-card-title class="headline pr-12">
          {{ title | translate }}
          <v-btn
            absolute
            icon
            rounded
            style="top: 0px; right: 0px"
            class="ma-3 error--text text--lighten-2"
            @click="$emit('close-dialog')"
          >
            <v-icon size="xx-large">
              mdi-close
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-title
          v-if="subtitle"
        >
          <v-container
            fluid
            class="ma-0 pa-0 mb-5"
          >
            <v-row class="ma-0 pa-0 white--text secondary lighten-1">
              <v-col
                cols="12"
              >
                {{ subtitle | translate }}
              </v-col>
            </v-row>
          </v-container>
        </v-card-title>

        <slot />

        <v-card-actions>
          <v-spacer />
          <v-btn
            v-if="saveButton"
            :color="saveButtonColor"
            class="ma-0 pa-0"
            text
            :loading="loadingSaveButton"
            @click="saveDialog"
          >
            {{ saveButtonLabel | translate }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    },
    saveButton: {
      type: Boolean,
      required: false
    },
    saveButtonLabel: {
      type: String,
      default: '$l.app.save'
    },
    saveButtonColor: {
      type: String,
      default: 'info1'
    },
    maxWidth: {
      type: String,
      required: false,
      default: '500'
    },
    minWidth: {
      type: String,
      required: false,
      default: ''
    },
    loadingSaveButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    saveDialog () {
      this.$emit('save-dialog')
    }
  }
}
</script>

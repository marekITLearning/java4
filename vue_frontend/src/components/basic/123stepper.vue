<template>
  <v-row
    class="align-center justify-center text-center ma-0 pa-0 mt-4"
  >
    <div class="d-flex align-center">
      <v-avatar
        color="info1"
        size="32"
        class="white--text font-weight-medium"
        :style="{'opacity': step === 1 ? '1' : '0.2'}"
      >
        1
      </v-avatar>
      <v-divider
        style="width: 22px;"
        class="mx-2"
      />
      <v-avatar
        color="info1"
        size="32"
        class="white--text font-weight-medium"
        :style="{'opacity': step === 2 ? '1' : '0.2'}"
      >
        2
      </v-avatar>
      <v-divider
        style="width: 22px"
        class="mx-2"
      />
      <v-avatar
        color="info1"
        size="32"
        class="white--text font-weight-medium"
        :style="{'opacity': step === 3 ? '1' : '0.2'}"
      >
        3
      </v-avatar>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'CaseStepper',
  props: {
    step: {
      type: Number,
      required: true
    }
  }
}
</script>

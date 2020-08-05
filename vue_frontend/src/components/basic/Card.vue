<template>
  <v-card
    v-bind="$attrs"
    :style="styles"
    v-on="$listeners"
  >
    <basic-card-offset
      v-if="hasOffset"
      :inline="inline"
      :full-width="fullWidth"
      :offset="offset"
    >
      <v-card
        v-if="!$slots.offset"
        :color="color"
        :class="`elevation-${elevation}`"
        class="v-card--material__header pa-3"
        dark
        elevation="0"
      >
        <span>
          <h4
            class="title font-weight-light d-flex"
            style="word-break: break-word"
            :class="`${titleColor}--text font-weight-${titleWeight} justify-${titleJustify}`"
            v-text="$i18n.t(title)"
          />
          <p
            v-if="text"
            :class="textClass"
            v-text="text"
          />
        </span>
        <slot
          name="header-content"
        />
      </v-card>
      <slot
        v-else
        name="offset"
      />
    </basic-card-offset>

    <div class="header_actions">
      <slot
        name="header_actions"
      />
    </div>

    <v-card-text :class="{padding_xs:($vuetify.breakpoint.xs && breakonxs)}">
      <div :style="cardTextOffset">
        <slot />
      </div>
    </v-card-text>

    <v-divider
      v-if="$slots.actions"
      class="mx-3"
    />

    <v-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'secondary'
    },
    titleColor: {
      type: String,
      default: 'white'
    },
    titleWeight: {
      type: String,
      default: 'light'
    },
    titleJustify: {
      type: String,
      default: 'start'
    },
    elevation: {
      type: [Number, String],
      default: 6
    },
    inline: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    offset: {
      type: [Number, String],
      default: 20
    },
    title: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    },
    textClass: {
      type: String,
      default: 'body-2 font-weight-light text-center justify-center ma-0 pa-0 mt-2'
    },
    textOffset: {
      type: [Number, String],
      default: 0
    },
    breakonxs: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasOffset () {
      return this.$slots.header ||
        this.$slots.offset ||
        this.title ||
        this.text
    },
    styles () {
      if (!this.hasOffset) return null
      return {
        marginBottom: `${this.offset}px`,
        marginTop: `${this.offset * 2}px`
      }
    },
    cardTextOffset () {
      return {
        position: 'relative',
        top: `${this.textOffset * 2}px`
      }
    }
  }
}
</script>

<style lang="scss">
  .v-card--material {
    &__header {
      &.v-card {
        border-radius: 0.4em;
      }
    }
  }
</style>

<style scoped>
  .header_actions {
    position: relative;
    top: -20px;
    right: 20px;
    height: 0px;
  }
  .v-card__text.padding_xs {
    padding-left: 0px;
    padding-right: 0px;
  }
</style>

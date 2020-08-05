<template>
  <span>
    {{ formatted }}
  </span>
</template>

<script>
export default {
  name: 'Price',
  props: {
    price: {
      type: Number,
      required: true
    }
  },
  computed: {
    formatted () {
      return this.$utils.formatCurrency(this.price)
    }
  }
}
</script>

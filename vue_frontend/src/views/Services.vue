<template>
  <ServicesWrapper :category="$route.params.category" />
</template>

<script>
import ServicesWrapper from '@/components/services/ServicesWrapper'

export default {
  name: 'Services',
  components: {
    ServicesWrapper
  }
}
</script>

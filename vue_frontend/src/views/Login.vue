<template>
  <div>
    <app-form-login
      :actid="$route.params.actid"
      class="mt-9"
    />
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

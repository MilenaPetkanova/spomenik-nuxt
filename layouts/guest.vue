<template>
  <div class="u-layout is-guest">
    <!-- TODO: add back button with arrow -->
    <Logo />
    <Nuxt />
  </div>
</template>


<script>
export default {
  mounted() {
    console.log('in guest layout');
  },
}
</script>


<style scoped>
.u-layout {
  @apply pt-28;
}
</style>
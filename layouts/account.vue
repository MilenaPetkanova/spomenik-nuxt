<template>
  <div class="u-layout">
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: ['auth', 'user-spomeniks'],
  mounted() {
    console.log('in account layout');
  }
}
</script>

<style scoped>
.u-layout {
  @apply py-8;
}
</style>
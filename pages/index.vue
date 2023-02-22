<template>
  <main class="u-page is-index is-redirect">
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'redirect',
  transition: 'page-transition',
  head() {
    return {
      title: 'Index',
    };
  },
}
</script>

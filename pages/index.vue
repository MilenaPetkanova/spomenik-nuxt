<template>
  <main class="u-page is-index is-redirect">
  </main>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  middleware: 'redirect',
  transition: 'page-transition',
  head() {
    return {
      title: 'Index',
    };
  },
})
</script>

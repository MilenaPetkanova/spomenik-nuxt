<template>
  <main class="u-page is-error-500">
    <div class="u-container">
      <Notice 
        class="flex justify-center"
        label="Server error"
      ></Notice>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ErrorPage',
  layout: 'guest',
  head() {
    return {
      title: 'Error 500',
    };
  },
})
</script>

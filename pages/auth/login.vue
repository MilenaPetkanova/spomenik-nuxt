<template>
  <main class="u-page is-login">
    <div class="u-container">
      <LoginForm />
    </div>
  </main>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'LoginPage',
  transition: 'page-transition',
  layout: 'guest',
  head() {
    return {
      title: 'Login',
    };
  },
})
</script>

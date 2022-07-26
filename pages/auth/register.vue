<template>
  <main class="u-page is-register">
    <div class="u-container">
      <RegisterForm />
    </div>
  </main>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'RegisterPage',
  transition: 'page-transition',
  layout: 'guest',
  head() {
    return {
      title: 'Register',
    };
  },
})
</script>

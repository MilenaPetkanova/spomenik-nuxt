<template>
  <main class="u-page is-login">
    <div class="u-container">
      <LoginForm />
    </div>
  </main>
</template>

<script>
export default {
  name: 'LoginPage',
  transition: 'page-transition',
  layout: 'guest',
  auth: false,
  head() {
    return {
      title: 'Login',
    };
  },
}
</script>

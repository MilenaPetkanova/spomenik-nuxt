<template>
  <main class="u-page is-register">
    <div class="u-container">
      <RegisterForm />
    </div>
  </main>
</template>

<script>
export default {
  name: 'RegisterPage',
  transition: 'page-transition',
  layout: 'guest',
  auth: false,
  head() {
    return {
      title: 'Register',
    };
  },
}
</script>

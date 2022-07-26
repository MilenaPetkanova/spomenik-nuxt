<template>
  <main class="u-page is-error">
    <div class="u-container">
      <Notice 
        class="flex justify-center"
        :label="text"
      ></Notice>
    </div>
  </main>
</template>

<script>
export default {
  props: ['error'],
  layout: 'guest',
  computed: {
    text() {
      return this.error.statusCode === 404 ? 'Page not found' : 'An error occurred'
    },
  }
}
</script>


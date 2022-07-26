<template>
  <div class="u-page is-letters">
    <div class="u-container">
      <LettersList />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LettersPage',
  transition: 'page-transition',
  head() {
    return {
      title: 'Letters',
    };
  },
}
</script>

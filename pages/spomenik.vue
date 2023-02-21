<template>
  <div class="u-page is-spomenik">
    <div class="u-container">
      <!-- TODO: if user have spomeniks, go to the last opened (or make him choose where to go, but is not ux friendly) -->
      <!-- design reference: google accounts switch -->

      <Typography
        class="text-primary-color text-center mb-5"
        tag="h2"
        name="subtitle"
        text="Create your first Spomenik"
      ></Typography>

      <SpomeniksCreate></SpomeniksCreate>
      <!-- <spomeniks-create></spomeniks-create> -->
    </div>
  </div>
</template>

<script>
import SpomeniksCreate from '~/components/spomeniks/SpomeniksCreate.vue';
export default {
  components: { SpomeniksCreate },
  transition: 'page-transition',
  layout: 'guest',
  head() {
    return {
      title: 'Create Spomenik',
    };
  },
}
</script>

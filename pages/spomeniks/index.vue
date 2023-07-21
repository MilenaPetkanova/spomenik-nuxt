<template>
  <div class="u-page is-spomenik">
    <div class="u-container">
      <!-- TODO: if user have spomeniks, go to the last opened (or make him choose where to go, but is not ux friendly) -->
      <!-- design reference: google accounts switch -->

      <SpomeniksList></SpomeniksList>
      <SpomeniksCreate></SpomeniksCreate>
    </div>
  </div>
</template>

<script>
import SpomeniksCreate from '~/components/spomeniks/SpomeniksCreate.vue';
import SpomeniksList from '~/components/spomeniks/SpomeniksList.vue';
export default {
  components: { 
    SpomeniksCreate, 
    SpomeniksList, 
  },
  layout: 'account',
  transition: 'page-transition',
}

// TODO: create layout for this page
</script>

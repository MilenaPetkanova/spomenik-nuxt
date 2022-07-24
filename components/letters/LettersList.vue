<template>
  <ul class="letters-list">
    <!-- FIXME: open modal when editing -->
    <!-- FIXME: ask if user is sure about deleting the element -->
    <li 
      class="letters-list__element" 
      v-for="letter in letters" :key="letter.id" 
    >
      <LettersCard :letter="letter"></LettersCard> 
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("letters", ["letters"]),
    ...mapGetters("modals", ["shownModal", "modalsEnum"]),
  },
  async mounted() {
    await this.fetchLetters();
  },
  methods: {
    ...mapActions("letters", ["initLetters"]),
    async fetchLetters() {
      try {
        const letters = await this.$lettersService.getAll();
        this.initLetters(letters);
      }
      catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.letters-list {
  &__element {
    @apply mb-12;
  }
}
</style>

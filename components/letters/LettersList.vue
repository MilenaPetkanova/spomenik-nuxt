<template>
  <ul class="letters-list">
    <li 
      class="letters-list__element" 
      v-for="letter in letters" :key="letter.id" 
    >
      <LettersCard @click="openLetter(letter)"></LettersCard> 
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('letters', ['letters']),
    ...mapGetters('modals', ['shownModal', 'modalsEnum']),
  },
  async mounted() {
    await this.fetchLetters();
  },
  methods: {
    ...mapActions('letters', ['initLetters', 'setShownLetter']),
    async fetchLetters() {
      try {
        const letters = await this.$lettersService.getAll();
        this.initLetters(letters);
      }
      catch (error) {
        console.error(error);
      }
    },
    openLetter(letter) {
      this.setShownLetter(letter);
    }
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

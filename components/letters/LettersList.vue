<template>
  <ul class="letters-list">
    <li 
      class="letters-list__element" 
      v-for="letter in letters" :key="letter.id" 
    >
      <LettersCard :letter="letter"></LettersCard> 
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('letters', ['letters']),
  },
  async mounted() {
    await this.fetchLetters();
  },
  methods: {
    ...mapActions('letters', ['initLetters']),
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

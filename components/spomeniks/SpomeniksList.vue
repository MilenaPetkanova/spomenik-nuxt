<template>
  <ul class="spomeniks-list">
    <li 
      class="spomeniks-list__element" 
      v-for="spomenik in spomeniks" :key="spomenik.id" 
    >
      <button @click="navigateToSpomenik(spomenik)">
        <p>{{ spomenik.name }}</p>
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('spomeniks', ['spomeniks', 'shownSpomenik']),
  },
  async mounted() {
    await this.fetchspomeniks();
  },
  methods: {
    ...mapActions('spomeniks', ['initSpomeniks', 'setShownSpomenik']),
    async fetchspomeniks() {
      try {
        const data = await this.$spomeniksService.getAll();
        this.initSpomeniks(data);
      }
      catch (error) {
        console.error(error);
      }
    },
    navigateToSpomenik(spomenik) {
      this.setShownSpomenik(spomenik);

      this.$router.push(`${this.$constants('Routes').Spomenik}/${this.shownSpomenik.id}`)
    }
  },
}
</script>

<style lang="scss" scoped>
.spomeniks-list {
  &__element {
    @apply mb-12;
  }
}
</style>

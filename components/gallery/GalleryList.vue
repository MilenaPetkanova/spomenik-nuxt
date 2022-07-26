<template>
	<section class="gallery-list">
		<ul
		  v-if="gallery.length > 0"
		  class="gallery-list__elements"
		>
			<li 
			  class="gallery-list__element"
				v-for="element in gallery" :key="element.id"
      >
        <GalleryCard :post="element"></GalleryCard>
			</li>
		</ul>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('gallery', ['gallery']),
  },
  async mounted() {
    await this.fetchGallery();
  },
  methods: {
    ...mapActions('gallery', ['initItems']),
    async fetchGallery() {
      try {
        const gallery = await this.$galleryService.getAll();
        this.initItems(gallery);
      }
      catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<style scoped lang="scss">
.gallery-list {
  &__element {
    @apply mb-8;
  }
}
</style>
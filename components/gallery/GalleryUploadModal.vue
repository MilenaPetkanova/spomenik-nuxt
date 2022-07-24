<template>
	<Modal 
		class="gallery-create-modal"
		v-show="shownModal === modalsEnum.GalleryUpload" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center justify-between">
				<span class="flex items-center">
					<Button
						class="is-borderless is-icon"
						icon="xmark"
						@click.native="showModal(null); startNewRecord(null)">
					</Button>
					<Typography name="bold" text="Нова снимка"></Typography>
				</span>
				<Button
					v-if="newRecordSrc"
					class="is-borderless is-icon"
					icon="arrow-right-long"
					@click.native="showModal(modalsEnum.GalleryCreate)">
				</Button>
			</div>
		</template>
		<template v-slot:body>
			<div class="h-full flex flex-col items-center">
				<template v-if="!newRecordSrc">
          <Icon name="file-image" size="4x" class="mt-12 mb-8"></Icon>
          <label class="btn is-primary">
            <input
              class="hidden"
              type="file"
              accept=".jpeg,.jpg,.png,image/jpeg,image/png"
              aria-label="upload image button"
              @change="selectFile"
            />
            <Typography name="button-text" text="Изберете от устройството си"></Typography>
          </label>
				</template>
				<!-- TODO: Add loader -->
				<template v-else>
					<img :src="newRecordSrc" alt="image-preview" /> 
				</template>
			</div>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	computed:{
    ...mapGetters('gallery', ['newRecordSrc']),
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
	methods: {
		...mapActions('gallery', ['startNewRecord']),
		...mapActions('modals', ['showModal']),
		async selectFile(e) {
      const file = e.target.files[0];
      if (!file) {
				return
			}
      const readData = (f) =>  new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(f);
      });
      const data = await readData(file);
      this.$cloudinary.upload(data, {
        folder: 'spomenik',
        uploadPreset: 'vyokv4nd',
      }).then(result => {
				this.startNewRecord(result.secure_url)
			})
    },
	}
} 
</script>

<style scoped>
img {
	width: 100vw;
	max-height: 100vh;
}
.btn.is-primary {
	@apply w-full;
}
</style>

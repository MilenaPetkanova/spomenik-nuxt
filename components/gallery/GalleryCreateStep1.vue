<template>
	<Modal 
		class="gallery-create-s1"
		v-show="shownModal === modalsEnum.GalleryCreateStep1" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<span class="flex items-center">
					<Button
						class="is-borderless is-icon"
						icon="xmark"
						@click.native="showModal(null); startNewRecord(null)">
					</Button>
					<Typography :name="typographyEnum.Bold" text="Нова снимка"></Typography>
				</span>
				<Button
					v-if="newRecordSrc"
					class="is-borderless is-icon"
					icon="arrow-right-long"
					@click.native="showModal(modalsEnum.GalleryCreateStep2)">
				</Button>
			</div>
		</template>
		<template v-slot:body>
			<div class="h-full flex flex-col items-center">
				<template v-if="!newRecordSrc">
					<div class="px-4">
						<Icon name="file-image" size="4x" class="mt-12 mb-8"></Icon>
						<label class="btn is-primary">
							<input
								class="hidden"
								type="file"
								accept=".jpeg,.jpg,.png,image/jpeg,image/png"
								aria-label="upload image button"
								@change="selectFile"
							/>
							<Typography :name="typographyEnum.ButtonText" text="Изберете от устройството си"></Typography>
						</label>
					</div>
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
import { TypographyEnum } from '~/constants/enums'
export default {
	data() {
		return {
			typographyEnum: TypographyEnum,
		}
	},
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
	@apply px-4;
}
</style>

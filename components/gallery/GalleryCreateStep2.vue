<template>
	<Modal 
		class="gallery-create-s2"
		v-show="shownModal === modalsEnum.GalleryCreateStep2" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<span class="flex items-center">
					<Button
						class="is-borderless is-icon"
						icon="xmark"
						@click.native="showModal(null)">
					</Button>
					<h1>Добавяне на снимка / видео</h1>
				</span>
				<Button
					class="is-borderless is-icon"
					icon="check"
					@click.native="createGalleryRecord(3)">
				</Button>
			</div>
		</template>
		<template v-slot:body>
			<div class="row flex p-4">
        <!-- TODO: Maybe add styles for modal header and body? -->
        <!-- TODO: Rename colors -->
				<img class="object-cover" :src="newRecordSrc" alt="image-preview" /> 
				<div class="flex flex-col pl-4">
          <Select
            class="mb-4"
            label="Година"
            :options="years"
            v-model="year"
          />
          <Field
            class="w-full mb-4"
            id="location"
            type="text"
            label="Локация"
            placeholder="Локация"
            v-model.trim="location"
          />
				</div>
			</div>
			<div class="row px-4">
        <Field
          class="w-full mb-4"
          id="caption"
          type="textarea"
          label="Описание"
          placeholder="Описание"
          v-model.trim="caption"
        />
			</div>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	data() {
		return {
			year: null,
			location: null,
			caption: null,
		}
	},
	computed:{
    ...mapGetters('gallery', ['newRecordSrc']),
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
    years() {
      const currentYear = this.$moment().year()
      const yearsCount = 100
      const yearsBack = Array.from({length: yearsCount}, (v, i) => currentYear - yearsCount + i + 1)
      return yearsBack.reverse()
    }
	},
	methods: {
		...mapActions('gallery', ['initGallery', 'updateNewRecord']),
		...mapActions('modals', ['showModal']),
		async createGalleryRecord() {
			// TODO: add proper validation
			if(!this.year) {
				return
			}
			const newRecord = {
				year: this.year,
				location: this.location,
				caption: this.caption,
			}
			this.updateNewRecord(newRecord);
			await this.$galleryService.create(newRecord)
			const gallery = await this.$galleryService.getAll();
			this.initGallery(gallery)
			this.showModal(this.modalsEnum.GalleryCreateStep3)
		}
	}
} 
</script>

<style scoped>
img {
  width: 142px;
  height: 168px;
}
</style>

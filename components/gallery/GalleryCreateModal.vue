<template>
	<Modal 
		class="gallery-create-modal"
		@close-modal="showModal(null)"
  >
		<template v-slot:header>
      <div class="modal__inner-wrapper">
        <Button
          class="is-borderless is-icon"
          icon="xmark"
          @click.native="showModal(null)">
        </Button>
        <Typography
          class="text-tertiary-color"
          name="bold"
          text="Нова снимка"
        ></Typography>
      </div>
      <Button
        class="is-borderless is-icon"
        icon="check"
        @click.native="createGalleryRecord()">
      </Button>
		</template>
		<template v-slot:body>
			<div class="modal__inner-wrapper mb-4">
				<img
				  :src="newItemSrc"
				  class="u-img is-smalll"
				  alt="image-preview"
				/>
				<div class="flex flex-col pl-4">
          <Select
            class="mb-4"
            label="Година"
            :options="years"
            v-model="newItem.year"
          />
          <Field
            class="w-full"
            id="location"
            type="text"
            label="Локация"
            placeholder="Локация"
            v-model.trim="newItem.location"
          />
				</div>
			</div>
      <Field
        class="w-full"
        id="caption"
        type="textarea"
        label="Описание"
        placeholder="Описание"
        v-model.trim="newItem.caption"
      />
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	data() {
		return {
      newItem: {
        year: null,
				location: null,
				caption: null,
        src: null,
			},
		}
	},
	computed:{
    ...mapGetters('gallery', ['newItemSrc']),
		...mapGetters('modals', ['modalsEnum']),
    years() {
      const currentYear = this.$moment().year()
      const yearsCount = 100
      const yearsBack = Array.from({length: yearsCount}, (v, i) => currentYear - yearsCount + i + 1)
      return yearsBack.reverse()
    }
	},
	methods: {
		...mapActions('modals', ['showModal']),
		...mapActions('gallery', ['initItems', 'updateNewItem', 'setShownItem']),
		async createGalleryRecord() {
      if(!this.newItem.year) {
        this.newItem.year = this.years[0]
			}
      const cloudinaryResult = await this.$cloudinary.upload(this.newItemSrc, {
        folder: 'spomenik',
        uploadPreset: 'vyokv4nd',
      })
      this.newItem.src = cloudinaryResult.secure_url
      this.updateNewItem(this.newItem)
			await this.$galleryService.create(this.newItem)
			const gallery = await this.$galleryService.getAll()
			this.initItems(gallery)
      this.setShownItem(this.newItem)
			this.showModal(this.modalsEnum.GalleryDetails)
		}
	}
} 
</script>

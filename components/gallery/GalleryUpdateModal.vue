<template>
	<Modal 
		class="gallery-update-modal"
		@close-modal="showModal(null)"
  >
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<span class="flex items-center">
					<Button
						class="is-borderless is-icon"
						icon="xmark"
						@click.native="showModal(null)">
					</Button>
          <Typography
            class="text-tertiary-color"
            name="bold"
            text="Редактиране на снимка"
          ></Typography>
				</span>
				<Button
					class="is-borderless is-icon"
					icon="check"
					@click.native="update()">
				</Button>
			</div>
		</template>
		<template v-slot:body>
			<div class="row flex p-4">
				<img
				  :src="itemValue.src"
				  class="object-cover"
				  alt="image-preview"
				/>
				<div class="flex flex-col pl-4">
          <Select
            class="mb-4"
            label="Година"
            :options="years"
            v-model="itemValue.year"
          />
          <Field
            class="w-full mb-4"
            id="location"
            type="text"
            label="Локация"
            placeholder="Локация"
            v-model.trim="itemValue.location"
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
          v-model.trim="itemValue.caption"
        />
			</div>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	data() {
		return {
      itemValue: {},
		}
	},
	computed:{
		...mapGetters('modals', ['modalsEnum']),
    ...mapGetters('gallery', ['shownItem']),
    years() {
      const currentYear = this.$moment().year()
      const yearsCount = 100
      const yearsBack = Array.from({length: yearsCount}, (v, i) => currentYear - yearsCount + i + 1)
      return yearsBack.reverse()
    }
	},
  mounted() {
    this.itemValue = Object.assign({}, this.shownItem)
  },
	methods: {
    ...mapActions('modals', ['showModal']),
    ...mapActions('gallery', ['updateItem', 'setShownItem']),
    async update() {
      try {
        console.log('this.itemValue :>> ', this.itemValue);
        await this.$galleryService.update(this.itemValue.id, this.itemValue)
        this.updateItem(this.itemValue);
        this.setShownItem(this.itemValue);
        this.showModal(this.modalsEnum.GalleryDetails);
      } catch (error) {
        console.error(error)
      }
    },
	}
} 
</script>

<style scoped>
img {
  width: 142px;
  height: 168px;
}
</style>

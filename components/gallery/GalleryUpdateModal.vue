<template>
	<Modal 
		class="gallery-update-modal"
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
          text="Редактиране на снимка"
        ></Typography>
      </div>
      <Button
        class="is-borderless is-icon"
        icon="check"
        @click.native="update()">
      </Button>
		</template>
		<template v-slot:body>
			<div class="modal__inner-wrapper mb-4">
				<img
				  :src="itemValue.src"
				  class="u-img is-smalll"
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
            class="w-full"
            id="location"
            type="text"
            label="Локация"
            placeholder="Локация"
            v-model.trim="itemValue.location"
          />
				</div>
			</div>
      <Field
        class="w-full"
        id="caption"
        type="textarea"
        label="Описание"
        placeholder="Описание"
        v-model.trim="itemValue.caption"
      />
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

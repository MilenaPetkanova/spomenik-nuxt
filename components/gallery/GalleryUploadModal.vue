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
          @click.native="showModal(null); setNewItemSrc(null)">
        </Button>
        <Typography
          class="text-tertiary-color"
          name="bold"
          text="Нова снимка"
        ></Typography>
      </div>
      <Button
        v-if="newItemSrc"
        class="is-borderless is-icon"
        icon="arrow-right-long"
        @click.native="showModal(modalsEnum.GalleryCreate)">
      </Button>
		</template>
		<template v-slot:body>
      <template v-if="newItemSrc">
        <img
          class="u-img"
          :src="newItemSrc"
          alt="image-preview"
        />
      </template>
      <template v-else>
        <Icon
          class="mt-12 mb-8"
          name="file-image"
          size="4x"
        ></Icon>
        <label class="btn is-primary w-full">
          <input
            class="hidden"
            type="file"
            accept=".jpeg,.jpg,.png,image/jpeg,image/png"
            aria-label="upload image button"
            @change="selectFile"
          />
          <Typography
            name="button-text"
            text="Изберете от устройството си"
          ></Typography>
        </label>
      </template>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	computed:{
    ...mapGetters('modals', ['modalsEnum']),
    ...mapGetters('gallery', ['newItemSrc']),
	},
	methods: {
		...mapActions('modals', ['showModal']),
		...mapActions('gallery', ['setNewItemSrc']),
		async selectFile(e) {
      const file = e.target.files[0]
      if (!file) {
				return
			}
      const readData = (f) =>  new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(f)
      })
      const data = await readData(file)
      this.setNewItemSrc(data)
    },
	}
} 
</script>

<template>
	<Modal 
		class="gallery-create-modal"
		@close-modal="showModal(null)"
  >
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<Button
					class="is-borderless is-icon"
					icon="xmark"
					@click.native="showModal(null)">
				</Button>
				<span class="flex items-center">
					<Button
						class="is-borderless is-icon mr-2"
						icon="share-nodes"
						@click.native="showModal(modalsEnum.Share)">
					</Button>
          <ButtonDropdown icon="ellipsis-vertical">
            <template v-slot:list>
              <li
                class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn"
                  classes="is-borderless"
                  label="Редактирайте"
                  @click.native="openModal(modalsEnum.GalleryUpdate)">
                </Button>
              </li>
              <li class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn"
                  classes="is-borderless"
                  label="Споделете"
                  @click.native="openModal(modalsEnum.Share)">
                </Button>
              </li>
              <li
                class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn"
                  classes="is-borderless"
                  label="Изтрийте"
                  @click.native="deleteItem()">
                </Button>
              </li>
            </template>
					</ButtonDropdown>
				</span>
			</div>
		</template>
		<template v-slot:body>
			<GalleryCard
			  :post="shownItem"
        :hasActions="false"
			></GalleryCard>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('modals', ['modalsEnum']),
    ...mapGetters('gallery', ['shownItem']),
  },
  methods: {
    ...mapActions('modals', ['showModal']),
    ...mapActions('gallery', ['removeItem', 'setShownItem']),
    openModal(modalsEnumArg) {
      this.setShownItem(this.shownItem)
      this.showModal(modalsEnumArg)
    },
    async deleteItem() {
      try {
        await this.$galleryService.delete(this.shownItem.id);
        this.removeItem(this.shownItem.id);
      } catch (error) {
        console.error(error);
      }
    },
  },
} 
</script>

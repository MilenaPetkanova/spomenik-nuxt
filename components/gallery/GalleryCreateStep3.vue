<template>
	<Modal 
		class="gallery-create-s3"
		v-show="shownModal === modalsEnum.GalleryCreateStep3" 
		@close-modal="showModal(null)">
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
              <li class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn"
                  classes="is-borderless"
                  label="Споделете">
                </Button>
              </li>
              <li class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn"
                  classes="is-borderless"
                  label="Редактирайте">
                </Button>
              </li>
              <li class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn"
                  classes="is-borderless"
                  label="Изтрийте">
                </Button>
              </li>
						</template>
					</ButtonDropdown>
				</span>
			</div>
		</template>
		<template v-slot:body>
			<GalleryCard :post="newRecord"></GalleryCard>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("gallery", ["newRecord"]),
    ...mapGetters("modals", ["shownModal", "modalsEnum"]),
  },
  methods: {
    ...mapActions("modals", ["showModal"]),
  },
} 
</script>

<template>
	<div class="gallery-card">
		<img 
			class="gallery-card__img"
			:src="post.src" 
			alt="media" /> 
		<div class="gallery-card__heading">
      <div class="gallery-card__heading-labels">
        <IconLabel
          v-if="post.year"
          class="mr-6"
          icon="calendar"
          :label="post.year"
        ></IconLabel>
        <IconLabel
          v-if="post.location"
          icon="location-dot"
          :label="post.location"
        ></IconLabel>
      </div>
      <div
        v-if="hasActions"
        class="gallery-card__heading-actions"
      >
        <ButtonDropdown>
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
      </div>
		</div>
		<div class="gallery-card__body">
      <Typography
        class="gallery-card__caption"
        :text="post.caption"
      ></Typography>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
    hasActions: {
      type: Boolean,
      required: false,
      default: true,
    },
	},
  computed:{
		...mapGetters('modals', ['modalsEnum']),
	},
  methods: {
    ...mapActions('modals', ['showModal']),
    ...mapActions('gallery', ['removeItem', 'setShownItem']),
    openModal(modalsEnumArg) {
      this.setShownItem(this.post)
      this.showModal(modalsEnumArg)
    },
    async deleteItem() {
      try {
        await this.$galleryService.delete(this.post.id);
        this.removeItem(this.post.id);
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.gallery-card {
  &__heading {
    @apply flex justify-between;

    &-labels {
      @apply flex py-4;
    }
  }

	&__img {
		width: 100vw;
		max-height: 100vh;
	}
}
</style>

<template>
	<div class="gallery-card">
		<img 
			class="gallery-card__media"
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
        <ButtonDropdown 
          icon="ellipsis"
          :isOpen="isMenuOpened" 
          classes="is-borderless is-icon ml-2"
          @toggle-is-open="toggleMenu()"
        >
          <template v-slot:list>
            <ul class="dropdown__menu-elements">
              <li
                class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn is-edit"
                  classes="is-borderless"
                  label="Редактирайте">
                </Button>
              </li>
              <li class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn is-share"
                  classes="is-borderless"
                  label="Споделете">
                </Button>
              </li>
              <li class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn is-copy-link"
                  classes="is-borderless"
                  label="Копирайте линка">
                </Button>
              </li>
              <li
                class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn is-delete"
                  classes="is-borderless"
                  label="Изтрийте">
                </Button>
              </li>
            </ul>
          </template>
        </ButtonDropdown>
      </div>
		</div>
		<div class="gallery-card__body">
      <Typography
        :text="post.caption"
        :name="11"
      ></Typography>
		</div>
	</div>
</template>

<script>
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
    }
	},
  data() {
    return {
      isMenuOpened: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened
    },
    // TODO: add delete 
    // TODO: add update
  },
}
</script>

<style lang="scss" scoped>
.gallery-card {
  &__heading {
    @apply flex justify-between;

    &-labels {
      @apply flex;
    }
  }

	&__media {
		width: 100vw;
		max-height: 100vh;
	}
}
</style>

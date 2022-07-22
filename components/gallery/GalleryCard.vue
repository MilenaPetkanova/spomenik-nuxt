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
                label="Редактирайте">
              </Button>
            </li>
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
                label="Копирайте линка">
              </Button>
            </li>
            <li
              class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Изтрийте">
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
  methods: {
    // TODO: white methods for the actions dropdown
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

	&__img {
		width: 100vw;
		max-height: 100vh;
	}
}
</style>

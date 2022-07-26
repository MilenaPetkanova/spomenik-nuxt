<template>
  <div class="notice" :class="{ 'is-error': type === 'error' }">
    <Icon
      class="notice__icon"
      size="xs"
      :name="icon"
    ></Icon>
    <Typography
      class="notice__label"
      name="overline"
      :text="label"
    ></Typography>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'error'
    },
    label: {
      type: String,
      required: true,
    }
  },
  computed: {
    icon() {
      switch(this.type) {
        case 'error':
          return 'triangle-exclamation'
        case 'info':
          return 'circle-info'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.notice {
  @apply flex;

  &__icon {
    @apply mr-3;
  }

  &.is-error {
    & > * {
      @apply text-red-400;
    }
  }

  &.is-info {
    & > * {
      @apply text-tertiary-color;
    }
  }
}
</style>
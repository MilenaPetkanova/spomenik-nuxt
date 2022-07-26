<template>
  <div class="icon-label">
    <Icon
      class="icon-label__icon"
      size="xs"
      :name="icon"
    ></Icon>
    <Typography
      class="icon-label__label"
      name="overline"
      :text="label"
    ></Typography>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: [String, Number],
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
.icon-label {
  @apply flex items-center;

  &__icon {
    @apply mr-3 mb-1;
  }

  &__label {
    @apply text-tertiary-color;
  }
}
</style>
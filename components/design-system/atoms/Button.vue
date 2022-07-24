<template>
  <button class="btn" :class="classes">
    <Icon 
      v-if="icon"
      :name="icon"
      class="btn__icon" 
    ></Icon>
    <Typography 
      v-if="!isIconType"
      class="btn__label"
      :text="label"
      :name="isLinkType ? 'link' : 'button-text'"
    ></Typography>
    <slot name="content"></slot>
  </button>
</template>

<script>
export default {
  props: {
    classes: [String, Array],
    label: String,
    icon: [String, Array],
  },
  computed: {
    isIconType() {
      return this.classes?.includes('is-icon')
    },
    isLinkType() {
      return this.classes?.includes('is-link')
    },
  }
}
</script>

<style lang="scss">
.btn {
  @apply cursor-pointer rounded-md py-3 px-6 flex justify-center items-center;

  .svg-inline--fa {
    @apply text-primary-color text-xl;
  }

  &.is-primary {
    @apply bg-primary-color text-black border-2 border-primary-color;
    &:hover, &:active, &:hover > *, &:active > * {
      @apply bg-secondary-color;
    }
    &:disabled, &[disabled] {
      @apply bg-neutral-color;
    }
  }

  &.is-secondary {
    @apply bg-dark-color text-primary-color border-2 border-primary-color;
    &:hover, &:active, &:hover > *, &:active > * {
      @apply text-secondary-color border-secondary-color;
    }
    &:disabled, &[disabled] {
      @apply text-neutral-color border-neutral-color;
    }
  }

  &.is-tertiary {
    @apply bg-dark-color text-tertiary-color border-2 border-tertiary-color;
    .svg-inline--fa {
      @apply text-tertiary-color;
    }
    &:hover, &:active, &:hover > *, &:active > * {
      @apply text-secondary-color border-secondary-color;
    }
    &:disabled, &[disabled] {
      @apply text-neutral-color border-neutral-color;
    }
  }

  &.is-borderless {
    @apply bg-dark-color text-primary-color border-2 border-dark-color;
    &:hover, &:active, &:hover > *, &:active > * {
      @apply text-secondary-color;
    }
    &:disabled, &[disabled] {
      @apply text-neutral-color;
    }
  }
 
  &.is-link {
    @apply text-primary-color underline py-2 px-0;
    &:hover, &:active, &:hover > *, &:active > * {
      @apply text-secondary-color;
    }
    &:disabled, &[disabled] {
      @apply text-neutral-color;
    }
  }

  &.is-icon {
    @apply w-12;
    height: 52px;
  }
}
</style>
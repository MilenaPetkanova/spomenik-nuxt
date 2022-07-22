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
  @apply block cursor-pointer rounded-md py-3 px-5 flex justify-center items-center;

  .svg-inline--fa {
    @apply text-lavender-indigo text-xl;
  }

  &.is-primary {
    @apply bg-lavender-indigo text-black border-2 border-lavender-indigo;
    &:hover, &:active, &:hover > *, &:active > * {
      @apply bg-heliotrope;
    }
    &:disabled, &[disabled] {
      @apply bg-grey;
    }
  }

  &.is-secondary {
    @apply bg-eerie-black text-lavender-indigo border-2 border-lavender-indigo;
    &:hover, &:active, &:hover > *, &:active > * {
      @apply text-heliotrope border-heliotrope;
    }
    &:disabled, &[disabled] {
      @apply text-grey border-grey;
    }
  }

  &.is-tertiary {
    @apply bg-eerie-black text-blue border-2 border-blue;
    .svg-inline--fa {
      @apply text-blue;
    }
    &:hover, &:active, &:hover > *, &:active > * {
      @apply text-heliotrope border-heliotrope;
    }
    &:disabled, &[disabled] {
      @apply text-grey border-grey;
    }
  }

  &.is-borderless {
    @apply bg-eerie-black text-lavender-indigo border-2 border-eerie-black;
    &:hover, &:active, &:hover > *, &:active > * {
      @apply text-heliotrope;
    }
    &:disabled, &[disabled] {
      @apply text-grey;
    }
  }
 
  &.is-link {
    @apply text-lavender-indigo underline py-2 px-0;
    &:hover, &:active, &:hover > *, &:active > * {
      @apply text-heliotrope;
    }
    &:disabled, &[disabled] {
      @apply text-grey;
    }
  }

  &.is-icon {
    @apply w-12;
    height: 52px;
  }
}
</style>
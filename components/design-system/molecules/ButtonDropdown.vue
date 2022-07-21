<template>
  <div class="dropdown">
    <Button
      class="dropdown__btn is-close "
      :classes="`is-icon ${classes}`"
      :icon="icon"
      v-if="!isOpen"
      @click.native="toggleIsOpen(true)">
    </Button>
    <Button
      class="dropdown__btn is-open"
      :classes="`is-icon ${classes}`"
      icon="xmark"
      v-if="isOpen"
      @click.native="toggleIsOpen(false)">
    </Button>
    <transition name="slide-down">
      <menu
        class="dropdown__menu"
        v-if="isOpen">
        <slot name="list"></slot>
      </menu>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      default: false,
      type: Boolean,
    },
    icon: {
      default: null,
      type: [String, Array],
    },
    classes: {
      default: null,
      type: String,
    },
    menuClasses: {
      default: null,
      type: String,
    },
  },
  methods: {
    toggleIsOpen(state) {
      this.$emit("toggle-is-open", state);
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  @apply relative;
  
  &__btn {
    @apply relative;

    &.is-open {
      @apply rounded-b-none;

      &::after {
        content: " ";
        @apply block absolute top-auto w-full h-1 z-50 bg-eerie-black;
        bottom: -3px;
      }
    }
  }

  &__menu {
    @apply absolute right-0 top-full min-w-max z-40 bg-eerie-black border-2 border-lavender-indigo;
    margin-top: -2px;
  }
}
</style>
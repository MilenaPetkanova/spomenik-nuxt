<template>
  <div class="dropdown">
    <Button
      class="dropdown__btn"
      :classes="btnClasses"
      :icon="icon"
      @click.native="toggleDropdown()">
    </Button>
    <transition name="slide-down">
      <menu
        class="dropdown__menu"
        v-show="isOpen">
        <ul class="dropdown__menu-elements"> 
        </ul>
        <slot name="list"></slot>
      </menu>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: [String, Array],
      default: 'ellipsis',
      required: false,
    },
    btnClasses: {
      type: String,
      default: 'is-icon is-borderless',
      required: false,
    },
    menuClasses: {
      default: null,
      type: String,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    close (e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.close)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.close)
  }
}
</script>

<style lang="scss">
.dropdown {
  @apply relative;
  
  &__menu {
    @apply 
    absolute 
    right-0 
    top-full 
    mt-1 
    min-w-max 
    z-20 
    bg-eerie-black 
    border-2 
    rounded-md 
    border-lavender-indigo;

    &-elements {
      @apply flex flex-col;
    }

    &-element {
      @apply border-b-2 border-lavender-indigo;

      &:last-child {
        @apply border-b-0;
      }
    }

    &-btn {
      @apply w-full justify-start;
    }
  }
}
</style>
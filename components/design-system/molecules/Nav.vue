<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        class="nav__element" 
        v-for="(element, index) in navElements" 
        :key="index">
        <Button 
          class="nav__btn" 
          :classes="[currentRoute === element.route ? 'is-tertiary' : 'is-borderless']"
          :label="element.label"
          @click.native="$router.push(element.route)">
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navElements: [
        {
          route: 'letters',
          label: 'Писма',
        },
        {
          route: 'gallery',
          label: 'Галерия',
        },
        {
          route: 'videos',
          label: 'Видеа',
        },
      ],
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    @apply flex justify-between border-b-2 border-blue;
  }

  &__btn {
    @apply rounded-b-none;

    &.is-tertiary {
      @apply relative border-b-eerie-black;

      &::after {
        content: " ";
        @apply block absolute top-auto w-full h-1 bg-eerie-black;
        bottom: -5px;
      }
    }
  }
}
</style>
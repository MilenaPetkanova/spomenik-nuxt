<template>
  <nav class="nav">
    <div class="nav__container u-container">
      <ul class="nav__list">
        <li
          class="nav__element" 
          v-for="(element, index) in navElements" 
          :key="index"
        >
          <Button 
            class="nav__btn" 
            :classes="[currentRoute === element.route ? 'is-tertiary' : 'is-borderless']"
            :label="element.label"
            @click.native="$router.push(`${$constants('Routes').Spomenik}/${shownSpomenik.id}${element.route}`)">
          </Button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Routes } from '~/constants/constants';
export default {
  data() {
    return {
      navElements: [
        {
          route: Routes.Letters,
          label: 'Писма',
        },
        {
          route: Routes.Images,
          label: 'Галерия',
        },
        {
          route: Routes.Images,
          label: 'Видеа',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('spomeniks', ['spomeniks', 'shownSpomenik']),
    currentRoute() {
      return this.$route.name;
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &__container {
    @apply py-8;
  }

  &__list {
    @apply flex justify-between border-b-2 border-tertiary-color;
  }

  &__btn {
    @apply rounded-b-none;

    &.is-tertiary {
      @apply relative border-b-dark-color;

      &::after {
        content: " ";
        @apply block absolute top-auto w-full h-1 bg-dark-color;
        bottom: -5px;
      }
    }
  }
}
</style>
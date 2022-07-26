<template>
  <NuxtLink
    class="logo"
    to="/"
  >
    <div
      v-if="type === typeEnum.Guest"
      class="logo__container is-guest"
    >
      <Typography 
        name="header-3" 
        :text="$constants('AppName')" 
        class="text-primary-color"
      ></Typography>
    </div>
    <div
      v-if="type === typeEnum.Authenticated"
      class="logo__container is-authenticated"
    >
      <Typography 
        name="subtitle" 
        :text="$constants('AppName')" 
        class="text-primary-color"
      ></Typography>
      <Typography 
        name="overline" 
        :text="`от ${fromName}`"
      ></Typography>
      <Typography 
        name="overline" 
        :text="`до ${toName}`"
      ></Typography>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    fromName: {
      type: String,
      required: false,
      default: null,
    },
    toName: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      typeEnum: {
        Guest: 0,
        Authenticated: 1,
      },
    };
  },
  computed: {
    type() {
      if (!this.fromName || !this.toName) {
        return this.typeEnum.Guest;
      }
      return this.typeEnum.Authenticated;
    }
  },
}
</script>

<style lang="scss" scoped>
.logo {
  &__container {
    &.is-guest {
      @apply 
      flex 
      justify-center 
      mb-10;
    }
    &.is-authenticated {
      @apply mb-2;
    }
  }
}
</style>
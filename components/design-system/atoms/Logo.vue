<template>
  <NuxtLink to="/" class="logo">
    <template v-if="type === typeEnum.Default">
      <Typography 
        name="header-3" 
        :text="$constants('AppName')" 
        class="text-primary-color"
      ></Typography>
    </template>
    <template v-if="type === typeEnum.Authenticated">
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
    </template>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    fromName: {
      type: String,
      default: null,
    },
    toName: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      typeEnum: {
        Default: 0,
        Authenticated: 1,
      },
    };
  },
  computed: {
    type() {
      if (!this.fromName || !this.toName) {
        return this.typeEnum.Default;
      }
      return this.typeEnum.Authenticated;
    }
  },
}
</script>
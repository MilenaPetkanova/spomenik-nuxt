<template>
  <NuxtLink to="/" class="logo">
    <template v-if="type === typeEnum.Default">
      <Typography 
        :name="typographyEnum.Header3" 
        :text="$constants('AppName')" 
        class="text-lavender-indigo"
      ></Typography>
    </template>

    <template v-if="type === typeEnum.Authenticated">
      <Typography 
        :name="typographyEnum.Subtitle" 
        :text="$constants('AppName')" 
        class="text-lavender-indigo"
      ></Typography>
      <Typography 
        :name="typographyEnum.Overline" 
        :text="`от ${fromName}`"
      ></Typography>
      <Typography 
        :name="typographyEnum.Overline" 
        :text="`до ${toName}`"
      ></Typography>
    </template>
  </NuxtLink>
</template>

<script>
import { TypographyEnum } from '~/constants/enums'
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
      typographyEnum: TypographyEnum,
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
<template>
  <font-awesome-icon :icon="name" :size="size" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      reqired: true,
    },
    size: {
      type: String,
      reqired: false,
      default: null,
    }
  }
}
</script>
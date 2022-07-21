<template>
    <font-awesome-icon :icon="name" :size="size" />
</template>

<script>
export default {
    props: {
        name: {
            default: null,
            type: String,
        },
        size: {
            default: null,
            type: String,
        }
    }
}
</script>
<template>
  <vue-editor
    :editorToolbar="editorToolbar"
    :value="value"
    @input="onValueUpdate"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editorToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"]
      ],
    }
  },
  methods: {
    onValueUpdate(newValue) {
      this.$emit('input', newValue)
    },
  },
}
</script>

<style scoped>
.ql-editor {
  @apply overflow-auto;
  max-height: 560px;
}
</style>
<template>
  <vuejs-datepicker 
    input-class="field__element"
    :format="dateFormat"
    :placeholder="dateFormat"
    :language="bg"
    :monday-first="true"
    :value="value"
    @input="onValueUpdate"
  ></vuejs-datepicker>
</template>

<script>
import { bg } from 'vuejs-datepicker/dist/locale'
export default {
  props: {
    value: {
      type: [Date, String],
      default() {
        return new Date
      },
    },
  },
  data() {
    return {
      bg: bg,
      dateFormat: 'd MMMM yyyy',
    }
  },
  methods: {
    onValueUpdate(newValue) {
      this.$emit('input', newValue)
    },
  }
}
</script>
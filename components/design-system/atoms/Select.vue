<template>
  <div class="select relative">
    <Typography
      class="select__label w-full block text-left text-blue mb-2"
      :class="{ 'text-lavender-indigo': isOpen }"
      tag="label"
      name="overline"
      :text="label"
    ></Typography>
    <div 
      class="select__btn relative cursor-pointer w-full text-left text-ghost-white bg-eerie-black border-2 rounded-md border-blue py-3 px-5" 
      :class="{ 'text-lavender-indigo': isOpen }"
      @click="isOpen = !isOpen"
    >
      <Typography 
        class="select__btn-text text-ghost-white"
        :text="selectedOption"
      ></Typography>
      <Icon 
        class="select__btn-icon absolute top-4 right-4 left-auto text-blue"
        :class="{ 'text-lavender-indigo': isOpen }" 
        name="chevron-down"
      ></Icon>
    </div>
    <ul 
      class="select__options absolute left-0 top-auto mt-1 w-full max-h-72 overflow-auto text-ghost-white bg-eerie-black border-2 rounded-md border-lavender-indigo" 
      v-show="isOpen"
    >
      <li 
        class="select__option cursor-pointer text-left py-3 px-5" 
        v-for="(option, i) of options" :key="i" 
        @click="selectOption(option)"
      >
        <Typography 
          class="select__btn-text text-ghost-white"
          :class="{ 'text-lavender-indigo': option === selectedOption }"
          :text="option"
        ></Typography>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: this.modelValue ?? this.options[0],
    };
  },
  mounted() {
    this.$emit("input", this.selectedOption)
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option
      this.$emit('input', this.selectedOption)
      this.isOpen = false 
    }
  },
};
</script>

<style lang="scss" scoped>
.select {
  &__option {
    &:hover {
      & > * {
        @apply text-lavender-indigo;
      }
    }
  }
}
</style>
<template>
  <div class="select">
    <Typography
      class="select__label"
      :class="{ 'text-primary-color': isOpen }"
      tag="label"
      name="overline"
      :text="label"
    ></Typography>
    <div 
      class="select__btn" 
      :class="{ 'text-primary-color': isOpen }"
      @click="isOpen = !isOpen"
    >
      <Typography 
        class="select__btn-text text-light-color"
        :text="selectedOption"
      ></Typography>
      <Icon 
        class="select__btn-icon"
        :class="{ 'text-primary-color': isOpen }" 
        name="chevron-down"
      ></Icon>
    </div>
    <ul 
      class="select__options" 
      v-show="isOpen"
    >
      <li 
        class="select__option" 
        v-for="(option, i) of options" :key="i" 
        @click="selectOption(option)"
      >
        <Typography 
          class="select__btn-text text-light-color"
          :class="{ 'text-primary-color': option === value }"
          :text="option"
        ></Typography>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: null,
    },
    label: {
      type: String,
      required: false,
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    selectedOption() {
      return this.value ?? this.options[0]
    }
  },
  methods: {
    selectOption(newValue) {
      this.$emit('input', newValue)
      this.isOpen = false 
    }
  },
};
</script>

<style lang="scss" scoped>
.select {
  @apply relative;

  &__label {
    @apply 
    w-full 
    block 
    text-left 
    text-tertiary-color 
    mb-2;
  }

  &__btn {
    @apply 
    relative 
    cursor-pointer 
    w-full text-left 
    text-light-color 
    bg-dark-color 
    border-2 
    rounded-md 
    border-tertiary-color 
    py-3 
    px-5;
  
    &-icon {
      @apply 
      absolute 
      top-4 
      right-4 
      left-auto 
      text-tertiary-color;
    }
  }

  &__options {
    @apply 
    absolute 
    left-0 
    top-auto 
    mt-1 w-full 
    max-h-72 
    overflow-auto 
    text-light-color 
    bg-dark-color 
    border-2 
    rounded-md 
    border-primary-color;
  }

  &__option {
    @apply 
    cursor-pointer 
    text-left 
    py-3 
    px-5;

    &:hover {
      & > * {
        @apply text-primary-color;
      }
    }
  }
}
</style>
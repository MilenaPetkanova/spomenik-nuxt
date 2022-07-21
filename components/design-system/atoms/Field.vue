<template>
  <div class="field">
    <div class="field__container flex flex-col-reverse">
      <input 
        v-if="!isTextarea"
        class="field__element is-input"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update', $event.target.value)"
        v-on="$listeners" 
      />
      <textarea 
        v-if="isTextarea"
        class="field__element is-input"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update', $event.target.value)"
        v-on="$listeners" 
      ></textarea>
      <Typography
        class="field__label"
        :for="id"
        tag="label"
        :name="typographyEnum.Overline"
        :text="label"
      ></Typography>
    </div>
    <Typography
      v-if="!isValid"
      class="field__error"
      :name="typographyEnum.Small"
      :text="errorMessage"
    ></Typography>
  </div>
</template>

<script>
import { TypographyEnum } from '~/constants/enums'
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  model: {
    prop: "modelValue",
    event: "update"
  },
  data() {
    return {
      typographyEnum: TypographyEnum,
    }
  },
  computed: {
    isValid() {
      return !this.errorMessage;
    },
    isTextarea() {
      return this.type === 'textarea';
    },
  },
}
</script>

<style lang="scss" scoped>
.field {
  &__label {
    @apply w-full block text-left text-blue mb-2;
  }

  &__error {
    @apply text-pastel-red text-right block mt-1 mr-1;
  }

  &__element {
    @apply w-full text-ghost-white bg-eerie-black border-2 rounded-md border-blue py-3 px-5;
    
    &.is-textarea {
      @apply resize-none max-h-32;
    }

    &:focus, 
    &:focus-visible {
      @apply outline-none border-lavender-indigo; 
      
      & ~ .field__label {
        @apply text-lavender-indigo;
      }
    }

    &::-webkit-input-placeholder {
      @apply text-grey italic;
    }
    &::-moz-placeholder {
      @apply text-grey italic;
    }
    &::-ms-placeholder {
      @apply text-grey italic;
    }
    &::placeholder {
      @apply text-grey italic;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:active,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:focus-visible {
      -webkit-text-fill-color: #FAFCFE;
      -webkit-box-shadow: 0 0 0px 1000px #0E0E2C inset;
      font-family: 'Montserrat', sans-serif !important; // this one is not working
    }
  }
}
</style>
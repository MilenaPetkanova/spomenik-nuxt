<template>
  <div class="field">
    <div class="field__container flex flex-col-reverse relative">
      <input 
        v-if="!isTextarea"
        class="field__element is-input"
        :id="id"
        :type="fieldType"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update', $event.target.value)"
        v-on="$listeners" 
      />
      <Button
        v-if="type === 'password'"
        class="field__btn is-password"
        aria-label="toggle-hidden-password-btn"
        @click.native="togglePasswordVissibility()"
      >
        <template v-slot:content>
          <img v-if="fieldType === 'password'" src="~/assets/images/password-on.svg" alt="password-on-icon" />
          <img v-else src="~/assets/images/password-off.svg" alt="password-off-icon" />
        </template>
      </Button>
      <textarea 
        v-if="isTextarea"
        class="field__element is-input"
        :id="id"
        :type="fieldType"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update', $event.target.value)"
        v-on="$listeners" 
      ></textarea>
      <Typography
        class="field__label"
        :for="id"
        tag="label"
        name="overline"
        :text="label"
      ></Typography>
    </div>
    <Typography
      v-if="!isValid"
      class="field__error"
      name="small"
      :text="errorMessage"
    ></Typography>
  </div>
</template>

<script>
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
      fieldType: null,
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
  mounted() {
    this.fieldType = this.type;
  },
  methods: {
    togglePasswordVissibility() {
      if(this.fieldType === 'password') {
        this.fieldType = 'text'
      } else if(this.fieldType === 'text') {
        this.fieldType = 'password'
      }
    }
  }
}
</script>

<style lang="scss">
.field {
  &__label {
    @apply w-full block text-left text-tertiary-color mb-2;
  }

  &__error {
    @apply text-error-color text-right block mt-1 mr-1;
  }

  &__element {
    @apply w-full text-light-color bg-dark-color border-2 rounded-md border-tertiary-color py-3 px-5;
    
    &.is-textarea {
      @apply resize-none max-h-32;
    }

    &:focus, 
    &:focus-visible {
      @apply outline-none border-primary-color; 
      
      & ~ .field__label {
        @apply text-primary-color;
      }
    }

    &::-webkit-input-placeholder {
      @apply text-neutral-color italic;
    }
    &::-moz-placeholder {
      @apply text-neutral-color italic;
    }
    &::-ms-placeholder {
      @apply text-neutral-color italic;
    }
    &::placeholder {
      @apply text-neutral-color italic;
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

  &__btn {
    @apply absolute right-0;
    height: 50px;
  }
}
</style>
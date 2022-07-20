<template>
  <form class="register-form max-w-xs my-0 mx-auto" @submit.prevent="">
    <Field
      class="register-form__field w-full mb-4"
      id="name"
      type="text"
      label="От кого?"
      placeholder="Вашето име"
      v-model.trim="name"
      :errorMessage="validation.firstError('name')"
    />
    <Field
      class="register-form__field w-full mb-4"
      id="email"
      type="text"
      label="Имейл"
      placeholder="Вашият имейл"
      v-model.trim="email"
      :errorMessage="validation.firstError('email')"
    />
    <Field
      class="register-form__field w-full mb-8"
      id="password"
      type="password"
      label="Пaрола"
      placeholder="Вашата парола"
      v-model.trim="password"
      :errorMessage="validation.firstError('password')"
    />
    <Button
      class="register-form__btn w-full"
      classes="is-primary"
      label="Регистрация"
      @click.native="register">
    </Button>
    <div v-if="error" class="register-form__errorborder-2 rounded-md border-red-400 p-4 mt-8">
      <Typography
        class="text-red-400"
        :name="typographyEnum.Body"
        :text="error"
      ></Typography>
    </div>
    <div class="regoster-form__more-actions flex justify-end py-16">
      <Button
        classes="is-link"
        label="Вход"
        @click.native="navigateTo('/auth/login')">
      </Button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { Validator } from 'simple-vue-validator'
import { TypographyEnum } from '~/constants/enums'
import authService from '~/services/auth'
export default {
  data() {
    return {
      typographyEnum: TypographyEnum,
      name: null,
			email: null,
      password: null,
      error: null,
    }
  },
  validators: {
    name: function (value) {
      return Validator.value(value).required()
    },
    email: function (value) {
      return Validator.value(value).required().email()
    },  
    password: function (value) {
      return Validator.value(value).required().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$'),
        `The password provided failed to match the following rules: <br>
        1. It must contain ONLY the following characters: lower case, upper case, numerics. <br>
        2. It must be at least 8 characters in length and not greater than 32 characters in length.`
      )
    }
  },
	methods: {
    ...mapActions('auth', ['setTokens', 'setUser']),
    async register() {
      try {
        const response = await authService.register({
          email: this.email, 
          password: this.password, 
          name: this.name, 
        })
        this.setTokens(response.data.tokens)
        this.setUser(response.data.user)
        this.$router.push('/gallery')
      } catch (error) {
        console.error(error);        
        this.error = error.response.data.error;
      }
    },
    navigateTo(path) {
      this.$router.push({path})
    },
	}
}
</script>
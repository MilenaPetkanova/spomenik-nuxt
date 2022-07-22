<template>
  <form class="login-form max-w-xs my-0 mx-auto" @submit.prevent="">
    <!-- TODO: Try this approach for bibding data: https://codesandbox.io/s/218m3mloj?file=/src/components/SampleComponent.vue:148-155 -->
    <Field
      class="login-form__field w-full mb-4"
      id="email"
      type="text"
      label="Имейл"
      placeholder="Вашият имейл"
      v-model.trim="email"
      :errorMessage="validation.firstError('email')"
    />
    <Field
      class="login-form__field w-full mb-8"
      id="password"
      type="password"
      label="Пaрола"
      placeholder="Вашата парола"
      v-model.trim="password"
      :errorMessage="validation.firstError('password')"
    />
    <Button
      class="login-form__btn w-full"
      classes="is-primary"
      label="Вход"
      @click.native="login">
    </Button>
    <!-- TODO: Component for errors/warnings/info -->
    <div v-if="error" class="login-form__errorborder-2 rounded-md border-red-400 p-4 mt-8">
      <Typography
        class="text-red-400"
        :text="error"
      ></Typography>
    </div>
    <div class="login-form__more-actions flex flex-col justify-end items-end py-16">
      <Button
        classes="is-link mb-2"
        label="Регистрация"
        @click.native="$router.push('/auth/register')">
      </Button>
      <Button
        classes="is-link"
        label="Забравена парола">
      </Button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { Validator } from 'simple-vue-validator'
import authService from '~/services/auth'
export default {
  data() {
    return {
			email: null,
      password: null,
      error: null,
    }
  },
  validators: {
    email: function (value) {
      return Validator.value(value).required().email()
    },  
    password: function (value) {
      return Validator.value(value).required()
    }
  },
  computed:{
    ...mapGetters('auth', [ 'user', 'isAuthenticated' ]) 
	},
	methods: {
    ...mapActions('auth', ['setTokens', 'setUser']),
    async login() {
      try {
        const response = await authService.login({
          email: this.email, 
          password: this.password, 
        })
        this.setTokens(response.data.tokens)
        this.setUser(response.data.user)
        this.$router.push('/gallery')
      } catch (error) {
        console.error(error);        
        this.error = error.response.data.error;
      }
    },
	}
}
</script>
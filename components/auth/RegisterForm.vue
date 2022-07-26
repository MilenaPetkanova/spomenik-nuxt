<template>
  <form class="register-form u-form" @submit.prevent="">
    <Field
      class="u-form__field"
      id="name"
      type="text"
      label="От кого?"
      placeholder="Вашето име"
      v-model.trim="name"
      :errorMessage="validation.firstError('name')"
    />
    <Field
      class="u-form__field"
      id="email"
      type="text"
      label="Имейл"
      placeholder="Вашият имейл"
      v-model.trim="email"
      :errorMessage="validation.firstError('email')"
    />
    <Field
      class="u-form__field"
      id="password"
      type="password"
      label="Пaрола"
      placeholder="Вашата парола"
      v-model.trim="password"
      :errorMessage="validation.firstError('password')"
    />
    <Button
      class="u-form__btn"
      classes="is-primary"
      label="Регистрация"
      @click.native="register()"
    ></Button>
    <Notice
      v-if="error"
      class="u-form__error"
      :label="error"
    ></Notice>
    <div class="u-form__more-actions">
      <Button
        classes="is-link"
        label="Вход"
        @click.native="navigateTo('/auth/login')"
      ></Button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { Validator } from 'simple-vue-validator'
import authService from '~/services/auth'
export default {
  data() {
    return {
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
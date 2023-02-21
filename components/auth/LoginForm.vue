<template>
  <form class="login-form u-form" @submit.prevent="">
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
      label="Вход"
      @click.native="login()"
    ></Button>
    <Notice
      v-if="error"
      class="u-form__error"
      :label="error"
    ></Notice>
    <div class="u-form__more-actions">
      <Button
        classes="is-link mb-2"
        label="Регистрация"
        @click.native="$router.push('/auth/register')"
      ></Button>
      <Button
        classes="is-link"
        label="Забравена парола"
      ></Button>
    </div>
  </form>
</template>

<script>
import { Validator } from 'simple-vue-validator'
export default {
  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },
  validators: {
    email: function (value) {
      return Validator.value(value).required().email();
    },
    password: function (value) {
      return Validator.value(value).required();
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith("local", {
          data: { 
            email: this.email, 
            password: this.password 
          },
        });
      }
      catch (error) {
        console.error(error);
        this.error = error.response.data.error;
      }
    },
  },
}
</script>
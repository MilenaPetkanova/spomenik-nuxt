<template>
  <form class="accounts-create-form u-form" @submit.prevent="">
    <Select
      class="u-form__field"
      label="Роля"
      :options="userRoles"
      v-model="role"
      :errorMessage="validation.firstError('role')"
    /> 
    <Field
      class="u-form__field"
      id="name"
      type="text"
      label="Име"
      placeholder="Име"
      v-model.trim="name"
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
        @click.native="navigateTo($constants('Routes').Login)"
      ></Button>
    </div>
  </form>
</template>

<script>
import { Validator } from 'simple-vue-validator'
import { UserRolesEnums } from '~/constants/enums'
export default {
  data() {
    return {
      role: null,
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
  computed: {
    userRoles() {
      return Object.values(UserRolesEnums)
    }
  },
	methods: {
    async register() {
      try {
        await this.$authService.register({
          role: this.role, 
          name: this.name, 
          email: this.email, 
          password: this.password, 
        })
        // this.$router.push($constants('Routes').Gallery)
      } catch (error) {
        console.error(error);        
        // TODO: fix the error response
        this.error = error;
      }
    },
    navigateTo(path) {
      this.$router.push({path})
    },
	}
}
</script>

<style>

</style>
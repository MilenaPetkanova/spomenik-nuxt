<template>
  <form class="register-form u-form" @submit.prevent="">
    <Field
      class="u-form__field"
      id="name"
      type="text"
      label="Who are you saving memories for"
      placeholder="Name"
      v-model.trim="name"
      :errorMessage="validation.firstError('name')"
    />
    <Button
      classes="is-primary"
      label="Create"
      @click.native="createSpomenik">
    </Button>
    <Notice
      v-if="error"
      class="u-form__error"
      :label="error"
    ></Notice>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Validator } from 'simple-vue-validator'
export default {
  data() {
    return {
      name: null,
      error: null,
    };
  },
  validators: {
    name: function (value) {
      return Validator.value(value).required()
    },
  },
  methods: {
    ...mapActions('spomeniks', ['initSpomeniks', 'setShownSpomenik']),
    async fetchSpomeniks() {
      try {
        const spomeniks = await this.$spomeniksService.getAll();
        this.initSpomeniks(spomeniks);
      }
      catch (error) {
        console.error(error);
      }
    },
    async createSpomenik() {
      try {
        this.error = null

        // console.log('user :>> ', this.user);
        return
        
        if(!this.name) {
          this.error = 'Name is a required field'
          return
        }

        const newSpomenik = {
          name: this.name,
          // userId: this.user.id
        }
        await this.$spomeniksService.create(newSpomenik);
        this.fetchSpomeniks();
        this.setShownSpomenik(newSpomenik);
      }
      catch (error) {
        console.error(error);
      }
    }
  },
}
</script>

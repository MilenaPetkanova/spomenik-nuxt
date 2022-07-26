<template>
	<Modal 
		class="letter-create-modal"
		@close-modal="showModal(null)"
  >
		<template v-slot:header>
      <div class="modal__inner-wrapper">
        <Button
          class="is-borderless is-icon"
          icon="xmark"
          @click.native="showModal(null)">
        </Button>
        <Typography
          class="text-tertiary-color"
          name="bold"
          text="Ново писмо"
        ></Typography>
      </div>
      <Button
        v-if="newLetter.content.length > 0"
        class="is-borderless is-icon"
        icon="arrow-right-long"
        @click.native="createLetter">
      </Button>
		</template>
		<template v-slot:body>
      <DatePicker
        v-model="newLetter.date"
        class="mb-8"
      ></DatePicker>
      <Editor
        v-model="newLetter.content"
      ></Editor>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      newLetter: {
        content: '',
        date: new Date,
      }
    };
  },
  computed: {
    ...mapGetters('modals', ['modalsEnum']),
  },
  methods: {
    ...mapActions('modals', ['showModal']),
    ...mapActions('letters', ['initLetters', 'setShownLetter']),
    async fetchLetters() {
      try {
        const letters = await this.$lettersService.getAll();
        this.initLetters(letters);
      }
      catch (error) {
        console.error(error);
      }
    },
    async createLetter() {
      try {
        await this.$lettersService.create(this.newLetter);
        this.fetchLetters();
        this.setShownLetter(this.newLetter);
        this.showModal(this.modalsEnum.LettersDetails);
      }
      catch (error) {
        console.error(error);
      }
    }
  },
}
</script>

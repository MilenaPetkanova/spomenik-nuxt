<template>
	<Modal 
		class="letter-create-modal"
		v-show="shownModal === modalsEnum.LettersCreate" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<span class="flex items-center">
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
				</span>
				<Button
					class="is-borderless is-icon"
					icon="arrow-right-long"
					@click.native="createLetter">
				</Button>
			</div>
		</template>
		<template v-slot:body>
      <!-- FIXME: being able to edit the date -->
      <vue-editor v-model="content" :editorToolbar="editorToolbar" />
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      content: '',
      editorToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"]
      ],
    }
  },
  computed:{
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
	methods: {
    ...mapActions('modals', ['showModal']),
    ...mapActions('letters', ['initLetters', 'setShownLetter']),
    async fetchLetters() {
      try {
        const letters = await this.$lettersService.getAll()
        this.initLetters(letters)
      } catch (error) {
        console.error(error)
      }
    },
		async createLetter() {
      try {
				const newLetter = {
					content: this.content,
				}
				await this.$lettersService.create(newLetter)
        this.fetchLetters()
        newLetter.createdAt = this.$moment()
        this.setShownLetter(newLetter)
        this.showModal(this.modalsEnum.LettersDetails)
      } catch (error) {
        console.error(error)
      }
    }
	}
}
</script>

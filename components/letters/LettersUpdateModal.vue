<template>
	<Modal 
		class="letters-update-modal"
		v-show="shownModal === modalsEnum.LettersUpdate" 
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
					  text="Редактиране на писмо"
					></Typography>
				</span>
				<Button
					class="is-borderless is-icon"
					icon="arrow-right-long"
					@click.native="update">
				</Button>
			</div>
		</template>
		<template v-slot:body>
      <!-- FIXME: being able to edit the date -->
      <client-only>
				<vue-editor v-model="letterValue.content" :editorToolbar="editorToolbar" />
			</client-only>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      editorToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"]
      ],
      letterValue: {},
    }
  },
  computed:{
    ...mapGetters('modals', ['shownModal', 'modalsEnum']),
    ...mapGetters('letters', ['shownLetter']),
  },
  mounted() {
    this.letterValue = Object.assign({}, this.shownLetter)
  },
	methods: {
    ...mapActions('modals', ['showModal']),
    ...mapActions('letters', ['updateLetter']),
    async update() {
      try {
        await this.$lettersService.update(this.letterValue.id, this.letterValue)
        this.updateLetter(this.letterValue);
        this.showModal(null)
      } catch (error) {
        console.error(error)
      }
    },
	}
}
</script>

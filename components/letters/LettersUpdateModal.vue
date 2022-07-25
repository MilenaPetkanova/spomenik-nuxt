<template>
	<Modal 
		class="letters-update-modal"
		@close-modal="showModal(null)"
  >
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
					icon="check"
					@click.native="update()">
				</Button>
			</div>
		</template>
		<template v-slot:body>
      <DatePicker
        v-model="letterValue.date"
        class="mb-8"
      ></DatePicker>
      <Editor
        v-model="letterValue.content"
      ></Editor>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      letterValue: {},
    }
  },
  computed:{
    ...mapGetters('modals', ['modalsEnum']),
    ...mapGetters('letters', ['shownLetter']),
  },
  mounted() {
    this.letterValue = Object.assign({}, this.shownLetter)
  },
	methods: {
    ...mapActions('modals', ['showModal']),
    ...mapActions('letters', ['updateLetter', 'setShownLetter']),
    async update() {
      try {
        await this.$lettersService.update(this.letterValue.id, this.letterValue)
        this.updateLetter(this.letterValue);
        this.setShownLetter(this.letterValue);
        this.showModal(this.modalsEnum.LettersDetails);
      } catch (error) {
        console.error(error)
      }
    },
	}
}
</script>

<template>
	<Modal 
		class="letter-create-modal"
		@close-modal="showModal(null)"
  >
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<Button
					class="is-borderless is-icon"
					icon="xmark"
					@click.native="showModal(null)">
				</Button>
				<span class="flex items-center">
					<Button
						class="is-borderless is-icon mr-2"
						icon="share-nodes"
						@click.native="showModal(modalsEnum.Share)">
					</Button>
					<ButtonDropdown icon="ellipsis-vertical">
						<template v-slot:list>
              <li
                class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn"
                  classes="is-borderless"
                  label="Редактирайте"
                  @click.native="openModal(modalsEnum.LettersUpdate)">
                </Button>
              </li>
              <li class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn"
                  classes="is-borderless"
                  label="Споделете"
                  @click.native="openModal(modalsEnum.Share)">
                </Button>
              </li>
              <li
                class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn"
                  classes="is-borderless"
                  label="Изтрийте"
                  @click.native="deleteLetter()">
                </Button>
              </li>
						</template>
					</ButtonDropdown>
				</span>
			</div>
		</template>
		<template v-slot:body>
      <LettersCard 
        :letter="shownLetter"
        :hasActions="false"
      ></LettersCard>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed:{
		...mapGetters('modals', ['modalsEnum']),
    ...mapGetters('letters', ['shownLetter']),
	},
	methods: {
    ...mapActions('modals', ['showModal']),
    ...mapActions('letters', ['removeLetter', 'setShownLetter']),
    openModal(modalsEnumArg) {
      this.setShownLetter(this.shownLetter)
      this.showModal(modalsEnumArg)
    },
    async deleteLetter() {
      try {
        await this.$lettersService.delete(this.shownLetter.id);
        this.removeLetter(this.shownLetter.id);
      } catch (error) {
        console.error(error);
      }
    },
	},
}
</script>

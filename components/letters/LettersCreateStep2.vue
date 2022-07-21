<template>
	<Modal 
		class="letter-create-s2"
		v-show="shownModal === modalsEnum.LetterCreateStep2" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<Button
					class="is-borderless is-icon"
					icon="xmark"
					@click.native="showModal(null)">
				</Button>
				<span class="flex items-center">
					<Button
						class="is-borderless is-icon"
						icon="share-nodes"
						@click.native="showModal(modalsEnum.Share)">
					</Button>
					<ButtonDropdown 
						icon="ellipsis-vertical"
						:isOpen="isMenuShown" 
						classes="is-borderless is-icon ml-2"
						@toggle-is-open="toggleMenu"
					>
						<template v-slot:list>
							<ul class="dropdown__menu-elements">
								<li class="dropdown__menu-element">
									<Button 
										class="dropdown__menu-btn is-edit"
										classes="is-borderless"
										label="Редактирайте">
									</Button>
								</li>
								<li class="dropdown__menu-element">
									<Button 
										class="dropdown__menu-btn is-share"
										classes="is-borderless"
										label="Споделете">
									</Button>
								</li>
								<li class="dropdown__menu-element">
									<Button 
										class="dropdown__menu-btn is-copy-link"
										classes="is-borderless"
										label="Копирайте линка">
									</Button>
								</li>
								<li class="dropdown__menu-element">
									<Button 
										class="dropdown__menu-btn is-delete"
										classes="is-borderless"
										label="Изтрийте">
									</Button>
								</li>
							</ul>
						</template>
					</ButtonDropdown>
				</span>
			</div>
		</template>
		<template v-slot:body>
      <LettersCard
        class="px-4"
        :letter="shownLetter"
      ></LettersCard>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	data() {
		return {
			isMenuShown: false,
		}
	},
  computed:{
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
    ...mapGetters('letters', ['shownLetter']),
	},
	methods: {
    ...mapActions('modals', ['showModal']),
		toggleMenu(state) {
			this.isMenuShown = state
		},
	},
}
</script>

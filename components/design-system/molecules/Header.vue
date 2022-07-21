<template>
	<header class="header">
		<div class="header__container container flex justify-between items-center py-4">
			<Logo :fromName="namesStatic.from" :toName="namesStatic.to" />
			<div class="header__actions flex">
				<ButtonDropdown 
					icon="plus"
					classes="is-secondary"
					:isOpen="isCreateMenuOpen" 
					@toggle-is-open="toggleCreateMenu"
				>
					<template v-slot:list>
						<ul class="dropdown__elements flex flex-col">
							<li class="dropdown__element border-b-2 border-lavender-indigo">
								<Button 
									class="dropdown__btn-create"
									classes="is-borderless"
									label="Добавете писмо"
									@click.native="showModal(modalsEnum.LetterCreateStep1); toggleMainMenu(false)">
								</Button>
							</li>
							<li class="dropdown__element border-b-2 border-lavender-indigo">
								<Button 
									class="dropdown__btn-create"
									classes="is-borderless"
									label="Добавете снимка"
									@click.native="showModal(modalsEnum.GalleryCreateStep1); toggleMainMenu(false)">
								</Button>
							</li>
							<li class="dropdown__element">
								<Button 
									class="dropdown__btn-create"
									classes="is-borderless"
									label="Добавете видео">
								</Button>
							</li>
						</ul>
					</template>
				</ButtonDropdown>
				<ButtonDropdown 
					icon="bars"
					:isOpen="isMainMenuOpen" 
					classes="is-borderless ml-2"
					@toggle-is-open="toggleMainMenu"
				>
					<template v-slot:list>
						<ul class="dropdown__elements flex flex-col">
							<li class="dropdown__element">
								<Button 
									class="dropdown__btn-redirect"
									classes="is-borderless"
									label="Изход"
									@click.native="logout(); $router.push('auth/login')">
								</Button>
							</li>
						</ul>
					</template>
				</ButtonDropdown>
			</div>
		</div>

		<GalleryCreateStep1 v-if="shownModal === modalsEnum.GalleryCreateStep1" />
		<GalleryCreateStep2 v-if="shownModal === modalsEnum.GalleryCreateStep2" />
		<GalleryCreateStep3 v-if="shownModal === modalsEnum.GalleryCreateStep3" />
		<LettersCreateStep1 v-if="shownModal === modalsEnum.LetterCreateStep1" />
		<LettersCreateStep2 v-if="shownModal === modalsEnum.LetterCreateStep2" />
	</header>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { NamesStatic } from '~/constants/statics'
export default {
  data() {
    return {
      namesStatic: NamesStatic,
      isMainMenuOpen: false,
      isCreateMenuOpen: false,
    }
  },
	computed:{
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
	methods: {
		...mapActions('auth', ['logout']),
		...mapActions('modals', ['showModal']),
		toggleMainMenu(state) {
			this.isCreateMenuOpen = false
			this.isMainMenuOpen = state
		},
		toggleCreateMenu(state) {
			this.isMainMenuOpen = false
			this.isCreateMenuOpen = state
		},
	}
}
</script>

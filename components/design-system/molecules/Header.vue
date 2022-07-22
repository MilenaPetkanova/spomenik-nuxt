<template>
	<header class="header">
		<div class="header__container container flex justify-between items-center py-4">
			<Logo :fromName="namesStatic.from" :toName="namesStatic.to" />
			<div class="header__actions flex">
				<ButtonDropdown 
          class="mr-2"
					icon="plus"
					btnClasses="is-secondary w-14 h-14"
				>
					<template v-slot:list>
            <li class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Добавете писмо"
                @click.native="showModal(modalsEnum.LetterCreateStep1)">
              </Button>
            </li>
            <li class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Добавете снимка"
                @click.native="showModal(modalsEnum.GalleryCreateStep1)">
              </Button>
            </li>
            <li class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Добавете видео">
              </Button>
            </li>
					</template>
				</ButtonDropdown>
				<ButtonDropdown icon="bars">
					<template v-slot:list>
            <li class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Профил">
              </Button>
            </li>
            <li class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Настройки">
              </Button>
            </li>
            <li class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Изход"
                @click.native="logout(); $router.push('auth/login')">
              </Button>
            </li>
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
    }
  },
	computed:{
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
	methods: {
		...mapActions('auth', ['logout']),
		...mapActions('modals', ['showModal']),
	}
}
</script>

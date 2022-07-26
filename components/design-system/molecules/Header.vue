<template>
	<header class="header">
		<div class="header__container u-container">
			<Logo
			  :fromName="namesStatic.from"
			  :toName="namesStatic.to"
			/>
			<div class="header__actions">
				<ButtonDropdown 
          class="mr-2"
					icon="plus"
					btnClasses="is-secondary is-icon"
				>
					<template v-slot:list>
            <li class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Добавете писмо"
                @click.native="startCreatingLetter()">
              </Button>
            </li>
            <li class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Добавете снимка"
                @click.native="startCreatingImage()">
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
                @click.native="signout()">
              </Button>
            </li>
					</template>
				</ButtonDropdown>
			</div>
		</div>
	</header>
</template>

<script>
import { mapActions } from 'vuex'
import { NamesStatic } from '~/constants/statics'
import { ModalsEnum } from '~/constants/enums'
export default {
  data() {
    return {
      namesStatic: NamesStatic,
    }
  },
	methods: {
		...mapActions('auth', ['logout']),
		...mapActions('modals', ['showModal']),
    startCreatingLetter() {
      this.showModal(ModalsEnum.LettersCreate)
    },
    startCreatingImage() {
      this.showModal(ModalsEnum.GalleryUpload)
    },
    signout() {
      this.logout()
      this.$router.push('auth/login')
    }
	}
}
</script>

<style lang="scss" scoped>
.header {
  &__container {
    @apply flex justify-between items-center py-4; 
  }

  &__actions {
    @apply flex;
  }
}
</style>

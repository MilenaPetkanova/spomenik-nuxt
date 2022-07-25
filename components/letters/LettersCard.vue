<template>
	<div class="letters-card">
    <div class="letters-card__heading">
      <IconLabel
        class="letters-card__heading-label"
        icon="calendar-days"
        :label="$moment(letter.date).format('LL')"
        @click.native="openModal(modalsEnum.LettersDetails)"
      ></IconLabel>
      <div
        v-if="hasActions"
        class="letters-card__heading-actions"
      >
        <ButtonDropdown>
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
      </div>
    </div>
		<div
		  class="letters-card__body"
		  @click="openModal(modalsEnum.LettersDetails)"
		>
      <Typography
        class="text-left"
        :text="letter.content"
      ></Typography>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	props:{
		letter: {
      type: Object,
      required: true,
    },
    hasActions: {
      type: Boolean,
      required: false,
      default: true,
    }
	},
  computed:{
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
  methods: {
    ...mapActions('modals', ['showModal']),
    ...mapActions("letters", ["removeLetter", "setShownLetter"]),
    openModal(modalsEnumArg) {
      this.setShownLetter(this.letter)
      this.showModal(modalsEnumArg)
    },
    async deleteLetter() {
      try {
        await this.$lettersService.delete(this.letter.id);
        this.removeLetter(this.letter.id);
      } catch (error) {
        console.error(error);
      }
    },
  }
}
</script>


<style lang="scss" scoped>
.letters-card {
  &__heading {
    @apply flex justify-between items-center;

    &-label {
      @apply py-4;
    }
  }
}
</style>


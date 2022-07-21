<template>
  <ul class="letters-list">
    <li 
      class="letters-list__element" 
      v-for="letter in letters" :key="letter.id" 
      @mouseover="hoveredId = letter.id" 
      @mouseout="hoveredId = null"
    >
      <div class="letters-list__content">
        <LettersCard
          v-if="editedId !== letter.id"
          :letter="letter"
        ></LettersCard>
        <LettersUpdate
          v-else
          :letter="letter"
          @updated="finishUpdating"
        />
      </div>
      <div 
        class="letters-list__cta" 
        v-if="editedId !== letter.id" 
      >
        <ButtonDropdown 
          icon="ellipsis"
          :isOpen="shownMenuId === letter.id" 
          classes="is-borderless is-icon ml-2"
          @toggle-is-open="toggleMenu(letter.id)"
        >
          <template v-slot:list>
            <ul class="dropdown__menu-elements">
              <li
                @click.prevent="startUpdating(letter.id)"
                class="dropdown__menu-element">
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
              <li
                @click.prevent="deleteLetter(letter.id)"
                class="dropdown__menu-element">
                <Button 
                  class="dropdown__menu-btn is-delete"
                  classes="is-borderless"
                  label="Изтрийте">
                </Button>
              </li>
            </ul>
          </template>
        </ButtonDropdown>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
            shownMenuId: null,
            editedId: null,
        };
    },
    computed: {
        ...mapGetters("letters", ["letters"]),
        ...mapGetters("modals", ["shownModal", "modalsEnum"]),
    },
    async mounted() {
        await this.fetchLetters();
    },
    methods: {
        ...mapActions("letters", ["initLetters", "removeLetter"]),
        async fetchLetters() {
            try {
                const letters = await this.$lettersService.getAll();
                this.initLetters(letters);
            }
            catch (error) {
                console.error(error);
            }
        },
        async deleteLetter(letterId) {
            try {
                await this.$lettersService.delete(letterId);
                this.removeLetter(letterId);
            }
            catch (error) {
                console.error(error);
            }
        },
        startUpdating(letterId) {
            this.editedId = letterId;
        },
        finishUpdating() {
            this.editedId = null;
        },
        toggleMenu(letterId) {
          if(!this.shownMenuId) {
            this.shownMenuId = letterId
          } else {
            this.shownMenuId = null
          }
        },
    },
}
</script>

<style lang="scss" scoped>
.letters-list {
  &__element {
    @apply relative mb-12;
  }

  &__cta {
    @apply absolute right-0;
    top: -3px;
  }
}
</style>

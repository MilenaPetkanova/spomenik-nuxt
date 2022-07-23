<template>
  <ul class="letters-list">
    <!-- FIXME: open modal when editing -->
    <!-- FIXME: ask if user is sure about deleting the element -->
    <li 
      class="letters-list__element" 
      v-for="letter in letters" :key="letter.id" 
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
        <ButtonDropdown>
          <template v-slot:list>
            <li class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Споделете">
              </Button>
            </li>
            <li
              @click.prevent="startUpdating(letter.id)"
              class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Редактирайте">
              </Button>
            </li>
            <li
              @click.prevent="deleteLetter(letter.id)"
              class="dropdown__menu-element">
              <Button 
                class="dropdown__menu-btn"
                classes="is-borderless"
                label="Изтрийте">
              </Button>
            </li>
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

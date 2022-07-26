<template>
	<Modal 
		class="share-modal"
		@close-modal="showModal(null)"
  >
		<template v-slot:header>
      <div class="modal__inner-wrapper">
        <Button
          class="is-borderless is-icon"
          icon="xmark"
          @click.native="showModal(null)">
        </Button>
        <Typography
          class="text-tertiary-color"
          name="bold"
          text="Споделяне"
        ></Typography>
      </div>
		</template>
		<template v-slot:body>
      <Notice
        type="info"
        label="Предстояща функсионалност"
      ></Notice>
      <!-- <Button
        classes="is-primary"
        label="Копирайте линка"
        @click.native="copyLinkToClipBoard()">
      </Button> -->
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	props: {
		postUrl: {
			default: null,
			type: String,
		},
	},
	computed:{
		...mapGetters('modals', ['modalsEnum']),
	},
	methods: {
		...mapActions('modals', ['showModal']),
		copyLinkToClipBoard() {
			navigator.clipboard.writeText(this.postUrl);      
			this.$toast.success('Успешно копирахте линка').goAway(1500) 
		},
	},
}
</script>
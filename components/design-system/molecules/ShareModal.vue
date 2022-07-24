<template>
	<Modal 
		class="share-modal"
		v-show="shownModal === modalsEnum.Share" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center px-1">
				<Button
					class="is-borderless is-icon"
					icon="arrow-left-long"
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
			<div class="container flex flex-col items-center pt-12 pb-8">
				<Button
					classes="is-primary"
					label="Копирайте линка"
					@click.native="copyLinkToClipBoard()">
				</Button>
			</div>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	props: {
		postUrl: {
			default: null,
			type: String,
		},
	},
	computed:{
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
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

<style lang="scss" scoped>
.gallery-post {
	&__media {
		width: 100vw;
		max-height: 100vw;
	}
}
</style>

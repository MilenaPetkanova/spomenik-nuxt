<template>
	<div class="letter-post h-full">
		<div class="letter-post__heading">
			<div class="container flex justify-between py-4">
				<span class="flex">
					<div v-if="shownLetter.createdAt" class="flex items-center mr-6">
						<Icon name="calendar" size="xs"></Icon>
						<p class="text-sm ml-2">{{ $moment(shownLetter.createdAt).format('LL') }}</p>
					</div>
				</span>
			</div>
		</div>
		<div class="letter-post__body">
			<div class="container py-2">
				<div class="letter-post__content text-left text-ghost-white" v-html="shownLetter.content"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	computed:{
		...mapGetters('letters', ['shownLetter']),
	},
}
</script>

<template>
	<div class="letter-post h-full">
		<div class="letter-post__heading">
			<div class="container flex justify-between py-4">
				<span class="flex">
          <IconLabel
            v-if="shownLetter.createdAt"
            class="mr-6"
            icon="calendar"
            :label="$moment(shownLetter.createdAt).format('LL')"
          ></IconLabel>
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

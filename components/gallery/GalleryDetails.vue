<template>
	<div class="gallery-post h-full">
		<img 
			class="gallery-post__media"
			:src="post.src" 
			alt="media" /> 
		<div class="gallery-post__heading">
			<div class="container flex justify-between py-2 pr-1">
				<span class="flex">
          <IconLabel
            v-if="post.year"
            class="mr-6"
            icon="calendar"
            :label="post.year"
          ></IconLabel>
          <IconLabel
            v-if="post.location"
            class="mr-6"
            icon="location-dot"
            :label="post.location"
          ></IconLabel>
				</span>
			</div>
		</div>
		<div class="gallery-post__body">
			<div class="container py-2">
				<p class="text-sm text-left">{{post.caption}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			default: null,
			type: Object,
		}
	},
}
</script>

<style lang="scss" scoped>
.gallery-post {
	&__media {
		width: 100vw;
		max-height: 100vh;
	}
}
</style>

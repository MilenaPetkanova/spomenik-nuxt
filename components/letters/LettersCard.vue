<template>
	<div class="letter-card">
    <div class="letter-card__heading py-4">
      <IconLabel
        v-if="letter.createdAt"
        icon="calendar-days"
        :label="$moment(letter.createdAt).format('LL')"
      ></IconLabel>
    </div>
		<div class="letter-card__body">
      <Typography
        class="text-left"
        :text="letter.content"
      ></Typography>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		letter: {
      type: Object,
      required: true,
    }
	},
}
</script>

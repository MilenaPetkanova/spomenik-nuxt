<template>
  <div 
		class="modal" 
		@click="$emit('close-modal')"
  >
    <div 
			class="modal__window" 
			@click.stop
    >
			<header class="modal__header">
				<slot name="header"></slot>
			</header>
			<section class="modal__body">
				<slot name="body"></slot>
			</section>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.modal {
  @apply 
  z-50 
  w-full 
  h-full 
  fixed 
  top-0 
  left-0 
  flex 
  justify-center;

  &__window {
    @apply 
    w-full 
    h-full 
    bg-dark-color
    overflow-auto;
  }

  &__header {
    @apply 
    flex 
    items-center 
    justify-between 
    py-4
    pr-1;

  }

  &__body {
    @apply 
    flex 
    flex-col 
    px-4 
    py-4;
  }

  &__inner-wrapper {
    @apply flex items-center;
  }
}
</style>
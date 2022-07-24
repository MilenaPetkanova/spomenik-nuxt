<template>
  <div class="page is-design-system">
    <div class="page__conatiner container py-8">
      <Typography name="header-1" text="Lorem Ipsum" class="block mb-3"></Typography>
      <Typography name="header-2" text="Lorem Ipsum" class="block mb-3"></Typography>
      <Typography name="header-3" text="Lorem Ipsum" class="block mb-3"></Typography>
      <Typography name="subtitle" text="Lorem Ipsum" class="block mb-3"></Typography>
      <Typography name="body" text="Lorem Ipsum" class="block mb-3"></Typography>
      <Typography name="emphasis" text="Lorem Ipsum" class="block mb-3"></Typography>
      <Typography name="bold" text="Lorem Ipsum" class="block mb-3"></Typography>
      <Typography name="small" text="Lorem Ipsum" class="block mb-3"></Typography>
      <Typography name="overline" text="Lorem Ipsum" class="block mb-3"></Typography>
      <Typography name="buttonText" text="Lorem Ipsum" class="block mb-3"></Typography>
      <Typography name="link" text="Lorem Ipsum" class="block mb-3"></Typography>
    </div>
  </div>
</template>

<script>
export default{
  name: 'DesignSystem',
  transition: 'page-transition',
  head() {
    return {
      title: 'Design System',
    };
  },
}
</script>

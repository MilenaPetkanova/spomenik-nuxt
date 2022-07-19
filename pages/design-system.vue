<template>
  <div class="page is-design-system">
    <div class="page__conatiner container py-8">
      <Typography :name="typographyEnum.Header1" text="Lorem Ipsum" class="text-blue block mb-3"></Typography>
      <Typography :name="typographyEnum.Header2" text="Lorem Ipsum" class="text-blue block mb-3"></Typography>
      <Typography :name="typographyEnum.Header3" text="Lorem Ipsum" class="text-blue block mb-3"></Typography>
      <Typography :name="typographyEnum.Subtitle" text="Lorem Ipsum" class="text-blue block mb-3"></Typography>
      <Typography :name="typographyEnum.Body" text="Lorem Ipsum" class="text-blue block mb-3"></Typography>
      <Typography :name="typographyEnum.Emphasis" text="Lorem Ipsum" class="text-blue block mb-3"></Typography>
      <Typography :name="typographyEnum.Bold" text="Lorem Ipsum" class="text-blue block mb-3"></Typography>
      <Typography :name="typographyEnum.Small" text="Lorem Ipsum" class="text-blue block mb-3"></Typography>
      <Typography :name="typographyEnum.Overline" text="Lorem Ipsum" class="text-blue block mb-3"></Typography>
      <Typography :name="typographyEnum.ButtonText" text="Lorem Ipsum" class="text-blue block mb-3"></Typography>
      <Typography :name="typographyEnum.Link" text="Lorem Ipsum" class="text-blue block mb-3"></Typography>
    </div>
  </div>
</template>

<script>
import { TypographyEnum } from '~/constants/enums'
export default{
  name: 'DesignSystem',
  transition: 'page-transition',
  head() {
    return {
      title: 'Design System',
    };
  },
  data() {
    return {
      typographyEnum: TypographyEnum,
    }
  }
}
</script>

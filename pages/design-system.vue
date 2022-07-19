<template>
  <div class="page is-design-system">
    <div class="page__conatiner container py-8">
      <Typography :name="typographyConst.Header1" :text="typographyConst.Header1"></Typography>
      <Typography :name="typographyConst.Header2" :text="typographyConst.Header2"></Typography>
      <Typography :name="typographyConst.Header3" :text="typographyConst.Header3"></Typography>
      <Typography :name="typographyConst.Subtitle" :text="typographyConst.Subtitle"></Typography>
      <Typography :name="typographyConst.Body" :text="typographyConst.Body"></Typography>
      <Typography :name="typographyConst.Emphasis" :text="typographyConst.Emphasis"></Typography>
      <Typography :name="typographyConst.Bold" :text="typographyConst.Bold"></Typography>
      <Typography :name="typographyConst.Small" :text="typographyConst.Small"></Typography>
      <Typography :name="typographyConst.Overline" :text="typographyConst.Overline"></Typography>
      <Typography :name="typographyConst.ButtonText" :text="typographyConst.ButtonText"></Typography>
      <Typography :name="typographyConst.Link" :text="typographyConst.Link"></Typography>
    </div>
  </div>
</template>

<script>
import { TypographyConst } from '~/constants/design-system-constants'
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
      typographyConst: TypographyConst,
    }
  }
}
</script>

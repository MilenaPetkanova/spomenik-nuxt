<template>
  <div class="page is-design-system">
    <div class="page__conatiner container py-8">
        <Typography :nameProp="typographyConst.Header1"></Typography>
		<Typography :nameProp="typographyConst.Header2"></Typography>
		<Typography :nameProp="typographyConst.Header3"></Typography>
		<Typography :nameProp="typographyConst.Subtitle"></Typography>
		<Typography :nameProp="typographyConst.Body"></Typography>
		<Typography :nameProp="typographyConst.Emphasis"></Typography>
		<Typography :nameProp="typographyConst.Bold"></Typography>
		<Typography :nameProp="typographyConst.Small"></Typography>
		<Typography :nameProp="typographyConst.PreTitle"></Typography>
		<Typography :nameProp="typographyConst.ButtonText"></Typography>
		<Typography :nameProp="typographyConst.Link"></Typography>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default{
  name: 'DesignSystem',
  transition: 'page-transition',
  head() {
    return {
      title: 'Design System',
    };
  },
  computed: {
    ...mapGetters("constants", ["typographyConst"]),
  }
}
</script>

<template>
  <div class="page is-gallery">
    <div class="page__conatiner container py-8">
      <Nav class="mb-6" />     
      <GalleryList />
    </div>
  </div>
</template>

<script>
export default{
  name: 'GalleryPage',
  transition: 'page-transition',
  head() {
    return {
      title: 'Gallery',
    };
  },
}
</script>

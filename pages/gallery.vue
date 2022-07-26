<template>
  <main class="u-page is-gallery">
    <div class="u-container">
      <GalleryList />
    </div>
  </main>
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
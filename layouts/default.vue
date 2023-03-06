<template>
  <div class="u-layout is-default">
    <Header />
    <Nav />     
    <ModalsWrapper />
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: ['auth', 'user-spomeniks'],
}
</script>
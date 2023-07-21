<template>
  <main class="u-page is-index">
    <div class="u-container flex flex-col items-center">
      <Typography
        class="max-w-xs text-tertiary-color text-center block mt-4 mb-4"
        name="bold"
        text="Съхранява Вашите спомени <br>с любим човек"
      ></Typography>
      <Button
        class="w-auto m-auto mb-24"
        classes="is-tertiary"
        label="вижте демо"
      ></Button>

      <div class="w-full flex gap-5">
        <Button
          class="w-2/4"
          classes="is-secondary"
          label="Вход"
          @click.native="$router.push($constants('Routes').Login)"
        ></Button>
        <Button
          class="w-2/4"
          classes="is-primary"
          label="Регистрация"
          @click.native="$router.push($constants('Routes').Register)"
        ></Button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'LandingPage',
  layout: 'guest',
  auth: false,
  transition: 'page-transition',
}
</script>

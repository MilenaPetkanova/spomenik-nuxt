<template>
  <main class="u-page is-accounts-create">
    <div class="u-container">
      <AccountsCreate></AccountsCreate>
    </div>
  </main>
</template>

<script>
import AccountsCreate from '~/components/acounts/AccountsCreate.vue';

export default {
    name: "AccountsCreatePage",
    // middleware: "redirect",
    transition: "page-transition",
    components: { AccountsCreate }
}
</script>

<template>
  <div class="modals-wrapper">
    <GalleryUploadModal v-if="currentModal === modalsEnum.GalleryUpload" />
		<GalleryCreateModal v-else-if="currentModal === modalsEnum.GalleryCreate" />
		<GalleryDetailsModal v-else-if="currentModal === modalsEnum.GalleryDetails" />
		<LettersCreateModal v-else-if="currentModal === modalsEnum.LettersCreate" />
		<LettersDetailsModal v-else-if="currentModal === modalsEnum.LettersDetails" />
		<LettersUpdateModal v-else-if="currentModal === modalsEnum.LettersUpdate" />
    <ShareModal v-else-if="currentModal === modalsEnum.Share" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('modals', ['currentModal', 'modalsEnum']),
  },
}
</script>
<template>
  <div>
    [EMPTY STATUS] Ничего не найдено. Попробуйте <span class="link" @click="reloadPage">перезагрузить страницу</span>.
  </div>
</template>

<script>
  import { reloadPageMixin } from '../../mixins/reloadPage.mixin';

  export default {
    name: 'app-loader-empty',
    mixins: [ reloadPageMixin ],
  }
</script>

<style scoped src="@/assets/scss/components/link.scss" lang="scss"></style>
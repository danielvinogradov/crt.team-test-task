<template>
  <div class="error">
    [ERROR STATUS] Произошла неслучайная ошибка. Попробуйте <span class="link" @click="reloadPage">перезагрузить страницу</span>.
  </div>
</template>

<script>
  import { reloadPageMixin } from '../../mixins/reloadPage.mixin';

  export default {
    name: 'app-loader-error',
    mixins: [ reloadPageMixin ],
  }
</script>

<style scoped src="@/assets/scss/components/link.scss" lang="scss"></style>
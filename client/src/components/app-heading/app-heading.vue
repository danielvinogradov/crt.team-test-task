<template>
  <h1 class="app-heading">
    <!--    @slot для текста заголовка-->
    <slot/>
  </h1>
</template>

<script>
  export default {
    name: 'app-heading'
  }
</script>

<style scoped lang="scss">
  .app-heading {
    margin: 0 0 40px 0;
    @include font(28px, 28px, 700, inherit);
  }
</style>
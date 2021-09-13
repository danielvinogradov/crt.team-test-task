<template>
  <header class="header">
    <p class="header__title">app-header</p>
  </header>
</template>

<script>
  export default {
    name: 'app-header'
  }
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    height: 5vh;
    background-color: gray;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header__title {
    margin: 0;
    padding: 0;
  }
</style>
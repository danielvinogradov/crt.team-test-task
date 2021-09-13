<template>
  <footer class="footer">
    <p class="footer__title">app-footer</p>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer'
  }
</script>

<style scoped lang="scss">
  .footer {
    margin-top: auto;
    width: 100%;
    height: 5vh;
    background-color: gray;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer__title {
    margin: 0;
    padding: 0;
  }
</style>
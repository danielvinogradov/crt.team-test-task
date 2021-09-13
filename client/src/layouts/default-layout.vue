<template>
  <div class="layout">
    <AppHeader/>
    <main class="main">
      <slot/>
    </main>
    <AppFooter/>
  </div>
</template>

<script>
  import AppHeader from '../components/app-header';
  import AppFooter from '../components/app-footer';

  export default {
    name: "default-layout",
    components: { AppFooter, AppHeader, }
  }
</script>

<style scoped lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
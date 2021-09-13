<template>
  <div class="layout">
    <AppHeader/>
    <main class="main">
<!--      @slot для router-view-->
      <slot/>
    </main>
    <AppFooter/>
  </div>
</template>

<script>
  import AppHeader from '../components/app-header/app-header';
  import AppFooter from '../components/app-footer/app-footer';

  export default {
    name: 'default-layout',
    components: { AppFooter, AppHeader, }
  }
</script>

<style scoped lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main {
    margin: 50px auto 100px;
    padding: 45px 15px;
    width: 100%;
    max-width: 1000px;
  }
</style>
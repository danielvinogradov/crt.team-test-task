<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import DefaultLayout from '../src/layouts/default-layout';

  export default {
    computed: {
      layout() {
        const layoutName = this.$route.meta.layout || 'default-layout';
        if (layoutName === 'default-layout') return DefaultLayout
        else return () => import(`@/layouts/${layoutName}.vue`)
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    margin: 0;
    padding: 0;
  }
</style>

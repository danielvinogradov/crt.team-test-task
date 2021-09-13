<template>
  <div id="app">
    <component :is="layout">
      <router-view :key="$route.fullPath"/>
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

<style src="@/assets/scss/common/common.scss" lang="scss"></style>

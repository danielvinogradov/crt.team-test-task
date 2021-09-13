<template>
  <router-link :to="`/ads/${id}`">
    <h2 class="title">
      <!--      @slot для заголовка объявления-->
      <slot/>
    </h2>
  </router-link>
</template>

<script>
  export default {
    name: 'ads-item-title',
    props: {
      /**
       * ID объявления
       * @value {string}
       */
      id: { type: String, default: null, },
    }
  }
</script>

<style scoped lang="scss">
  .title {
    margin: 0 0 15px 0;
    @include font(16px, 18px, 700, inherit);
    @include default-link-transition();
  }
</style>
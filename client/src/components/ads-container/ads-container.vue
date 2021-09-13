<template>
  <ul class="ads" v-if="ads">
    <AdsItem v-for="(ad) in ads" :key="ad.id" :ad="ad"/>
  </ul>
</template>

<script>
  import AdsItem from '../ads-item/ads-item';

  export default {
    name: 'ads-container',
    components: { AdsItem, },
    props: {
      /**
       * Массив объявлений.
       * @type {object[]}
       */
      ads: { type: Array, default: null, },
    }
  }
</script>

<style scoped lang="scss">
  .ads {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
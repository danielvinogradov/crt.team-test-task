<template>
  <div class="img__container">
    <img :src="src" :alt="alt" class="img">
  </div>
</template>

<script>
  export default {
    name: 'ads-item-img',
    props: {
      /**
       * Путь до изображения.
       */
      src: { type: String, default: null, },

      /**
       * Alt изображения
       */
      alt: { type: String, default: null, },
    },
  }
</script>

<style scoped lang="scss">
  .img__container {
    width: 100%;
    height: 300px;
    border-radius: 2px;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
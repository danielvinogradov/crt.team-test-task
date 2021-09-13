<template>
  <div class="area">
    Площадь:
    <span class="area__value">
      <!--      @slot число квадратных метров площади-->
      <slot/>
      м <sup>2</sup>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'ads-item-area'
  }
</script>

<style scoped lang="scss">
  .area {
    margin: 5px 0;
    @include font(14px, 14px, 400, inherit);
  }

  .area__value {
    @include font(16px, 16px, 700, inherit);
  }
</style>
<template>
  <div class="rooms">
    Комнат:
    <!--    @slot для кол-ва комнат-->
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'ads-item-rooms'
  }
</script>

<style scoped lang="scss">
  .rooms {
    margin: 5px 0;
    @include font(14px, 14px, 400, inherit);
  }
</style>
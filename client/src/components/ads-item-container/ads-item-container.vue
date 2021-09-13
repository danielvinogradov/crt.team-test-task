<template>
  <div class="item">

    <div class="item__img-wrapper">
      <!--      @slot для картинки-->
      <slot name="img"/>
    </div>
    <div class="item__info-wrapper">
      <!--      @slot для всех остальных данных по объявлению-->
      <slot name="info"/>
      <div class="item__buttons-wrapper">
        <!--        @slot для кнопок и любых других контролов в конце объявления-->
        <slot name="buttons"/>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ads-item-container"
  }
</script>

<style scoped lang="scss">
  .item {
    display: flex;

    border-radius: 2px;
    overflow: hidden;

    @media (max-width: $bp-m) {
      flex-direction: column;
    }
  }

  .item__img-wrapper {
    width: 45%;

    @media (max-width: $bp-m) {
      width: 100%;
    }
  }

  .item__info-wrapper {
    width: 55%;
    padding: 15px 15px 15px 25px;

    display: flex;
    flex-direction: column;

    @media (max-width: $bp-m) {
      padding: 15px 0;
      width: 100%;
    }
  }

  .item__buttons-wrapper {
    padding-top: 15px;
    margin-top: auto;

    display: flex;
  }

  .item__buttons-wrapper > *:not(:last-child) {
    margin-right: 10px;
  }
</style>
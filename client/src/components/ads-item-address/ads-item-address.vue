<template>
  <section class="address">
    <div class="address__city">
      <UiIconCity/>
      {{ address.city }}
    </div>
    <div class="address__street">
      <UiIconAddress/>
      {{ address.street }}, д. {{ address.house }}, кв. {{ address.room }}
    </div>
  </section>
</template>

<script>
  import UiIconCity from '../ui-icons/ui-icon-city';
  import UiIconAddress from '../ui-icons/ui-icon-address';

  export default {
    name: 'ads-item-address',
    components: { UiIconCity, UiIconAddress, },
    props: {
      /**
       * Объект адреса.
       * @typedef {object} AddressProp
       * @property {string} city – город
       * @property {string} street – улица
       * @property {string} house – номер дома
       * @property {string} room – номер квартиры
       *
       * @type AddressProp
       */
      address: { type: Object, default: null, }
    }
  }
</script>

<style scoped lang="scss">
  .address {
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
  }
</style>
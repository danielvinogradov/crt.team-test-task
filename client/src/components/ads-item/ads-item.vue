<template>
  <li class="item" v-if="ad">
    <AdsItemContainer>

      <template #img>
        <AdsItemImg :src="ad.imgURI"/>
      </template>

      <template #info>
        <AdsItemTitle :id="ad.id">{{ ad.attributes.title }}</AdsItemTitle>
        <AdsItemAddress :address="ad.attributes.address"/>
        <AdsItemArea>{{ ad.attributes.area }}</AdsItemArea>
        <AdsItemRooms>{{ ad.attributes.rooms }}</AdsItemRooms>
        <AdsItemAgentsContainer :agents="ad.relationships.agents"/>
      </template>

      <template #buttons>
        <AppButton :href="`/ads/${ad.id}`">Подробнее</AppButton>
        <AdsLikeButton :active="ad.like" @click="updateLikeStatus({id: ad.id, status: !ad.like})"/>
      </template>

    </AdsItemContainer>
  </li>
</template>

<script>
  import AdsItemContainer from '../ads-item-container/ads-item-container';
  import AdsItemImg from '../ads-item-img/ads-item-img';
  import AdsItemTitle from '../ads-item-title/ads-item-title';
  import AdsItemAddress from '../ads-item-address/ads-item-address';
  import AdsItemAgentsContainer from '../ads-item-agents-container/ads-item-agents-container';
  import AdsItemRooms from '../ads-item-rooms/ads-item-rooms';
  import AdsItemArea from '../ads-item-area/ads-item-area';
  import AppButton from '../app-button/app-button';
  import AdsLikeButton from '../ads-like-button/ads-like-button';

  import { mapActions } from 'vuex';

  export default {
    name: 'ads-item',
    components: {
      AdsLikeButton,
      AdsItemImg,
      AdsItemTitle,
      AdsItemAddress,
      AdsItemAgentsContainer,
      AdsItemContainer,
      AdsItemRooms,
      AdsItemArea,
      AppButton,
    },
    props: {
      /**
       * Объявление
       * @type {object}
       */
      ad: { type: Object, default: null, },
    },
    methods: {
      ...mapActions('AdsModule/updateAdLikeStatus', {
        updateLikeStatus: 'updateAdLikeStatus', // обновить статус лайка для отдельного объявления
      })
    }
  }
</script>

<style scoped lang="scss">
  .item:not(:last-of-type) {
    margin-bottom: 35px;
  }
</style>
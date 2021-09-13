<template>
  <section>
    <AppHeading>Объявления</AppHeading>
    <AppLoaderContentWrapper :loading-status="loadingStatus">
      <template #default>
        <AdsContainer :ads="ads"/>
      </template>
      <template #empty>
        <AppLoaderEmpty/>
      </template>
      <template #error>
        <AppLoaderError/>
      </template>
      <template #loading>
        <AppLoaderSpinner/>
      </template>
    </AppLoaderContentWrapper>
  </section>
</template>

<script>
  import AdsContainer from '../components/ads-container/ads-container';
  import AppHeading from '../components/app-heading/app-heading';
  import { mapGetters, mapActions } from 'vuex';
  import AppLoaderContentWrapper from '../components/app-loader-content-wrapper/app-loader-content-wrapper';
  import AppLoaderEmpty from '../components/app-loader-empty/app-loader-empty';
  import AppLoaderError from '../components/app-loader-error/app-loader-error';
  import AppLoaderSpinner from '../components/app-loader-spinner/app-loader-spinner';

  export default {
    name: 'Ads',

    components: {
      AppLoaderSpinner,
      AppLoaderError,
      AppLoaderEmpty,
      AppLoaderContentWrapper,
      AdsContainer,
      AppHeading,
    },

    computed: {
      ...mapGetters('AdsModule/getAds', {
        ads: 'getAds', // все объявления
        loadingStatus: 'getLoadingStatus', // статус загрузки
      })
    },

    methods: {
      ...mapActions('AdsModule/getAds', {
        onPageEnter: 'onPageEnter', // получение данных по объявлениям
        onPageLeave: 'onPageLeave', // удаление данных по объявлениям и ресет loadingStatus
      }),
    },

    mounted() {
      this.onPageEnter();
    },

    beforeDestroy() {
      this.onPageLeave();
    }
  }
</script>

<template>
  <div class="home">
    <AppHeading>Домашняя страница</AppHeading>
    Наверняка вам нужны
    <router-link class="link" to="/ads">объявления</router-link>
  </div>
</template>

<script>
  import AppHeading from '../components/app-heading/app-heading';

  export default {
    name: 'Home',
    components: { AppHeading },
  }
</script>

<style scoped src="@/assets/scss/components/link.scss" lang="scss"></style>
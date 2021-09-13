<template>
  <section>
    <AppHeading>
      Страница объявления с id {{ this.$route.params.id }}
    </AppHeading>
  </section>
</template>

<script>
  import AppHeading from '../components/app-heading/app-heading';

  export default {
    name: 'AdSingle',
    components: { AppHeading }
  }
</script>
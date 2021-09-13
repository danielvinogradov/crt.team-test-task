<template>
  <section>
    <AppHeading>
      Страница отдельного агента с id {{ this.$route.params.id }}
    </AppHeading>
  </section>
</template>

<script>
  import AppHeading from '../components/app-heading/app-heading';

  export default {
    name: 'AgentSingle',
    components: { AppHeading }
  }
</script>
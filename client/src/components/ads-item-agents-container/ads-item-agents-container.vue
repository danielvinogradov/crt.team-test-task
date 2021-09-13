<template>
  <section class="agents" v-if="agents">
    <h3 class="agents__title">Агенты:</h3>
    <AdsItemAgent v-for="(cv) in agents" :key="cv.id" :agent="cv"/>
  </section>
</template>

<script>
  import AdsItemAgent from '../ads-item-agent/ads-item-agent';

  export default {
    name: 'ads-item-agents-container',
    components: { AdsItemAgent, },
    props: {
      /**
       * Массив с объектами агентов.
       *
       * @type {AgentProp[]}
       */
      agents: { type: Array, default: null, },
    }
  }
</script>

<style scoped lang="scss">
  .agents {
    margin-top: 20px;
  }

  .agents__title {
    margin: 0 0 5px 0;
    @include font(14px, 14px, 700, inherit);
  }
</style>
<template>
  <router-link class="agent" v-if="agent" :to="`/agents/${agent.id}`">
    {{ agent.attributes.first_name }}
    {{ agent.attributes.middle_name }}
    {{ agent.attributes.last_name }}
  </router-link>
</template>

<script>
  export default {
    name: "ads-item-agent",
    props: {
      /**
       * Объект агента.
       *
       * @typedef AgentProp
       * @property {string} id - id агента
       * @property {object} attributes - данные агента
       * @property {string} attributes.first_name
       * @property {string} attributes.middle_name
       * @property {string} attributes.last_name
       *
       * @type AgentProp
       */
      agent: { type: Object, default: null, },
    }
  }
</script>

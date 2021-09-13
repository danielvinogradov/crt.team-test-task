<template>

  <div v-if="loadingStatus === 'ready'">
    <slot/>
  </div>

  <div v-else-if="loadingStatus === 'loading'">
    <slot name="loading"/>
  </div>

  <div v-else-if="loadingStatus === 'error'">
    <slot name="error"/>
  </div>

  <div v-else-if="loadingStatus === 'empty'">
    <slot name="empty"/>
  </div>

</template>

<script>
  export default {
    name: 'app-loader-content-wrapper',
    props: {
      /**
       * Статус загрузки
       * @values ready, loading, error, empty
       */
      loadingStatus: {
        type: String,
        default: null,
        validator: (value) => {
          return [ 'ready', 'loading', 'error', 'empty' ].includes(value);
        }
      },
    }
  }
</script>
<template>
  <button v-on="$listeners">like status: {{ active }}</button>
</template>

<script>
  export default {
    name: 'ads-like-button',
    props: {
      /**
       * Если true, значит лайк стоит.
       */
      active: { type: Boolean, default: false, },
    }
  }
</script>

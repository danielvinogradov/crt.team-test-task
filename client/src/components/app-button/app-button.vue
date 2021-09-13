<template>
  <router-link class="button" :to="href" v-if="href">
    <!--    @slot для текста и иконки-->
    <slot/>
  </router-link>
  <button class="button" v-on="$listeners" v-else>
    <!--    @slot для текста и иконки-->
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'app-button',
    props: {
      /**
       * Если есть этот пропс, тоо будет показываться элемент router-link, а не button.
       * Визуально эти два элемента не отличаются.
       */
      href: { type: String, default: null, },
    }
  }
</script>

<style scoped lang="scss">
  .button {
    padding: 10px 25px;

    display: flex;
    align-items: center;

    border: none;
    border-radius: 2px;
    background-color: blue;

    color: #fff;

    @include default-transition();
  }
</style>
export const reloadPageMixin = {
    methods: {
        /**
         * Перезагружает страницу.
         */
        reloadPage() {
            this.$router.go();
        }
    }
}
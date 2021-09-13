import Home from '../views/Home.vue'

const routes = [
    {
        /**
         * Домашняя страница
         */
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'default-layout'
        }
    },
    {
        /**
         * Страница со всеми объявлениями
         */
        path: '/ads',
        name: 'Ads',
        component: () => import('@/views/Ads.vue'),
        meta: {
            layout: 'default-layout'
        }
    },
    {
        /**
         * Страница отдельного объявления
         */
        path: '/ads/:id',
        name: 'AdSingle',
        component: () => import('@/views/AdSingle.vue'),
        meta: {
            layout: 'default-layout'
        }
    },
    {
        /**
         * Страница отдельного агента
         */
        path: '/agents/:id',
        name: 'AgentSingle',
        component: () => import('@/views/AgentSingle.vue'),
        meta: {
            layout: 'default-layout'
        }
    },
]

export { routes }
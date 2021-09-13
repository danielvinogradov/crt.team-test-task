import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'default-layout'
        }
    }
]

export { routes }
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/login')
    },
    {
        path: '/case',
        name: 'Case',
        component: () => import(/* webpackChunkName: "case" */ '../views/case')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

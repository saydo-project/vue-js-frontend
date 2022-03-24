//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define routes
const routes = [
    {
        path: '/',
        name: 'buku.index',
        component: () => import (/* webpackChunkName: "buku.index" */ '@/views/buku/index.vue')
    },
    {
        path: '/create',
        name: 'buku.create',
        component: () => import( /* webpackChunkName: "buku.create" */ '@/views/buku/create.vue')
    },
    {
        path: '/edit/:id',
        name: 'buku.edit',
        component: () => import( /* webpackChunkName: "buku.edit" */ '@/views/buku/edit.vue')
    },
    {
        path: '/detail/:id',
        name: 'buku.detail',
        component: () => import( /* webpackChunkName: "buku.detail" */ '@/views/buku/detail.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Temp from '../views/Temp.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/Main'
        },
        {
            path: '/Main',
            name: 'Main',
            component: Main
        },
        {
            path: '/Temp',
            name: 'Temp',
            component: Temp
        },
    ]
})
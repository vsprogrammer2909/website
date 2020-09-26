import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

// Docs

import Docs from '../views/docs/Docs.vue'
import Components from '../views/docs/components/Components.vue'

export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'docs',
            path: '/docs',
            component: Docs,
            children: [
                {
                    path: 'components',
                    component: Components
                },
            ]
        }
    ]
})
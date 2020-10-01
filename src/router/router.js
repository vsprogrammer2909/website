import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Examples from '../views/Examples.vue'
import Download from '../views/Download.vue'
import Themes from '../views/Themes.vue'

// Docs

import Docs from '../views/docs/Docs.vue'
import Introduction from '../views/docs/Introduction.vue'
import Components from '../views/docs/components/Components.vue'

export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            name: "home",
            path: "/",
            component: Home
        },
        {
            name: "download",
            path: "/download",
            component: Download
        },
        {
            name: "themes",
            path: "/themes",
            component: Themes
        },
        {
            name: "examples",
            path: "/examples",
            component: Examples
        },
        {
            name: "docs",
            path: "/docs",
            component: Docs,
            children: [
                {
                    path: "",
                    component: Introduction
                },
                {
                    path: "components",
                    component: Components
                },
            ]
        }
    ]
})
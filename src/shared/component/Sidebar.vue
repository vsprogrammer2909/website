<template>
    <aside class="sidebar" :class="{ 'is-active': showSidebar }">
        <header class="navbar is-sticky">
            <div class="brand flexbox is-spaced">
                <a href="/">
                    <img id="logo" src="../../assets/logo.png" alt="logo">
                </a>

                <a class="hide-md">
                    <box-icon name="x" @click="toggleSidebar"></box-icon>
                </a>
            </div>
        </header>

        <menu>
            <nav>
                <ul>
                    <li><a href="/" class="is-capitalize">home</a></li>
                    <li><a href="/download" class="is-capitalize">download</a></li>
                </ul>
            </nav>

            <hr>

            <nav>
                <h6 class="is-uppercase is-small">usage</h6>

                <ul>
                    <li><a href="/themes" class="is-capitalize">themes</a></li>
                    <li><a href="/examples" class="is-capitalize">examples</a></li>
                </ul>
            </nav>

            <hr>

            <nav>
                <h6 class="is-uppercase is-small">docs</h6>

                <accordion title="components">
                    <li><a href="/docs/components#accordion" class="is-capitalize">accordion</a></li>
                    <li><a href="/docs/components#card" class="is-capitalize">card</a></li>
                    <li><a href="/docs/components#dropdown" class="is-capitalize">dropdown</a></li>
                    <li><a href="/docs/components#modal" class="is-capitalize">modal</a></li>
                    <li><a href="/docs/components#navbar" class="is-capitalize">navbar</a></li>
                    <li><a href="/docs/components#sidebar" class="is-capitalize">sidebar</a></li>
                    <li><a href="/docs/components#tooltip" class="is-capitalize">tooltip</a></li>
                </accordion>

                <accordion title="elements">
                    <li><a href="/docs/elements#chip" class="is-capitalize">chip</a></li>
                    <li><a href="/docs/elements#icon" class="is-capitalize">icon</a></li>
                    <li><a href="/docs/elements#loader" class="is-capitalize">loader</a></li>
                    <li><a href="/docs/elements#table" class="is-capitalize">table</a></li>
                </accordion>

                <accordion title="forms">
                    <li><a href="/docs/forms#button" class="is-capitalize">button</a></li>
                    <li><a href="/docs/forms#checkbox" class="is-capitalize">checkbox</a></li>
                    <li><a href="/docs/forms#control" class="is-capitalize">control</a></li>
                    <li><a href="/docs/forms#field" class="is-capitalize">field</a></li>
                    <li><a href="/docs/forms#form" class="is-capitalize">form</a></li>
                    <li><a href="/docs/forms#input" class="is-capitalize">input</a></li>
                </accordion>

                <accordion title="helpers">
                    <li><a href="/docs/helpers#breakpoint" class="is-capitalize">breakpoint</a></li>
                    <li><a href="/docs/helpers#flexbox" class="is-capitalize">flexbox</a></li>
                    <li><a href="/docs/helpers#grid" class="is-capitalize">grid</a></li>
                    <li><a href="/docs/helpers#text" class="is-capitalize">text</a></li>
                </accordion>
            </nav>
        </menu>
    </aside>
</template>

<script>
import Accordion from './Accordion.vue'

import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    setup() {
        const { state, commit } = useStore()
        const showSidebar = computed(() => state.showSidebar)
        const toggleSidebar = () => commit('toggleSidebar')

        return { showSidebar, toggleSidebar }
    },

    components: {
        Accordion
    }
}
</script>

<style lang="scss" scoped>
#logo {
    height: 2rem;
}
</style>

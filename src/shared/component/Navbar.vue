<template>
    <header class="navbar is-sticky">
        <div class="buttons">
            <button class="is-ghost hide-md" @click="toggleSidebar">
                <box-icon name="menu"></box-icon>
            </button>
        </div>
    </header>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    setup() {
        const { commit } = useStore()
        const toggleSidebar = () => commit('toggleSidebar')

        return { toggleSidebar }
    },
}
</script>

<template>
    <header class="navbar is-sticky">
        <nav class="hide-md">
            <ul>
                <li>
                    <a @click="toggleSidebar">
                        <box-icon name="menu"></box-icon>
                    </a>
                </li>
            </ul>
        </nav>

        <nav class="show-md">
            <div class="chips is-attached">
                <div class="chip">Eku</div>
                <div class="chip">{{ lastVersion }}</div>
            </div>
        </nav>

        <nav>
            <div class="buttons is-attached">
                <a href="https://github.com/ekucss/eku" rel="noopener" target="_blank" class="button is-small">
                    <box-icon name="github" type="logo" size="1rem"></box-icon>
                </a>
                <div class="button is-static is-small">{{ stars > 99 ? "+99" : stars }}</div>
            </div>
        </nav>
    </header>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, onMounted } from 'vue'

export default {
    setup() {
        // last version

        const lastVersion = ref("v0.0.0")

        async function getLastVersion() {
            const req = await fetch("https://api.github.com/repos/ekucss/eku/tags")
            const res = await req.json()

            lastVersion.value = res[0]?.name || "v0.0.0"
        }

        // stars counter

        const stars = ref(0)

        async function getStarsCount() {
            const req = await fetch("https://api.github.com/repos/ekucss/eku")
            const res = await req.json()

            stars.value = res?.stargazers_count || 0
        }

        onMounted(async function () {
            await getLastVersion()
            await getStarsCount()
        })

        const { commit } = useStore()
        const toggleSidebar = () => commit('toggleSidebar')

        return { toggleSidebar, lastVersion, stars }
    },
}
</script>

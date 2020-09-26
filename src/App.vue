<template>

    <main class="page">
        <navbar></navbar>
        <router-view></router-view>
    </main>
</template>

<script>
import Navbar from './shared/component/Navbar.vue'

export default {
    components: {
        Navbar
    }
}
</script>

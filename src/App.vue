<template>
    <main class="page">
        <sidebar></sidebar>
        <navbar></navbar>

        <div class="content has-gap">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
import Navbar from './shared/component/Navbar.vue'
import Sidebar from './shared/component/Sidebar.vue'

export default {
    components: {
        Navbar, Sidebar
    }
}
</script>

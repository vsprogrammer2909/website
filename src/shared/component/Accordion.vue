<template>
    <div class="accordion" :class="{ 'is-active': show }">
        <div class="flexbox is-spaced" @click="toggle">
            <span class="text is-capitalize">{{ title }}</span>
            <box-icon name="chevron-down"></box-icon>
        </div>

        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
    props: {
        title: String
    },

    setup() {
        const show = ref(false)

        function toggle() {
            show.value = !show.value
        }

        return { show, toggle }
    },
}
</script>

<style lang="scss" scoped>
box-icon {
    transition: transform ease-out 0.1s;
}

.accordion.is-active {
    box-icon {
        transform: rotate(45deg);
    }
}
</style>

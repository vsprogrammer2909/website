import { createStore, createLogger } from 'vuex'

export default createStore({
    state: {
        showSidebar: false,
    },

    mutations: {
        toggleSidebar(state) {
            state.showSidebar = !state.showSidebar
        }
    },

    plugins: [createLogger()]
})
import { createApp } from 'vue'

import App from './App.vue'

import router from './router/router'
import store from './store/store'

import './shared/styles/eku/eku.css'
import './shared/styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount("#app")

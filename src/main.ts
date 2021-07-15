import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

import VueResizeObserver from "vue-resize-observer"

createApp(App).use(store).use(router).use(VueResizeObserver).mount('#app')

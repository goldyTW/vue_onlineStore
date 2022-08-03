import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAgile from 'vue-agile'

createApp(App).use(router, VueAgile).use(router, VueAgile).mount('#app')

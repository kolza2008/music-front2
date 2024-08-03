import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$hostname = 'https://041ee787-aa92-4eb2-b33c-d6630db1a688-00-xkc7p39w4v14.janeway.replit.dev'

app.use(router) 
app.use(pinia)

app.mount('#app')

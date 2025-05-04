import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'


// Import Bootstrap and Bootstrap Icons CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.mount('#app')




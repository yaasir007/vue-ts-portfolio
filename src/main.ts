import { createApp } from 'vue'
import Particles from 'vue3-particles'
import './style.scss'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(Particles)
app.use(router)
app.mount('#app')
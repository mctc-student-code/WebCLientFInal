import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const App = createApp(App)
const pinia = createPinia()

App.use(pinia
)
App.mount('#app')

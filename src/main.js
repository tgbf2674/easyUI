import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
const nodes = ['1','1-1','1-1-2','1-2-2']
app.config.globalProperties.$nodes = nodes

app.mount('#app')


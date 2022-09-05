import { createApp } from 'vue'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

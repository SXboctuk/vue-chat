import { createApp, type ComponentPublicInstance } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'

import '@/assets/main.css'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let app: ComponentPublicInstance

projectAuth.authStateReady().then(() => {
  return (app = createApp(App).use(router).mount('#app'))
})

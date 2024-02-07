import Chatroom from '@/views/Chatroom.vue'
import Welcome from '@/views/Welcome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routeNames = {
  Welcome: 'Welcome',
  Chatroom: 'Chatroom'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: routeNames.Welcome,
      component: Welcome
    },
    {
      path: '/chatroom',
      name: routeNames.Chatroom,
      component: Chatroom
    }
  ]
})

export default router
export { routeNames }

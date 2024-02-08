import getUser from '@/composables/getUser'
import Chatroom from '@/views/Chatroom.vue'
import Welcome from '@/views/Welcome.vue'
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router'

const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { user } = getUser()
  if (user.value) {
    next()
  } else {
    next({ name: routeNames.Welcome })
  }
}

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
      component: Chatroom,
      beforeEnter: requireAuth
    }
  ]
})

export default router
export { routeNames }

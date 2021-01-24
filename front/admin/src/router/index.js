import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/views/auth.vue'

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

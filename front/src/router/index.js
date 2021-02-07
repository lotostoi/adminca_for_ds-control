import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main.vue'
import Import from '@/views/import.vue'
import Project from '@/views/project'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/import',
    name: 'Import',
    component: Import
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: history,
  routes
})



export default router

import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/conocenos',
    name: 'About Us',
    component: () => import('../views/AboutUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

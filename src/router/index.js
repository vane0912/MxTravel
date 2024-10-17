import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'My Page Title' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

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
<<<<<<< HEAD
  },
  {
    path: '/blogs',
    name: 'articulos',
    component: () => import('../views/AllBlogs.vue')
  },
  {
    path: '/blogs/:blog_name',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
=======
>>>>>>> cd2d2d7 (Revert "Blogs")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})

export default router

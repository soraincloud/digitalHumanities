import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('@/views/Personal.vue'),
  },
  {
    path: '/login',
    name: '/login',
    component: () => import('@/views/login.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

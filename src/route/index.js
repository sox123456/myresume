import { createWebHashHistory, createRouter } from 'vue-router'
const routers = [
  {
    path: '/',
    component: () => import('@/views/Index/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
})

export default router

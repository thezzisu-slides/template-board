import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('src/pages/Index.vue')
    }
  ]
})

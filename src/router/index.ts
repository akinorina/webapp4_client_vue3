import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/samples',
      name: 'samples',
      component: () => import('../views/samples/IndexView.vue')
    },
    {
      path: '/samples/generalmodal',
      name: 'samples__generalmodal',
      component: () => import('../views/samples/GeneralModalView.vue')
    },
    {
      path: '/samples/bsmodal',
      name: 'samples__bsmodal',
      component: () => import('../views/samples/BsModalView.vue')
    }
  ]
})

export default router

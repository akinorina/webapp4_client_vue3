import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
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
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/IndexView.vue')
    },
    {
      path: '/admin/login',
      name: 'admin_login',
      component: () => import('../views/admin/LoginView.vue')
    },
    {
      path: '/admin/samples',
      name: 'admin_samples',
      component: () => import('../views/admin/samples/IndexView.vue')
    },
    {
      path: '/admin/samples/generalmodal',
      name: 'admin_samples_generalmodal',
      component: () => import('../views/admin/samples/GeneralModalView.vue')
    },
    {
      path: '/admin/samples/bsmodal',
      name: 'admin_samples_bsmodal',
      component: () => import('../views/admin/samples/BsModalView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // 行き先ページが管理者用ページである判定
  const isAdminPage = String(to.name).match(/^admin/) !== null

  if (to.name !== 'admin_login' && isAdminPage && !authStore.isAuthenticated) {
    // 管理者用ページへ未認証状態で遷移の場合、ログイン画面へ遷移
    next({ name: 'admin_login' })
  } else {
    // 通常
    next()
  }
})

export default router

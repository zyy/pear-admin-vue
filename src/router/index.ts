import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import store from '@/store'

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (from, to, next) => {
  console.log(store)
  await store.dispatch('app/toggleRouterLoading', true)
  next()
})

router.afterEach(async () => {
  await store.dispatch('app/toggleRouterLoading', false)
})

export default router

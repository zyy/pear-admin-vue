import { createRouter } from 'vue-router'
import routes from './routes'
import store from '@/store'
import { createApplicationRouteMode } from './_utils'

const router = createRouter({
  history: createApplicationRouteMode(),
  routes
})

router.beforeEach(async (from, to, next) => {
  await store.dispatch('app/toggleRouterLoading', true)
  next()
})

router.afterEach(async () => {
  await store.dispatch('app/toggleRouterLoading', false)
})

export default router

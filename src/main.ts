import app from './app'
import router from './router'
import store from './store'
import '@/core'
import '@/components/global.less'

app
  .use(store)
  .use(router)
  .mount('#app')

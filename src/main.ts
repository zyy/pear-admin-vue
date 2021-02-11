import app from './app'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import '@/core'
import 'ant-design-vue/dist/antd.less'
import '@/components/global.less'

app
  .use(store)
  .use(router)
  .use(Antd)
  .mount('#app')

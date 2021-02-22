import { getModules } from '@/locales/_utils'

const requireZHContext = require.context('./zh-CN/', false, /[\w+]\w+.(ts)$/)

const zhCN = getModules(requireZHContext)

export default {
  ...zhCN
}

import { getModules } from '@/locales/_utils'
const requireENContext = require.context('./en-US/', false, /[\w+]\w+.(ts)$/)

const enUS = getModules(requireENContext)

export default {
  ...enUS
}

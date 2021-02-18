import app from '@/app'
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import config from '@/config/pear.config'
import zhModules from './lang/zh-CN'
import { setupI18n } from './i18n'

const DEFAULT_LANG = config.defaultLanguage

const i18n = setupI18n({
  globalInjection: true,
  legacy: false,
  locale: DEFAULT_LANG,
  fallbackLocale: DEFAULT_LANG,
  messages: {
    'zh-CN': {
      ...zhCN,
      ...zhModules
    }
  }
})

app.use(i18n)

export { i18n }

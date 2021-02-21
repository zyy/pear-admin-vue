import app from '@/app'
import { loadLocaleMessages, setupI18n } from './i18n'
import store from '@/store'

const DEFAULT_LANG = store.getters['app/language']

const i18n = setupI18n({
  globalInjection: true,
  legacy: false,
  locale: DEFAULT_LANG,
  fallbackLocale: DEFAULT_LANG,
  messages: {
  }
})

loadLocaleMessages(i18n, DEFAULT_LANG).then(() => {
  console.log('init i18n')
})
app.use(i18n)

export { i18n }

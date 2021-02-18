<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import themeColor from '@/themes/colorChange.ts'
import config from '@/config/pear.config'

export default defineComponent({
  name: 'App',
  setup () {
    onMounted(() => {
      themeColor.changeColor('#36b368')
    })
    const { getLocaleMessage } = useI18n({ useScope: 'global' })
    const locale = getLocaleMessage(config.defaultLanguage)
    return {
      locale
    }
  }
})
</script>

<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import config from '@/config/pear.config'

export default defineComponent({
  name: 'App',
  setup () {
    const { getLocaleMessage } = useI18n({ useScope: 'global' })
    const locale = getLocaleMessage(config.defaultLanguage)
    return {
      locale
    }
  }
})
</script>

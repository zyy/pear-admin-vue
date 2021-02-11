<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import locale from 'ant-design-vue/lib/locale/zh_CN'

export default defineComponent({
  name: 'App',
  setup () {
    return {
      locale
    }
  }
})
</script>

<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import locale from 'ant-design-vue/lib/locale/zh_CN'
import themeColor from '@/themes/colorChange.ts'

export default defineComponent({
  name: 'App',
  setup () {
    onMounted(() => {
      themeColor.changeColor('#36b368')
    })
    return {
      locale
    }
  }
})
</script>

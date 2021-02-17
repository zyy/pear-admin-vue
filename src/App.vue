<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import locale from 'ant-design-vue/lib/locale/zh_CN'
import themeColor from '@/themes/color.js'

export default defineComponent({
  name: 'App',
  setup () {
    onMounted(() => {
      themeColor.changeColor('#36b368').finally(t => {
        console.log(t)
      })
    })
    return {
      locale
    }
  }
})
</script>

<template>
  <page-container>
    <a-row>
      <a-space
        direction="vertical"
        style="width: 100%; display: flex;"
      >
        <a-col span="24">
          <a-space>
            <a-button type="primary" @click="handleClick('#36b368')">默认</a-button>
            <a-button type="primary" @click="handleClick('#FA541C')">红</a-button>
            <a-button type="primary" @click="handleClick('#FAAD14')">黄</a-button>
            <a-button type="primary" @click="handleClick('#04a0f5')">蓝</a-button>
          </a-space>
        </a-col>
        <a-col span="24">
          <a-space>
            <a-input v-model:value="customColor" placeholder="十六进制颜色"></a-input>
            <a-button @click="handleClick(customColor)">点我</a-button>
          </a-space>
        </a-col>
      </a-space>
    </a-row>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import themeColor from '@/themes/color.js'

export default defineComponent({
  name: 'index',
  setup () {
    const customColor = ref('')
    const handleClick = (color: string) => {
      themeColor.changeColor(color)
    }
    return {
      customColor,
      handleClick
    }
  }
})
</script>

<style scoped lang="less">

</style>

<template>
  <Icon>
  </Icon>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@ant-design/icons-vue'

const svgContext = require.context('@/assets/custom-icons/', false, /\.svg$/)

// console.log(svgContext.keys().map(svgContext))
const model = svgContext.keys().reduce((modules, key) => {
  console.log(key)
  const name = key.replace(/(\.\/|\.svg)/g, '')
  return {
    ...modules,
    [name]: svgContext(key)
  }
}, {})

console.log(model)

export default defineComponent({
  name: 'SvgIcon',
  components: {
    Icon
  },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="less">
.icon-svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>

<template>
  <a-card
    size="small"
    :bordered="false"
  >
    <template #title>
      <a-checkbox>列展示</a-checkbox>
    </template>
    <template #extra>
      <a href="javascript:;">重置</a>
    </template>
  </a-card>
</template>

<script lang="ts">
export default {
  name: 'TableColumnsTool'
}
</script>

<style scoped lang="less">

</style>

<template>
  <page-container>
    <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
    <template #extra>
      <a-button type="primary">Back Home</a-button>
    </template>
  </a-result>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'index'
})
</script>

<style scoped lang="less">

</style>

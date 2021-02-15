<template>
  <page-container content="高级表单常见于一次性输入和提交大批量数据的场景。">
        <a-card>
      <a-result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    sub-title="Order number: 20171828188281828 Cloud server configuration takes 1-5 minutes, please wait."
  >
    <template #extra>
      <a-button key="console" type="primary">Go Console</a-button>
      <a-button key="buy">Buy Again</a-button>
    </template>
  </a-result>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'index'
})
</script>

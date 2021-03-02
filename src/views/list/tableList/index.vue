<template>
  <page-container>
    <a-card>
      <standard-table
        :columns="columns"
      >
      </standard-table>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'index',
  setup () {
    const state = reactive({
      columns: [
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Age',
          dataIndex: 'age'
        },
        {
          title: 'Address',
          dataIndex: 'address'
        }
      ]
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
::v-deep(.ant-card-body) {
  padding-top: 0;
  padding-bottom: 0;
}
</style>

<template>
  <page-container>
    <standard-table
      :columns="columns"
    >
    </standard-table>
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

</style>

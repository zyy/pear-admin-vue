<template>
  <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
    <template #extra>
      <a-button type="primary" @click="toHome">Back Home</a-button>
    </template>
  </a-result>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'index',
  setup () {
    return {
      toHome: () => {
        useRouter().push('/')
      }
    }
  }
})
</script>

<style scoped lang="less">

</style>

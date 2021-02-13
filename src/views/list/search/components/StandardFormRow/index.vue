<template>
  <template>
    <div :class="[prefixCls, lastCls, blockCls, gridCls]">
      <div v-if="title" class="antd-pro-components-standard-form-row-index-label">
        <span>{{ title }}</span>
      </div>
      <div class="antd-pro-components-standard-form-row-index-content">
        <slot></slot>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'index'
})
</script>

<style scoped lang="less">

</style>

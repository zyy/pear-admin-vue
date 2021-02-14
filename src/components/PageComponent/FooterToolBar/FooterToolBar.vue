<template>
  <div class="app-footer-tool-bar">
    <div class="app-footer-tool-bar-left">
      <slot name="left">{{ left }}</slot>
    </div>
    <div class="app-footer-tool-bar-right">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// todo: 如果将layout的参数放到store中之后，需要在这里处理宽度，应该保持为 calc(100% - 208 | 48 px)
export default defineComponent({
  name: 'FooterToolBar',
  props: {
    left: {
      type: [String, Object]
    }
  }
})
</script>

<style scoped lang="less">
.app-footer-tool-bar {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  line-height: 44px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  box-shadow: 0 -6px 16px -8px rgb(0 0 0 / 8%), 0 -9px 28px 0 rgb(0 0 0 / 5%), 0 -12px 48px 16px rgb(0 0 0 / 3%);
  transition: width .3s cubic-bezier(.645,.045,.355,1);

  &-left {
    flex: 1
  }

  &-right {
  }
}
</style>

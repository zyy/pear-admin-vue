<template>
  <div class="item">
      <MenuFoldOutlined></MenuFoldOutlined>
  </div>
  <div class="item">
      <MenuUnfoldOutlined></MenuUnfoldOutlined>
  </div>
  <div class="item">
      <RedoOutlined></RedoOutlined>
  </div>
</template>

<script lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined, RedoOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RightContent',
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    RedoOutlined
  }
})
</script>

<style scoped lang="less">
.item{
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    &:hover{
        background-color: whitesmoke;
    }
}
</style>

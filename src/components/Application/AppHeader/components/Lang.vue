<template>
  <a-dropdown
    placement="bottomRight"
  >
    <template #overlay>
      <a-menu
        @click="toggleLang"
        :selectedKeys="selectedKeys"
      >
        <a-menu-item key="zh-CN">
          🇨🇳 简体中文
        </a-menu-item>
<!--        <a-menu-item key="zh-TW">-->
<!--          🇭🇰 繁体中文-->
<!--        </a-menu-item>-->
        <a-menu-item key="en-US">
          🇺🇸 English
        </a-menu-item>
      </a-menu>
    </template>
    <span class="action">
      <a><img src="~@/assets/custom-icons/lang.svg" alt=""></a>
    </span>
  </a-dropdown>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { loadLocaleMessages } from '@/locales/i18n'
import { i18n } from '@/locales'
export default defineComponent({
  name: 'Lang',
  setup () {
    const selectedKeys = ref(['zh-CN'])
    const toggleLang = async ({ key }) => {
      selectedKeys.value = [key]
      await loadLocaleMessages(i18n, key)
    }
    return {
      selectedKeys,
      toggleLang
    }
  }
})
</script>

<style scoped lang="less">
.action {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.3s;

  .avatar {
    margin: 20px 8px 20px 0;
  }

  > span {
    vertical-align: middle;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }

  .name {
    color: black;
  }
}
</style>

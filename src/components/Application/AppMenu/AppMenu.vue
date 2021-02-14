<template>
  <a-menu
    :openKeys="openKeys"
    :selectedKeys="selectedKeys"
    :inlineIndent="16"
    mode="inline"
    theme="dark"
    @openChange="handleOpen"
    @select="handleSelect"
  >
    <template v-for="route in menuList" :key="route.name">
      <template v-if="!route.meta.hidden">
        <template v-if="!route.children">
          <a-menu-item :key="route.name">
            <router-link :to="{name: route.name}">
              <AppIcon :icon-name="route?.meta?.icon"></AppIcon>
              <span>{{ route.meta.title }}</span>
            </router-link>
          </a-menu-item>
        </template>
        <template v-else>
          <app-sub-menu :route="route" :key="route.name"/>
        </template>
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import AppSubMenu from '@/components/Application/AppSubMenu/AppSubMenu.vue'
import AppIcon from '@/components/Application/AppIcon/AppIcon.tsx'
import { RouteRecordRaw } from 'vue-router'

export default defineComponent({
  name: 'AppMenu',
  props: {
    menuList: {
      type: Array as PropType<RouteRecordRaw[]>
    },
    openKeys: {
      type: Array
    },
    selectedKeys: {
      type: Array
    }
  },
  components: {
    AppSubMenu,
    AppIcon
  },
  emits: ['update:openKeys', 'update:selectedKeys'],
  setup (props, { emit }) {
    const handleOpen = (openKeys: string[]) => {
      emit('update:openKeys', openKeys)
    }

    const handleSelect = ({ selectedKeys }: { selectedKeys: string[] }) => {
      emit('update:selectedKeys', selectedKeys)
    }

    return {
      handleOpen,
      handleSelect
    }
  }
})
</script>

<style lang="less">
.ant-menu-sub.ant-menu-inline > .ant-menu-item,
.ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 42px;
  line-height: 42px;
}
.ant-menu-vertical > .ant-menu-item,
.ant-menu-vertical-left > .ant-menu-item,
.ant-menu-vertical-right > .ant-menu-item,
.ant-menu-inline > .ant-menu-item,
.ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 42px !important;
  line-height: 42px !important;
}
.ant-menu-vertical .ant-menu-item,
.ant-menu-vertical-left .ant-menu-item,
.ant-menu-vertical-right .ant-menu-item,
.ant-menu-inline .ant-menu-item,
.ant-menu-vertical .ant-menu-submenu-title,
.ant-menu-vertical-left .ant-menu-submenu-title,
.ant-menu-vertical-right .ant-menu-submenu-title,
.ant-menu-inline .ant-menu-submenu-title {
  margin-top: 4px !important;
  margin-bottom: 4px !important;
}
.ant-menu-horizontal > .ant-menu-item,
.ant-menu-horizontal > .ant-menu-submenu {
  border-bottom: none;
  top: 0px;
}
.ant-menu-horizontal > .ant-menu-item,
.ant-menu-horizontal > .ant-menu-submenu:hover {
  border-bottom: none;
  top: 0px;
}
</style>

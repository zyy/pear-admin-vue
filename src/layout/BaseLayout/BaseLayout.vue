<template>
  <div class="application">
    <a-layout class="app-layout">
      <a-layout-sider
        class="app-layout-sider"
        collapsible
        width="208"
        :collapsedWidth="48"
        @collapse="handleChangeCollapsed"
      >
        <template v-slot:trigger>
          <div class="app-layout-sider-trigger">
            <MenuFoldOutlined style="font-size: 16px;" v-if="!collapsed"/>
            <MenuUnfoldOutlined style="font-size: 16px;" v-else/>
          </div>
        </template>
        <div
          :class="[!collapsed ? 'app-layout-sider-logo' : 'app-layout-sider-logo-collapsed']"
        >
          <a>
            <img src="~@/assets/logo.png" alt="">
            <h1 v-if="!collapsed">Pear Admin</h1>
          </a>
        </div>
        <app-menu
          class="app-layout-sider-menu"
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          :menu-list="menuList"
        />
      </a-layout-sider>
      <div :class="[!collapsed ? 'app-layout-sider-hidden' : 'app-layout-sider-hidden-collapsed']"></div>
      <a-layout style="position: relative;">
        <header class="app-layout-header-hidden"></header>
        <AppHeader :collapsed="collapsed"/>
        <a-layout-content
          class="app-layout-content"
        >
          <router-view/>
        </a-layout-content>
        <a-layout-footer
          class="app-layout-footer"
        >
          <footer class="app-layout-footer-content">
            ©{{ new Date().getFullYear() }} Created by Pear Admin
          </footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import routes from '@/router/routes'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import AppMenu from '@/components/Application/AppMenu/AppMenu.vue'
import AppHeader from '@/components/Application/AppHeader/AppHeader.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'BaseLayout',
  components: {
    AppMenu,
    AppHeader,
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup () {
    const menuState = reactive({
      collapsed: false,
      openKeys: [],
      selectedKeys: [],
      preOpenKeys: []
    })
    const route = useRoute()

    const handleChangeCollapsed = () => {
      menuState.openKeys = !menuState.collapsed ? [] : menuState.preOpenKeys
      menuState.collapsed = !menuState.collapsed
    }

    watch(
      () => menuState.openKeys,
      (val, oldVal) => {
        menuState.preOpenKeys = oldVal
      }
    )

    watch(() => route.name, () => {
      const matched = route.matched
      // todo: types
      // eslint-disable-next-line
      const openKeys: any = matched.map(it => it.name)
      menuState.openKeys = openKeys
      menuState.selectedKeys = openKeys
    }, { immediate: true })

    const menuList = routes.find(it => it.path === '/')?.children

    return {
      ...toRefs(menuState),
      handleChangeCollapsed,
      menuList
    }
  }
})
</script>

<style scoped lang="less">
.application {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;

  .app-layout {
    width: 100%;
    height: 100vh;

    &-sider {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      height: 100%;
      overflow: auto;
      overflow-x: hidden;
      box-shadow: 2px 0 8px 0 rgba(29, 35, 41, .20);

      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 3px;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
      }

      &-trigger {
        padding-left: 16px;
        text-align: left;
        //background: #001529;
        width: 100%;
      }

      &-logo {
        position: relative;
        display: flex;
        align-items: center;
        padding: 16px 16px;
        line-height: 32px;
        cursor: pointer;

        > a {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 32px;
        }

        img {
          display: inline-block;
          height: 32px;
          vertical-align: middle;
          transition: height 0.2s;
        }

        h1 {
          display: inline-block;
          height: 32px;
          margin: 0 0 0 12px;
          color: white;
          font-weight: 600;
          font-size: 18px;
          line-height: 32px;
          vertical-align: middle;
          animation: fade-in;
          animation-duration: 0.2s;
        }

        &-collapsed {
          position: relative;
          display: flex;
          align-items: center;
          padding: 16px 8px;
          line-height: 32px;
          cursor: pointer;

          > a {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 32px;
          }

          img {
            display: inline-block;
            height: 32px;
            vertical-align: middle;
            transition: height 0.2s;
          }
        }
      }

      &-menu {
        flex: 1 1 0%;
        overflow: hidden auto;
        height: calc(100vh - 112px)
      }
    }

    &-sider-hidden {
      width: 208px;
      overflow: hidden;
      flex: 0 0 208px;
      max-width: 208px;
      min-width: 208px;
      transition: background-color 0.3s ease 0s, min-width 0.3s ease 0s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

      &-collapsed {
        width: 48px;
        overflow: hidden;
        flex: 0 0 48px;
        max-width: 48px;
        min-width: 48px
      }
    }

    &-header-hidden {
      height: 48px;
      line-height: 48px;
      background: transparent;
      flex: 0 0 auto;
    }

    &-content {
      position: relative;
      //margin: 24px;
      //overflow-y: scroll;
      flex: auto;
      min-height: auto;
    }

    &-footer {
      position: relative;
      text-align: center;
      padding: 10px 0px;
    }
  }
}

@keyframes fade-in {
  0% {
    display: none;
    opacity: 0;
  }
  99% {
    display: none;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
}
</style>

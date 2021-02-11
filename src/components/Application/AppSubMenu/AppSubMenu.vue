<template>
  <a-sub-menu
    v-if="!route?.meta?.hidden"
    :key="route.name"
    v-bind="$attrs"
  >
    <template #title>
        <span>
          <app-icon :icon-name="route?.meta?.icon" />
          <span>{{ route.meta.title }}</span>
        </span>
    </template>
    <template v-for="item in route.children" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name">
          <router-link :to="{name: item.name}">
            <app-icon :icon-name="item?.meta?.icon" />
            <span>{{ item?.meta?.title }}</span>
          </router-link>
        </a-menu-item>
      </template>
      <template v-else>
        <app-sub-menu :route="item" :key="item.name" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '@/components/Application/AppIcon/AppIcon.tsx'

export default defineComponent({
  name: 'AppSubMenu',
  components: {
    AppIcon
  },
  props: {
    route: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped lang="less">

</style>

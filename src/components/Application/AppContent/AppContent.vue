<template>
  <loading v-if="loading"></loading>
  <router-view v-else v-slot="{ Component }">
    <transition name="fade-top">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'AppContent',
  setup () {
    const store = useStore()
    const loading = computed(() => store.state.app.routerLoading)
    console.log(loading)
    return {
      loading
    }
  }
})
</script>

<style scoped lang="less">

</style>

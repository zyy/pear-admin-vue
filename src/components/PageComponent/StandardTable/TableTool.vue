<template>
  <div class="table-tool">
    <a-space>
      <div class="table-tool-item">
        <a-tooltip
          title="刷新"
        >
          <a @click.prevent="refresh">
            <ReloadOutlined/>
          </a>
        </a-tooltip>
      </div>
      <div class="table-tool-item">
        <a-tooltip
          title="密度"
        >
          <a-dropdown
            :trigger="['click']"
          >
            <a @click.prevent>
              <ColumnHeightOutlined/>
            </a>
            <template #overlay>
              <a-menu
                @click="handleTableHeight"
                :selectedKeys="selectedKeys"
                style="width: 80px;"
              >
                <a-menu-item key="default">
                  <a href="javascript:;">默认</a>
                </a-menu-item>
                <a-menu-item key="middle">
                  <a href="javascript:;">中等</a>
                </a-menu-item>
                <a-menu-item key="small">
                  <a href="javascript:;">紧凑</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-tooltip>
      </div>
      <div class="table-tool-item">
        <a-tooltip
          title="列设置"
        >
          <a-dropdown
            :trigger="['click']"
          >
            <a @click.prevent>
              <SettingOutlined/>
            </a>
            <template #overlay>
<!--              <a-menu-->
<!--                @click="handleTableHeight"-->
<!--                :selectedKeys="selectedKeys"-->
<!--                style="width: 80px;"-->
<!--              >-->
<!--                <a-menu-item>-->
<!--                  <a href="javascript:;">默认</a>-->
<!--                </a-menu-item>-->
<!--                <a-menu-item>-->
<!--                  <a href="javascript:;">中等</a>-->
<!--                </a-menu-item>-->
<!--                <a-menu-item>-->
<!--                  <a href="javascript:;">紧凑</a>-->
<!--                </a-menu-item>-->
<!--              </a-menu>-->
            </template>
          </a-dropdown>
        </a-tooltip>
      </div>
    </a-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue'
import { ReloadOutlined, ColumnHeightOutlined, SettingOutlined } from '@ant-design/icons-vue'

type SelectedKeys = string[];

export default defineComponent({
  name: 'TableTool',
  props: {
    size: {
      type: String as PropType<string>
    }
  },
  components: {
    ReloadOutlined,
    ColumnHeightOutlined,
    SettingOutlined
  },
  emits: ['update:size'],
  setup (props, { emit }) {
    const state = reactive({
      selectedKeys: [] as SelectedKeys
    })
    // init in props
    console.log('table tool ==> ', Array.of(props.size as string))
    state.selectedKeys = Array.of(props.size as string)

    const handleTableHeight = ({ key }) => {
      state.selectedKeys = Array.of(key)
      emit('update:size', key)
    }

    const refresh = () => {
      console.log('dddd')
      // todo emit event to table component
    }

    return {
      ...toRefs(state),
      handleTableHeight,
      refresh
    }
  }
})
</script>

<style scoped lang="less">
.table-tool {
  width: 100%;
  height: auto;

  &-item {
    margin: 0 4px;
    font-size: 16px;
    cursor: pointer;
  }
}
</style>

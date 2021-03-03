<template>
  <div class="table-tool">
    <a-space>
      <div class="table-tool-item">
        <a-tooltip
          title="刷新"
        >
          <ReloadOutlined @click="refresh"/>
        </a-tooltip>
      </div>
      <div class="table-tool-item">
        <a-tooltip
          title="密度"
        >
          <a-dropdown
            :trigger="['click']"
          >
            <ColumnHeightOutlined/>
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
          <a-popover
            trigger="click"
            placement="bottomRight"
          >
            <template #title>
              <div class="table-tool-item-column">
                <a-checkbox>列展示</a-checkbox>
                <a href="javascript:;">重置</a>
              </div>
            </template>
            <template #content>
              columns list
            </template>
            <SettingOutlined/>
          </a-popover>
<!--          <a-dropdown-->
<!--            :trigger="['click']"-->
<!--          >-->
<!--            <a @click.prevent>-->
<!--              <SettingOutlined/>-->
<!--            </a>-->
<!--            <template #overlay>-->
<!--              <a-menu>-->
<!--                <TableColumnsTool></TableColumnsTool>-->
<!--              </a-menu>-->
<!--&lt;!&ndash;              <a-menu&ndash;&gt;-->
<!--&lt;!&ndash;                @click="handleTableHeight"&ndash;&gt;-->
<!--&lt;!&ndash;                :selectedKeys="selectedKeys"&ndash;&gt;-->
<!--&lt;!&ndash;                style="width: 80px;"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;                <a-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;                  <a href="javascript:;">默认</a>&ndash;&gt;-->
<!--&lt;!&ndash;                </a-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;                <a-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;                  <a href="javascript:;">中等</a>&ndash;&gt;-->
<!--&lt;!&ndash;                </a-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;                <a-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;                  <a href="javascript:;">紧凑</a>&ndash;&gt;-->
<!--&lt;!&ndash;                </a-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;              </a-menu>&ndash;&gt;-->
<!--            </template>-->
<!--          </a-dropdown>-->
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
  emits: ['update:size', 'refresh'],
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
      emit('refresh')
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
::v-deep(.ant-popover-title) {
  min-width: 177px;
  min-height: 32px;
  margin: 0;
  padding: 5px 16px 4px;
  color: rgba(0,0,0,.85);
  font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
}
.table-tool {
  width: 100%;
  height: auto;

  &-item {
    margin: 0 4px;
    font-size: 16px;
    cursor: pointer;
    &-column {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
      padding: 5px 0 4px 0;
    }
  }
}
</style>

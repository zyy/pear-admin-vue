import { defineComponent, onMounted, PropType, reactive, toRefs, watch } from 'vue'
import { tableProps } from 'ant-design-vue/es/table/interface'
import { getAntdComponentProps } from '@/components/_utils'
import './index.less'
import TableTool from '@/components/PageComponent/StandardTable/TableTool.vue'
// api test url https://jsonplaceholder.typicode.com/users
const StandardTable = defineComponent({
  name: 'StandardTable',
  components: {
    TableTool
  },
  props: Object.assign({}, tableProps, {
    fetch: {
      type: Function
    },
    pageSize: {
      type: Number as PropType<number>,
      default: 10
    },
    pageNo: {
      type: Number as PropType<number>,
      default: 1
    },
    total: {
      type: Number as PropType<number>,
      default: 0
    },
    showPagination: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    size: {
      type: String as PropType<string>,
      default: 'middle',
      validator: (size: string) => {
        return ['default', 'middle', 'small'].includes(size)
      }
    }
  }),
  setup (props) {
    const state = reactive({
      tableSize: props.size,
      tableData: [],
      tableLoading: false
    })

    const handleFetch = async () => {
      if (typeof props.fetch === 'function') {
        try {
          state.tableLoading = true
          const data = await props.fetch()
          state.tableData = data
        } catch (e) {
          // todo reset state
        } finally {
          state.tableLoading = false
        }
      }
    }

    const refresh = async () => {
      console.log('refresh =====')
      await handleFetch()
    }

    onMounted(async () => {
      await handleFetch()
    })

    watch(() => state.tableSize, value => {
      console.log(value)
    }, { immediate: true })

    return {
      ...toRefs(state),
      handleFetch,
      refresh
    }
  },
  render: ctx => {
    console.log(ctx)
    // default table props
    const defaultTableProps = getAntdComponentProps(tableProps, ctx)
    defaultTableProps.dataSource = ctx.tableData
    // todo: merge user custom props
    // todo: merge user custom operation
    return (
      <div class="app-standard-table-list-toolbar">
        <div class="app-standard-table-list-toolbar-container">
          <div class="app-standard-table-list-toolbar-container-left">
            <slot name="tableTitle">
              <div>标准表格</div>
            </slot>
          </div>
          <div class="app-standard-table-list-toolbar-container-right">
            <a-space>
              <slot name="operation"></slot>
              <TableTool
                v-model={[ctx.tableSize, 'size']}
              ></TableTool>
            </a-space>
          </div>
        </div>
        <a-table
          {
            ...{
              ...defaultTableProps,
              size: ctx.tableSize
            }
          }
          rowKey={(row) => row.id}
        ></a-table>
      </div>
    )
  }
})

export default StandardTable

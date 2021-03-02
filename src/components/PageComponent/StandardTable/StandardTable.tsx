import { defineComponent, PropType, reactive, toRefs } from 'vue'
import { tableProps } from 'ant-design-vue/es/table/interface'
import { getAntdComponentProps } from '@/components/_utils'
import './index.less'
// api test url https://jsonplaceholder.typicode.com/users
const StandardTable = defineComponent({
  name: 'StandardTable',
  props: Object.assign({}, tableProps, {
    fetch: {
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
    console.log(props)
    const state = reactive({
      tableLoading: false
    })
    return {
      ...toRefs(state)
    }
  },
  render: ctx => {
    console.log(ctx)
    // default table props
    const defaultTableProps = getAntdComponentProps(tableProps, ctx)
    console.log(defaultTableProps)
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
              {/* add slots or useTableTools */}
              <a-button type="primary">新建</a-button>
            </a-space>
          </div>
        </div>
        <a-table
          {...defaultTableProps}
        ></a-table>
      </div>
    )
  }
})

export default StandardTable

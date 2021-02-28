import { defineComponent, PropType } from 'vue'
import { tableProps } from 'ant-design-vue/es/table/interface'
import { getAntdComponentProps } from '@/components/_utils'
const StandardTable = defineComponent({
  name: 'StandardTable',
  props: Object.assign({}, tableProps, {
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
    }
  }),
  setup (props) {
    return (props) => {
      // default table props
      const defaultTableProps = getAntdComponentProps(tableProps, props)
      // todo: merge user custom props
      // todo: merge user custom operation
      return (
        <div class="app-standard-table">
          <a-table
            {...defaultTableProps}
          ></a-table>
        </div>
      )
    }
  }
})

export default StandardTable

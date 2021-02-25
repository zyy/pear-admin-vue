import { defineComponent } from 'vue'
import { tableProps } from 'ant-design-vue/es/table/interface'
import { PaginationProps } from 'ant-design-vue/es/pagination'

const StandardTable = defineComponent({
  name: 'StandardTable',
  props: Object.assign({}, tableProps, {
    customPagination: {
      type: PaginationProps,
      default: () => {
        return {}
      }
    }
  }),
  setup (props) {
    console.log(props)
    return () => {
      return (
        <div class="app-standard-table">
          <a-table></a-table>
        </div>
      )
    }
  }
})

export default StandardTable

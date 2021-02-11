import { defineComponent } from 'vue'
import { PageHeaderProps } from 'ant-design-vue/es/page-header'
import { getAntdComponentProps } from '@/components/_utils'
import './index.less'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'PageContainer',
  props: Object.assign({}, PageHeaderProps, {}),
  setup (props, ctx) {
    const defaultPageHeaderProps = getAntdComponentProps(PageHeaderProps, props)
    const currentProps = {
      ...defaultPageHeaderProps
    }
    const route = useRoute()
    const matched = [...route.matched]
    console.log(matched)
    console.log(ctx.slots)
    return () => {
      return (
        <div class="app-page-container">
          <a-page-header
            {...currentProps}
            v-slots={ctx.slots}
          >
          </a-page-header>
        </div>
      )
    }
  }
})

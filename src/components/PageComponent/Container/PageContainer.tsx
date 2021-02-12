import { defineComponent, watch, reactive } from 'vue'
import { PageHeaderProps } from 'ant-design-vue/es/page-header'
import { getAntdComponentProps } from '@/components/_utils'
import './index.less'
import { useRoute } from 'vue-router'

interface BreadRoute {
  path: string;
  breadcrumbName: string;
  children?: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}

interface Breadcrumb {
  routes: BreadRoute [];
  itemRender: Function;
}

interface PageContainerState {
  breadcrumb: Breadcrumb;
}

export default defineComponent({
  name: 'PageContainer',
  props: Object.assign({}, PageHeaderProps, {
    description: {
      type: String
    }
  }),
  setup: function (props, ctx) {
    const defaultPageHeaderProps = getAntdComponentProps(PageHeaderProps, props)
    const route = useRoute()

    const pageContainerState = reactive({
      breadcrumb: {
        routes: [],
        itemRender: () => {
          return undefined
        }
      }
    } as PageContainerState)

    const handleRouteChange = () => {
      pageContainerState.breadcrumb = {
        routes: route.matched.map(it => {
          return {
            name: it.name,
            path: it.path,
            breadcrumbName: it.path === '/' ? '首页' : it.meta?.title// i18nTitle
          }
        }) as BreadRoute[],
        itemRender: ({
          route
        }) => {
          return (
            route.path !== '/' ? (
              <span>{route.breadcrumbName}</span>
            ) : (
              <router-link to={{
                name: route.name
              }}>
                {route.breadcrumbName}
              </router-link>
            )
          )
        }
      }
    }
    watch(() => route.fullPath, handleRouteChange, { immediate: true })
    return () => {
      const pageDefaultSlot = Object.keys(ctx.slots).includes('default') ? ctx.slots : null
      const slots = Object.keys(ctx.slots).reduce((slots, name) => {
        switch (name) {
          case 'description':
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            slots.default = ctx.slots[name]
            return slots
          case 'default':
            return slots
          default:
            return {
              ...slots,
              [name]: ctx.slots[name]
            }
        }
      }, {})
      return (
        <div class="app-page-container">
          <a-page-header
            {...{
              ...defaultPageHeaderProps,
              breadcrumb: pageContainerState.breadcrumb
            }}
            class="app-page-container-head"
            v-slots={slots}
          >
            {!Object.keys(ctx.slots).includes('description') && props.description ? (
              <div>{props.description}</div>
            ) : null}
          </a-page-header>
          <div class="app-page-container-content">
            {pageDefaultSlot && pageDefaultSlot.default?.()}
          </div>
        </div>
      )
    }
  }
})

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
  props: Object.assign({}, PageHeaderProps, {}),
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
      return (
        <div class="app-page-container">
          <a-page-header
            {...{
              ...defaultPageHeaderProps,
              breadcrumb: pageContainerState.breadcrumb
            }}
            v-slots={ctx.slots}
          >
          </a-page-header>
        </div>
      )
    }
  }
})

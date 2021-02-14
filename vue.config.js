module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pear-admin-vue/'
    : '/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'menu-collapsed-width': '48px',
          'layout-header-height': '48px'
        },
        javascriptEnabled: true
      }
    },
    requireModuleExtension: true
  },
  devServer: {
    open: true,
    port: 3000,
    disableHostCheck: true
  },
  parallel: require('os').cpus().length > 1 // 构建时开启多进程处理babel编译
}

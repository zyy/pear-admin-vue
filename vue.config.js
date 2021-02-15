/* eslint-disable */
const path = require('path')
const fs = require('fs')
const lessToJs = require('less-vars-to-js')

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/themes/pear-theme-vars.less'), 'utf8'))
console.log(themeVariables)
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pear-admin-vue/'
    : '/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: themeVariables,
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

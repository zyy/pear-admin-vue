/* eslint-disable */
const createThemeColorReplacerPlugin = require('./src/themes/themeConfig.js')

const path = require('path')
const fs = require('fs')
const lessToJs = require('less-vars-to-js')

const resolve = str => path.resolve(__dirname, str)

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/themes/pear-theme-vars.less'), 'utf8'))

const config = {
  publicPath: '/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: themeVariables,
        javascriptEnabled: true
      }
    },
    requireModuleExtension: true
  },
  configureWebpack: {
    plugins: []
  },
  chainWebpack: config => {
    // const svgRule = config.module.rule('svg');
    // svgRule.uses.clear()
    //
    // svgRule
    //   .use("svg-sprite-loader")
    //   .loader("svg-sprite-loader")
    //   .options({
    //     symbolId: "icon-[name]"
    //   })
    //   .end()
  },
  devServer: {
    open: true,
    port: 3000,
    disableHostCheck: true
  },
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1 // 构建时开启多进程处理babel编译
}

if (process.env.VUE_APP_PEAR_VIEW === 'true') {
  config.configureWebpack.plugins.push(
    createThemeColorReplacerPlugin()
  )
}

module.exports = config

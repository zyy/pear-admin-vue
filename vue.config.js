/* eslint-disable */
// import createThemeColorReplacerPlugin from '@/themes/themeConfig'
const createThemeColorReplacerPlugin = require('./src/themes/themeConfig.js')

const path = require('path')
const fs = require('fs')
const lessToJs = require('less-vars-to-js')
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const antdColor = require('@ant-design/colors/dist/index')

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/themes/pear-theme-vars.less'), 'utf8'))

// utils
function getAntdSerials (color) {
  // 淡化（即less的tint）
  const lightens = new Array(9).fill().map((t, i) => {
    return ThemeColorReplacer.varyColor.lighten(color, i / 10)
  })
  const colorPalettes = antdColor.generate(color)
  return lightens.concat(colorPalettes)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pear-admin-vue/'
    : '/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: themeVariables,
        javascriptEnabled: true,
        importLoaders: 2
      }
    },
    requireModuleExtension: true
  },
  configureWebpack: {
    plugins: [
      createThemeColorReplacerPlugin()
    ]
  },
  devServer: {
    open: true,
    port: 3000,
    disableHostCheck: true
  },
  parallel: require('os').cpus().length > 1 // 构建时开启多进程处理babel编译
}

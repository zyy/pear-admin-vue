interface PearConfig {
  defaultLanguage: 'zh-CN' | 'en-US';
  themeColor: string;
  routeMode: 'history' | 'hash';
  routeAnimation: string;
}

const pearConfig: PearConfig = {
  defaultLanguage: 'zh-CN',
  themeColor: '#36b368',
  routeMode: 'hash',
  routeAnimation: 'fade-top'
}

export { pearConfig as default }
export {
  pearConfig
}

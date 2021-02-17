interface PearConfig {
  themeColor: string;
  routeMode: 'history' | 'hash';
  routeAnimation: string;
}

const pearConfig: PearConfig = {
  themeColor: '#36b368',
  routeMode: 'history',
  routeAnimation: 'fade-top'
}

export { pearConfig as default }
export {
  pearConfig
}

interface PearConfig {
  themeColor: string;
  routeMode: 'history' | 'hash';
  routeAnimation: string;
}

const pearConfig: PearConfig = {
  themeColor: '#36b368',
  routeMode: 'hash',
  routeAnimation: 'fade-top'
}

export { pearConfig as default }
export {
  pearConfig
}

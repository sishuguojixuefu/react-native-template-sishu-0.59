module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'mobx'],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    [
      'import',
      {
        libraryName: '@sishuguojixuefu/antd-mobile-rn',
      },
    ],
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
        rootPathPrefix: '~',
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
}

module.exports = {
  env: {
    // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
    es6: true,
    node: true,
    jest: true,
    'react-native/react-native': true,
  },
  extends: [
    // 一个配置文件可以从基础配置中继承已启用的规则
    'airbnb',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser', // 解析器
  parserOptions: {
    // 解析器选项
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    // ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
    'react',
    'react-native',
  ],
  settings: {
    // ESLint 支持在配置文件添加共享设置
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathSuffix: 'app',
        rootPathPrefix: '~',
      },
      node: {
        extensions: ['.js', '.jsx', 'ts', '.tsx'],
      },
    },
  },
  globals: {
    ios: false,
    android: false,
    windowHeight: false,
    windowWidth: false,
    hairlineWidth: false,
    DeviceInfo: false,
    isIphoneX: false,
    StatusBarHeight: false,
    HeaderHeight: false,
  },
  rules: {
    // 启用的规则及其各自的错误级别
    'global-require': 0,
    'linebreak-style': [2, 'unix'],
    'prefer-const': 0,
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'log', 'info', 'disableYellowBox'],
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-globals': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'no-useless-constructor': 0,
    'no-unused-expressions': 0,
    'no-plusplus': 0,
    'no-nested-ternary': 0,
    'lines-between-class-members': [
      1,
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
    ],
    'max-classes-per-file': 0,
    'import/prefer-default-export': 0,
    'react/prefer-stateless-function': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'jsx-a11y/accessible-emoji': 0,
    'react/static-property-placement': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'react-native/no-inline-styles': 0,
    'react-native/split-platform-components': 0,
    '@typescript-eslint/explicit-member-accessibility': [2, { accessibility: 'no-public' }],
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: true,
        classes: true,
        variables: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [1, { args: 'none' }],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
  },
}

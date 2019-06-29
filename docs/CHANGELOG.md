# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/lang/zh-CN/).

## [Unreleased]

## [0.2.7] - 2019-6-29

- 删除全局变量 ROUTES
- 添加页面代码块
- 给 index.js、App.tsx、HomeScreem.tsx 这三个页面手动标识当前页面
- 月下载量改为总下载量
- 添加 react-native-screens 并编写文档配置说明
- Android 文档添加 Daemon 使用说明

## [0.2.6] - 2019-6-28 13

- 删除 mobx、mobx-react 相关的全局变量
- rename AppStore.ts to appStore.ts

## [0.2.5] - 2019-6-28 13

> react-native-spring-scrollview、react-native-keyboard-manager 需要 link

- 添加项目依赖 @sishuguojixuefu/react-native-form、fast-deep-equal、hash.js、kind-of、lodash.clonedeep、lodash.omit、lodash.random、lodash.debounce、qs、react-native-keyboard-manager、react-native-largelist-v3、react-native-spring-scrollview
- 添加开发依赖 @types/kind-of、@types/lodash.clonedeep、@types/lodash.omit、@types/lodash.random、@types/lodash.debounce、@types/qs
- 移除 react-navigation-animated-switch
- 增加全局变量 inject、runInAction
- 引入 StatusBar
- 添加了 Navigation.ts、Iterator.ts 这两个工具类
- 添加 AppStore 管理应用全局 Store，常量放在 global 下，全局状态放在 mobx store 中
- 大面积优化文档和语法

## [0.2.4] - 2019-6-26 10

- 优化文档
- 增加全局变量 DeviceInfo
- 简化 App.tsx 的代码
- 修复警告与错误

## [0.2.3] - 2019-6-25 14

- 修复若干错误

## [0.2.2] - 2019-6-25 13

- 修改 apiLeavel 为 apiLevel
- 删除 react-native-code-push 默认调用

## [0.2.1] - 2019-6-24 17

- 移除 react-native-code-push 原生配置，改为文档的形式（但还是强制）

## [0.2.0] - 2019-6-24 14

- 添加全局变量 windowHeight、windowWidth、hairlineWidth、observable、action、computed、toJS、observer
- 添加插件 react-native-code-push 及其配置

## [0.1.9] - 2019-6-24 11

- 添加 gitignore 模板
- 删除多余的注释
- 忽略 CHANGELOG.MD
- 添加 `@react-native-community/async-storage`、`react-native-config-reader`、`react-native-device-info`、`react-native-fs` 等 4 个插件
- 删除 `mobx-react-devtools` 依赖

## [0.1.8] - 2019-6-24 10

- 添加 `@types/md5`

## [0.1.7] - 2019-6-24 10

- 修改 `tsconfig.json`，添加 skipLibCheck、resolveJsonModule 属性
- 修改 metro 配置，兼容 react-native-json-tree 插件
- 修改 eslintrc.js，忽略 @typescript-eslint/no-non-null-assertion 规则

## [0.1.6] - 2019-6-16 15

- 把 `.vscode` 文件夹上传到 npm

## [0.1.5] - 2019-6-16 15

- 支持在开发者模式下打印 info、warn、error

[unreleased]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.2.7...HEAD
[0.2.7]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.2.6...v0.2.7
[0.2.6]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.2.5...v0.2.6
[0.2.5]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.2.4...v0.2.5
[0.2.4]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.2.3...v0.2.4
[0.2.3]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.1.9...v0.2.0
[0.1.9]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.1.8...v0.1.9
[0.1.8]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.1.7...v0.1.8
[0.1.7]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.1.6...v0.1.7
[0.1.6]: https://github.com/sishuguojixuefu/react-native-template-sishu/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/sishuguojixuefu/react-native-template-sishu/releases/tag/v0.1.5

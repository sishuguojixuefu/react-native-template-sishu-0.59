# 🎨react-native-template-sishu [![Build Status](https://travis-ci.org/sishuguojixuefu/react-native-template-sishu.svg?branch=master)](https://travis-ci.org/sishuguojixuefu/react-native-template-sishu)

私塾国际学府 React Native 团队开箱即用项目模板

![](https://i.loli.net/2019/05/27/5ceb5d0f6ca1c75070.png)

## 🎉 特性

- 无缝集成到 React Native CLI 中！✨
- 与默认的 React Native 模板一致
- 始终是最新的依赖项 🙌
- 优雅地集成 axios、mobx、react-navigation
- 使用一个有经验的项目目录结构
- 使用一个有经验的 VSCode 配置

## 🚀 快速开始

### 初始化项目

```sh
$ react-native init MyApp --template sishu
```

### link 原生应用

> `react-native link` 命令有时候会失败，建议执行完命令后到相应插件主页阅读文档。

```sh
$ react-native link react-native-gesture-handler react-native-vector-icons
```

## 🏗 额外添加的依赖

### dependencies

#### mobx

- [mobx](http://t.cn/R3Kne8l): 简单、可扩展的状态管理
- [mobx-react](http://t.cn/R5cHJQf): Mobx 的 React 粘合剂
- [mobx-react-devtools](http://t.cn/RGnCdNB): 用于执行由 MobX 和 React 提供支持的 React 应用程序的运行时分析的工具
- [mobx-persist](http://t.cn/AiKIRSjX): 持久化 mobx stores

#### react-navigation

- [react-native-gesture-handler](http://t.cn/AiKMLWNy): react-navigation 依赖这个插件
- [react-navigation](http://t.cn/RBfba1a): 官方推荐导航组件
- [react-navigation-addon-search-layout](http://t.cn/AiKMi8Ux): 一个简单但完全可以接受的搜索布局屏幕，在 iOS 和 Android 上看起来很不错。
- [react-navigation-animated-switch](http://t.cn/AiKMiajA): 让 Switch 栈具有动画
- [react-navigation-back-button](http://t.cn/E9DntJc): 模仿 react-navigation 返回键，能够拦截返回事件
- [react-navigation-backhandler](http://t.cn/RkCpfeP): 使用 React-Navigation 轻松处理 Android 后退按钮行为
- [react-navigation-collapsible](http://t.cn/E9D8NTs): 可折叠标题的 React Navigation 扩展。使您的 React Navigation 标题可折叠
- [react-navigation-header-buttons](http://t.cn/R1LoGK6): 轻松渲染用于反应导航的标题按钮。
- [react-navigation-transitions](http://t.cn/E9DR3R7): react-navigation 的自定义过渡效果组件

#### UI 组件

- [react-native-vector-icons](http://t.cn/R2J6QcS): React Native 的可自定义图标组件

#### utils

- [axios](http://t.cn/ROfXFuj): Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
- [dayjs](http://t.cn/Ei0icT0): Moment.js 的 2kB 轻量化方案，拥有同样强大的 API
- [md5](http://t.cn/RAG3xcN): 用于使用 MD5 散列消息的 JavaScript 函数
- [uuid](http://t.cn/RarS3SE): 简单，快速生成 RFC4122 UUIDS

### devDependencies

- @types/jest
- @types/react
- @types/react-native
- @types/react-test-renderer
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- babel-plugin-import
- babel-plugin-root-import
- babel-plugin-transform-remove-console
- babel-preset-mobx
- eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslint-import-resolver-babel-plugin-root-import
- eslint-import-resolver-typescript
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-native
- husky
- lint-staged
- prettier
- typescript

## 📄 额外的文件

- `.vscode`
  - [settings.json](http://t.cn/RrW80SM): VSCode 配置文件
- [.editorconfig](http://t.cn/EIManp7): EditorConfig 配置文件
- [.eslintignore](http://t.cn/AiKfQ2lw): ESLint 忽略配置文件
- [.eslintrc.js](http://t.cn/R1frsCU): ESLint 配置文件
- [.prettierignore](http://t.cn/AiKfH938): Prettier 忽略配置文件
- [.prettierrc.js](http://t.cn/RB0SYNU): Prettier 配置文件
- [.huskyrc.js](http://t.cn/AiKfHhpj): husky 配置文件
- [lint-staged.config.js](http://t.cn/AiKfTuw1): lint-staged 配置文件
- [tsconfig.json](http://t.cn/RgGMOQ7): TypeScript 配置文件
- jest.config.js: jest 配置文件

## ⚡️ 改动的文件

- `App.js` -> `App.tsx`
- `__tests__/App-test.js` -> `__tests__/App-test.tsx`
- `index.js`

## 相关项目

- [react-native-template-typescript](http://t.cn/R1u8olx)：干净简约的 React Native 模板，可快速启动 TypeScript
- [react-native-template-youngjuning](http://t.cn/ECLfOA5): 杨俊宁的个人 react-native 模版
- [react-native-template-rocketseat-basic](http://t.cn/AiKIMyxQ): 具有 Rocketseat 中使用的结构的 React Native 应用程序的基本模板
- [awesome-mobx](https://github.com/mobxjs/awesome-mobx)
- [react-navigation-slide-from-right-transition](http://t.cn/RsjwjbZ): 从右侧滑动转换配置，用于在 android 上使用 react navigation 的堆栈导航器

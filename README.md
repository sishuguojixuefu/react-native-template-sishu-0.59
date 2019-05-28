# 🎨react-native-template-sishu

[![Build Status](https://travis-ci.org/sishuguojixuefu/react-native-template-sishu.svg?branch=master)](https://travis-ci.org/sishuguojixuefu/react-native-template-sishu)
[![npm version](https://badge.fury.io/js/react-native-template-sishu.svg)](https://badge.fury.io/js/react-native-template-sishu)
[![CONTRIBUTING](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![CHANGELOG](https://img.shields.io/static/v1.svg?label=CHANGELOG&message=Look&color=success)](./CHANGELOG.md)

私塾国际学府 React Native 团队开箱即用项目模板

![](https://i.loli.net/2019/05/27/5ceb5d0f6ca1c75070.png)

## 🎉 特性

- 无缝集成到 React Native CLI 中！✨
- 与默认的 React Native 模板一致
- 始终是最新的依赖项 🙌
- 优雅地集成 axios、mobx、react-navigation
- 使用一个有经验的项目目录结构
- 使用一个有经验的 VSCode 配置
- 支持相对根目录引入文件(默认根目录 src)

## 🚀 快速开始

### 初始化项目

```sh
$ react-native init MyApp --template sishu
```

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

## 🏗 额外添加的依赖

### dependencies

#### 数据可视化

- [ ] [react-native-echarts-wrapper](http://t.cn/E9VgJEU):

#### 数据持久化

- [ ] [WatermelonDB](http://t.cn/RsoPVsb): 用于功能强大的 React 和 React Native 应用程序的高性能 React 化数据库

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

- [@sishuguojixuefu/antd-mobile-rn](http://t.cn/AiKJmVe2): 一个基于 Ant Design Mobile RN 的 UI 组件库
- [react-native-vector-icons](http://t.cn/R2J6QcS): React Native 的可自定义图标组件

#### 图片

- [ ] [react-native-image-crop-picker](http://t.cn/RcqvN9z): iOS / Android 图像选择器，支持相机，视频，可配置压缩，多个图像和裁剪
- [ ] [react-native-image-viewer](http://t.cn/RsjOuLE): 微小而快速的 lib，用于反应原生图像查看器平移和缩放
- [ ] [react-native-lightbox](http://t.cn/RyfvWiQ): 全屏灯箱中的图像等弹出用于 React Native
- [ ] [react-native-fast-image](http://t.cn/RsjRZzg): 高性能的 React Native 图像组件

#### utils

- [axios](http://t.cn/ROfXFuj): Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
- [dayjs](http://t.cn/Ei0icT0): Moment.js 的 2kB 轻量化方案，拥有同样强大的 API
- [md5](http://t.cn/RAG3xcN): 用于使用 MD5 散列消息的 JavaScript 函数
- [uuid](http://t.cn/RarS3SE): 简单，快速生成 RFC4122 UUIDS

### devDependencies

- @babel/plugin-transform-flow-strip-types: http://t.cn/AiKNGn4F
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

## 如何删除不想要的依赖？

> 注意：react-navigation、axios、@sishuguojixuefu/antd-mobile-rn 不能简单的进行移除，如果要移除。请自行删除项目中的配置

### 原生库

原生库需要先执行 `react-native unlink packageName`，然后再执行 `yarn remove packageName`

下面是依赖的原生库:

- react-native-gesture-handler
- react-native-vector-icons
- @ant-design/icons-react-native

### 非原生库

直接执行 `yarn remove packageName`

## 更多

### 超六的 npm 工作流程

```json
{
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "run:ios": "node node_modules/react-native/local-cli/cli.js run-ios",
    "run:android": "yarn gradle:clean && node node_modules/react-native/local-cli/cli.js run-android",
    "bundle:ios": "react-native bundle --entry-file index.js --bundle-output ./ios/index.ios.bundle --platform ios --dev false --assets-dest ./ios --sourcemap-output ./ios/index.ios.bundle.map",
    "bundle:android": "react-native bundle --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --platform android --dev false --assets-dest ./android/app/src/main/res --sourcemap-output ./android/app/src/main/assets/index.android.bundle.map",
    "gradle:clean": "cd android && ./gradlew clean",
    "gradle:stop": "cd android && ./gradlew stop",
    "android:assembleRelease": "cd android && ./gradlew assembleRelease",
    "android:installRelease": "cd android && ./gradlew installRelease",
    "android:keygen": "keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 36500",
    "android:key-debug": "keytool -list -v -keystore ~/.android/debug.keystore",
    "android:key-release": "keytool -v -list -keystore ./android/app/my-release-key.keystore"
  }
}
```

## 相关项目

- [react-native-template-typescript](http://t.cn/R1u8olx)：干净简约的 React Native 模板，可快速启动 TypeScript
- [react-native-template-youngjuning](http://t.cn/ECLfOA5): 杨俊宁的个人 react-native 模版
- [react-native-template-rocketseat-basic](http://t.cn/AiKIMyxQ): 具有 Rocketseat 中使用的结构的 React Native 应用程序的基本模板
- [awesome-mobx](https://github.com/mobxjs/awesome-mobx)
- [react-navigation-slide-from-right-transition](http://t.cn/RsjwjbZ): 从右侧滑动转换配置，用于在 android 上使用 react navigation 的堆栈导航器

```

```

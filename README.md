# 🎨react-native-template-sishu

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/react-native-template-sishu.svg)](https://badge.fury.io/js/react-native-template-sishu)
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
- 优雅地声明全局变量（通过定义命名空间）

## 🚀 快速开始

### 初始化项目

```sh
$ react-native init MyApp --template sishu
```

### react-native-gesture-handler 配置

iOS 啥都不用做

为了完成 `react-native-gesture-handler` 在 Android 上的安装，请确保在 `MainActivity.java` 上完成如下修改：

```diff
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

### watermelondb 配置

> 翻译不甚精准，可参考[原文](http://t.cn/Ai9ZWNsp)

android 啥都不用做，ios 需要配置 Xcode 项目对 swift 的支持：

- 在 Xcode 中打开 `ios/YourAppName.xcodeproj`
- 右键**你的 App 名字**(它在左侧的项目导航上)，然后点击 `New File`
- 给项目创建一个空的 `Swift` 文件（确保添加的时候**你的 App 名字**是被选中的），然后当 Xcode 询问时，点击 **Create Bridging Header** **并且不要删除 `Swift`**

### 处理系统字体

> 注意：ios 已经在模版中配置好，安卓需要手动配置

在 `android\app\src\main\java\com\appName\MainApplication.java` 文件中加入如下代码：

```java
...
import android.content.res.Configuration;
import android.content.res.Resources;
...

public class MainActivity extends ReactActivity {
    ...
    // 让文字不随系统文字变化：http://t.cn/Rs26Veb
    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        if (newConfig.fontScale != 1)//非默认值
        getResources();
        super.onConfigurationChanged(newConfig);
    }

    @Override
    public Resources getResources() {
        Resources res = super.getResources();
        if (res.getConfiguration().fontScale != 1) {//非默认值
            Configuration newConfig = new Configuration();
            newConfig.setToDefaults();//设置默认
            res.updateConfiguration(newConfig, res.getDisplayMetrics());
        }
        return res;
    }
    ...
}
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

- [react-native-webview](http://t.cn/Ai9vWU0O): React Native 跨平台 WebView

#### 数据可视化

- [react-native-echarts-wrapper](http://t.cn/E9VgJEU): 用于流行的 echarts 图表框架的 React Native 包装器

#### 数据持久化

- [@nozbe/watermelondb](http://t.cn/RsoPVsb): 用于功能强大的 React 和 React Native 应用程序的高性能响应式数据库
- [@nozbe/with-observables](http://t.cn/AiKjlDYC): 用于将 RxJS Observable 连接到 React 组件的 HOC（高阶组件）

#### mobx

- [mobx](http://t.cn/R3Kne8l): 简单、可扩展的状态管理
- [mobx-react](http://t.cn/R5cHJQf): Mobx 的 React 粘合剂
- [mobx-react-devtools](http://t.cn/RGnCdNB): 用于执行由 MobX 和 React 提供支持的 React 应用程序的运行时分析的工具

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
- [@ant-design/icons-react-native](http://t.cn/Ai9CXbQn): Ant Design Icons for React Native
- [react-native-vector-icons](http://t.cn/R2J6QcS): React Native 的可自定义图标组件

#### utils

- [react-native-add-custom-props](http://t.cn/Ai9O4Ptd): add custom props tp react native component
- [axios](http://t.cn/ROfXFuj): Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
- [dayjs](http://t.cn/Ei0icT0): Moment.js 的 2kB 轻量化方案，拥有同样强大的 API
- [md5](http://t.cn/RAG3xcN): 用于使用 MD5 散列消息的 JavaScript 函数
- [uuid](http://t.cn/RarS3SE): 简单，快速生成 RFC4122 UUIDS

### devDependencies

- @babel/plugin-proposal-decorators: http://t.cn/AiKjjaPG
- @babel/plugin-transform-flow-strip-types: http://t.cn/AiKNGn4F
- @types/jest
- @types/react
- @types/react-native
- @types/react-native-vector-icons
- @types/react-navigation
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
- react-native-webview
- @nozbe/watermelondb

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
    "android:assembleRelease": "yarn gradle:clean && cd android && ./gradlew assembleRelease",
    "android:installRelease": "yarn gradle:clean && cd android && ./gradlew installRelease",
    "android:keygen": "keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 36500",
    "android:key-debug": "keytool -list -v -keystore ~/.android/debug.keystore",
    "android:key-release": "keytool -v -list -keystore ./android/app/my-release-key.keystore"
  }
}
```

### 推荐组件

#### 图片

- [ ] [react-native-image-crop-picker](http://t.cn/RcqvN9z): iOS / Android 图像选择器，支持相机，视频，可配置压缩，多个图像和裁剪
- [ ] [react-native-image-viewer](http://t.cn/RsjOuLE): 微小而快速的 lib，用于反应原生图像查看器平移和缩放
- [ ] [react-native-lightbox](http://t.cn/RyfvWiQ): 全屏灯箱中的图像等弹出用于 React Native
- [ ] [react-native-fast-image](http://t.cn/RsjRZzg): 高性能的 React Native 图像组件

### 踩过的坑

#### TypeError:undefined is not an object(evaluating `this._call Listeners.bind`)

> 解决办法来自：http://t.cn/AiK0Nr8R @Xiao-HuangShu

### 高级配置

> 由于在模版中修改原生部分过于繁琐，而且可能并不符合你的项目。我们把这些高级配置放在这里，你可以有选择的食用

- [Android](./Android.md)

### 相关项目

- [react-native-template-typescript](http://t.cn/R1u8olx)：干净简约的 React Native 模板，可快速启动 TypeScript
- [react-native-template-youngjuning](http://t.cn/ECLfOA5): 杨俊宁的个人 react-native 模版
- [react-native-template-rocketseat-basic](http://t.cn/AiKIMyxQ): 具有 Rocketseat 中使用的结构的 React Native 应用程序的基本模板
- [awesome-mobx](https://github.com/mobxjs/awesome-mobx)
- [react-navigation-slide-from-right-transition](http://t.cn/RsjwjbZ): 从右侧滑动转换配置，用于在 android 上使用 react navigation 的堆栈导航器

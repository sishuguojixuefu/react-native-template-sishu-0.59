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

在 `android\app\src\main\java\com\appName\MainActivity.java` 文件中加入如下代码：

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

## 基于官方模版的变动之处

- [Change](./docs/Change.md)

## 高级配置

- [Android](./docs/Android.md)

## 踩过的坑

### TypeError:undefined is not an object(evaluating `this._call Listeners.bind`)

> 解决办法来自：http://t.cn/AiK0Nr8R @Xiao-HuangShu

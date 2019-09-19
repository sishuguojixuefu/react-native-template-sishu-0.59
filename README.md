# 🎨react-native-template-sishu

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/react-native-template-sishu.svg)](https://badge.fury.io/js/react-native-template-sishu)
[![npm](https://img.shields.io/npm/dt/react-native-template-sishu.svg)](https://www.npmjs.com/package/react-native-template-sishu)
[![CONTRIBUTING](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![CHANGELOG](https://img.shields.io/static/v1.svg?label=CHANGELOG&message=Look&color=success)](./docs/CHANGELOG.md)

私塾国际学府 React Native 团队开箱即用项目模板

![](https://i.loli.net/2019/05/27/5ceb5d0f6ca1c75070.png)

## 🎉 特性

- 无缝集成到 React Native CLI 中！✨
- 与默认的 React Native 模板一致
- 优雅地集成 axios、mobx、react-navigation
- 使用一个有经验的项目目录结构
- 使用一个有经验的 VSCode 配置
- 支持相对根目录引入文件(默认根目录 src)
- 优雅地声明全局变量（通过定义命名空间）

## 🚀 快速开始

> 这部分的配置都是必须要配置的，如果要跳过，请确保删除了项目中已有的相关配置（不推荐）

### 初始化项目

> react native 0.60 做了较大的改动，暂不支持

```sh
$ react-native init MyApp --template sishu --version 0.59.10
```

### 超六的 npm 工作流程

```json
{
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "ios:debug": "node node_modules/react-native/local-cli/cli.js run-ios",
    "ios:bundle": "react-native bundle --entry-file index.js --bundle-output ./ios/index.ios.bundle --platform ios --dev false --assets-dest ./ios --sourcemap-output ./ios/index.ios.bundle.map",
    "gradle:clean": "cd android && ./gradlew clean",
    "an:bundle": "react-native bundle --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --platform android --dev false --assets-dest ./android/app/src/main/res --sourcemap-output ./android/app/src/main/assets/index.android.bundle.map",
    "an:debug": "yarn gradle:clean && node node_modules/react-native/local-cli/cli.js run-android",
    "an:release": "yarn gradle:clean && cd android && ./gradlew assembleRelease",
    "an:installRelease": "yarn gradle:clean && cd android && ./gradlew installRelease",
    "an:staging": "yarn gradle:clean && cd android && ./gradlew assembleReleaseStaging",
    "an:installStaging": "yarn gradle:clean && cd android && ./gradlew installReleaseStaging",
    "an:keygen": "keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 36500",
    "an:key-debug": "keytool -list -v -keystore ~/.android/debug.keystore",
    "an:key-release": "keytool -v -list -keystore ./android/app/my-release-key.keystore"
  }
}
```

### 安卓配置

#### Maven 仓库

将以下代码配置到 `android/build.gradle` 配置文件的 `buildscript/repositories` 和 `allprojects/repositories` 下

```js
maven{
    url 'http://maven.aliyun.com/nexus/content/groups/public/'
    name 'aliyun'
}
...
// 请务必将jitpack放在最后
maven {
    url "https://jitpack.io"
    name 'jitpack'
}
```

- `aliyun`: 为了加快下载速度
- `jitpack`: 为了解决 react-native-image-crop-picker [Could not find com.github.yalantis:ucrop:2.2.1-native](http://t.cn/Ewx8bc3)的问题

#### shell 文件的坑

为了安全性 shell 文件默认都是不可执行的，当然也包括 `android/gradlew` 这个用来打包的脚本文件，这会给持续集成带来麻烦：运维同学默认是执行不了我们的打包命令的。解决办法很简单：

```sh
$ git update-index --add --chmod=+x android/gradlew
```

#### 处理系统字体

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

#### react-native-gesture-handler 配置

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
+        return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

#### react-native-config-reader

打开 `android/app/src/main/packageName/MainApplication.java` 把 `new RNConfigReaderPackage()` 替换为 `new RNConfigReaderPackage(BuildConfig.class)`

> 自定义 BuildConfig 请戳 http://t.cn/AipENa1O

#### watermelondb

1、在 `android/settings.gradle` 添加：

```js
include ':watermelondb'
project(':watermelondb').projectDir = new File(rootProject.projectDir, '../node_modules/@nozbe/watermelondb/native/android')
```

2、在 `android/build.gradle`, 添加 Kotlin 支持:

```js
buildscript {
    ext {
        kotlin_version = '1.3.21' // ⬅️ This!
    }
    // ...
    dependencies {
        // ...
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version" // ⬅️ This!
    }
}
```

3、在 `android/app/build.gradle` 添加：

```js
apply plugin: "com.android.application"
apply plugin: 'kotlin-android'  // ⬅️ This!
// ...
dependencies {
    // ...
    implementation project(':watermelondb') // ⬅️ This!
}
```

4、最后，在 `android/app/src/main/java/{YOUR_APP_PACKAGE}/MainApplication.java`, 中添加：

```java
// ...
import com.nozbe.watermelondb.WatermelonDBPackage; // ⬅️ This!
// ...
@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new MainReactPackage(),
    new WatermelonDBPackage() // ⬅️ Here!
  );
}
```

#### 高级配置

- [安卓高级配置](./docs/Android.md)

#### 权限

```xml
<!--拍照-->
<uses-permission android:name="android.permission.CAMERA"/>
<!-- 前置摄像头 -->
<uses-feature android:name="android.hardware.camera" android:required="false" />
<uses-feature android:name="android.hardware.camera.front" android:required="false" />
```

### ios

#### react-native-config-reader

> 由于插件需要读取系统配置，我们需要手动在 info.plist 中添加一些字段

1. 添加 `BUILD_TYPE`，取值为 `$(CONFIGURATION)`
2. 添加 `BUILD_TIME`,取值为空，并通过脚本在每次编译的时候对其更新，脚本添加步骤 `Target`-> `Build Phases` -> `+` -> `New Run Script Phase`, Shell 代码如下

```shell
echo "In the build time script run."
infoplist="$BUILT_PRODUCTS_DIR/$INFOPLIST_PATH"
builddate=`date +%Y-%m-%d_%H:%M`
if [[ -n "$builddate" ]]; then
/usr/libexec/PlistBuddy -c "Set :BUILD_TIME $builddate" ${infoplist}
fi
```

#### watermelondb

- Open `ios/YourAppName.xcodeproj` in Xcode
- Right-click on **Your App Name** in the Project Navigator on the left, and click **New File…**
- Create a single empty `Swift` file to the project (make sure that **Your App Name** target is selected when adding), and when Xcode asks, press **Create Bridging Header** and **do not remove** `Swift` file then.

#### 权限

- `Privacy - Camera Usage Description`
- `Privacy - Photo Library Usage Description`

### 启动屏（防止启动白屏）

- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)
- [react-native-splash-screen-ios.md](./docs/react-native-splash-screen-ios.md)

### 热更新

- [react-native-code-push](./docs/react-native-code-push.md)

## 其他文档

- [基于官方模版的变动之处](./docs/Change.md)
- [如何删除不想要的依赖？](./docs/Remove.md)
- [踩过的坑](./docs/Shit.md)

## 相关项目

- [react-native-template-typescript](http://t.cn/R1u8olx)：干净简约的 React Native 模板，可快速启动 TypeScript
- [react-native-template-youngjuning](http://t.cn/ECLfOA5): 杨俊宁的个人 react-native 模版
- [react-native-template-rocketseat-basic](http://t.cn/AiKIMyxQ): 具有 Rocketseat 中使用的结构的 React Native 应用程序的基本模板
- [awesome-react-native](http://t.cn/RAXKJGR):Awesome React Native components, news, tools, and learning material!
- [awesome-mobx](https://github.com/mobxjs/awesome-mobx)
- [react-typescript-cheatsheet](http://t.cn/Ai9xcymw): react typescript 备忘录
- [react-navigation-slide-from-right-transition](http://t.cn/RsjwjbZ): 从右侧滑动转换配置，用于在 android 上使用 react navigation 的堆栈导航器
- [react-navigation-animated-switch](http://t.cn/AiKMiajA): A switch navigator but with transitions between screens powered by the react-native-reanimated Transitions API

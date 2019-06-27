## 自定义安卓打包的后缀

配置 `android/app/build.gradle`:

```diff
+def releaseTime() {
+    return new Date().format("yyyyMMdd-HHmmss", TimeZone.getTimeZone("GMT+08:00"))
+}
android: {
    applicationVariants.all { variant ->
+    		variant.outputs.all {
+            // the apk name is e.g. galaxy_v1.0.1_2018-11-1_debug.apk
+            outputFileName = "galaxy_v${defaultConfig.versionName}_${releaseTime()}_${variant.buildType.name}.apk"
+        }
    }
}
```

## 配置 App 名称

很简单,我们直接打开 `android/app/src/main/res/values/strings.xml`，即可看到配置中的 `app_name`，修改为你想要的即可。

## 修改 App 的图标

也很简单，在 `android\app\src\main\res\mipmap-xxxxxx` 中直接覆盖图标就可以，注意图标的大小。

## Maven 仓库

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

## 构建配置

### 1、配置 PackagingOptions

打开 `android/app/build.gradle` 文件，添加如下配置：

```
packagingOptions {
    exclude 'META-INF/android_release.kotlin_module'
    exclude 'META-INF/DEPENDENCIES'
    exclude 'META-INF/LICENSE'
    exclude 'META-INF/LICENSE.txt'
    exclude 'META-INF/license.txt'
    exclude 'META-INF/NOTICE'
    exclude 'META-INF/NOTICE.txt'
    exclude 'META-INF/notice.txt'
    exclude 'META-INF/ASL2.0'
}
```

- pickFirsts: 当出现重复文件，会使用第一个匹配的文件打包进入 apk
- merges: 当出现重复文件，合并重复的文件打入 apk
- excludes: 打包的时候排除匹配的文件

#### 参考链接

- [PackagingOptions](http://t.cn/Ewt1xD2)
- [More than one file was found with OS independent path](http://t.cn/AipuM9Ll)
- [More than one file was found with OS independent path 'META-INF/LICENSE'](http://t.cn/AipuMfcH)

### 2、配置 splits

> 查看手机 CPU 信息：`adb shell` -> `cd /proc` -> `cat cpuinfo`

默认情况下，生成的 `APK` 会同时包含针对于 `x86` 和 `ARMv7a` 两种 `CPU` 架构的原生代码。这样可以让我们更方便的向其他人分享这个 `APK`，因为它几乎可以运行在所有的 Android 设备上。但是，这会导致所有设备上都有一些根本不会运行的代码，白白占据了空间。目前安卓设备绝大多数是 `ARM` 架构，因此对于大部分应用来说可以考虑去掉 `x86` 架构的支持。

你可以在 `android/app/build.gradle` 中修改如下代码（`false` 改为 `true`）来生成针对不同 CPU 架构的 APK。

```diff
- include "armeabi-v7a", "x86", "arm64-v8a", "x86_64"
+ include "armeabi-v7a", "arm64-v8a"
- def versionCodes = ["armeabi-v7a":1, "x86":2, "arm64-v8a": 3, "x86_64": 4]
+ def versionCodes = ["armeabi-v7a":1, "arm64-v8a": 2]
```

- abi: Application Binary Interface，针对不同的 `CPU` 架构生成 `APK` 以减小 `APK` 文件的大小

  - `mips/mips64`：极少用于手机，出发点是高性能,主要用于路由器、猫。
  - `armeabi`：老版本 `ARMv5`，不支持硬件辅助浮点运算，支持所有的 `ARM` 设备。
  - `x86`/`x86_64`：`x86` 架构的手机的市场占有率很低，约为 1%左右。而且 `x86` 架构都包含 `ARM` 模拟层，兼容 `ARM` 类型的 `ABI`。注意，模拟器为 `x86` 架构。
  - `arm64-v8a`：64 位 `ARM` 架构。可用 32 位模式运行 `armeabi-v7a` 和 `armeabi`。（所谓的 `ARMv8` 架构，就是在 `MIPS64` 架构上增加了 `ARMv7` 架构中已经拥有的的 `TrustZone` 技术、虚拟化技术及 `NEON advanced SIMD` 技术等特性，研发成的）
  - `armeabi-v7a`：主流版本 `AMRv7`，2011 年 15 月以后的生产的大部分 Android 设备都使用它。

- density: 针对不同的分辨率生成 `APK` 以减小 `APK` 文件的大小

### 3、配置 release buildTypes

```diff
buildTypes {
  release {
      signingConfig signingConfigs.release
      minifyEnabled enableProguardInReleaseBuilds
+     zipAlignEnabled true
+     shrinkResources true
+     debuggable false
      proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
  }
}
```

- `zipAlignEnabled`: 可以让安装包中的资源按 4 字节对齐，这样可以减少应用在运行时的内存消耗。所以打包正式版最好也开启，[zipalign 的工具的使用](http://t.cn/EwcA9K8)
- `shrinkResources`: 移除无用的 resource 文件，[Android 混淆简单入门](http://t.cn/EwcLLUa)、[shrinkResources 的使用](http://t.cn/Ai90Jgrd)
- debuggable: 是否 debug，[react-native 区分环境（安卓）](http://t.cn/Ai906otI)

> 注意 `shrinkResources` 只要在 `minifyEnabled` 开启的情况下才能使用
> 否则编译报错：Removing unused resources requires unused code shrinking to be turned on. See http://d.android.com/r/tools/shrink-resources.html for more information.

### 4、去除无用的语言资源

通过配置 `android/defaultConfig/resConfigs` 可以选择只打包哪几种语言，进而去掉各种 aar 包中全世界的语言，尤其是 support 包中的。

选择保留什么语言要根据产品的用户和市场来定，如果只选择默认英语和中文语言，配置如下：

```diff
defaultConfig {
+    resConfigs "en","zh"
}
```

### 5、使用 implementation 代替 compile

![implementation](https://i.loli.net/2018/11/02/5bdb50fb13fa5.png)

如图，`compile` 已经被废弃并且已经被 `impementation` 和 `api` 代替.而且 2018 年底会彻底废弃，修复的话就是把 `android\app\build.gradle` 中的 `dependencies` 配置中的 `compile` 改为 `impementation`。

### 6、配置 dexOptions.javaMaxHeapSize

> android studio 需要较大的内存才能正常编译项目，主要解决这个警告：[com.android.build.api.transform.TransformException](http://t.cn/EZcTDtV)

在 `android\gradle.properties` 中加入以下配置：

```diff
+ dexOptions.javaMaxHeapSize = 2g
```

### 6、配置方法数超过 64K 的应用

随着 Android 平台的持续成长，Android 应用的大小也在增加。当您的应用及其引用的库达到特定大小时，您会遇到构建错误，指明您的应用已达到 Android 应用构建架构的极限。会报告这一错误：

> The number of method references in a .dex file cannot exceed 64K.

解决办法是配置您的应用进行 Dalvik 可执行文件分包，在 `android/app/build.gradle` 中做下面的配置：

```diff
defaultConfig {
+    multiDexEnabled true
}
```

### 7、删除未使用到 xml 和图片

如何知道哪些 xml 和图片未被使用到？使用 Android Studio 的 Lint，步骤：

1. `Android Studio` -> `Menu` -> `Refactor` -> `Remove Unused Resources`
2. 选择 `Refactor` 一键删除
3. 选择 `Perview` 预览未使用到的资源

或者

点击菜单栏 `Analyze` -> `Run Inspection by Name` -> `unused resources` -> `Moudule ‘app’` -> `OK`，这样会搜出来哪些未被使用到未使用到 xml 和图片，如下：

![Analyze](http://wuxiaolong.me/images/reduceAPKSize1.png)

### 8、删除未使用到代码

同样使用 `Android Studio` 的 `Lint` ，步骤：点击菜单栏 `Analyze` -> `Run Inspection by Name` -> `unused declaration` -> `Moudule ‘app’` -> `OK`

### 9、使用微信 Android 资源混淆工具（可选）

> 待完成

微信 AndResGuard 是一个帮助你缩小 APK 大小的工具。

### 10、启用 Proguard 代码混淆来缩小 APK 文件的大小（慎选）

Proguard 是一个 Java 字节码混淆压缩工具，它可以移除掉 React Native Java（和它的依赖库中）中没有被使用到的部分，最终有效的减少 APK 的大小。

```diff
- def enableProguardInReleaseBuilds = false
+ def enableProguardInReleaseBuilds = true
```

警告：启用 Proguard 之后，你必须再次全面地测试你的应用。Proguard 有时候需要为你引入的每个原生库做一些额外的配置。参见 `app/proguard-rules.pro` 文件和每个原生库的安装说明

当您使用 ProGuard 时，您必须始终解决所有警告。

这些警告告诉你，这些库引用了一些代码，没有任何来源。那可能可能不行这取决于有问题的代码是否被调用。参考：[android – 使用 Proguard 获取警告(使用外部库)](http://t.cn/EwIL17p)

### 11、Failed to read PNG signature: file does not start with PNG signature

> 原文：http://t.cn/EwQnc12

有时从网上下载的 Demo 资源文件不规范，会出现直接将 jpg 文件改为 png 后缀名的情况，gradle 打包检查时报错编译通不过的。我们通过 `aaptOptions.cruncherEnabled=false` 来禁止 Gradle 检查 png 的合法性：

```diff
buildTypes {
  release {
+    aaptOptions.cruncherEnabled=false
  }
}
```

## 打包 APK

1、在项目根目录执行 `yarn an:keygen` 生成密钥文件 `my-release-key.keystore`

2、把 `my-release-key.keystore` 文件放到你工程中的 `android/app` 文件夹下。

3、配置 `android/app/build.gradle`

```diff
android{
+    signingConfigs {
+        release {
+            storeFile file("my-release-key.keystore")
+            storePassword "****"
+            keyAlias "my-key-alias"
+            keyPassword "****"
+        }
+    }
    buildTypes {
        release {
+            signingConfig signingConfigs.release
        }
    }
}
```

## React Native 软件盘顶起 tabbar 的问题

打开 `android/app/src/main/AndroidManifest.xml` 文件，加入下面的代码：

```diff
- android:windowSoftInputMode="adjustResize"
+ android:windowSoftInputMode="stateAlwaysHidden|adjustPan|adjustResize"
```

## BuidConfig

> 最初学习自：https://www.jianshu.com/p/3d9b23afe514
> 在 react-native 中，我们可以借助 react-native-config-reader 来方便地读取这些属性

BuildConfig 是程序编译后，根据 buildType 生成在 `app\build\generated\source\buildConfig\debug(release)\` 包名下的一个 java 文件。默认有一下属性：

- DEBUG：是否是调试版本
- APPLICATION_ID：当前应用的包名
- FLAVOR：产品（渠道包的名称）
- BUILD_TYPE：当前的编译类型(release/debug)
- VERSION_CODE：版本号(数字)
- VERSION_NAME：版本号

### 自定义 BuildConfig

```java
defaultConfig {
  // APP_NAME
  buildConfigField "String", "APP_NAME", '"我是谁"'
  // BUILD_TIME
  buildConfigField "String", "BUILD_TIME", '"' + new Date().format("yyyy-MM-dd HH:mm:ss", TimeZone.getTimeZone("Asia/Shanghai")) + '"'
}
```

### 在子模块中取主项目的 BuildConfig

```java
...
public static Object getBuildConfigValue(Context context, String fieldName) {
  try {
    Class<?> clazz = Class.forName(context.getPackageName() + ".BuildConfig");
    Field field = clazz.getField(fieldName);
    return field.get(null);
  } catch (ClassNotFoundException e) {
    e.printStackTrace();
  } catch (NoSuchFieldException e) {
    e.printStackTrace();
  } catch (IllegalAccessException e) {
    e.printStackTrace();
  }
  return null;
}
...
String versionName = (String)getBuildConfigValue(activity, "VERSION_NAME"))
```

## Android 开发必知必会

- [应用界面主题 Theme 使用方法](http://t.cn/Aip3wADF)
- [Android Theme.AppCompat 中，你应该熟悉的颜色属性](http://t.cn/RkMz1mC)

## 持续集成

### shell 文件的坑

为了安全性 shell 文件默认都是不可执行的，当然也包括 `android/gradlew` 这个用来打包的脚本文件，这会给持续集成带来麻烦：运维同学默认是执行不了我们的打包命令的。解决办法很简单：

```sh
$ git update-index --add --chmod=+x android/gradlew
```

## Maven 仓库

将以下代码配置到 `android/build.gradle` 配置文件的 `buildscript/repositories` 和 `allprojects/repositories` 下

```js
maven{
    url 'http://maven.aliyun.com/nexus/content/groups/public/'
    name 'aliyun'
}
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
  具体配置参考：http://t.cn/Ewt1xD2
}
```

- pickFirsts: 当出现重复文件，会使用第一个匹配的文件打包进入 apk
- merges: 当出现重复文件，合并重复的文件打入 apk
- excludes: 打包的时候排除匹配的文件

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

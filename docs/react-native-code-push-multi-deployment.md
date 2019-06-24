# react-native-code-push 多部署配置

## Android

### MainApplication.java

> 文件路径：`android/app/src/main/.../MainApplication.java`

```java
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        // CodePush(String deploymentKey, Context context, boolean isDebugMode, String serverUrl)
        new CodePush(BuildConfig.CODEPUSH_KEY, MainApplication.this, BuildConfig.DEBUG), // Add/change this line.
    );
}
```

### build.gradle

> 文件路径：`android/app/build.gradle`

```
android {
    ...
    buildTypes {
        debug {
            ...
            // 注意： 由于会被 RN packager 覆盖，所以CodePush 更新不应该在 Debug 模式下被测试。然而由于 CodePush 在所有模式下都会检查更新，所有我们必须提供一个key（如果你在前端判断了模式，那就不用）
            buildConfigField "String", "CODEPUSH_KEY", '""'
            ...
        }
        release {
            ...
            buildConfigField "String", "CODEPUSH_KEY", '"<INSERT_PRODUCTION_KEY>"'
            ...
        }
        // NOTE: The naming convention for releaseStaging is significant due to http://t.cn/EAnyAzi
        releaseStaging.initWith(release)
        releaseStaging {
            buildConfigField "String", "CODEPUSH_KEY", '"<INSERT_STAGING_KEY>"'
            // 解决三方包不知道打包debug还是release版本问题 http://t.cn/EAex4XH
            matchingFallbacks = ['release']
        }
    }
    ...
}
```

1. 提醒一句，你可以在命令行通过 `code-push deployment ls <APP_NAME> -k` 获取他们的 `keys`

## iOS

Xcode 允许您为每个“配置”（例如，调试，发布）定义自定义构建设置，然后可以将其作为 `Info.plist` 文件中的键值（例如 `CodePushDeploymentKey` 设置）引用。此机制允许您轻松配置构建以生成二进制文件，这些二进制文件配置为与不同的 CodePush 部署同步

#### 1、自定义`Configurations`

首先打开工程，点，`Project navigator` 选择项目，选择 info 选项卡，然后点击 `Configurations` 下的 `+`，选择 `Duplicate "Release" Configuration` ,如下图:

![](https://i.loli.net/2018/11/19/5bf28076ab0e9.png)

添加一个新配置`Staging (或者你喜欢的任何名字)`。

#### 2、修改`Build Settings`

首先点击 Build Settings，搜索`Per-configuration Build Products Path`，如下图:

![](https://i.loli.net/2018/11/19/5bf281ac19fce.png)

双击`Staging`并修改`Staging`的路径`$(BUILD_DIR)/$(CONFIGURATION)$(EFFECTIVE_PLATFORM_NAME)`到`$(BUILD_DIR)/Release$(EFFECTIVE_PLATFORM_NAME)`

![](https://i.loli.net/2018/11/19/5bf281ac19fce.png)

注意：由于[https://github.com/facebook/react-native/issues/11813](https://github.com/facebook/react-native/issues/11813)，我们必须执行此步骤，以便在 RN 0.40.0 或更高版本上使用除调试或发布之外的其他配置

#### 3、添加`CODEPUSH_KEY`

点击工具栏上的`+`,选择`Add User-Defined Setting`

![](https://i.loli.net/2018/11/19/5bf281ac19fce.png)

给这个设置命名为`CODEPUSH_KEY`(名字可自定义),展开它。把`Staging`的 key 添加到`Staging`项上，把`Production`的 key 添加到`Release`下

![](https://i.loli.net/2018/11/19/5bf281ac19fce.png)

注意：提醒您，您可以通过 `code-push deployment ls <APP_NAME> -k` 终端运行来检索这些 key

#### 4、配置`info.plist`

打开项目的`Info.plist`文件并将`CodePushDeploymentKey`的值更改为`$(CODEPUSH_KEY)`(与第三步名字统一)

![](https://i.loli.net/2018/11/19/5bf28490a1010.png)

就是这样现在，当您运行或构建应用程序时，`Staging` 环境将自动配置为与您的 `Staging` 部署同步，并且您的 `release` 版本将配置为 `Production key`

## 参考

- [multi-deployment-testing-android](http://t.cn/Aipo7bu6)
- [multi-deployment-testing-ios](http://t.cn/Aipo7phl)
- [React Native 热更新部署/热更新-CodePush 最新集成总结(新)](http://t.cn/EAHMYiw)
- [CodePush 热更新详细接入教程](http://t.cn/EAtVS21)
- [React-Native-Code-Push 项目配置及更新策略](http://t.cn/Aipohxhi)
- [Android 自定义构建类型 BuildType](http://t.cn/AipohCVW)
- [React Native 错误集合](http://t.cn/AipohFYC)

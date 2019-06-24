## react-native-config-reader

> 由于插件需要读取系统配置，我们需要手动在 info.plist 中添加一些字段

1. 添加 `BUILD_TYPE`，取值为 `\$(CONFIGURATION)`
2. 添加 `CodePushDeploymentKey`，取值为配置好的热更新 Key
3. 添加 `BUILD_TIME`,取值为空，并通过脚本在每次编译的时候对其更新，脚本添加步骤 `Target`-> `Build Phases` -> `+` -> `New Run Script Phase`, Shell 代码如下

```shell
echo "In the build time script run."
infoplist="$BUILT_PRODUCTS_DIR/$INFOPLIST_PATH"
builddate=`date +%Y-%m-%d_%H:%M`
if [[ -n "$builddate" ]]; then
/usr/libexec/PlistBuddy -c "Set :BUILD_TIME $builddate" ${infoplist}
fi
```

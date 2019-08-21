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
- react-native-config-reader
- react-native-device-info
- @react-native-community/async-storage
- react-native-fs
- react-native-spring-scrollview
- react-native-keyboard-manager

### 非原生库

直接执行 `yarn remove packageName`

import { configure } from 'mobx'
import { AppRegistry, Text, TextInput } from 'react-native'
import addCustomProps from 'react-native-add-custom-props'
import { useScreens } from 'react-native-screens'
import './global'
import App from './app/index'
import appStore from './app/stores/appStore'
import { name as appName } from './app.json'

// 标识当前页面
appStore.setCurrentRoute({
  screenName: 'index.js',
})
// 使用 react-native-screen 优化 react-navigation 性能
useScreens()
// 不允许在动作外部修改状态
configure({
  enforceActions: 'observed',
})
// 屏蔽黄屏警告
console.disableYellowBox = true
console.log('YellowBox is disabled.')
// 处理ios系统文字
if (ios) {
  addCustomProps(Text, { allowFontScaling: false })
  addCustomProps(TextInput, { allowFontScaling: false })
}

AppRegistry.registerComponent(appName, () => App)

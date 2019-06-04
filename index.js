/**
 * @format
 */

import { configure } from 'mobx'
import { AppRegistry, Text, TextInput } from 'react-native'
import addCustomProps from 'react-native-add-custom-props'
import './global'
import App from './App'
import { name as appName } from './app.json'

// 不允许在动作外部修改状态
configure({
  enforceActions: 'observed',
})
// 屏蔽黄屏警告
console.disableYellowBox = true
console.warn('YellowBox is disabled.')
// 处理ios系统文字
if (ios) {
  addCustomProps(Text, { allowFontScaling: false })
  addCustomProps(TextInput, { allowFontScaling: false })
}

AppRegistry.registerComponent(appName, () => App)

/**
 * @format
 */

import { configure } from 'mobx'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

// 不允许在动作外部修改状态
configure({
  enforceActions: 'observed',
})

AppRegistry.registerComponent(appName, () => App)

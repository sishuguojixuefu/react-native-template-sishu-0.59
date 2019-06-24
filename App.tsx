/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the sishu template
 * https://github.com/sishuguojixuefu/react-native-template-sishu
 */

import { Provider as AntdProvider } from '@sishuguojixuefu/antd-mobile-rn'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import CodePush from 'react-native-code-push'
import CodePushSync from './src/utils/CodePushSync'
import AppContainer from './src/routes'

class App extends Component {
  public componentDidMount() {
    CodePushSync.syncOnNextSuspend()
  }

  public render() {
    return (
      <View style={styles.container}>
        <AntdProvider>
          <AppContainer />
        </AntdProvider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
})

export default CodePush({
  /**
   * 检查更新的频率
   * ON_APP_RESUME: APP恢复到前台的时候
   * ON_APP_START: APP开启的时候
   * MANUAL: 手动调用 codePush.sync() 检查
   */
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App)

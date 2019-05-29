/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the sishu template
 * https://github.com/sishuguojixuefu/react-native-template-sishu
 *
 * @format
 */

import { Provider as AntdProvider } from '@sishuguojixuefu/antd-mobile-rn'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from '~/screen/HomeScreen'

// stack navigator 为你的应用提供了一种在屏幕之间切换并管理导航历史记录的方式。
// createStackNavigator是一个函数，它接受一个路由配置对象和一个可选配置对象并返回一个 React 组件。
const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen, // 配置中唯一必须的属性是screen（此项设置一个组件）
    },
  },
  {
    initialRouteName: 'HomeScreen', // 指定堆栈中的初始路由
  }
)

const AppContainer = createAppContainer(AppNavigator)

interface Props {}
class App extends Component<Props> {
  public render() {
    return (
      <View style={styles.container}>
        <AntdProvider>
          {/* <AppContainer />组件不接受任何 props -- 所有配置都在createStackNavigator 函数的可选参数中指定。 */}
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

export default App

import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from '@sishuguojixuefu/antd-mobile-rn'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { getCurrentRouteName } from '~/utils/Navigation'
import Home from '~/screens/HomeScreen'
import AppStore from '~/stores/AppStore'

// 把 Routes 放在 enum 以此来避免引用时的拼写错误。
export enum ROUTES {
  MainStack = 'MainStack',
  HomeScreen = 'HomeScreen',
}

// The stack for the main navigation
// stack navigator 为你的应用提供了一种在屏幕之间切换并管理导航历史记录的方式。
// createStackNavigator是一个函数，它接受一个路由配置对象和一个可选配置对象并返回一个 React 组件。
const MainStack = createStackNavigator(
  {
    [ROUTES.HomeScreen]: {
      screen: Home, // 配置中唯一必须的属性是screen（此项设置一个组件）
      navigationOptions: {
        title: 'Home', // 可用作 headerTitle 的回退的字符串。 此外, 将用作 tabBarLabel 的回退 (如果嵌套在 TabNavigator 中) 或 drawerLabel (如果嵌套在DrawerNavigator)
        headerTitle: '首页', // 支持自定义组件，默认是一个 Text
      },
    },
  },
  {
    initialRouteName: ROUTES.HomeScreen, // 指定堆栈中的初始路由
  }
)

// The app root stack, all navigation start from here
const RootStack = createStackNavigator(
  {
    [ROUTES.MainStack]: {
      screen: MainStack,
      title: 'Welcome',
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

// <AppContainer />组件不接受任何 props -- 所有配置都在createStackNavigator 函数的可选参数中指定。
const AppContainer = createAppContainer(RootStack)

@observer
class AntdApp extends Component<any, any> {
  public render() {
    return (
      <Provider>
        <StatusBar backgroundColor="#0BA5F6" barStyle="light-content" />
        <AppContainer
          onNavigationStateChange={(prevState, currentState) => {
            const prevScreen = getCurrentRouteName(prevState)
            const currentScreen = getCurrentRouteName(currentState)

            if (prevScreen !== currentScreen) {
              AppStore.setNavigation({
                screenName: currentScreen,
                routeInfo: {},
              })
            }
          }}
        />
      </Provider>
    )
  }
}

export default AntdApp

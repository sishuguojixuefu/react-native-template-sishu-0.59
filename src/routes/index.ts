import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from '~/screens/HomeScreen'

// 把 Routes 放在 enum 以此来避免引用时的拼写错误。
export enum ROUTES {
  MainStack = 'MainStack',
  Home = 'Home',
}

// The stack for the main navigation
// stack navigator 为你的应用提供了一种在屏幕之间切换并管理导航历史记录的方式。
// createStackNavigator是一个函数，它接受一个路由配置对象和一个可选配置对象并返回一个 React 组件。
const MainStack = createStackNavigator(
  {
    [ROUTES.Home]: {
      screen: HomeScreen, // 配置中唯一必须的属性是screen（此项设置一个组件）
    },
  },
  {
    initialRouteName: ROUTES.Home, // 指定堆栈中的初始路由
  }
)

// The app root stack, all navigation start from here
const RootStack = createStackNavigator(
  {
    [ROUTES.MainStack]: {
      screen: MainStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

// <AppContainer />组件不接受任何 props -- 所有配置都在createStackNavigator 函数的可选参数中指定。
const AppContainer = createAppContainer(RootStack)

export default AppContainer

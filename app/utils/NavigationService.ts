import {
  NavigationState,
  NavigationLeafRoute,
  NavigationParams,
  NavigationRoute,
  NavigationActions,
} from 'react-navigation'

let _navigator

export const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef
}

/**
 * 在没有 navigation 这个 prop 的情况下进行页面跳转
 * @参考 http://t.cn/EX2CdBl
 * @param routeName 路由名
 * @param params 路由参数
 */
export const navigate = (routeName: string, params: object) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

/**
 *  从 navigation state 中获取当前页面名
 * @param navigationState NavigationState
 */
export const getCurrentRoute = (
  navigationState: NavigationState | NavigationLeafRoute<NavigationParams>
): NavigationRoute<NavigationParams> | null => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // 在嵌套的导航中快速翻找
  if (route.routes) {
    return getCurrentRoute(route)
  }
  return route
}

export default {
  setTopLevelNavigator,
  navigate,
  getCurrentRoute,
}

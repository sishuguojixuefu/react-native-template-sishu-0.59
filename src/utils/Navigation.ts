import { NavigationState, NavigationLeafRoute, NavigationParams, NavigationRoute } from 'react-navigation'

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
  getCurrentRoute,
}

import { NavigationState, NavigationLeafRoute, NavigationParams } from 'react-navigation'

/**
 *  从 navigation state 中获取当前页面名
 * @param navigationState NavigationState
 */
export const getCurrentRouteName = (
  navigationState: NavigationState | NavigationLeafRoute<NavigationParams>
): string | null => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // 在嵌套的导航中快速翻找
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

export default {
  getCurrentRouteName,
}

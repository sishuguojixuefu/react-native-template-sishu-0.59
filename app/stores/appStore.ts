import { observable, action } from 'mobx'
import omit from 'lodash.omit'

export interface NavigationPropsType {
  screenName: string | null
  routeInfo?: object
}

class AppStore {
  @observable currentRoute?: NavigationPropsType

  /**
   * 设置当前的路由
   */
  @action setCurrentRoute = (currentRoute: NavigationPropsType): void => {
    if (currentRoute && currentRoute.routeInfo) {
      const { routeInfo } = currentRoute
      currentRoute.routeInfo = omit(routeInfo, ['routeName'])
    }
    console.log('currentRoute', currentRoute)
    this.currentRoute = currentRoute
  }
}

export default new AppStore()

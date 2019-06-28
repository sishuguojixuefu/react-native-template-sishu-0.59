import { observable, action } from 'mobx'
import omit from 'lodash.omit'

export interface NavigationPropsType {
  screenName: string | null
  routeInfo: object
}

class AppStore {
  @observable public currentRoute?: NavigationPropsType

  /**
   * 设置当前的路由
   */
  @action public setCurrentRoute = (currentRoute: NavigationPropsType): void => {
    const { routeInfo } = currentRoute
    currentRoute.routeInfo = omit(routeInfo, ['routeName'])
    this.currentRoute = currentRoute
  }
}

export default new AppStore()

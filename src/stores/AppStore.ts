export interface NavigationPropsType {
  screenName: string | null
  routeInfo: object
}

class AppStore {
  @observable public navigation?: NavigationPropsType

  /**
   * 设置navigation
   */
  @action public setNavigation = (navigation: NavigationPropsType): void => {
    this.navigation = navigation
  }
}

export default new AppStore()

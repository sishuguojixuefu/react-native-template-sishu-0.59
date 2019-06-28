export interface NavigationPropsType {
  screenName: string
  routeInfo: object
}

export default class AppStore {
  @observable public navigation?: NavigationPropsType

  /**
   * 设置navigation
   */
  @action public setNavigation = (navigation: NavigationPropsType): void => {
    this.navigation = navigation
  }
}

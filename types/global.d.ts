declare module 'antd-mobile-area-data'

declare namespace global {
  /**
   * 系统是iOS
   */
  let ios: boolean
  /**
   * 系统是否是 android
   */
  let android: boolean
  /**
   * 获取屏幕高度，含 statusBar 高度
   */
  let windowHeight: number
  /**
   * 获取屏幕高度
   */
  let windowWidth: number
  /**
   * 这一常量定义了当前平台上的最细的宽度。可以用作边框或是两个元素间的分隔线
   */
  let hairlineWidth: number
  let __DEV__: boolean
  /**
   * 利用 react-native-device-info 获取的设备信息
   */
  let DeviceInfo: any
  /**
   * 状态栏高度
   */
  let StatusBarHeight: number
  /**
   * 导航栏高度
   */
  let HeaderHeight: number
}

declare const ios: boolean
declare const android: boolean
declare const windowHeight: number
declare const windowWidth: number
declare const hairlineWidth: number
declare const __DEV__: boolean
declare const DeviceInfo: any
declare const StatusBarHeight: number
declare const HeaderHeight: number

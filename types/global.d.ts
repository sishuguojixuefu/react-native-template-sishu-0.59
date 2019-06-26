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
  /**
   * Observable 值可以是JS基本数据类型、引用类型、普通对象、类实例、数组和映射
   */
  let observable: any
  /**
   * 应该永远只对修改状态的函数使用动作。
   * 只执行查找，过滤器等函数不应该被标记为动作，以允许 MobX 跟踪它们的调用。
   */
  let action: any
  /**
   * 计算值(computed values)是可以根据现有的状态或其它计算值衍生出的值
   */
  let computed: any
  /**
   * 递归地将一个(observable)对象转换为 javascript 结构
   */
  let toJS: any
  /**
   * observer 组件越多，渲染效率越高
   */
  let observer: any
  let __DEV__: boolean
  /**
   * 利用 react-native-device-info 获取的设备信息
   */
  let DeviceInfo: any
  /**
   * 路由配置
   */
  let ROUTES: any
}
declare const ios: boolean
declare const android: boolean
declare const windowHeight: number
declare const windowWidth: number
declare const hairlineWidth: number
declare const observable: any
declare const action: any
declare const computed: any
declare const toJS: any
declare const observer: any
declare const __DEV__: boolean
declare const DeviceInfo: any
declare const ROUTES: any

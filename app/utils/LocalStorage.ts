import AsyncStorage from '@react-native-community/async-storage'

export default class LocalStorage {
  /**
   * 根据key获取本地数据
   */
  static get = async (key: string) => {
    const value = await AsyncStorage.getItem(key)
    return value ? JSON.parse(value) : value
  }

  /**
   * 根据key、value保存数据到本地
   */
  static set = async (key: string, value: string | number | object | (string | number)[]) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * 根据key、value以及value的类型更新本地数据
   */
  static update = async (key: string, value: object | string | number) => {
    const item = await LocalStorage.get(key)
    let json = value
    if (Array.isArray(item)) {
      json = item.push(value)
    } else if (typeof item === 'object') {
      // @ts-ignore
      json = { ...item, ...value }
    }
    await AsyncStorage.setItem(key, JSON.stringify(json))
  }

  /**
   * 根据key删除本地数据
   */
  static delete = async (key: string) => {
    await AsyncStorage.removeItem(key)
  }
}

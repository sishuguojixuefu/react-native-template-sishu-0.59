import { AsyncStorage } from 'react-native-community/async-storage'

export default class LocalStorage {
  static get = async (key: string) => {
    const value = await AsyncStorage.getItem(key)
    return JSON.parse(value)
  }

  static set = async (key: string, value: string | number | object | Array<string | number>) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  }

  static update = async (key: string, value: string | number) => {
    const item = await LocalStorage.get(key)
    if (Array.isArray(item)) {
      value = item.push(value)
    } else if (typeof item === 'object') {
      value = Object.assign({}, item, value)
    }
    await AsyncStorage.setItem(key, JSON.stringify(value))
  }

  static delete = async (key: string) => {
    await AsyncStorage.removeItem(key)
  }
}

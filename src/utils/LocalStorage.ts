import { AsyncStorage } from 'react-native-community/async-storage'

export default class LocalStorage {
  public static get = async (key: string) => {
    const value = await AsyncStorage.getItem(key)
    return JSON.parse(value)
  }

  public static set = async (key: string, value: string | number | object | (string | number)[]) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  }

  public static update = async (key: string, value: string | number) => {
    const item = await LocalStorage.get(key)
    let json = {}
    if (Array.isArray(item)) {
      json = item.push(value)
    } else if (typeof item === 'object') {
      json = Object.assign({}, item, value)
    }
    await AsyncStorage.setItem(key, JSON.stringify(json))
  }

  public static delete = async (key: string) => {
    await AsyncStorage.removeItem(key)
  }
}

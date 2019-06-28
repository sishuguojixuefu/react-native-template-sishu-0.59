import { Dimensions, Platform, StyleSheet } from 'react-native'
import { ROUTES } from './src/routes'
import getDeviceInfo from './src/utils/getDeviceInfo'

const { height, width } = Dimensions.get('window')

global.ios = Platform.OS === 'ios'
global.android = Platform.OS === 'android'
global.windowHeight = height
global.windowWidth = width
global.hairlineWidth = StyleSheet.hairlineWidth
global.DeviceInfo = getDeviceInfo()
global.ROUTES = ROUTES

import { Dimensions, Platform, StyleSheet } from 'react-native'
import getDeviceInfo from '~/utils/getDeviceInfo'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Header } from 'react-navigation'
import isIphoneX from '~/utils/isIphoneX'

const { height, width } = Dimensions.get('window')

global.ios = Platform.OS === 'ios'
global.android = Platform.OS === 'android'
global.windowHeight = height
global.windowWidth = width
global.hairlineWidth = StyleSheet.hairlineWidth
global.DeviceInfo = getDeviceInfo()
global.isIphoneX = isIphoneX()
global.StatusBarHeight = getStatusBarHeight()
global.HeaderHeight = Header.HEIGHT

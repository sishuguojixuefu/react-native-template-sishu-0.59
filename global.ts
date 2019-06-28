import { Dimensions, Platform, StyleSheet } from 'react-native'
import { observable, action, runInAction, computed, toJS } from 'mobx'
import { observer, inject } from 'mobx-react'
import { ROUTES } from './src/routes'
import getDeviceInfo from './src/utils/getDeviceInfo'

const { height, width } = Dimensions.get('window')

global.ios = Platform.OS === 'ios'
global.android = Platform.OS === 'android'
global.windowHeight = height
global.windowWidth = width
global.hairlineWidth = StyleSheet.hairlineWidth
global.observable = observable
global.action = action
global.runInAction = runInAction
global.computed = computed
global.toJS = toJS
global.observer = observer
global.inject = inject
global.DeviceInfo = getDeviceInfo()
global.ROUTES = ROUTES

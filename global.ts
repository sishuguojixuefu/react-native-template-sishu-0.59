import { Dimensions, Platform, StyleSheet } from 'react-native'
import { observable, action, computed, toJS } from 'mobx'
import { observer } from 'mobx-react'
import { ROUTES } from './src/routes'

const { height, width } = Dimensions.get('window')

global.ios = Platform.OS === 'ios'
global.android = Platform.OS === 'android'
global.windowHeight = height
global.windowWidth = width
global.hairlineWidth = StyleSheet.hairlineWidth
global.observable = observable
global.action = action
global.computed = computed
global.toJS = toJS
global.observer = observer
global.ROUTES = ROUTES

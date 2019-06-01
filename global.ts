import { Platform } from 'react-native'
import { ROUTES } from './src/routes'

global.ios = Platform.OS === 'ios'
global.android = Platform.OS === 'android'
global.ROUTES = ROUTES

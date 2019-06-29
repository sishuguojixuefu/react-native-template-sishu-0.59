import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

const getDeviceInfo = () => ({
  apiLevel: Platform.OS === 'ios' ? '' : DeviceInfo.getAPILevel(),
  appName: DeviceInfo.getApplicationName(),
  brand: DeviceInfo.getBrand(),
  buildNumber: DeviceInfo.getBuildNumber(),
  bundleId: DeviceInfo.getBundleId(),
  deviceCountry: DeviceInfo.getDeviceCountry(),
  deviceId: DeviceInfo.getDeviceId(),
  deviceLocale: DeviceInfo.getDeviceLocale(),
  deviceName: DeviceInfo.getDeviceName(),
  firstInstallTime: Platform.OS === 'ios' ? '' : DeviceInfo.getFirstInstallTime(),
  freeDiskStorage: DeviceInfo.getFreeDiskStorage(),
  referrer: Platform.OS === 'ios' ? '' : DeviceInfo.getInstallReferrer(),
  instanceId: Platform.OS === 'ios' ? '' : DeviceInfo.getInstanceID(),
  lastUpdateTime: Platform.OS === 'ios' ? '' : DeviceInfo.getLastUpdateTime(),
  manufacturer: DeviceInfo.getManufacturer(),
  maxMemory: DeviceInfo.getMaxMemory(),
  model: DeviceInfo.getModel(),
  phoneNumber: Platform.OS === 'ios' ? '' : DeviceInfo.getPhoneNumber(), // 权限http://t.cn/EP3kKhY
  readableVersion: DeviceInfo.getReadableVersion(),
  serialNumber: Platform.OS === 'ios' ? '' : DeviceInfo.getSerialNumber(),
  systemName: DeviceInfo.getSystemName(),
  systemVersion: DeviceInfo.getSystemVersion(),
  timezone: DeviceInfo.getTimezone(),
  storageSize: DeviceInfo.getTotalDiskCapacity(),
  totalMemory: DeviceInfo.getTotalMemory(),
  uniqueId: DeviceInfo.getUniqueID(),
  userAgent: DeviceInfo.getUserAgent(),
  version: DeviceInfo.getVersion(),
  is24Hour: DeviceInfo.is24Hour(),
  isEmulator: DeviceInfo.isEmulator(),
  isTablet: DeviceInfo.isTablet(),
})

export default getDeviceInfo
